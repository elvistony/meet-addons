var mediaRecorder = false;
function googleMeetDark() {

    if (!document.querySelector('[aria-label="Leave call"]')) {
        console.log("Not Joined Call!");
        var status = document.querySelector('[aria-label="Leave call"]');
        var listening = setInterval(() => {
            if (status) {
                setTimeout(() => { ThemeMyMeet(); }, 2000);
                clearInterval(listening);
            } else {
                // Get Audio/Video buttons before joining call and switch them off.
                camera = document.querySelectorAll('[data-tooltip="Turn off camera (ctrl + e)"]');
                mics = document.querySelectorAll('[data-tooltip="Turn off microphone (ctrl + d)"]');
                if (camera.length > 0) camera[0].click();
                if (mics.length > 0) mics[0].click();
                status = document.querySelector('[aria-label="Leave call"]');
                console.log("Waiting to Join Call");
                localStorage.setItem("recording", "no");
            }
        }, 3000)
    } else {
        console.log("Joined Call");
        setTimeout(() => { ThemeMyMeet(); }, 2000);
    }

    function ThemeMyMeet() {
        var mic = document.querySelector('[data-is-muted]');
        var parent = mic.parentElement.parentElement.parentElement.parentElement.parentElement;
        var bottom = parent.children[8];
        //Add Recorder Button
        bottom.children[2].children[3].addEventListener('click',()=>{
            setTimeout(()=>{
                bottomMenu = document.querySelectorAll('[role="menu"]')[0]
            // Add record button
            bottomMenu.children[0].children[0].children[3].style.display="none";
            ChgLayout = bottomMenu.children[0].children[0].children[0];
            Recbutton = ChgLayout.cloneNode(1);
            Recbutton.removeAttribute('jsslot');
            Recbutton.children[1].children[0].innerHTML="<span>🔴</span>";
            Recbutton.children[1].children[0].style.fontSize="15px"
            document.querySelectorAll('[aria-label="Troubleshooting & help"]')[0].style.display="none"
            if(localStorage.getItem("recording")=="yes"){
                Recbutton.children[2].children[0].children[1].innerText = "Recording";
                Recbutton.children[1].children[0].style.opacity=0.8;
                Recbutton.addEventListener('click',()=>{
                    Recbutton.children[1].children[0].style.opacity=0.3;
                    Recbutton.children[2].children[0].children[1].innerText = "Idle";
                    RecordOrNot()
                })
                
            }else{
                Recbutton.children[2].children[0].children[1].innerText = "Idle";
                Recbutton.children[1].children[0].style.opacity=0.3;
                Recbutton.addEventListener('click',()=>{
                    Recbutton.children[1].children[0].style.opacity=0.8;
                    Recbutton.children[2].children[0].children[1].innerText = "Recording";
                    RecordOrNot()
                })
                
            }
            
            Recbutton.children[2].children[0].children[0].innerText = "Record Stream"
            Recbutton.children[2].children[0].children[1].innerText = "Idle";
            
            if(!document.getElementById('recordBtn')){
                Recbutton.id="recordBtn";
                bottomMenu.children[0].children[0].insertBefore(Recbutton,ChgLayout);
            }
            
            },300)
        });

        bottom.style.background = 'transparent';
        //bottom.style.boxShadow ="none";
        bottom.children[2].children[1].style.display = 'none';

        var sidebar = parent.children[2]
        sidebar.style.filter = "invert(0.9)";

        var rightnotif = parent.children[10];
        rightnotif.style.opacity = 0.4;
        rightnotif.style.background = "transparent";

        parent.children[5].style.opacity = '0.7';

        

        // Member Advertisement
        parent.children[0].children[2].children[0].children[0].style.display = "none"

        //Show Members Button Top Right
        parent.children[0].children[2].children[0].children[1].children[0].style.display = "none";

        //Hide Raise Hand Button
        parent.children[8].children[2].children[0].style.display = "none";

        //Remove ChatBox Box Shadow
        parent.children[3].style.boxShadow = "none";

        //Invert sidebar colors
        parent.children[3].style.filter = "invert(0.93)";

        //Chats double tap to copy
        chatsList = parent.children[3].children[0].children[1].children[1].children[1].children[1].children[0].children[1].children;

        for (i=0;i<chatsList.length;i++){
            chatsList[i].style.cursor="cell"
            chatsList[i].addEventListener('dblclick',(e)=>{
                var targetElement = e.target || e.srcElement;
                CopyToInput(targetElement)
            })
        }

        // Hide Presenting Now Name
        parent.children[0].children[1].children[1].children[0].children[1].style.display = "none";

        console.log("Successfully Customized!");
    }
}
var RecorderStream = false;
var recordedChunks = [];

function CopyToInput(ele){
    chatBox = document.getElementsByTagName('textarea')[0];
    chatBox.parentElement.parentElement.children[0].innerText="";
    // chatBox.style.height="50px";
    msg = ele.children[1].children[0].innerText;
    if (typeof  msg === 'string' ||  msg instanceof String)
        chatBox.value = msg
}

function RecordOrNot(){
    if(localStorage.getItem("recording")=="yes"){
        localStorage.setItem("recording", "no");
        RecordMeetStop();
        recordedChunks=[]
        
        if(document.getElementById('recordBtn')){
            document.getElementById('recordBtn').children[1].children[0].style.opacity=0.3;
            document.getElementById('recordBtn').children[2].children[0].children[1].innerText = "Idle";
        }
        DownloadRecordedStream();
            
    }else{
        localStorage.setItem("recording", "yes");
        RecordMeetStream();
        if(document.getElementById('recordBtn')){
            document.getElementById('recordBtn').children[1].children[0].style.opacity=0.8;
            document.getElementById('recordBtn').children[2].children[0].children[1].innerText = "Recording";
        }
    }
}

function RecordMeetStream(){
    localStorage.setItem("recording", "yes");
    console.log("Started Recording...")
    audios = document.getElementsByTagName('audio');
    videos = document.getElementsByTagName('video');
    console.log("Found ",audios.length," audio streams.");
    console.log("Found ",videos.length," video streams.");
    
    RecorderStream = new MediaStream();
    for (let i = 0; i < audios.length; i++) {
        RecorderStream.addTrack(audios[i].srcObject.getAudioTracks()[0]);
    }
    if(videos.length){
        RecorderStream.addTrack(videos[0].srcObject.getVideoTracks()[0]);
    }else{
        console.log("No Video Streams")
    }

    if((videos.length==0)&&(audios.length==0)){
        console.log("No Streams Alive.");
        localStorage.setItem("recording", "yes");
        return;
    }

    // Mozilla Code
    stream = RecorderStream;
    var options = { mimeType: "video/webm; codecs=vp9" };
    mediaRecorder = new MediaRecorder(stream, options);
    mediaRecorder.ignoreMutedMedia=true;
    mediaRecorder.ondataavailable = handleDataAvailable;
    mediaRecorder.start();

    function handleDataAvailable(event) {
        console.log("data-available");
        if (event.data.size > 0) {
            recordedChunks.push(event.data);
            console.log(recordedChunks);
            DownloadRecordedStream();
        } else {
            // ...
        }
    }
    
    // End of Code
}
filename = false;
function DownloadRecordedStream() {
    console.log("Save Recording...")
    var blob = new Blob(recordedChunks, {
        type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    if(!filename){
        filename = prompt("Enter File Name for Recording: ","Meet Recording") || "Meet Recording";
    }
    a.download = filename+".webm";
    a.click();
    window.URL.revokeObjectURL(url);
}

function RecordMeetStop(){
    recordedChunks = []
    console.log("Stopped Recording...")
    localStorage.setItem("recording", "no");
    mediaRecorder.stop();
}
googleMeetDark();

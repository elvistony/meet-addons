## Dark Mode Maximal

<img src="/images/dark-mode-maximal.png">


### Features
- Removed a few Buttons (Increased Space)
- Dark Mode (Semi)
- Auto Mute and Camera (at Pre-join Screen)
- Record the Presenter's screen along with audio.

### Whats the catch ?
- The Recording quality is equivalent to the Screen you recieve.
- Long meetings can make the recordings huge.
- Its still work in progress...

### See it in Action!
<img src="/images/dark-mode-maximal-demo.gif">
<a href="/images/Kygo's Perfect Song 2021-3-21.webm">Download Sample Recording</a>

### Installation 
Follow the same instructions mentioned [here](https://github.com/elvistony/meet-addons/#installation)

OR

Save it as a Bookmarklet (set of codes that runs when you click it!)
- Create a new Bookmark 
- Copy and paste the below code as the URL of the Bookmark
- Name the bookmark as you like.
- Voila you have a very own Bookmarklet!

```js
!function(){var e,n,t=!1,l=!1,c=[];function r(){"yes"==localStorage.getItem("recording")?(localStorage.setItem("recording","no"),c=[],console.log("Stopped Recording..."),localStorage.setItem("recording","no"),t.stop(),c=[],document.getElementById("recordBtn")&&(document.getElementById("recordBtn").children[1].children[0].style.opacity=.3,document.getElementById("recordBtn").children[2].children[0].children[1].innerText="Idle"),o()):(localStorage.setItem("recording","yes"),function(){localStorage.setItem("recording","yes"),console.log("Started Recording..."),audios=document.getElementsByTagName("audio"),videos=document.getElementsByTagName("video"),console.log("Found ",audios.length," audio streams."),console.log("Found ",videos.length," video streams."),l=new MediaStream;for(let e=0;e<audios.length;e++)l.addTrack(audios[e].srcObject.getAudioTracks()[0]);if(videos.length?l.addTrack(videos[0].srcObject.getVideoTracks()[0]):console.log("No Video Streams"),0==videos.length&&0==audios.length)return console.log("No Streams Alive."),localStorage.setItem("recording","yes");stream=l,(t=new MediaRecorder(stream,{mimeType:"video/webm; codecs=vp9"})).ignoreMutedMedia=!0,t.ondataavailable=function(e){console.log("data-available"),0<e.data.size&&(c.push(e.data),console.log(c),o())},t.start()}(),document.getElementById("recordBtn")&&(document.getElementById("recordBtn").children[1].children[0].style.opacity=.8,document.getElementById("recordBtn").children[2].children[0].children[1].innerText="Recording"))}function o(){console.log("Save Recording...");var e=new Blob(c,{type:"video/webm"}),n=URL.createObjectURL(e),e=document.createElement("a");document.body.appendChild(e),e.style="display: none",e.href=n,filename=filename||(prompt("Enter File Name for Recording: ","Meet Recording")||"Meet Recording"),e.download=filename+".webm",e.click(),window.URL.revokeObjectURL(n)}function d(){var e=document.querySelector("[data-is-muted]").parentElement.parentElement.parentElement.parentElement.parentElement,n=e.children[8];n.children[2].children[3].addEventListener("click",()=>{setTimeout(()=>{bottomMenu=document.querySelectorAll('[role="menu"]')[0],bottomMenu.children[0].children[0].children[3].style.display="none",ChgLayout=bottomMenu.children[0].children[0].children[0],Recbutton=ChgLayout.cloneNode(1),Recbutton.removeAttribute("jsslot"),Recbutton.children[1].children[0].innerHTML="<span>🔴</span>",Recbutton.children[1].children[0].style.fontSize="15px",document.querySelectorAll('[aria-label="Troubleshooting & help"]')[0].style.display="none","yes"==localStorage.getItem("recording")?(Recbutton.children[2].children[0].children[1].innerText="Recording",Recbutton.children[1].children[0].style.opacity=.8,Recbutton.addEventListener("click",()=>{Recbutton.children[1].children[0].style.opacity=.3,Recbutton.children[2].children[0].children[1].innerText="Idle",r()})):(Recbutton.children[2].children[0].children[1].innerText="Idle",Recbutton.children[1].children[0].style.opacity=.3,Recbutton.addEventListener("click",()=>{Recbutton.children[1].children[0].style.opacity=.8,Recbutton.children[2].children[0].children[1].innerText="Recording",r()})),Recbutton.children[2].children[0].children[0].innerText="Record Stream",Recbutton.children[2].children[0].children[1].innerText="Idle",document.getElementById("recordBtn")||(Recbutton.id="recordBtn",bottomMenu.children[0].children[0].insertBefore(Recbutton,ChgLayout))},300)}),n.style.background="transparent",n.children[2].children[1].style.display="none",e.children[2].style.filter="invert(0.9)";n=e.children[10];for(n.style.opacity=.4,n.style.background="transparent",e.children[5].style.opacity="0.7",e.children[0].children[2].children[0].children[0].style.display="none",e.children[0].children[2].children[0].children[1].children[0].style.display="none",e.children[8].children[2].children[0].style.display="none",e.children[3].style.boxShadow="none",e.children[3].style.filter="invert(0.93)",chatsList=e.children[3].children[0].children[1].children[1].children[1].children[1].children[0].children[1].children,i=0;i<chatsList.length;i++)chatsList[i].style.cursor="cell",chatsList[i].addEventListener("dblclick",e=>{e=e.target||e.srcElement;e=e,chatBox=document.getElementsByTagName("textarea")[0],chatBox.parentElement.parentElement.children[0].innerText="",msg=e.children[1].children[0].innerText,("string"==typeof msg||msg instanceof String)&&(chatBox.value=msg)});e.children[0].children[1].children[1].children[0].children[1].style.display="none",console.log("Successfully Customized!")}filename=!1,document.querySelector('[aria-label="Leave call"]')?(console.log("Joined Call"),setTimeout(()=>{d()},2e3)):(console.log("Not Joined Call!"),e=document.querySelector('[aria-label="Leave call"]'),n=setInterval(()=>{e?(setTimeout(()=>{d()},2e3),clearInterval(n)):(camera=document.querySelectorAll('[data-tooltip="Turn off camera (ctrl + e)"]'),mics=document.querySelectorAll('[data-tooltip="Turn off microphone (ctrl + d)"]'),0<camera.length&&camera[0].click(),0<mics.length&&mics[0].click(),e=document.querySelector('[aria-label="Leave call"]'),console.log("Waiting to Join Call"),localStorage.setItem("recording","no"))},3e3))}();
```

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


        bottom.style.background = 'transparent';
        bottom.style.boxShadow ="none";
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

        // Hide Presenting Now Name
        parent.children[0].children[1].children[1].children[0].children[1].style.display = "none";
        
        console.log("Successfully Customized!");
    }
}
googleMeetDark()

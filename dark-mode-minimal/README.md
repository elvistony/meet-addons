## Dark Mode Minimal

<img src="/images/dark-mode-minimal.png">


### Features
- Removed a few Buttons (Increased Space)
- Dark Mode (Semi)
- Auto Mute and Camera (at Pre-join Screen)

### Installation 
Follow the same instructions mentioned [here](https://github.com/elvistony/meet-addons/#installation)

OR

Save it as a Bookmarklet (set of codes that runs when you click it!)
- Create a new Bookmark 
- Copy and paste the below code as the URL of the Bookmark
- Name the bookmark as you like.
- Voila you have a very own Bookmarklet!

```js
javascript:!function(){function e(){var e=document.querySelector("[data-is-muted]").parentElement.parentElement.parentElement.parentElement.parentElement,l=e.children[8];l.style.background="transparent",l.style.boxShadow="none",l.children[2].children[1].style.display="none",e.children[2].style.filter="invert(0.9)";l=e.children[10];l.style.opacity=.4,l.style.background="transparent",e.children[5].style.opacity="0.7",e.children[0].children[2].children[0].children[0].style.display="none",e.children[0].children[2].children[0].children[1].children[0].style.display="none",e.children[8].children[2].children[0].style.display="none",e.children[3].style.boxShadow="none",e.children[3].style.filter="invert(0.93)",e.children[0].children[1].children[1].children[0].children[1].style.display="none",console.log("Successfully Customized!")}var l,n;document.querySelector('[aria-label="Leave call"]')?(console.log("Joined Call"),setTimeout(()=>{e()},2e3)):(console.log("Not Joined Call!"),l=document.querySelector('[aria-label="Leave call"]'),n=setInterval(()=>{l?(setTimeout(()=>{e()},2e3),clearInterval(n)):(camera=document.querySelectorAll('[data-tooltip="Turn off camera (ctrl + e)"]'),mics=document.querySelectorAll('[data-tooltip="Turn off microphone (ctrl + d)"]'),0<camera.length&&camera[0].click(),0<mics.length&&mics[0].click(),l=document.querySelector('[aria-label="Leave call"]'),console.log("Waiting to Join Call"))},3e3))}();
```

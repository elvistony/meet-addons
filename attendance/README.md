## Attendance AddOn

<img src="/images/attendance-window.png">


### Features
- Get List of Students who responded
- Extracts posted rollnumbers and combines it to a single attendance Roll number list
- Seemless Integration into the Chat Window
- Easy Copy and Paste to ERP

<img src="/images/attendance-export.png">
_Exporting Rollnumber List - Posting the List for students to confirm their presence_

### Installation 
Follow the same instructions mentioned [here](https://github.com/elvistony/meet-addons/#installation)

OR

Save it as a Bookmarklet (set of codes that runs when you click it!)
- Create a new Bookmark 
- Copy and paste the below code as the URL of the Bookmark
- Name the bookmark as you like.
- Voila you have a very own Bookmarklet!

```js
javascript:!function(){function e(){for(parents=parentB.children[3].children[0].children[1].children[1],chats=parents.children[1].children[1].children[0].children[1],names={},i=0;i<chats.childElementCount;i++)for(chat=chats.children[i],j=0;j<chat.children[1].childElementCount;j++)chatName=chat.children[0].children[0].innerText,chatMsg=chat.children[1].children[j].innerText.trim(),chatName in names?null!=chatMsg.match(/^[0-9]+$/)&&(names[chatName]=chatMsg):null!=chatMsg.match(/^[0-9]+$/)?names[chatName]=chatMsg:names[chatName]="-1";return names}function n(){h.children[0].children[0].children[2].children[0].children[1].innerText="Refreshed !",setTimeout(()=>{h.children[0].children[0].children[2].children[0].children[1].innerText="Refresh Attendance"},1e3);try{for(;c.children[3].children[1].children[1].childElementCount>0;)c.children[3].children[1].children[1].removeChild(c.children[3].children[1].children[1].lastChild)}catch(e){console.log(e)}for(dict=e(),names=Object.keys(dict),names.sort(),setTimeout(()=>{h.children[0].children[0].children[2].children[0].children[1].innerText="Refresh Attendance ("+names.length+")"},1500),d=[],i=0;i<names.length;i++)r.appendChild(a(l.cloneNode(1),names[i],dict[names[i]])),"-1"!=dict[names[i]]&&d.push(dict[names[i]])}var t=document.querySelector("[data-is-muted]");parentB=t.parentElement.parentElement.parentElement.parentElement.parentElement,chatBtn=document.querySelectorAll('div[data-tooltip="Chat with everyone"]')[0],chatBtn.addEventListener("click",()=>{!function(){parents=parentB.children[3].children[0].children[1].children[1],godElement=parents.parentElement.parentElement.parentElement.parentElement,bottomMenu=godElement.children[8].children[2].lastElementChild,c=parents.children[1].children[0].cloneNode(1),parents.children[1].appendChild(c),attBtn=parents.children[0].children[0].cloneNode(1),attBtn.removeChild(attBtn.children[0]),parents.children[0].appendChild(attBtn),attBtn.setAttribute("data-tab-id","3"),attBtn.children[0].children[0].children[1].innerText="Stats",c.children[2].children[1].children[0].innerText="Responded Students",(l=c.children[2].children[1].children[1].children[0]).children[1].children[1].setAttribute("jscontroller",""),l.children[1].children[0].setAttribute("jscontroller",""),l.children[1].children[1].setAttribute("jsaction",""),l.children[1].children[1].children[0].children[1].children[0].innerHTML="❌",l.children[1].children[1].children[0].setAttribute("data-tooltip","Delete Student Entry"),l.children[0].children[0].src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",r=c.children[2].children[1].children[1],c.children[0].setAttribute("jsaction",""),c.children[0].children[0].setAttribute("jsaction",""),c.children[0].children[0].setAttribute("jscontroller",""),finalAtt=c.children[0].children[0].children[0].children[2].children[0].children[1],finalAtt.innerText="Finalize Attendance",finalAtt.addEventListener("click",s),h=c.children[0].cloneNode(1),c.insertBefore(h,c.children[0]),h.children[0].children[0].children[2].children[0].children[0].innerText="refresh",h.children[0].children[0].children[2].children[0].children[1].innerText="Refresh Attendance";for(;c.children[3].children[1].children[1].childElementCount>0;)c.children[3].children[1].children[1].removeChild(c.children[3].children[1].children[1].lastChild);h.addEventListener("click",()=>{n()}),n()}()}),ele=!1;var r=!1,l=!1,c=!1,d=[],h=!1;function a(n,t,i){return n.children[0].children[1].children[0].children[0].innerText=t,n.children[0].children[1].children[0].children[1].innerText="",n.children[1].children[0].innerHTML=i,n.classList.add("student"),n.children[1].children[1].addEventListener("click",n=>{!function(n){console.log("SPAN"==n.nodeName),dict=e(),"SPAN"==n.nodeName&&(student=n.parentElement.parentElement.parentElement.parentElement,console.log(student.classList.contains("student")),student.classList.contains("student")&&(Sname=student.children[0].children[1].children[0].children[0].innerText,console.log("Deleting ",Sname,dict[Sname]),function(e,n){for(var t=0;t<e.length;)e[t]===n?e.splice(t,1):++t}(d,dict[Sname]),delete dict[Sname],r.removeChild(student)))}(n.target)}),"-1"==i&&(n.style.color="red",n.fontWeight="600"),n}function s(){msg="- - - - - - - - - - - - -Students Present- - - - - - - - - -\n",trail="\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n*",chatBox=document.getElementsByTagName("textarea")[0],chatBox.focus(),d.sort(),chatBox.parentElement.parentElement.children[0].innerText="",chatBox.value=msg+d.toString()+trail,chatBox.style.height="100px",attBtn=parents.children[0].children[1].click()}closeer=!1}();
```

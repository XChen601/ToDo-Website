(()=>{"use strict";const t=(t,e,s)=>{let n=!1;return{title:t,description:e,dueDate:s,completed:n,toggleComplete:()=>{n?(n=!1,console.log("completed")):(n=!0,console.log("not completed")),console.log(n)}}},e=t=>{let e=[];return{title:t,tasks:e,addTask:t=>{e.push(t)},removeTask:t=>{e.splice(e.indexOf(t),1)}}},s=(()=>{const t=[];return{projects:t,addProject:e=>{t.push(e)},removeProject:e=>{t.splice(t.indexOf(e),1)}}})(),n=s,d=t=>{const e=document.getElementById("content");for(;e.firstChild;)e.removeChild(e.firstChild);const s=document.createElement("div");s.classList.add("project");const n=document.createElement("h1");n.classList.add("project-title"),n.textContent=t.title,s.appendChild(n);const d=document.createElement("div");d.classList.add("project-tasks"),t.tasks.forEach((t=>{const e=document.createElement("div");e.classList.add("task");const s=document.createElement("h2");s.classList.add("task-title"),s.textContent=t.title,e.appendChild(s);const n=document.createElement("p");n.classList.add("task-description"),n.textContent=t.description,e.appendChild(n);const a=document.createElement("p");a.classList.add("task-due-date"),a.textContent=t.dueDate,e.appendChild(a);const c=document.createElement("button");c.classList.add("task-completed-btn"),c.textContent="Completed",c.addEventListener("click",(()=>{t.toggleComplete(),e.classList.toggle("task-completed"),"Completed"===c.textContent?c.innerHTML="Not Completed":c.innerHTML="Completed"})),e.appendChild(c),d.appendChild(e)})),s.appendChild(d),e.appendChild(s)},a=e=>{const s=document.getElementById("form-section"),n=document.createElement("form");n.classList.add("task-form");const a=document.createElement("input");a.classList.add("task-title-input"),a.setAttribute("type","text"),a.setAttribute("name","title"),a.setAttribute("placeholder","Title"),n.appendChild(a);const c=document.createElement("input");c.classList.add("task-description-input"),c.setAttribute("type","text"),c.setAttribute("name","description"),c.setAttribute("placeholder","Description"),n.appendChild(c);const o=document.createElement("input");o.classList.add("task-due-date-input"),o.setAttribute("type","date"),o.setAttribute("name","due-date"),n.appendChild(o);const i=document.createElement("button");i.classList.add("task-submit-btn"),i.textContent="Submit",i.addEventListener("click",(()=>{const i=t(a.value,c.value,o.value);e.addTask(i),d(e),s.removeChild(n),document.querySelector(".create-task-btn").classList.toggle("active")})),n.appendChild(i),s.appendChild(n)},c=t("Test Tassssk","This is a test task","2021-01-01");e("Project One").addTask(c),(()=>{const s=t("Test Tassk","This is a test task","2021-01-01");let c=e("Project One");c.addTask(s),n.addProject(c),(t=>{const e=document.getElementById("form-section"),s=document.createElement("button");s.classList.add("create-task-btn"),s.textContent="Create Task",s.addEventListener("click",(()=>{s.classList.contains("active")?e.removeChild(e.lastChild):a(t),s.classList.toggle("active")})),e.appendChild(s)})(c),d(c),(t=>{const e=document.getElementById("list-section");t.forEach((t=>{const s=document.createElement("div");s.classList.add("project"),s.textContent=t.title,e.appendChild(s)}))})(n.projects)})()})();
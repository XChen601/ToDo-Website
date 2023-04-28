import Task from "./task"
import Project from "./project"
import ProjectList from "./projectList";

const UI = () => {

    const testTask = Task("Test Task", "This is a test task", "2021-01-01");
    ProjectList.currentProject.addTask(testTask);

    // add a task to the current project
    createTaskBtn();
    // display the current project's tasks
    displayTasks();
    displayProjects();
    updateProjectBanner();

}


const displayProjects = () => {
    const projectsDiv = document.querySelector(".project-list");
    projectsDiv.innerHTML = "";
    ProjectList.projects.forEach(project => {
        const projectDiv = document.createElement("button");
        projectDiv.classList.add("project");
        projectDiv.innerHTML = `
            <div class="project-title">${project.title}</div>
        `;
        // add data attribute to project div
        projectDiv.setAttribute("data-project", project.title);
        projectsDiv.appendChild(projectDiv);

        // add event listener to project div to change current project
        projectDiv.addEventListener("click", () => {
            ProjectList.currentProject = project;
            updateProjectBanner();
            displayTasks();
        });
    });

    // add projects button
    const addProjectButton = document.createElement("button");
    addProjectButton.classList.add("add-project-button");
    addProjectButton.innerHTML = "Add Project";
    addProjectButton.addEventListener("click", () => {
        // toggle active class to button
        addProjectButton.classList.toggle("active");
        // if button is active, create project pop up
        if (addProjectButton.classList.contains("active")) {
            createProjectPopUp();
        }
        // if button is not active, remove project pop up
        else {
            const projectPopUp = document.querySelector("#project-pop-up");
            projectPopUp.remove();
        }
    }
    );
    projectsDiv.appendChild(addProjectButton);

}

const createProjectPopUp = () => {
    const projectListDiv = document.querySelector('.project-list')
    const projectPopUp = document.createElement("div");
    projectPopUp.classList.add("project-pop-up");
    projectPopUp.setAttribute("id", "project-pop-up");
    projectPopUp.innerHTML = `
        <div class="project-pop-up-content">
            <form>
                <input type="text" id="project-title" name="project-title" placeholder="Project Title">
                <input type="submit" value="Submit">
            </form>
        </div>
    `;
    projectListDiv.appendChild(projectPopUp);

    // add event listener to form
    const projectForm = document.querySelector(".project-pop-up-content form");
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const projectTitle = document.querySelector("#project-title").value;
        const project = ProjectList.createProject(projectTitle);
        displayProjects();
        updateProjectBanner();
        displayTasks();
        const projectPopUp = document.querySelector("#project-pop-up");
        projectPopUp.remove();
    });
}


const updateProjectBanner = () => {
    const projectBannerDiv = document.querySelector(".project-banner");
    projectBannerDiv.innerHTML = `${ProjectList.currentProject.title}`;
}

const displayTasks = () => {
    const tasksDiv = document.querySelector(".task-list");
    tasksDiv.innerHTML = "";
    ProjectList.currentProject.tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.innerHTML = `
            <div class="task-title">${task.title}</div>
            <div class="task-description">${task.description}</div>
            <div class="task-due-date">${task.dueDate}</div>
            <div class="task-delete">X</div>
        `;
        tasksDiv.appendChild(taskDiv);
    });
}

const createTaskBtn = () => {
    const popupDiv = document.querySelector('.todo-input')

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.innerHTML = "Add Task";
    addTaskButton.addEventListener("click", () => {
        // toggle active class to button
        addTaskButton.classList.toggle("active");
        // if button is active, create task pop up
        if (addTaskButton.classList.contains("active")) {
            createTaskPopUp();
        }
        // if button is not active, remove task pop up
        else {
            const taskPopUp = document.querySelector("#task-pop-up");
            taskPopUp.remove();
        }
    });
    popupDiv.appendChild(addTaskButton);
}
const createTaskPopUp = () => {
    const popupDiv = document.querySelector('.todo-input')

    const taskPopUp = document.createElement("div");
    taskPopUp.classList.add("task-pop-up");
    taskPopUp.setAttribute("id", "task-pop-up");
    taskPopUp.innerHTML = `
        <div class="task-pop-up-content">
            <span class="close">&times;</span>
            <form>
                <label for="task-title">Title</label>
                <input type="text" id="task-title" name="task-title" placeholder="Task Title">
                <label for="task-description">Description</label>
                <input type="text" id="task-description" name="task-description" placeholder="Task Description">
                <label for="task-due-date">Due Date</label>
                <input type="date" id="task-due-date" name="task-due-date">
                <input type="submit" value="Submit">
            </form>
        </div>
    `;
    popupDiv.appendChild(taskPopUp);
    // on submit, create task and add to current project
    const submitButton = document.querySelector(".task-pop-up-content input[type='submit']");
    submitButton.addEventListener("click", () => {
        const title = document.querySelector("#task-title").value;
        const description = document.querySelector("#task-description").value;
        const dueDate = document.querySelector("#task-due-date").value;
        const task = Task(title, description, dueDate);
        ProjectList.currentProject.addTask(task);
        taskPopUp.remove();
        displayTasks();
        // toggle active class to button
        const addTaskButton = document.querySelector(".add-task-button");
        addTaskButton.classList.toggle("active");
    });
}
export default UI;
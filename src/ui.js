import Task from "./task"
import Project from "./projects"
import ProjectList from "./projectList";

const UI = () => {
    const testTask = Task("Test Tassk", "This is a test task", "2021-01-01");
    let projectOne = Project("Project One");
    projectOne.addTask(testTask);
    ProjectList.addProject(projectOne);
    
    createTask(projectOne);

    displayProjectTasks(projectOne);
    displayProjects(ProjectList.projects);

}

const createTask = (project) => {
    const formDiv = document.getElementById("form-section");
    const createTaskBtn = document.createElement("button");
    createTaskBtn.classList.add("create-task-btn");
    createTaskBtn.textContent = "Create Task";
    createTaskBtn.addEventListener("click", () => {
        // if active class is present, remove form
        if (createTaskBtn.classList.contains("active")) {
            formDiv.removeChild(formDiv.lastChild);
        } else {
            createTaskForm(project);
        }
        // toggle active class on createTaskBtn
        createTaskBtn.classList.toggle("active");
    });
    formDiv.appendChild(createTaskBtn);
}

const displayProjects = (projects) => {
    const listDiv = document.getElementById("list-section");
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        projectDiv.textContent = project.title;
        listDiv.appendChild(projectDiv);
    });
}


const displayProjectTasks = (project) => {
    const contentDiv = document.getElementById("content");
    // Clear contentDiv
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    const projectTitleDiv = document.createElement("h1");
    projectTitleDiv.classList.add("project-title");
    projectTitleDiv.textContent = project.title;
    projectDiv.appendChild(projectTitleDiv);
    const projectTasksDiv = document.createElement("div");
    projectTasksDiv.classList.add("project-tasks");
    project.tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        const taskTitleDiv = document.createElement("h2");
        taskTitleDiv.classList.add("task-title");
        taskTitleDiv.textContent = task.title;
        taskDiv.appendChild(taskTitleDiv);
        const taskDescriptionDiv = document.createElement("p");
        taskDescriptionDiv.classList.add("task-description");
        taskDescriptionDiv.textContent = task.description;
        taskDiv.appendChild(taskDescriptionDiv);
        const taskDueDateDiv = document.createElement("p");
        taskDueDateDiv.classList.add("task-due-date");
        taskDueDateDiv.textContent = task.dueDate;
        taskDiv.appendChild(taskDueDateDiv);
        const taskCompletedBtn = document.createElement("button");
        taskCompletedBtn.classList.add("task-completed-btn");
        taskCompletedBtn.textContent = "Completed";
        taskCompletedBtn.addEventListener("click", () => {
            task.toggleComplete();
            taskDiv.classList.toggle("task-completed");
            if (taskCompletedBtn.textContent === "Completed") {
                taskCompletedBtn.innerHTML = "Not Completed";
            } else {
                taskCompletedBtn.innerHTML = "Completed";
            }
        });
        taskDiv.appendChild(taskCompletedBtn);
        projectTasksDiv.appendChild(taskDiv);
    });
    projectDiv.appendChild(projectTasksDiv);
    contentDiv.appendChild(projectDiv);
}

        
const createTaskForm = (project) => {
    const formDiv = document.getElementById("form-section");
    const form = document.createElement("form");
    form.classList.add("task-form");
    
    const titleInput = document.createElement("input");
    titleInput.classList.add("task-title-input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title");
    form.appendChild(titleInput);

    const descriptionInput = document.createElement("input");
    descriptionInput.classList.add("task-description-input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("placeholder", "Description");
    form.appendChild(descriptionInput);

    const dueDateInput = document.createElement("input");
    dueDateInput.classList.add("task-due-date-input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "due-date");
    form.appendChild(dueDateInput);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("task-submit-btn");
    submitBtn.textContent = "Submit";
    submitBtn.addEventListener("click", () => {
        const task = Task(titleInput.value, descriptionInput.value, dueDateInput.value);
        project.addTask(task);
        displayProjectTasks(project);
        formDiv.removeChild(form);
        // toggle active class on createTaskBtn
        const createTaskBtn = document.querySelector(".create-task-btn");
        createTaskBtn.classList.toggle("active");
        
    }
    );
    form.appendChild(submitBtn);

    formDiv.appendChild(form);

}


export default UI;
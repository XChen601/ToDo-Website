import UI from "./ui";
import Task from "./task"
import Project from "./projects"
import ProjectList from "./projectList"

const testTask = Task("Test Tassssk", "This is a test task", "2021-01-01");
let projectOne = Project("Project One");
projectOne.addTask(testTask);
UI();
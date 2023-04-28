import Project from "./project.js";
const ProjectList = (() => {
    const projects = [Project("Default Project")];
    let currentProject = projects[0];
    const addProject = (project) => {
        projects.push(project);
    }
    const removeProject = (project) => {
        projects.splice(projects.indexOf(project), 1);

    }
    const createProject = (title) => {
        const project = Project(title);
        addProject(project);
        return project;
    }
    return { projects, addProject, removeProject, createProject, currentProject };
})();

export default ProjectList;
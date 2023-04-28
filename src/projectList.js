const ProjectList = (() => {
    const projects = [];
    const addProject = (project) => {
        projects.push(project);
    }
    const removeProject = (project) => {
        projects.splice(projects.indexOf(project), 1);

    }
    return { projects, addProject, removeProject };
})();

export default ProjectList;
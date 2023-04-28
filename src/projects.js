const Project = (title) => {
    let tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    }
    const removeTask = (task) => {
        tasks.splice(tasks.indexOf(task), 1);
    }
    
    return { title, tasks, addTask, removeTask };
}


export default Project;
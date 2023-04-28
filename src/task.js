const Task = (title, description, dueDate) => {
    let completed = false;
    const toggleComplete = () => {
        if (completed) {
            completed = false;
            console.log("completed");
        } else {
            completed = true;
            console.log("not completed");
        }
        console.log(completed);
    }
    
    return { title, description, dueDate, completed, toggleComplete };
}

export default Task;
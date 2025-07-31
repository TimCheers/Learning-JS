function printIncompleteTasks(project){
    for(const task of project.tasks){
        if(task.done == false){
            console.log("Task name:", task.title, "\nAssignee", task.assignee.name);
        }
    }
}
printIncompleteTasks(project);
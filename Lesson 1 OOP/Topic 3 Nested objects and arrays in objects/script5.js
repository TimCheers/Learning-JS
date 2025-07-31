project.team = {
    members: [
        {name: project.tasks[0].assignee.name, position: "Не начальник"},
        {name: project.tasks[1].assignee.name, position: "Начальник"},
        {name: project.tasks[2].assignee.name, position: "Не начальник"}
    ],
    lead: {
        name: project.tasks[1].assignee.name,
        position: "Начальник"
    }
};
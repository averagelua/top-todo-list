import ItemList from "./ItemList.js";
import TodoItem from "./TodoItem.js";
import ChecklistItem from "./ChecklistItem.js";

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.todolist = new ItemList();
    }

    // Reconstruct Project object from saved object primatives
    static fromJSON(data) {
        const newProject = new Project(data.name, data.id);

        for (const [todoItemId, todoItem] of Object.entries(data.todolist.items)) {
            const newTodoItem = new TodoItem(todoItem.title, todoItem.description, new Date(todoItem.dueDate), todoItem.priority);

            for (const checklistItem in todoItem.checklist.items) {
                const newChecklistItem = new ChecklistItem(checklistItem.description);
                if (checklistItem.completed) {
                    newChecklistItem.toggle();
                }
                newTodoItem.checklist.addItem(newChecklistItem);
            }

            newProject.todolist.items.set(todoItemId, newTodoItem);
        }

        return newProject;
    }
}
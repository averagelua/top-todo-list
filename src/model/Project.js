import ItemList from "./ItemList.js";
import TodoItem from "./TodoItem.js";

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.todolist = new ItemList();
    }

    // Reconstruct Project object from saved object primatives
    static fromJSON(data) {
        const newProject = new Project(data.name, data.id);

        for (const todoItem in data.todolist.items) {
            const newTodoItem = Object.assign(new TodoItem(), todoItem);
            newProject.todolist.addItem(newTodoItem);
        }

        return newProject;
    }
}
import ItemList from "./ItemList.js";

export default class Project {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.todolist = new ItemList();
    }
}
export default class ChecklistItem {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggle() {
        this.completed = !this.completed;
    }
}
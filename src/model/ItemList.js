export default class ItemList {
    constructor() {
        this.items = new Map();
    }

    addItem(item) {
        const id = crypto.randomUUID();
        this.items.set(id, item);
        return id;
    }

    getItem(id) {
        return this.items.get(id);
    }

    removeItem(id) {
        this.items.delete(id);
    }
}
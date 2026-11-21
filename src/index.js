// class ItemList {
//     constructor(itemClass) {
//         this.items = new Map();
//         this.itemClass = itemClass;
//     }

//     addItem(...args) {
//         const id = crypto.randomUUID();
//         const item = new this.itemClass(...args);

//         this.items.set(id, item);
//         return id;
//     }

//     getItem(id) {
//         return this.items.get(id);
//     }

//     removeItem(id) {
//         this.items.delete(id);
//     }
// }

// class ChecklistItem {
//     constructor(description) {
//         this.description = description;
//         this.completed = false;
//     }

//     toggle() {
//         this.completed = !this.completed;
//     }
// }

// const Checklist = new ItemList(ChecklistItem);
// const itemId = Checklist.addItem("new item 1");
// console.log(itemId);
// console.log(Checklist.getItem(itemId));
// console.log(Checklist.items);
import * as ProjectCollector from "../service/ProjectCollector.js";
import config from "../config.json" with { type: "json" };
import { intlFormatDistance } from "date-fns";

const projectTitleLabel = document.querySelector("#project-name");
const projectActionButtonsContainer = document.querySelector("#action-buttons");
const todoItemListContainer = document.querySelector("#todo-item-list");
const addTodoButton = document.querySelector("#add-todo-btn");

let currentProject;

export function updateProjectView(project) {
    console.log(`Updating ProjectView for Project id ${project.id}`);

    // update project details
    projectTitleLabel.textContent = project.name;

    // clear old todo items
    todoItemListContainer.replaceChildren(addTodoButton.parentElement);

    // sort todo items
    const sortedTodoItems = project.todolist.items.entries().toArray().sort(([idA, todoItemA], [idB, todoItemB]) => {
        if (config.PRIORITY_DISPLAY_ORDER.indexOf(todoItemA.priority) < config.PRIORITY_DISPLAY_ORDER.indexOf(todoItemB)) return -1;
        return todoItemB.dueDate - todoItemA.dueDate;
    });
    
    // create todo items
    for (const [id, todoItem] of sortedTodoItems) {
        const listItem = document.createElement("li");

        const todoItemButton = document.createElement("button");
        todoItemButton.classList.add("todo-item", todoItem.priority); // add classes for appearance
        todoItemButton.dataset.id = id;

        const todoNameLabel = document.createElement("h3");
        todoNameLabel.textContent = todoItem.title;
        todoItemButton.appendChild(todoNameLabel);

        const todoDueDateLabel = document.createElement("p");
        todoDueDateLabel.textContent = intlFormatDistance(todoItem.dueDate, new Date());
        todoItemButton.appendChild(todoDueDateLabel);

        listItem.appendChild(todoItemButton);
        todoItemListContainer.appendChild(listItem);
    }
}
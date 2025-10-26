
import { toggleAddTask } from "./dom.js";
import { filterTasks } from "./dom.js";

console.log("JS работает!");
// const addButton = document.querySelector('.add-task_button')

// addButton.addEventListener('click', toggleAddForm) - смотреть в dom.js причину комментирования этого


const form = document.querySelector('.add-task_form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('input');
    const text = input.value.trim();

    if (text) {
        toggleAddTask(text);
        input.value = '';
    }
});

const filterSelect = document.querySelector('#select')

filterSelect.addEventListener("change", () => {
    filterTasks(filterSelect.value)
})


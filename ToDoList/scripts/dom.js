export function toggleAddTask(text) {
    const list = document.querySelector('.task-list ul');
    const task = document.createElement('li');

    const textEl = document.createElement('span')
    task.textContent = text;
    task.appendChild(textEl);

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('task-actions');

    const DoneButton = document.createElement('button');
    DoneButton.textContent = '✅';
    DoneButton.classList.add('task-done_btn');

    const DeleteButton = document.createElement('button');
    DeleteButton.textContent = '🗑️';



    btnContainer.appendChild(DoneButton);
    btnContainer.appendChild(DeleteButton);
    task.appendChild(textEl);
    task.appendChild(btnContainer);
    list.appendChild(task);

    DoneButton.addEventListener('click', () => {
        task.classList.toggle('done');
        task.classList.toggle('completed');
        DoneButton.classList.toggle('active');
    });

    DeleteButton.addEventListener('click', () => {
        task.remove();
    });
}

export function filterTasks(filter) {
    const tasks = document.querySelectorAll('.task-list li');

    tasks.forEach((task) => {
        switch (filter) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed')
                    ? 'flex'
                    : 'none';
                break;
            case 'active':
                task.style.display = task.classList.contains('completed')
                    ? 'none'
                    : 'flex';
                break;
        }
    });
}

const form = document.querySelector('form');
const taskList = document.querySelector('.collection');
const deleteTasksBtn = document.querySelector('#delete-tasks');
const deleteAllFromLs = document.querySelector("#del-all-from-ls")

//events
form.addEventListener('submit', addTask);
taskList.addEventListener('click', deleteTask);
deleteTasksBtn.addEventListener('click', deleteTasks);
deleteAllFromLs.addEventListener('click', deleteAllTasksFromLocalStorage);

function deleteTasks(event){
   // taskList.innerHTML = '';
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}

function deleteTask (event){
    if (event.target.textContent === 'x'){
        if (confirm('Kas kustutada?')){
            event.target.parentElement.remove();
            task = event.target.parentElement.firstChild.textContent;
            deleteFromLocalStorage(task);
        }
    }
}

function addTask(event){
    const task = document.querySelector('#task').value;
    console.log(task);
    //create <li> element.
    const li = document.createElement('li');
    //add class
    li.className = "collection-item";
    //create text element
    const text = document.createTextNode(task);
    //add text to li item
    li.appendChild(text);

  //create a element
    const link = document.createElement('a');
    //add CSS class
    link.className ='secondary-content';
    //set href attribute to <a>
    link.setAttribute('href', '#');
    //add text content to <a>
    link.appendChild(document.createTextNode('x'));
    //add <a> to <li>
    li.appendChild(link);
    //add li item to ul
    const ul = document.querySelector('.collection');
    ul.appendChild(li);
    // addToLocalStorage
    addToLocalStorage(task);


    console.log(li);
     event.preventDefault();
}

function addToLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(tasks);
}

function deleteFromLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (tasksElement, index){
        if(tasksElement === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function deleteAllTasksFromLocalStorage(){
    // localStorage.clear();
    if(localStorage.getItem('tasks') === null){
        let tasks = [];
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    localStorage.removeItem('tasks');
}






const pending = [] ;
const completed  = [] ;
const tabs = document.querySelectorAll('.tab');

const pendingTask =             `<div class="pen-items">
<p class="pen-tasks">${11}</p>
<div class="buttons">
    <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
    </p>
    <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
    </p>
    <p style="display: flex; justify-content:center ; align-items:center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg> 
        <span style="display: flex; justify-content:center ; align-items:center">${11}</span>
    </p>
</div>`






const pendingTab = document.getElementById('pendingTab');
const completedTab = document.getElementById('completedTab');
const addTodoTab = document.getElementById('addTodoTab');
const pendingTodo = document.querySelector("pending")
const completedTodo = document.querySelector("completed")

pendingTab.addEventListener('click', () => {
    pendingTab.classList.add('currentTab');
    completedTab.classList.remove('currentTab');
    addTodoTab.classList.remove('currentTab');
    loadPendinTasks()
});

completedTab.addEventListener('click', () => {
    pendingTab.classList.remove('currentTab');
    completedTab.classList.add('currentTab');
    addTodoTab.classList.remove('currentTab');
    loadCompletedTasks() ;
});

addTodoTab.addEventListener('click', () => {
    pendingTab.classList.remove('currentTab');
    completedTab.classList.remove('currentTab');
    addTodoTab.classList.add('currentTab');
});
const pendingDiv = document.querySelector('.pending');
const completedDiv = document.querySelector('.completed');
const addTodoDiv = document.querySelector('.addTodo');

pendingTab.addEventListener('click', ()=>  {
    pendingDiv.style.display = 'block';
    completedDiv.style.display = 'none';
    addTodoDiv.style.display = 'none';
});

completedTab.addEventListener('click', () => {
    pendingDiv.style.display = 'none';
    completedDiv.style.display = 'block';
    addTodoDiv.style.display = 'none';
});

addTodoTab.addEventListener('click', () => {
    pendingDiv.style.display = 'none';
    completedDiv.style.display = 'none';
    addTodoDiv.style.display = 'block';
});



document.querySelector("form").addEventListener("submit" , (e)=>{
    e.preventDefault()
    
    const todoTask = document.getElementById("newTodo").value.toUpperCase();
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if((minutes+"").length==1){
        minutes="0"+minutes ;
    }
    const newTodo = {
        todo:todoTask ,
        time: ":" +hours+":" + minutes
    }

    pending.push(newTodo)
    document.getElementById("newTodo").value = ""; 
    console.log(document.querySelector("form").value)

    pendingTab.classList.add('currentTab');
    completedTab.classList.remove('currentTab');
    addTodoTab.classList.remove('currentTab');
    pendingDiv.style.display = 'block';
    completedDiv.style.display = 'none';
    addTodoDiv.style.display = 'none';
    loadPendinTasks()
})


function loadPendinTasks(){
    if(pending.length==0){

    }
    console.log(pendingDiv)
    pendingDiv.innerHTML=''

    pending.forEach((task , index)=>{
        const pendingTask =             `<div class="pen-items">
        <p class="pen-tasks">${task.todo}</p>
        <div class="buttons">
            <p class="delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="red" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
            </p>
            <p class="complete">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="green" viewBox="0 0 256 256"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path></svg>
            </p>
            <p style="display: flex; justify-content:center ; align-items:center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg> 
                <span style="display: flex;  align-items:center; font-size:20px;">${task.time}</span>
            </p>
        </div>`
    
        pendingDiv.insertAdjacentHTML('beforeend' , pendingTask) ;
        const deleteButton = pendingDiv.querySelector('.delete');
        const completeButton = pendingDiv.querySelector('.complete');
    
        deleteButton.addEventListener('click', () => {
            pending.splice(index, 1); 
            loadPendinTasks(); 
        });
    
        completeButton.addEventListener('click', () => {
            completed.push(task);
            pending.splice(index, 1);
            loadCompletedTasks(); 

           
        });

    })




}

function loadCompletedTasks(){
    console.log(completed)
    completedDiv.innerHTML=''
    const timestamp = Date.now();
    const date = new Date(timestamp);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if((minutes+"").length==1){
        minutes="0"+minutes ;
    }

    completed.forEach((task ,index)=>{
        const pendingTask =             `<div class="comp-items";>
        <p class="comp-tasks">${task.todo}</p>
        <p style="display: flex; justify-content:center ; align-items:center">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path></svg> 
        <span style="display: flex;  align-items:center; font-size:20px;">${":"+hours+":"+minutes}</span>
    </p>
       `
    
        completedDiv.insertAdjacentHTML('beforeend' , pendingTask) ;

})
pendingTab.classList.remove('currentTab');
completedTab.classList.add('currentTab');
addTodoTab.classList.remove('currentTab');
pendingDiv.style.display = 'none';
completedDiv.style.display = 'block';
addTodoDiv.style.display = 'none';
}






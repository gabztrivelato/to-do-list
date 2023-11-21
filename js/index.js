const timeElement =  document.querySelector('.time');
const dateElement =  document.querySelector('.date');
const buttonAdd = document.querySelector('.listAdd');
const inputAddTask = document.querySelector('.input-addTask')
const list = document.querySelector('.list');

const setDay = () => {
    dayName = new Array ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    monName = new Array ("January", "February", "March", "April", "May", "June","July", "August","September", "October", "November", "Dezember");
    today = new Date();
    dateElement.innerHTML = dayName[today.getDay()] + ", " + today.getDate() + " " + monName[today.getMonth()] + " " + today.getFullYear();
};
const setTime = () => {
    this.loop = setInterval( () => {
        today = new Date();
        h=today.getHours();
        m=today.getMinutes();
        s=today.getSeconds();

        if (m < 10){
            timeElement.innerHTML = h + ':0' + m + ':' + s;
        }else{
            timeElement.innerHTML = h + ':' + m + ':' + s;
        }
           
    },500);     
};


const createTask = () => {
    const listItem = document.createElement('li');
    listItem.className = 'list__item';
    const listItemChk = document.createElement('input');
    listItemChk.setAttribute('type','checkbox');
    const listItemLabel = document.createElement('label');

    list.appendChild(listItem);
    listItem.appendChild(listItemLabel);
    listItemLabel.appendChild(listItemChk);
    listItemLabel.innerHTML += inputAddTask.value;

    inputAddTask.value = '';
}

buttonAdd.addEventListener('click',createTask);

window.onload = () => {
    setTime();
    setDay();
};
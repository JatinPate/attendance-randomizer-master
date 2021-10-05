var students = [" Kayley", " Jaxxon"," Jhovany", " Crys", " Dan"," Jesse", " Ziyah", " Eli", " Jay", " Jennifer", " Eliza", " Richard", " Dawna", " Roman", " Jenna", " Bo", " Kevin",];

const studentList = document.getElementsByClassName("studentList")[0];
const currentStudent = document.getElementsByClassName("currentStudent")[0];
const studButton = document.getElementsByClassName("studButton")[0];

studButton.addEventListener("click", remove);

function fillList(){
studentList.innerText = students;
}
fillList();

function remove(){
    var studIndex = randomInt(students.length);
    var curStud = students[studIndex];
    console.log(curStud)
    if (curStud == undefined) {curStud = "Instructor"};
    currentStudent.innerText = curStud;
    students = students.filter(name => name != curStud);
    fillList();
}

function randomInt(max){
    return Math.floor(Math.random() * max);
}

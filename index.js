var students = [" Lehman Busbee"," Deed Carroll"," Chad Conell"," Aaron Dormer"," Dayna Fairchild", " Gabriel Gerhauser", " Tyrell Gordon", " Joshua Harper", " Justin Longwell", " Agoussouye Malou", " William Page", " Deairus Palmer", " Nina Payne", " Jamal Pennyman", " Pearl Reed", " James Snowden", " Nico Sorrell", " Connie Vasbinder"]

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
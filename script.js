const form = document.querySelector("form");
const table = document.querySelector("table");
const rows = document.querySelector("tbody");

let students = [];

form.addEventListener("submit", function(e) {
    e.preventDefault(); 
    
    let name = document.getElementById("name").value.trim();
    let mark = parseInt(document.getElementById("mark").value);
    
    let result = mark >= 50 ? "PASS" : "FAIL"
    let grade = "";

    if (mark >= 80) grade = "Distinction";
    else if (mark >= 65) grade = "Merit";
    else if (mark >= 50) grade = "Pass";
    else grade = "Fail";

    let student = {name, mark, result, grade};
    students.push(student);
}

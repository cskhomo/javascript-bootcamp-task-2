const form = document.querySelector("form");
const rows = document.querySelector("tbody");
let students = [];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    let name = document.getElementById("name").value.trim();
    let mark = parseInt(document.getElementById("mark").value);
    let result = mark >= 50 ? "PASS" : "FAIL";
    
    let grade = get_grade(mark);
    const student = create_student(name, mark, result, grade);
    add_row(student);

    form.reset();
});

function get_grade(mark) {
    if (mark >= 80) return "Distinction";
    if (mark >= 65) return "Merit";
    if (mark >= 50) return "Pass";
    return "Fail";
}

function create_student(name, mark, result, grade) {
    let student = {name, mark, result, grade};
    students.push(student)
    return student
}

function add_row(student) {
    rows.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.mark}</td>
            <td>${student.result}</td>
            <td>${student.grade}</td>
        </tr>
    `;
}

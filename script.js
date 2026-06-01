const form = document.querySelector("form");
const results = document.querySelector("div")
const list = document.querySelector("ol");

let students = [];

form.addEventListener("submit", submit);

function submit(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let mark = parseInt(document.getElementById("mark").value);

    if (name === "" || isNaN(mark) || mark < 0 || mark > 100) {
        results.textContent = "Invalid input";
        return;
    }
  
    let result = mark >= 50 ? "PASS" : "FAIL";
    let grade = get_grade(mark);
    let student = create_student(name, mark, result, grade);

    print_result(result, grade);
    add_student(student);
    results.hidden = false;
    form.reset();
}

function get_grade(mark) {
    let grade = "fail"
    if (mark >= 80) grade = "Distinction";
    else if (mark >= 65) grade = "Merit";
    else if (mark >= 50) grade = "Pass";
    return grade;
}

function create_student(name, mark, result, grade) {
    let student = { name, mark, result, grade };
    students.push(student);
    return student;
}

function print_result(result, grade) {
    results.textContent = `Result: ${result} | Grade: ${grade}`;
}

function add_student(student) {
    let li = document.createElement("li");
    li.textContent = `${student.name}, ${student.mark}% | ${student.result} - ${student.grade}`;
    list.appendChild(li);
}

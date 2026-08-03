const students = [];
function addStudent(name, major) {
    students.push({ id: students.length + 1, name, major });
    console.log(`[학생 등록] ${name}`);
}
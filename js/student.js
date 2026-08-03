const students = [];

function addStudent(name, age, major) {
    const student = { id: students.length + 1, name, age, major };
    students.push(student);
    console.log(`[학생 등록 성공] ${name} 학생이 추가되었습니다.`);
    return student;
}

function getStudents() {
    console.log("--- 전체 학생 목록 ---");
    console.log(students);
    return students;
}
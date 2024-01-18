interface Student {
  id: number;
  name: string;
  age: number;
  address: string;
}
const students: Student[] = [];
// Thêm 1 học sinh vào mảng students
function addStudent(student: Student) {
  students.push(student);
}
//
function updateStudent(index: number, student: Student) {
  if (index >= 0 && index < students.length) students[index] = student;
}

function deleteStudent(index: number) {
  if (index >= 0 && index < students.length) students.splice(index, 1);
}

function findStudentById(id: number): Student | undefined {
  return students.find((student) => student.id === id);
}

console.log(students);
//
let count: number = 0;
function countOccurrences(arr: number[], value: number): number {
  arr.forEach((item) => {
    if (item === value) count++;
  });
  return count;
}
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
//
type InputVar = string | number | boolean;
let inputVar: InputVar = 5;
function processInput(inputVar: InputVar): string {
  if (typeof inputVar === "string") return "String";
  else if (typeof inputVar === "number") return "Number";
  else return "Boolean";
}
console.log(processInput(inputVar));
// typeof: kiem tra kieu du lieu cua bien

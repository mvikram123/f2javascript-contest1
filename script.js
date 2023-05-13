/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  let MarksOver50=arr
  .filter((student)=>student.marks>50)
  .map((student)=>({
    id:student.id,
    name:student.name,
    age:student.age,
    marks:student.marks
  }))
  console.log(MarksOver50);
}
PrintStudentswithMap();

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
 arr.forEach((student)=>{
 if(student.marks>50)
 {
  console.log(student);
 }
})
}
PrintStudentsbyForEach();

function addData() {
  //Write your code here, just console.log
  let obj=[

    {id:4,name:"susan",age:"20",marks:45}];
    arr.push(obj);
    console.log("new data is added:",obj);
  
}
addData();

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((student) => student.marks >= 50);
  console.log("Failed students removed!");
  console.log(arr);

}
removeFailedStudent();

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 4, name: "emma", age: "19", marks: 90 },
    { id: 5, name: "alex", age: "21", marks: 75 },
    { id: 6, name: "lucas", age: "22", marks: 60 },
  ];
  console.log(newArray);
}
console.log("=========================================================================");
concatenateArray();
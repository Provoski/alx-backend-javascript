export default function getStudentIdsSum(studentList) {
  // Use the reduce function to calculate the sum of student IDs
  const sumOfIds = studentList.reduce((accumulator, student) => accumulator + student.id, 0);
  return sumOfIds;
}

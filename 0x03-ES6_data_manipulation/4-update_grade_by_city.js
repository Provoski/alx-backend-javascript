export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Use filter to select students in the specified city
  const studentsInCity = studentList.filter((student) => student.location === city);

  // Use map to update grades for the selected students
  const updatedStudents = studentsInCity.map((student) => {
    const matchingGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    const grade = matchingGrade ? matchingGrade.grade : 'N/A';

    return { ...student, grade };
  });

  return updatedStudents;
}

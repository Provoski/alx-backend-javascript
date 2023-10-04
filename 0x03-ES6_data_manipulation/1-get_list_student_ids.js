export default function getListStudentIds(studentList) {
  // Check if studentList is an array
  if (!Array.isArray(studentList)) {
    return []; // Return an empty array if it's not an array
  }

  // Use the map function to extract student IDs
  const studentIds = studentList.map((student) => student.id);

  return studentIds;
}

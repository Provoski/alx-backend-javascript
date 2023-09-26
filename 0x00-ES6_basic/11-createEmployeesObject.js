export default function createEmployeesObject(departmentName, employees) {
  const obj = {
   [departmentName]: []
  }
  for (const employee in employees) {
    obj.departmentName.append(employee);
  }
  return obj;
}

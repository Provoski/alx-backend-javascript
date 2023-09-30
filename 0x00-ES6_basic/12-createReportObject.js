export default function createReportObject(employeesList) {
  const getReport = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      let i = 0;
      for (const key in employeesList) {
        if (Object.prototype.hasOwnProperty.call(employeesList, key)) {
          i += 1;
        }
      }
      return i;
    },
  };
  return getReport;
}

export default function createIteratorObject(report) {
  // Check if the report object has the necessary structure
  if (!report || !report.allEmployees || typeof report.allEmployees !== 'object') {
    throw new Error('Invalid report object structure');
  }

  // Define a custom iterator using a generator function
  const iterator = {
    * [Symbol.iterator]() {
      for (const department in report.allEmployees) {
        if (Object.prototype.hasOwnProperty.call(report.allEmployees, department)) {
          const employees = report.allEmployees[department];
          for (const employee of employees) {
            yield employee;
          }
        }
      }
    },
  };

  return iterator;
}

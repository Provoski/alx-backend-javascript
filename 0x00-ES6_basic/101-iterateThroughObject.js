export default function iterateThroughObject(reportWithIterator) {
  if (!reportWithIterator || typeof reportWithIterator[Symbol.iterator] !== 'function') {
    throw new Error('Invalid iterator object');
  }

  const employees = [];
  for (const employee of reportWithIterator) {
    employees.push(employee);
  }

  return employees.join(' | ');
}

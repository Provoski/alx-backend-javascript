export default function cleanSet(set, startString) {
  // Create an array to store the filtered values
  const filteredValues = [];

  // Iterate through the set and filter values that start with startString
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      // Append the part of the string after startString to the array
      filteredValues.push(value.substring(startString.length));
    }
  });

  // Join the filtered values with hyphens to create the result string
  const resultString = filteredValues.join('-');
  return resultString;
}

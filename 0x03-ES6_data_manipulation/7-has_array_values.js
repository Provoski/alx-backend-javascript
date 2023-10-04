export default function hasValuesFromArray(set, array) {
  // Check if every element in the array is included in the set
  return array.every((element) => set.has(element));
}

export default function updateUniqueItems(inputMap) {
  // Check if the input is a Map
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Create a new Map for the updated items
  const updatedMap = new Map();

  // Iterate through the input map and update quantities
  inputMap.forEach((quantity, item) => {
    if (quantity === 1) {
      updatedMap.set(item, 100);
    } else {
      updatedMap.set(item, quantity);
    }
  });

  return updatedMap;
}

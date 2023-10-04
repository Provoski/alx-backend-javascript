// Create a WeakMap instance
export const weakMap = new WeakMap();

// Create a function to query the API
export  function queryAPI(endpoint) {
  // Check if the endpoint has been queried before
  if (weakMap.has(endpoint)) {
    // Get the current count for this endpoint
    const count = weakMap.get(endpoint);

    // If the count is >= 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }

    // Increment the count and update it in the WeakMap
    weakMap.set(endpoint, count + 1);
  } else {
    // If it's the first time, initialize the count to 1
    weakMap.set(endpoint, 1);
  }

  // Perform the API query logic here
  // ...

  // Return the result of the API query
  return `Querying ${endpoint.protocol}://${endpoint.name}`;
}

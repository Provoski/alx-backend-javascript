function handleResponseFromAPI(promise) {
  // Append handlers to the provided promise
  return promise
    .then(() => {
      // Log when the Promise resolves
      console.log('Got a response from the API');
      // Return an object for resolution
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      // Log when the Promise rejects
      console.error('Error:', error.message);
      // Return an empty Error object for rejection
      return new Error();
    });
}

export default handleResponseFromAPI;

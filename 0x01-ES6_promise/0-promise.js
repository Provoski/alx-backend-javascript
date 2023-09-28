function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      // Replace this with the actual data you want to resolve
      const responseData = { message: 'API response data' };

      // Check if the operation was successful or encountered an error
      const success = true; // Set to true for success, false for error (for demonstration)

      if (success) {
        // Resolve the Promise with the data
        resolve(responseData);
      } else {
        // Reject the Promise with an error message
        reject(new Error('API request failed'));
      }
    }, 1000); // Simulating a delay of 1 second
  });
}
export default getResponseFromAPI;

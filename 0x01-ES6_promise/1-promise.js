function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      // Resolve the Promise with a successful response object
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      // Reject the Promise with an error object
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}

export default getFullResponseFromAPI;

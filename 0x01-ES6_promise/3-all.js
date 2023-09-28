import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  // Create an array of promises
  const promises = [
    uploadPhoto(),
    createUser(),
  ];

  // Use Promise.all to collectively resolve all promises
  return Promise.all(promises)
    .then((results) => {
      // results will contain the resolved values from each promise
      const [uploadResponse, userResponse] = results;
      // Extract relevant data from the response
      const userBody = userResponse.body;
      // Log the required data to the console
      console.log(`${userBody.firstName} ${userBody.lastName}`);
    })
    .catch(() => {
      // Log an error message in case of an error
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;

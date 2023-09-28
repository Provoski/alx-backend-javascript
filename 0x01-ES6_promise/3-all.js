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
      // results will contain the resolved values from each promise1
      const [uploadResponse, userResponse] = results;
      // Log the required data to the console
      console.log(` ${uploadResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      // Log an error message in case of an error
      console.error('Signup system offline');
    });
}

export default handleProfileSignup;

import signUpUser from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to handle multiple promises and get their results
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  try {
    const results = await Promise.allSettled(promises);

    // Format the results into the specified structure
    const formattedResults = results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));

    return formattedResults;
  } catch (error) {
    // Handle any unexpected errors here
    console.error('Error:', error);
    return []; // Return an empty array in case of an error
  }
}

export default handleProfileSignup;

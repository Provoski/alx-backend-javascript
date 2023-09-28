function signUpUser(firstName, lastName) {
  // Create and return a resolved Promise with the specified object
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;

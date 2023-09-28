export function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulate an error by rejecting the Promise
    reject(new Error(`${fileName} cannot be processed`));
  });
}

export default uploadPhoto;

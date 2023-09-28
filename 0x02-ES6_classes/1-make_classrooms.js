import ClassRoom from './0-classroom';

function initializeRooms() {
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);
  const classList = [];

  classList.push(class1);
  classList.push(class2);
  classList.push(class3);

  return classList;
}

export default initializeRooms;

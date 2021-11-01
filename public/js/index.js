import getFormData from './getFormData.js';
import sendRoomData from './sendRoomData.js';

const wallsForm = document.getElementById('walls-form');

wallsForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const wallsData = getFormData();

  await sendRoomData(wallsData);
});

import getFormData from './getFormData.js';
import sendRoomData from './sendRoomData.js';
import { showError } from './errors';

const wallsForm = document.getElementById('walls-form');

wallsForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const wallsData = getFormData();

  const data = await sendRoomData(wallsData);

  if (data.error) {
    showError(data.message);
  } else {
    console.log(data);
  }
});

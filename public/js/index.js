import getFormData from './getFormData';
import sendRoomData from './sendRoomData';
import { showError } from './errorHandler';
import renderResults from './renderResults';

const wallsForm = document.getElementById('walls-form');

wallsForm.addEventListener('submit', async (ev) => {
  ev.preventDefault();

  const wallsData = getFormData();

  const data = await sendRoomData(wallsData);

  if (data.error) {
    showError(data.message);
  } else {
    renderResults(data);
  }
});

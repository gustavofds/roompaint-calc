import sendRoomData from './sendRoomData.js';

const wallsForm = document.getElementById('walls-form');

wallsForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  let index = 0;
  const wallsData = [];
  while (document.getElementById(`wall-${index}-data`)) {
    wallsData.push({
      height: parseFloat(document.getElementById(`wall-height-${index}`).value),
      width: parseFloat(document.getElementById(`wall-width-${index}`).value),
      doorCount: parseFloat(
        document.getElementById(`doors-count-${index}`).value
      ),
      windowCont: parseFloat(
        document.getElementById(`windows-count-${index}`).value
      ),
    });

    index++;
  }

  sendRoomData();
});

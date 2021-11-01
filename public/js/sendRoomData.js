import axios from 'axios';

const POST_URL = '/api/paint';

const sendRoomData = async (wallsArr) => {
  try {
    const res = await axios({
      method: 'POST',
      url: POST_URL,
      data: wallsArr,
    });

    return res.data;
  } catch (err) {
    return {
      error: true,
      message: JSON.parse(err.request.response).message,
    };
  }
};

export default sendRoomData;

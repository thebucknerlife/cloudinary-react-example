import axios from 'axios';

export function upload(file) {
  console.log('upload util received file', file);
  const params = {
    api_key: '197549165724496',
    timestamp: Math.floor(+ new Date() / 1000),
    //callback: 'http://localhost:3000/cloudinary_cors.html'
  }

  signParams(params)
    .then((response) => {
      const signed = response.data;
      cloudinaryUpload(file, signed);
    });
};

function signParams(params) {
  return axios.get('/signature', { params });
}

function cloudinaryUpload(file, signedParams) {
  axios.post('http://api.cloudinary.com/v1_1/dpquc2ssm/image/upload', file, {
    params: signedParams,
    headers: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    onUploadProgress: (progressEvent) => {
      console.log('progress', progressEvent);
    }
  }).then((response) => {
    console.log('done', response)
  }).catch((error) => {
    console.log('error', error);
  })
}

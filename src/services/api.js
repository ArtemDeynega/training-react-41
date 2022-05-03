// const axios = require('axios').default;

// const getMaterials = axios.create({
//   baseURL: 'https://6271365ae1c7aec428fdc2ad.mockapi.io',
// });

// export const materialsApi = async values => {
//   try {
//     const { data } = await getMaterials('', values);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

import axios from 'axios';

const materialsAdd = axios.create({
  baseURL: 'https://6271365ae1c7aec428fdc2ad.mockapi.io',
});
const VAR = {
  materialGet: '/materials',
};
export const addMaterials = async values => {
  const response = await materialsAdd.post(VAR.materialGet, values);
  //   console.log(response);
  return response.data;
};
export const getMaterials = async () => {
  const { data } = await materialsAdd.get(VAR.materialGet);

  return data;
};

export const delMaterials = async id => {
  const { data } = await materialsAdd.delete(`${VAR.materialGet}/${id}`);
  return data;
};

export const updateMaterials = async fields => {
  const { data } = await materialsAdd.put(
    `${VAR.materialGet}/${fields.id}`,
    fields
  );
  return data;
};

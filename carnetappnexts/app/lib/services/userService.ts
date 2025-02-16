import { apiClient } from './apiClient';
//import axios from 'axios';

export const login = async (loginDatas: object) => {
  try {
    const response = await apiClient.post('/loginapi', loginDatas);
    return response.data;
    //console.log(loginDatas);
    // return `return userService login ${loginDatas}`;
  } catch (error) {
    console.log('Erreur lors de login', error);
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await apiClient.get('/user/liste');
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs', error);
    throw error;
    // Vérifie si l'erreur vient de la réponse de l'API
    // if (axios.isAxiosError(error)) {
    //   return { error: error.response?.data || "Une erreur s'est produite" };
    // }

    // // Erreur inconnue
    // return { error: 'Erreur inattendue' };
  }
};

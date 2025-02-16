import { apiClient } from './apiClient';
import { showNotification } from '../../lib/mantineNotification';

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

export const getAllsUsers = async () => {
  try {
    const response = await apiClient.get('/user/listes');
    // Vérifier si la requête a été annulée par l'intercepteur
    if (response?.data?.skipRequest) {
      console.warn("Requête annulée : retour d'un tableau vide.");
      return [];
    }
    console.log('Get UserService');
    console.log('Réponse reçue :', response.data);
    return response.data;
  } catch (error: unknown) {
    if ((error as { response?: { status: number } }).response?.status === 401) {
      //if (error.response?.status === 401) {
      //   notifications.show({
      //     title: 'Non autorisé',
      //     message: 'Votre session a expiré. Veuillez vous reconnecter.',
      //     color: 'red',
      //   });
      showNotification(
        'Non autorisé',
        'Votre session a expiré. Veuillez vous reconnecter.',
        'red'
      );
      return [];
    }
    console.error('Erreur lors de la récupération des utilisateurs', error);
    throw error;
  }
};

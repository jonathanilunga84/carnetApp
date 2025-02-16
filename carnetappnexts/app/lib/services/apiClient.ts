import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token à chaque requête
// apiClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem('carnetToken'); // Récupère le token du localStorage
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('carnetToken');

  if (!token) {
    console.warn('Aucun token trouvé, requête annulée.');
    //return Promise.reject(new Error('Aucun token disponible'));
    // localStorage.removeItem('carnetToken'); // Supprime le token corrompu

    return {
      ...config,
      skipRequest: true, // Ajout d'un flag pour éviter l'appel API
    };

    // return Promise.reject(
    //   new axios.Cancel('Requête annulée : utilisateur non authentifié.')
    // );

    return config; // Promise.resolve();
  }

  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Rediriger l’utilisateur s’il n’est pas authentifié

apiClient.interceptors.response.use(
  //(response) => response, // Retourne la réponse si tout est bon
  (response) => {
    // Ajouter la propriété `skipRequest` dans la réponse
    if (response.status === 204) {
      response.data = { skipRequest: true }; // Exemple de condition
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.warn(
        'Token invalide ou expiré. Redirection vers la connexion...'
      );
      localStorage.removeItem('carnetToken'); // Supprime le token corrompu
      //window.location.href = '/login'; // Redirige vers la page de connexion
    }
    return Promise.reject(error);
  }
);

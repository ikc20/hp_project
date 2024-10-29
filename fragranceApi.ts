// src/api/fragranceApi.ts
import axios from 'axios';

// Remplacez 'YOUR_API_KEY' par votre clé API
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://www.fragrantica.com/api/';

// Définir une interface pour le type de données de la fragrance
export interface Fragrance {
  id: number;
  name: string;
  brand: string;
  // Ajoutez d'autres champs selon la réponse de l'API
}

export const getFragranceById = async (fragranceId: number): Promise<Fragrance> => {
  try {
    const response = await axios.get(`${BASE_URL}/your-endpoint-here/${fragranceId}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching fragrance:", error);
    throw error; // Vous pouvez gérer les erreurs ici
  }
};

// Vous pouvez ajouter d'autres fonctions pour différents points de terminaison

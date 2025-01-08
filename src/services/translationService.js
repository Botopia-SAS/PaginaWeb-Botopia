import axios from "axios";
import { azureConfig } from "./azureConfig";

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      `${azureConfig.endpoint}translate?api-version=3.0&to=${targetLanguage}`,
      [
        {
          text: text,
        },
      ],
      {
        headers: {
          "Ocp-Apim-Subscription-Key": azureConfig.key,
          "Ocp-Apim-Subscription-Region": azureConfig.region,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data[0].translations[0].text; // Traducción obtenida
  } catch (error) {
    console.error("Error en la traducción:", error);
    return text; // Devuelve el texto original en caso de error
  }
};

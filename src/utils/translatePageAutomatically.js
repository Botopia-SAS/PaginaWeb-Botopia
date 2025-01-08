import { translateText } from "../services/translationService";

export const translatePageAutomatically = async (targetLanguage) => {
  const textNodes = [];

  // Función recursiva para encontrar todos los nodos de texto
  const findTextNodes = (node) => {
    if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== "") {
      textNodes.push(node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      node.childNodes.forEach(findTextNodes);
    }
  };

  // Inicia la búsqueda desde el <body>
  findTextNodes(document.body);

  // Iterar sobre cada nodo de texto y traducirlo
  for (const textNode of textNodes) {
    const originalText = textNode.nodeValue.trim();
    try {
      const translatedText = await translateText(originalText, targetLanguage);
      textNode.nodeValue = translatedText;
    } catch (error) {
      console.error(`Error translating text: ${originalText}`, error);
    }
  }
};

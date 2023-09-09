export const capitalize = (text) => 
text[0].toUpperCase() + text.substring(1).toLowerCase();

export const formatProjectTitle = (text) => {
    const words = text.split('_');
    const capitalizeWords = words.map((word) => capitalize(word));
    return capitalizeWords.join(' ');
}
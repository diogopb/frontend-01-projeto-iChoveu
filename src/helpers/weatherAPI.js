const token = import.meta.env.VITE_TOKEN;
const initialUrl = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${token}&q=`;

export const searchCities = async (city) => {
  const response = await fetch(`${initialUrl}${city}`);
  const data = await response.json();
  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
    return [''];
  } return data;
};

export const getWeatherByCity = (/* cityURL */) => {
//   seu código aqui
};

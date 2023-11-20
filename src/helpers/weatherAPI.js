const TOKEN = import.meta.env.VITE_TOKEN;
const initialURL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=`;
export const searchCities = async (city) => {
  const response = await fetch(`${initialURL}${city}`);
  const data = await response.json();
  if (!data.length) {
    window.alert('Nenhuma cidade encontrada');
    return [''];
  } return data;
};

const currentURL = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${TOKEN}&q=`;
export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`${currentURL}${cityURL}`);
  const data = await response.json();
  const { location } = data;
  const { current } = data;
  const objWeather = {
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.icon,
    country: location.country,
    name: location.name,
    url: cityURL,
  };
  return objWeather;
};

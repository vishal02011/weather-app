import clear from "../assets/icons/clearsky.svg";
import mainlyClear from "../assets/icons/mainlyclear.svg";
import partlyCloudy from "../assets/icons/partlycloudy.svg";
import cloudy from "../assets/icons/cloudy.svg";
import drizzleShowers from "../assets/icons/drizzle.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snowy.svg";
import thunderstorm from "../assets/icons/thunder.svg";

function getWeatherIcon(code) {
    
  if (code === 0) return clear;
  if (code === 1) return mainlyClear;
  if (code === 2) return partlyCloudy;
  if ([3, 45, 48].includes(code)) return cloudy;
  if ([51, 53, 55, 80, 81, 82].includes(code)) return drizzleShowers;
  if ([61, 63, 65].includes(code)) return rain;
  if ([71, 73, 75].includes(code)) return snow;
  if ([95, 96, 99].includes(code)) return thunderstorm;

  return clear;
}
export default getWeatherIcon;
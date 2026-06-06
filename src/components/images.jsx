import clear from "../assets/icons/clearsky.svg";
import mainlyClear from "../assets/icons/mainlyclear.svg";
import partlyCloudy from "../assets/icons/partlycloudy.svg";
import cloudy from "../assets/icons/cloudy.svg";
import drizzleShowers from "../assets/icons/drizzle.svg";
import rain from "../assets/icons/rain.svg";
import snow from "../assets/icons/snowy.svg";
import thunderstorm from "../assets/icons/thunder.svg";
import clearnight from "../assets/icons/clearnight.svg";
import mainlyClearnight from "../assets/icons/mainlycloudynight.svg";
import partlyCloudyNight from "../assets/icons/partlycloudynighty.svg";
import drizzlenight from "../assets/icons/drizzlenight.svg";

function getWeatherIcon(code,time) {
  const flag=18<=time?.slice(11,13)<6;
    
  if (code === 0) return flag?clearnight:clear;
  if (code === 1) return flag?mainlyClearnight:mainlyClear;
  if (code === 2) return flag?partlyCloudyNight:partlyCloudy;
  if ([3, 45, 48].includes(code)) return cloudy;
  if ([51, 53, 55, 80, 81, 82].includes(code)) return flag?drizzlenight:drizzleShowers;
  if ([61, 63, 65].includes(code)) return rain;
  if ([71, 73, 75].includes(code)) return snow;
  if ([95, 96, 99].includes(code)) return thunderstorm;

  return clear;
}
export default getWeatherIcon;
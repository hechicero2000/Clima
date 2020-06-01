const axios = require('axios');

const getClima = async(lat, lng) => {
	
	let respTemp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=72f12f261ed4382521e12b60ca94e0f5`);
	return respTemp.data.main.temp;
}

module.exports = { getClima }
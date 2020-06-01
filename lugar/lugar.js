const axios = require('axios');

const getLugarLatLng = async(direccion) => {
	let direccionUrl = encodeURI(direccion);
	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${direccionUrl}&key=AIzaSyCAkY5bNNsZYExkhq4-wCAfju6bGha4Qjw`);
	
if(resp.data.status === 'ZERO_RESULTS')
{
	throw newError(`No hay resultados para la ciudad ${direccion}`);
}
		let lugar = resp.data['results'][0].formatted_address;

		let latitud = resp.data['results'][0].geometry.location.lat;	
		
		let longitud = resp.data['results'][0].geometry.location.lng;

	return { 
		direccion:lugar, 
		lat:latitud, 
		lng:longitud 
	}
}


module.exports = { getLugarLatLng }
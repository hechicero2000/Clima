const lugar = require('./lugar/lugar');
const temp = require('./clima/clima');
const argv =  require('yargs').options({
	direccion: {
		alias: 'd',
		desc: 'Direccion de la ciudad para obtener el clima',
		demand: true
	}
}).argv;

let getInfo = async(direccion) => {
	try{
		let coors = await lugar.getLugarLatLng(direccion);
		let clima = await temp.getClima(coors.lat, coors.lng);

		return `El clima en ${coors.direccion} es de ${clima}`; 
	}catch(e){
		return `Verifique la direccion ${direccion} que exista`;
	}

}

getInfo(argv.direccion)
.then(mensaje => console.log(mensaje))
.catch(e => console.log(e));


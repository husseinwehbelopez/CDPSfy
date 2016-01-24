/* 

Modelo de datos de canciones (track)

track_id: {
	name: nombre de la canción,
	url: url del fichero de audio
	namecover: nombre de la carátula
	urlcover: url de la carátula
} 

*/

<<<<<<< HEAD
var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var trackSchema = new Schema({  
	name:    { type: String },
	url:     { type: String },
	imgname: { type: String },
	urlImg:  { type: String }
});

module.exports = mongoose.model('Track', trackSchema);  
=======
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  
var trackSchema = new Schema({
	
	name: {type: String },
	url: {type: String},
});

module.exports = mongoose.model('Track', trackSchema);

exports.tracks = {
	1: {
		name: 'Cute',
		url: '/media/Cute.mp3'
	},
	2: {
		name: 'Dubstep',
		url: '/media/Dubstep.mp3'
	},
	3: {
		name: 'Epic',
		url: '/media/Epic.mp3'
	},
	4: {
		name: 'Littleidea',
		url: '/media/Littleidea.mp3'
	},
	4: {
		name: 'People',
		url: '/media/People.ogg'
	}
};
>>>>>>> fde0f08a45596d302864070bdd5859bb177a5e2c

/* 

Modelo de datos de canciones (track)

track_id: {
	name: nombre de la canción,
	url: url del fichero de audio
	namecover: nombre de la carátula
	urlcover: url de la carátula
} 

*/

var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var trackSchema = new Schema({  
	name:    { type: String },
	url:     { type: String },
	imgname: { type: String },
	urlImg:  { type: String }
});

module.exports = mongoose.model('Track', trackSchema);  

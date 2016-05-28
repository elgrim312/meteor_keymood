/**
 * Created by constantin on 25/05/2016.
 */

//Modele Mongoose des DATAS
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//@todo gerer la date en insertion DB
var Data = new Schema(
    {
        mot1: {type: String, trim: true},
        // mot2: String,
        // mot3: String
        date: {type: Date, default: Date.now}
    }
);

mongoose.model('data', Data);
//Connexion a la Base de Données
mongoose.connect('mongodb://localhost/data');
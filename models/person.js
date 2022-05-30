const mongoose = require("mongoose");
let PersonSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  tipoSangre: String,
  nss: String,
}); // Dentro de mongodb crea una colección en la cual permitirá al usuario registar un nuevo objeto el cual tiene cuatro llaves, las cuales son nombre, edad, tipoSangre, nss y al ejecutar en la base de datos de mongo permitirá observar los objetos de la colección en la página que se encuentra en el puerto 3000
//Esto nos lo facilita mucho mongoose con Schema.

module.exports = mongoose.model("Person", PersonSchema);
//Ecportamos el Schema de Person.
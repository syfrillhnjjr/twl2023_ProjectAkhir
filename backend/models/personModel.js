const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  namakantor: { type: String, required: true },
  pimpinan: { type: String, required: true },
  alamat: { type: String, required: true },
  hotline: { type: String, required: true }
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;

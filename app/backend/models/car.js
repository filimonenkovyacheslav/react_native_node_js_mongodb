const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
номер, модель авто,
цвет,
тип кузова,
пробег,
год выпуска,
личное авто/служебное
*/
const CarSchema = new Schema({
  number: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  },
  body_type: {
    type: String,
    required: false
  },
  mileage: {
    type: Number,
    required: false
  },
  issue_year: {
    type: Number,
    required: false
  },
  isPersonal: {
    type: Boolean,
    default: true
  }
});

module.exports = Car = mongoose.model('Car', CarSchema);

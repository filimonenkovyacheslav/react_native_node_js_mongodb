const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new Schema({
  routeName: {
    type: String,
    required: true
  },
  pointOfDeparture: {
    type: String,
    required: true
  },
  pointOfArrival: {
    type: String,
    required: true
  },
  mileage: {
    type: Number,
    default: 0
  },
  driverName: {
    type: String,
    required: true
  },
  carNumber: {
    type: String,
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: {
    type: Date,
    default: Date.now
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Ride = mongoose.model('Ride', RideSchema);

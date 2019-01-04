const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PresentationSchema = new Schema({
  topic: {
    type: String
  },
  presenter: {
    type: String
  },
  evaluator: {
    type: String
  },
  date: {
    type: String
  },
  links: {
    type: String
  },
  summary: {
    type: String
  },
  keywords: {
    type: String
  }
});

const Presentation = mongoose.model('Presentation', PresentationSchema);
module.exports = Presentation;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const KeywordSchema = new Schema({ keyword: String });

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
  keyword: {
    type: String
  }
  // keywords: {
  //   type: [KeywordSchema], html, loadClass, java,
  //   default: undefined
  // }
});

const Presentation = mongoose.model('Presentation', PresentationSchema);
module.exports = Presentation;

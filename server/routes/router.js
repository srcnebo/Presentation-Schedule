const express = require('express');
const presentationRouter = express.Router();
const {
  showPresentations,
  showSinglePresentation,
  addPresentation,
  editPresentation,
  deletePresentation
} = require('../controller/presentations.controller');

presentationRouter.get('/presentations', showPresentations);
presentationRouter.get('/presentations/:id', showSinglePresentation);
presentationRouter.post('/presentations', addPresentation);
presentationRouter.put('/presentations/edit/:id', editPresentation);
presentationRouter.delete('/presentations/:id', deletePresentation);

module.exports = presentationRouter;

const Presentation = require('../models/presentation');

module.exports = {
  showPresentations,
  showSinglePresentation,
  addPresentation,
  editPresentation,
  deletePresentation
};

function showPresentations(req, res) {
  Presentation.find({}, (err, presentations) => {
    if (err) {
      res.status(404).send('Data was not found');
    }
    res.json(presentations);
  });
}

function showSinglePresentation(req, res) {
  const _id = req.params.id;
  Presentation.find({ _id }, (err, presentation) => {
    console.log(presentation);

    if (err) {
      res.status(404).send('An error has occured');
    }
    if (presentation.length < 1) {
      res.send('A student with that name was not found');
    }
    res.json(presentation);
  });
}

function addPresentation(req, res) {
  const newPresentation = new Presentation(req.body);
  newPresentation
    .save()
    .then(() => {
      console.log('Data is saved');
    })
    .catch(err => console.log('Error', err));
  res.status(201).json(newPresentation);
}

function editPresentation(req, res) {
  const _id = req.params.id;
  Presentation.findById({ _id }, (err, presentation) => {
    (presentation.name = req.body.name), (presentation.age = req.body.age);
    presentation.save(err => {
      if (err) {
        res.status(404).send(err);
      }
      console.log('Saved');
      res.send('Presentation has been updated');
    });
  });
}

function deletePresentation(req, res) {
  const _id = req.params.id;
  Presentation.findByIdAndRemove({ _id }, (err, presentation) => {
    if (err) {
      res.status(404).send('Unable to delete');
    }
    res.send(`Presentation with id ${_id} has been removed.`);
  });
}

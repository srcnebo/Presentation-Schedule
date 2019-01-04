import React, { Component } from 'react';

class EditPresentation extends Component {
  handleChange = e => {
    const index = this.props.presentations.findIndex(
      presentation => this.props.match.params.id === presentation._id
    );
    const updatedPresentation = {
      ...this.props.presentations[index],
      [e.currentTarget.name]: e.currentTarget.value
    };
    this.props.updating(index, updatedPresentation);
  };
  handleSubmit = e => {
    const index = this.props.presentations.findIndex(
      presentation => this.props.match.params.id === presentation._id
    );
    e.preventDefault();
    this.props.editPresentation(
      this.props.match.params.id,
      this.props.presentations[index]
    );
  };
  render() {
    const presentation = this.props.presentations.find(
      presentation => presentation._id === this.props.match.params.id
    );
    return (
      <div>
        <h2>Edit presentation details</h2>
        {presentation ? (
          <form
            onSubmit={this.handleSubmit}
            method="PUT"
            className="input-form container"
          >
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="presenter">Presenter name:</label>
                <input
                  type="text"
                  name="presenter"
                  id="presenter"
                  value={presentation.presenter}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-3">
                <label htmlFor="evaluator">Evaluator name:</label>
                <input
                  type="text"
                  name="evaluator"
                  id="evaluator"
                  value={presentation.evaluator}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="topic">Presentation Topic:</label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  value={presentation.topic}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="date">Presentation Date:</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={presentation.date}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>

              <div className="form-group col-md-9">
                <label htmlFor="links">Article URL:</label>
                <input
                  type="url"
                  name="links"
                  id="links"
                  value={presentation.links}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="keywords">Keywords:</label>
              <input
                type="text"
                name="keywords"
                id="keywords"
                value={presentation.keywords}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label htmlFor="summary">Summary:</label>
              <textarea
                name="summary"
                id="summary"
                value={presentation.summary}
                onChange={this.handleChange}
                className="form-control"
                rows="4"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Edit Presentation
            </button>
          </form>
        ) : null}
      </div>
    );
  }
}

export default EditPresentation;

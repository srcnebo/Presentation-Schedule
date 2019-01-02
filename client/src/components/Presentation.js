import React, { Component } from 'react';

class Presentation extends Component {
  handleRemove = id => {
    this.props.deletePresentation(id);
    this.props.history.push('/presentations')
  };

  renderPresentation = () => {
    const presentation = this.props.presentations.find(
      presentation => presentation._id === this.props.match.params.id
    );

    if (presentation) {
      console.log(presentation.topic);
      const {
        _id,
        topic,
        presenter,
        evaluator,
        date,
        links,
        summary,
        keywords
      } = presentation;
      return (
        <div className="container">
          <p>Here you will find presentation information</p>
          <h2>{topic}</h2>
          <div className="display-people">
            <h5> Speaker: {presenter}</h5>
            <h5> Evaluator: {evaluator}</h5>
          </div>
          <div className="display-metadata">
            <h5> Presentation date:{date}</h5>
            <h5> Links:{links}</h5>
          </div>
          <div>
            <h5>Keywords:</h5>
            <span class="badge badge-primary">{keywords}</span>
          </div>

          <h5> Summary:{summary}</h5>

          <div>
            <button type="button" class="btn btn-outline-secondary monitor-btn">
              Edit
            </button>

            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={() => this.handleRemove(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return 'Could not fetch data';
    }
  };

  render() {
    return <div>{this.renderPresentation()}</div>;
  }
}

export default Presentation;

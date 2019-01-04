import React, { Component } from 'react';

class Presentation extends Component {
  handleRemove = id => {
    this.props.deletePresentation(id);
    this.props.history.push('/presentations');
  };

  handleEdit = id => {
    this.props.history.push(`/presentations/edit/${id}`);
  };

  renderPresentation = () => {
    const presentation = this.props.presentations.find(
      presentation => presentation._id === this.props.match.params.id
    );

    if (presentation) {
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
        <div className="display-container">
          <h2>{topic}</h2>
          <div className="display-people">
            <h5>
              <span className="display-label">presented by: </span>
              {presenter}
            </h5>
            <h5>
              <span className="display-label">review by: </span> {evaluator}
            </h5>
          </div>
          <div className="display-metadata">
            <h5>
              <span className="display-label">Date:</span> {date}
            </h5>
            <h5>
              <span className="display-label">Links: </span>
              <a href={links}>{links}</a>
            </h5>
          </div>

          <div>
            <span className="display-label"> Summary:</span>
            <p>{summary}</p>
          </div>
          <div className="display-keywords">
            {keywords.split(',').map(keyword => (
              <span className="badge badge-secondary">{keyword}</span>
            ))}
          </div>

          <div className="presentation-buttons">
            <button
              type="button"
              className="btn btn-outline-secondary  monitor-btn"
              onClick={() => this.handleEdit(_id)}
            >
              Edit
            </button>

            <button
              type="button"
              className="btn btn-outline-danger  monitor-btn-red"
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

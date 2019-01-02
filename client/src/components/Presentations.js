import React, { Component } from 'react';

class Presentations extends Component {
  handleRemove = id => {
    this.props.deletePresentation(id);
  };

  handleDisplay = id => {
    this.props.history.push(`/presentation/${id}`);
  };

  renderPresentations = () => {
    return (
      <table class="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Presenter</th>
            <th scope="col">Evaluator</th>
            <th scope="col">Title</th>
            <th scope="col">Date</th>
            <th scope="col">Monitor</th>
          </tr>
        </thead>
        <tbody>
          {this.props.presentations.map(element => (
            <tr key={element._id}>
              <td>{element.presenter}</td>
              <td>{element.evaluator}</td>
              <td>{element.topic}</td>
              <td>{element.date}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-outline-secondary monitor-btn"
                  onClick={() => this.handleDisplay(element._id)}
                >
                  View
                </button>

                <button
                  type="button"
                  class="btn btn-outline-secondary monitor-btn"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="btn btn-outline-danger"
                  onClick={() => this.handleRemove(element._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <h1>Presentations</h1>
        {this.renderPresentations()}
      </div>
    );
  }
}

export default Presentations;

import React, { Component } from 'react';

class EditPresentation extends Component {
  state = {
    topic: '',
    presenter: '',
    evaluator: '',
    date: '',
    links: '',
    summary: '',
    keywords: ''
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.editPresentations(this.state);
  };

  // renderPresentations = id => {
  //   return this.props.presentations.filter(element => {
  //     return (element._id = id);
  //   });
  // };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="PUT">
          <input
            type="text"
            name="topic"
            value={this.state.topic}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="presenter"
            value={this.state.presenter}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditPresentation;

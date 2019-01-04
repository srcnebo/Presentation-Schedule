import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
class App extends Component {
  state = {
    presentations: []
  };
  componentDidMount() {
    axios.get('/presentations').then(response => {
      this.setState({
        presentations: response.data
      });
    });
  }
  addPresentations = data => {
    axios
      .post('/presentations', data)
      .then(response => {
        console.log(response.data);

        const presentations = [...this.state.presentations, response.data];

        this.setState({
          presentations
        });
      })
      .catch(err => console.log(err));
  };
  deletePresentation = id => {
    axios.delete(`/presentations/${id}`).then(response => {
      const newPresentationList = this.state.presentations.filter(
        presentation => {
          return presentation._id !== id;
        }
      );
      console.log(newPresentationList);
      this.setState({
        presentations: newPresentationList
      });
    });
  };
  editPresentation = (id, data) => {
    axios
      .put(`/presentations/edit/${id}`, data)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => console.log(err));
  };
  updating = (id, updatedPresentation) => {
    const presentations = [...this.state.presentations];
    presentations[id] = updatedPresentation;
    this.setState({ presentations });
  };
  render() {
    return (
      <div>
        <Header />
        <Main
          addPresentations={this.addPresentations}
          presentations={this.state.presentations}
          deletePresentation={this.deletePresentation}
          updating={this.updating}
          editPresentation={this.editPresentation}
        />
      </div>
    );
  }
}

export default App;

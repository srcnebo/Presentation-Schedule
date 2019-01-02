import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Presentations from './Presentations';
import Home from './Home';
import AddPresentation from './AddPresentation';
import EditPresentation from './EditPresentation';
import Presentation from './Presentation';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/presentations"
          component={props => (
            <Presentations
              {...props}
              presentations={this.props.presentations}
              deletePresentation={this.props.deletePresentation}
              viewPresentation={this.props.viewPresentation}
            />
          )}
        />
        <Route
          exact
          path="/presentation/new"
          component={props => (
            <AddPresentation
              {...props}
              addPresentations={this.props.addPresentations}
            />
          )}
        />
        <Route
          exact
          path="/presentation/:id"
          component={props => (
            <Presentation
              {...props}
              presentations={this.props.presentations}
              deletePresentation={this.props.deletePresentation}
            />
          )}
        />

        <Route path="/presentations/edit/:id" component={EditPresentation} />
      </Switch>
    );
  }
}

export default withRouter(Main);

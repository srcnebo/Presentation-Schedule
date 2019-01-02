import React, { Component } from 'react';

class AddPresentation extends Component {
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
    this.props.addPresentations(this.state);
    this.props.history.push('/presentations');
  };
  render() {
    return (
      <div>
        <p>Add Presentation Component works</p>
        <form
          onSubmit={this.handleSubmit}
          method="POST"
          className="input-form container"
        >
          <div className="form-row">
            <div className="form-group col-md-3">
              <label for="presenter">Presenter name:</label>
              <input
                type="text"
                name="presenter"
                id="presenter"
                value={this.state.presenter}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-3">
              <label for="evaluator">Evaluator name:</label>
              <input
                type="text"
                name="evaluator"
                id="evaluator"
                value={this.state.evaluator}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label for="topic">Presentation Topic:</label>
              <input
                type="text"
                name="topic"
                id="topic"
                value={this.state.topic}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label for="date">Presentation Date:</label>
              <input
                type="date"
                name="date"
                id="date"
                value={this.state.date}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-9">
              <label for="links">Article URL:</label>
              <input
                type="url"
                name="links"
                id="links"
                value={this.state.links}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group">
            <label for="keywords">Keywords:</label>
            <input
              type="text"
              name="keywords"
              id="keywords"
              value={this.state.keywords}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label for="summary">Summary:</label>
            <textarea
              name="summary"
              id="summary"
              value={this.state.summary}
              onChange={this.handleChange}
              className="form-control"
              rows="4"
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Add Presentation
          </button>
        </form>

        {/* <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlSelect2">Example multiple select</label>
    <select multiple className="form-control" id="exampleFormControlSelect2">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form> */}
      </div>
    );
  }
}

export default AddPresentation;

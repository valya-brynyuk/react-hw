import React from "react";

class MyForm extends React.Component {

  constructor(props) {
    super(props);


  }

  handleChange = (e) => {
    this.props.onUpdate({
      name: e.target.name,
      value:  e.target.type === 'checkbox' ? e.target.checked : e.target.value,
    });
  };

  render() {

    return (
      <form name="myForm" onSubmit={this.props.onSubmit}>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
            value={this.props.value.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={this.props.value.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">Address</label>
          <textarea
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
            value={this.props.value.address}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="city"
            id="city"
            value={this.props.value.city}
            onChange={this.handleChange}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">Country</label>
          <select
            id="country"
            name="country"
            className="form-control"
            value={this.props.value.country}
            onChange={this.handleChange}
          >
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Ukraine</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
                checked={this.props.value.acceptRules}
                onChange={this.handleChange}
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }
}

export default MyForm;
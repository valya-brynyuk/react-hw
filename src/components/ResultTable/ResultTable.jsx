import React from "react";

class ResultTable extends React.Component {

  render() {

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.props.onBackClick}>Back</button>
        <table className="table">
          <tbody>
          <tr>
            <td>acceptRules</td>
            <td>{this.props.value.acceptRules}</td>
          </tr>
          <tr>
            <td>address</td>
            <td>{this.props.value.address}</td>
          </tr>
          <tr>
            <td>city</td>
            <td>{this.props.value.city}</td>
          </tr>
          <tr>
            <td>country</td>
            <td>{this.props.value.country}</td>
          </tr>
          <tr>
            <td>email</td>
            <td>{this.props.value.email}</td>
          </tr>
          <tr>
            <td>password</td>
            <td>{this.props.value.password}</td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ResultTable;
import MyForm from "./components/MyForm/MyForm.jsx";
import React from "react";
import ResultTable from "./components/ResultTable/ResultTable.jsx";


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: 'form', // possible values 'form' | 'result'
      form: {
        email: '',
        password: '',
        address: '',
        city: '',
        country: '',
        acceptRules: false
      }
    };
  }

  formSubmitHandler = (e) => {
    e.preventDefault();


    this.setState({show: 'result'});
  }

  formUpdateHandler = ({name, value}) => {
    this.setState((state) => ({...state, form: {...state.form, [name]: value}}));
  }

  backBtnClickHandler = () => {
    this.setState({show: 'form'});
  }

  render() {
    let content = <p>Undefined route</p>;
    switch (this.state.show) {
      case 'form':
        content = <MyForm value={this.state.form} onUpdate={this.formUpdateHandler} onSubmit={this.formSubmitHandler} />;
        break;
      case 'result':
        content = <ResultTable value={this.state.form} onBackClick={this.backBtnClickHandler} />
        break;
    }


    return (
      <>
        {content}
      </>
    );
  }
}
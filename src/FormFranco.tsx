import React, { Component, ReactEventHandler } from "react";
import { render, EventType } from "@testing-library/react";


type FormProps = {
    handleSubmit: Function
}

class FormFranco extends Component<FormProps> {


  public initialState = {
    name: "",
    job: "",
  };
  public state: any;

  constructor(props: FormProps) {
    super(props);
    this.state = this.initialState;
  }

  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, job } = this.state;

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default FormFranco;

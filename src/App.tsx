import { Component } from "react";
import "./App.css";
import Table from "./Table";
import FormFranco from "./FormFranco";
import React from "react";

class App extends Component {

  public characters: Array<any> = [];

  public state =  {
    characters: this.characters
  };

  public removeCharacter(index: number) {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character: any, i: number) => {
        return i !== index;
      }),
    });
  }

  handleSubmit = (character: any) => {
    this.setState({characters: [...this.state.characters, character]})
  }


  render() {
    return (
      <div className="App">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter.bind(this)}
        />
        <FormFranco handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
import React, { Component, ReactNode } from "react";

type TableProps = typeof Table.defaultProps & {
  characterData: Array<String>;
};

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
};

const TableBody = (props: TableProps) => {
  let rows: ReactNode;
  rows = props.characterData.map((row,index) => {return (
    <tr key={index}>
    <td>{row.name}</td>
    <td>{row.job}</td>
    <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
  </tr>
  )});
  return <tbody>{rows}</tbody>;
};

class Table extends Component<TableProps> {
  static defaultProps = {
    characterData: Array<any>(),
    removeCharacter: (index: number) => {}
  };

  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    );
  }
}

export default Table;

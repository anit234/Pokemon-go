import React, { Component } from 'react';

export class ListTable extends Component {
  render() {
    const { pokemonData } = this.props;
    return (
      <div>
        <h2>Pokemon Lists with Details</h2>
        <table className="table" id="data-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Num </th>
              <th scope="col">Type</th>
              <th scope="col">Weakness</th>
              <th scope="col">Detail</th>
            </tr>
          </thead>
          <tbody>
            {pokemonData.map((data) => {
              return (
                <tr>
                  <td key={Math.random()}>{data.name}</td>
                  <td>{data.num}</td>
                  <td>{data.type.join(',')}</td>
                  <td>{data.weaknesses.join(',')}</td>
                  <td onClick={() => this.props.showDetails(data)}>
                    <a href="#">Details</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTable;

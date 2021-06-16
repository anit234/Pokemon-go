import React, { Component } from 'react';

export class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { pokemonData } = this.props;
    console.log('1', pokemonData.next_evolution);
    return (
      <div>
        <h2>Pokemon Lists with Details</h2>
        <table className="table" id="data-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Num </th>
              <th scope="col">Image</th>
              <th scope="col">Type</th>
              <th scope="col">Weakness</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Previous Evolution</th>
              <th scope="col">Next Evolutions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokemonData.name}</td>
              <td>{pokemonData.num}</td>
              <td>
                <img src={pokemonData.img} />
              </td>
              <td>{pokemonData.type.join(',')}</td>
              <td>{pokemonData.weaknesses.join(',')}</td>
              <td>{pokemonData.height}</td>
              <td>{pokemonData.weight}</td>
              <td>
                {pokemonData.prev_evolution &&
                  pokemonData.prev_evolution.map((pe) => {
                    return (
                      <React.Fragment>
                        <a href="#" onClick={() => this.props.prevNext(pe)}>
                          {pe.name}
                        </a>
                        <br />
                      </React.Fragment>
                    );
                  })}
              </td>
              <td>
                {pokemonData.next_evolution &&
                  pokemonData.next_evolution.map((ne) => {
                    return (
                      <React.Fragment>
                        <a href="#" onClick={() => this.props.prevNext(ne)}>
                          {ne.name}
                        </a>
                        <br />
                      </React.Fragment>
                    );
                  })}
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.props.back}>Back</button>
      </div>
    );
  }
}

export default Details;

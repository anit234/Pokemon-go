import React, { Component } from 'react';
import { typeOptions, weaknessOptions } from '../function/CommonFunctions';
import Details from './Details';
import ListTable from './ListTable';
import Search from './Search';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchPokemon: '',
      types: [],
      weakness: [],
    };
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          data: res.pokemon,
        });
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchPokemon: e.target.value,
    });
  };

  typesChangeHandle = (types) => {
    this.setState({
      types: types,
    });
  };

  weaknessChangeHandle = (weak) => {
    this.setState({
      weakness: weak,
    });
  };

  showDetails = (pokemon) => {
    this.setState({
      detailPokemon: pokemon,
    });
  };

  back = () => {
    this.setState({
      detailPokemon: undefined,
    });
  };

  prevAndNext = (pe) => {
    const prevData = this.state.data.find(
      (d) => d.name === pe.name && d.num === pe.num
    );
    this.setState({
      detailPokemon: prevData,
    });
  };

  render() {
    const filterWeaknesses = this.state.weakness.map((weak) => {
      return weak.label;
    });
    const filterTypes = this.state.types.map((type) => {
      return type.label;
    });
    const filteredPokemon = this.state.data.filter((filterItem) => {
      return (
        (filterTypes.length > 0
          ? filterItem.type.some((item) => filterTypes.includes(item))
          : true) &&
        (filterWeaknesses.length > 0
          ? filterItem.weaknesses.some((item) =>
              filterWeaknesses.includes(item)
            )
          : true) &&
        filterItem.name
          .toLowerCase()
          .startsWith(this.state.searchPokemon.toLowerCase())
      );
    });
    return (
      <div>
        <h1>Home Class Component</h1>
        <Search
          search={this.state.searchPokemon}
          onChange={this.handleChange}
          types={this.state.types}
          typesOption={typeOptions(this.state.data)}
          typesChange={this.typesChangeHandle}
          weakness={this.state.weakness}
          weaknessOption={weaknessOptions(this.state.data)}
          weaknessChange={this.weaknessChangeHandle}
        />
        {this.state.detailPokemon ? (
          <Details
            pokemonData={this.state.detailPokemon}
            back={this.back}
            prevNext={this.prevAndNext}
          />
        ) : (
          <ListTable
            showDetails={this.showDetails}
            pokemonData={filteredPokemon}
          />
        )}
      </div>
    );
  }
}

export default Home;

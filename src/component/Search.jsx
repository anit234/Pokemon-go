import React, { Component } from 'react';
import Select from 'react-select';

export class Search extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="input-group add-on">
            <input
              className="search"
              placeholder="Search"
              nameName="srch-term"
              id="srch-term"
              type="text"
              value={this.props.search}
              onChange={this.props.onChange}
            />
            <Select
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              value={this.props.types}
              onChange={(e) => this.props.typesChange(e)}
              options={this.props.typesOption}
              placeholder="Pokemon Types"
            />
            <Select
              isMulti
              className="basic-multi-select"
              classNamePrefix="select"
              value={this.props.weakness}
              onChange={(e) => this.props.weaknessChange(e)}
              options={this.props.weaknessOption}
              placeholder="Weaknesses"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;

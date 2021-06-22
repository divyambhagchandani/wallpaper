import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
      const hstyle={
        fontSize:"200%",
        margin:"10px"
      };
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={hstyle}>Wallpaper.io</label>
            <br/>
            <br/>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
              placeholder="Try searching Plants or whatever you like..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

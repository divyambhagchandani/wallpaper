import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  onClickSugg = (e,term) => {
    this.props.onSubmit(term);
  }
  render() {
      const hstyle={
        fontSize:"200%",
        margin:"10px"
      };
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <a href="https://wallpapersio.herokuapp.com/" style={{color:"black"}}><label style={hstyle}>Wallpapers.io</label></a>
            <br/><br/>
            <div style={{fontFamily:"monospace", fontSize:"1.2em"}}>
            <a href="/#" onClick={e => { this.onClickSugg(e,'Nature')}}> Nature</a> <a href="/#" onClick={e => { this.onClickSugg(e,'Sea')}}>Sea</a> <a href="/#" onClick={e => { this.onClickSugg(e,'Travel')}}>Travel</a> <a href="/#" onClick={e => { this.onClickSugg(e,'Mountains')}}>Mountains</a> <a href="/#" onClick={e => { this.onClickSugg(e,'Architecture')}}>Architecture</a> <a href="/#" onClick={e => { this.onClickSugg(e,'Experimental')}}>Experimental</a> <a href="/#"onClick={e => { this.onClickSugg(e,'Interiors')}}>Interiors</a> <a href="/#"onClick={e => { this.onClickSugg(e,'LGBT')}} className="rainbowText">Be gay do crime</a> 
            </div>
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

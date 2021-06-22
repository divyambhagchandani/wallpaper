import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './App.css'


class App extends React.Component{
    state = {
        term:'',
        images:[],
        pg:0
    };
    onSearchSubmit=async (term=this.state.term,pg=1)=>{
        const response= await unsplash.get('/search/photos',{
            params: {
                query: term,
                per_page: 20,
                page:pg
            },
         });
        this.setState({images:response.data.results,pg:pg,term:term});
    }

    render(){

        const nextPage = () =>{
            if (this.state.images.length!==0){
                return <h3 onClick={()=>this.onSearchSubmit(this.state.term,this.state.pg+1)}>Next Page</h3>
            };
        };
        return (
            <div className="ui container all"> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                {nextPage()}
                <br/>
                <br/>
            </div>
        );
    }
}

export default App;
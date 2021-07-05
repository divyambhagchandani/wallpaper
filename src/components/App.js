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

    randomImages = async ()=>{
        const response= await unsplash.get('/photos/random',{
            params: {
                count: 20,
            },
         });
        console.log(response)
        this.setState({images:response.data});
    }

    componentDidMount(){
        if(this.state.term===''){
            this.randomImages();
        }
    }
    
    render(){    
        const nextPage = () =>{
            if (this.state.term!=='' && this.state.pg>1){
                return (
                    
                    <div style={{textAlign:"center"}}>
                        <br />
                    <div style={{fontFamily:"sans-serif", display:"inline", fontSize:"3em"}} onClick={()=>this.onSearchSubmit(this.state.term,this.state.pg-1)}>←</div>
                    <div style={{fontFamily:"sans-serif", display:"inline", fontSize:"3em"}} onClick={()=>this.onSearchSubmit(this.state.term,this.state.pg+1)}>→</div>
                    </div>
                )
            } else if (this.state.term!==''){
                return(
                <div style={{fontFamily:"sans-serif", display:"inline", fontSize:"3em",textAlign:"center"}} onClick={()=>this.onSearchSubmit(this.state.term,this.state.pg+1)}>→</div>
                )
            };
        };
        const PageNo = () =>{
            if (this.state.term!==''){
                return <div >Page {this.state.pg}</div>
            };
        };
        return (
            <div className="ui container all"> 
                <SearchBar onSubmit={this.onSearchSubmit} />
                {PageNo()}
                <ImageList images={this.state.images} />
                {nextPage()}
                <br/>
                <br/>
            </div>
        );
    }
}

export default App;
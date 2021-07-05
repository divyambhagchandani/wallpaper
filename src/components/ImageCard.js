import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {spans:0};
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    };

    setSpans = () => {
        const height= this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10)+2;
        this.setState({spans});
    }

    render(){
        const {description,urls,user} = this.props.image;
        const link = "https://unsplash.com/@"+user.username+"?utm_source=react_pics&utm_medium=referral";
        return(
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <a href={urls.raw}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
                </a>
                <div style={{fontSize:"0.5em", fontFamily: "sans-serif", color: "#6e6e6e"}}>
                    Photo by <a href={link}> {user.first_name+" "+user.last_name} </a>on <a href="https://unsplash.com/">Unsplash</a>
                </div>

            </div>
        )
    }
}

export default ImageCard;
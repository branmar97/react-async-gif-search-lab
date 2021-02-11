import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component{

    state = {
        gifs: []
      }

    getAllGifs = (query) => {
        fetch( `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=FJwz9Z2rDb4gxXDvNTO15XhuWGIQvqAD`)
        .then(res => res.json())
        .then(({data}) => this.setState({gifs: data}))
      }
    

    render(){
        return(
            <div>
                <GifSearch handleSubmit={this.getAllGifs} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer
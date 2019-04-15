/** src/App.js
 Parent component which imports all the website components 
 */
import React, { Component } from "react";
import axios from "axios";

class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hits: [],
            isLoading: false
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=81cccefa5d8106ac2032d82235c675bc&append_to_response=images,credits')
        //axios.get(' https://api.themoviedb.org/3/movie/297802?api_key=81cccefa5d8106ac2032d82235c675bc&append_to_response=images,credits')
            .then(response => {
                this.setState({
                    hits: response.data.results[1]
                })

            })
    }
    render() {
        return (
            <div>
             <p>{this.state.hits.overview}</p>  
            </div>
        );
    }
}



export default App2;
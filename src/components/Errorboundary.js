// import React from 'react';
import React, { Component } from 'react';

class Errorboundary extends Component {
    constructor(props){
        super()
        this.state = {
            hasError: false,
        }
    }

    componentDidCatch(error , info){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError) {
            return <h1>Ooooooopss. This is not good!!</h1>
        }
        return this.props.children;
    }
}

export default Errorboundary;
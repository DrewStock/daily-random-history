import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class App extends Component {
           
    constructor(props) {
        super(props);

        this.state = {
            historyEvents: []
        };

    }

    componentDidMount() {
        axios.get('http://history.muffinlabs.com/date')
        .then(res => {
            const historyEvents = res.data;
            console.log(historyEvents);
            this.setState({
                historyEvents: historyEvents
            })
            const year = [this.state.historyEvents.data.Events[0].year];
            console.log(year);
        });
    }

    render() {
        return (
        <div>
            <h1>This date in history </h1>
            <h2>On {this.state.historyEvents.date} the following events happened:</h2>

        </div>
        );
    }
}


ReactDOM.render(
    <App />
  , document.querySelector('.container'));

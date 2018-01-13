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
            });
        });
    }


  render() {
    return (
      <div>
          <h1>On this date in: {historyEvents.data.events[0].year}</h1>
      </div>
    );
  }
}

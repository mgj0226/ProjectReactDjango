import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     data: [],
        // };
    }

    // componentDidMount() {
    //     fetch('/api/data/')
    //         .then(response => response.json())
    //         .then(data => this.setState({ data }));
    // }

    render() {
        return (
            <div>
                <h1>Testing React Code</h1>
                {/* <ul>
                    {this.state.data.map(data => (
                        <li key={data.id}>{data.name}</li>
                    ))}
                </ul> */}
            </div>
        );
    }
}

const appDiv = document.getElementById('app');
render(<App />, appDiv);
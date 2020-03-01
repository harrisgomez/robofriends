import React, { Component } from 'react';
import './App.css';
import 'tachyons';

import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchVal: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = e => {        
        this.setState({
            searchVal: e.target.value
        });
    }
    
    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchVal.toLowerCase());
        });
        const isLoading = this.state.robots.length === 0;        

        return (
            <div className="tc">
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                        <div>
                            <h1 className='f1'>RoboFriends</h1>
                            <SearchBox
                                handleSearch={this.onSearchChange}
                            />
                            <CardList robots={filteredRobots} /></div>
                    )
                }
            </div>
        );
    }
}

export default App;
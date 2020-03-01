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
            robots: robots,
            searchVal: ''
        };
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

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox
                    handleSearch={this.onSearchChange}
                />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
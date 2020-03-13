import React, { Component } from 'react';
import './App.css';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

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
        const { robots, searchVal } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchVal.toLowerCase());
        });
        const isLoading = robots.length === 0;

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox
                    handleSearch={this.onSearchChange}
                />
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                )}
            </div>
        );
    }
}

export default App;
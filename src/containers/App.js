import React, { Component } from 'react';
import { connect } from 'react-redux'; //* Provides store & actions via props
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots } = this.state;
        const { searchInputVal, onSearchChange } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchInputVal.toLowerCase());
        });
        const isLoading = robots.length === 0;

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox
                    handleSearch={onSearchChange}
                    searchInputVal={searchInputVal}
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

const mapStateToProps = state => ({
    searchInputVal: state.searchInputVal,
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //* Subscribes <App/> to store updates as well as its dispatch() method for triggering actions

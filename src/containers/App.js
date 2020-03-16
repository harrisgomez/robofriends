import React, { Component } from 'react';
import { connect } from 'react-redux'; //* Provides store methods & actions via props
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField, requestRobots } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { searchInputVal, onSearchChange, isFetching, robots } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchInputVal.toLowerCase());
        });

        return (
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox
                    handleSearch={onSearchChange}
                    searchInputVal={searchInputVal}
                />
                {isFetching ? (
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
    searchInputVal: state.searchRobots.searchInputVal,
    robots: state.requestRobots.robots,
    isFetching: state.requestRobots.isFetching,
    err: state.requestRobots.err
});

const mapDispatchToProps = dispatch => ({
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App); //* Subscribes <App/> to store updates as well as its dispatch() method for triggering actions

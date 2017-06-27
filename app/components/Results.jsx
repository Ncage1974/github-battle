import React from 'react';
import queryString from 'query-string';
import api from '../utils/api.jsx';

class Results extends React.Component {
    componentDidMount() {
        let players = queryString.parse(this.props.location.search);
        api.battle([
            players.playerOneName,
            players.playerTwoName
        ]).then((results) => {
            console.log(results);
        });
    }
    render() {
        return (
            <div>Results</div>
        )
    }
}

module.exports = Results;
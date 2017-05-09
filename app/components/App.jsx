var React = require('react');
var Popular = require('./Popular.jsx');


class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Popular />
            </div>
        );
    }
}

module.exports = App;
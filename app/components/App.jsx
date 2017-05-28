var React = require('react');
var Popular = require('./Popular.jsx');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Popular />
                </div>
            </Router>

        );
    }
}

module.exports = App;
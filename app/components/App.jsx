var React = require('react');
var Popular = require('./Popular.jsx');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav.jsx');
var Home = require('./Home.jsx');
var Battle = require('./Battle.jsx');
var Switch = ReactRouter.Switch;
import Results from './Results.jsx';


class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/battle' component={Battle} />
                        <Route path='/battle/results' component={Results} />
                        <Route path='/popular' component={Popular} />
                        <Route render={() => {
                            return (<p>Not Found!</p>);
                        }} />
                    </Switch>
                </div>
            </Router>

        );
    }
}

module.exports = App;
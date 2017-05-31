var React = require('react');



class Battle extends React.Component {
   
    constructor(props) {
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.setState((id, username)=> {
            var newstate = {};
            newstate[id + 'Name'] = username;
            newstate[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';
            return newstate;
        })
    }
    render() {
        let playerOneName =  this.state.playerOneName;
        let playerTwoName = this.state.playerTwoName;

        return (
            <div>
                <div className='row'>
                    {!playerOneName &&
                    <PlayerInput 
                        id='playerOne'
                        label='Player One'
                        onSubmit={this.handleSubmit}
                     /> }

                    {!playerTwoName &&
                    <PlayerInput
                        id='playerTwo'
                        label='Player Two'
                        onSubmit={this.handleSubmit}
                     /> }
                </div>
            </div>
        )
    }
}

module.exports = Battle;
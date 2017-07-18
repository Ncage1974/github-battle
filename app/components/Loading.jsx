import React from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
}

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        };
    }

    componentDidMount() {
        let stopper = this.props.text + '...';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper) {
                this.setState(() => {
                    return {
                        text: this.props.text
                    }
                });
            } else {
                this.setState((prevState) => {
                    return {
                        text: prevState.text + '.'
                    }
                });
            }
        }, 300)
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        );
    }
}

Loading.PropTypes = {
    text: PropTypes.string.isRequired
};

Loading.defaultProps = {
    text: 'Loading'
};

module.exports = Loading;
var React = require('react');

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All'
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang
            };
        });
    }
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'C#'];
        console.log('hi');
        return (
            <ul className='languages'>
                {languages.map((lang) => {
                    return (
                        <li 
                        style={lang === this.state.selectedLanguage ? { color: '#d0021b'}: null}
                        onClick={this.updateLanguage.bind(null, lang)}
                        key={lang}>
                            {lang}
                        </li>
                    )
                },this)}
            </ul>
        )

        /*
        return (
            <ul>
                {languages.map((lang) => {
                    <li>
                        {lang}
                    </li>
                })}
            </ul>
        )*/
    }
}

module.exports = Popular;
var React = require('react');
var PropTypes = require('prop-types');
var Api = require('../utils/api.jsx');

function SelectedLanguage(props) {
    var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'C#'];

    return (
        <ul className='languages'>
            {languages.map((lang) => {
                return (
                    <li
                        style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
                        onClick={props.onSelect.bind(null, lang)}
                        key={lang}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )

}

SelectedLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};

class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            };
        });

        Api.fetchPopularRepos(lang)
            .then((repos) => {
                console.log(repos);
            });
    }

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    render() {

        return (
            <div>
                <SelectedLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage}
                />
            </div>
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
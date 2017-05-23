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

function RepoGrid(props) {
    return (
        <ul className='popular-list'>
            {props.repos.map((repo, index) => {
                return (
                    <li key={repo.name} className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt={'Avatar for ' + repo.owner.login}
                                />
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired
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
                this.setState({
                    repos: repos
                })
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
                {!this.state.repos
                    ? <p>LOADING</p>
                    : <RepoGrid repos={this.state.repos} /> }                
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
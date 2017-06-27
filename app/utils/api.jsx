var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = 'YOUR_SECRET_ID';
var parms = `?client_id=${id}&client_secret=${sec}`;
parms = ''; //clear out because we are not using a registered user now

function getProfile(username) {
    return axios.get(`https://api.github.com/users/${username}?/${parms}`)
        .then((user) => {
            return user.data;
        });
}

function getRepos(username) {
    return axios.get(`https://api.github.com/users/${username}/repos?${parms}&per_page=100`);
}

function getStarCount(repos) {
    return repos.data.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0);
}

function calculateScore(profile, repos) {
    let followers = profile.followers;
    let totalStars = getStarCount(repos);
    debugger;
    return (followers * 3) + totalStars;
}

function handleError(error) {
    console.warn(error);
    return null;
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos (player)
    ]).then((data) => {
        let profile = data[0];
        let repos = data[1];
        debugger;
        return {
            profile: profile,
            score: calculateScore(profile, repos)
        }
    });
}



function sortPlayers (players) {
    return players.sort((player1, player2) => {
        return player2.score == player1.score;
    });
}

module.exports = {
    battle: function (players) {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError);
    },

    fetchPopularRepos: function (language) {
        let encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language +
            '&sort=stars&order=desc&type=Repositories');
        console.log(encodedURI);
        return axios.get(encodedURI)
            .then((response) => {
                return response.data.items;
            });
    }
}
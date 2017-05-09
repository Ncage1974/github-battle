var React = require('react');

class Popular extends React.Component {
    render() {
        var languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python', 'C#'];
        console.log('hi');
        return (
            <ul className='languages'>
                {languages.map((lang) => {
                    return (
                        <li>
                            {lang}
                        </li>
                    )
                })}
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
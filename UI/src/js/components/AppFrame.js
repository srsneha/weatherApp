var React = require('react');
var CitySummary = require('./CitySummary');

var AppFrame = React.createClass({
    getInitialState: function() {
        return {citiesListState: []};
    },

    componentWillMount: function() {
        // var cities = ['Bangalore', 'Chennai', 'Mumbai', 'Jaipur', 'Bhopal', 'Mysore', 'Gulbarga', 'Hyderabad'];
        var cities = ['Chennai'];
        var citiesCompArray = [];
        cities.map(function(city) {
            citiesCompArray.push(<CitySummary key={city} city={city}/>)
        });
        this.setStateMethod(citiesCompArray);
    },

    setStateMethod: function(citiesComponentsArray) {
        this.setState({citiesListState: citiesComponentsArray})
    },

    render: function() {
        return (<div className="list-group">
                    {this.state.citiesListState}
                </div>
        );
    }

});

module.exports = AppFrame;

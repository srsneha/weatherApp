var React = require('react');

var CitySummary = React.createClass({

    getInitialState: function() {
        return {
            cityRefreshState: {}
        };
    },

    saveToDB: function(cityDetails) {
        var self = this;
        $.ajax({
          method: "POST",
          url: "/add/city",
          data: cityDetails
        })
        .done(function( msg ) {
            globalContainer = msg;
            self.setState({cityRefreshState: msg})
        });
    },

    fetch: function(e) {
        var self = this;
        e.preventDefault();
        var cityToFetch = this.props.city;
        var url = "http://api.openweathermap.org/data/2.5/find?q="+cityToFetch+",in&units=metric&appid=58edc4df75fc13430e00f5e0eccc89d2";
        $.get(url)
        .done(function(data) {
            self.saveToDB(data);
        })
    },

    componentWillMount: function() {
        var cityToFetch = this.props.city;
        var url = "http://api.openweathermap.org/data/2.5/find?q="+cityToFetch+",in&units=metric&appid=58edc4df75fc13430e00f5e0eccc89d2";
        $.get(url)
        .done(function(data) {
            console.log(data.list[0].sys.country);
        })
    },

    render: function() {
        return (<div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src="../../images/04d.png" alt={this.props.city} />
                </a>
              </div>
              <div className="media-body">
                <h4 className="media-heading">
                <a href="#" id="cityName">{this.props.city}, {this.state.globalContainer.list[0].sys.country}</a>
                </h4>
                 <button onClick={this.fetch} type="button" className="btn btn-info btn-xs">Refresh <span className="glyphicon glyphicon-refresh" aria-hidden="true"></span></button>
              </div>
            </div>
        );
    }
});

module.exports = CitySummary;

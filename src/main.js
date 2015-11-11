var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;


var App = React.createClass({
	render:function(){
		return (
			<div>
        <h1>App</h1>
        <ul>
          <li><Link to="/books">BooksList</Link></li>
          <li><Link to="/movies">MoviesList</Link></li>
        </ul>
      </div>
		);
	}
});

var BooksList = React.createClass({
	render:function(){
		return (
			<div>
        <p><Link to="/">首页</Link></p>
        <p><Link to="/movies">MoviesList</Link></p>
      </div>
		);
	}
});

var MoviesList = React.createClass({
	render:function(){
		return (
			<div>
        <p><Link to="/">首页</Link></p>
        <p><Link to="/books">BooksList</Link></p>
      </div>
		);
	}
});


var routes = (
  <Router location="history">
    <Route path="/" component={App} />
    <Route path="books" component={BooksList}/>
    <Route path="movies" component={MoviesList} />
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('example')
);
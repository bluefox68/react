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
          <li><Link to="about">About</Link></li>
          <li><Link to="users">Inbox</Link></li>
        </ul>
      </div>
		);
	}
});

var About = React.createClass({
	render:function(){
		return (
			<div>
        fsfdsfsdf
      </div>
		);
	}
});

var Users = React.createClass({
	render:function(){
		return (
			<div>
      13123123
      </div>
		);
	}
});


var routes = (
  <Router location="history">
    <Route path="/" component={App}>
      <Route path="about" name="about" component={About}/>
      <Route path="users" name="users" component={Users} />
    </Route>
  </Router>
);

ReactDOM.render(
  routes,
  document.getElementById('example')
);
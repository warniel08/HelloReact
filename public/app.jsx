var Greeter = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'This is the default message'
    }
  },
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );
  }
});

var firstName = 'Warner';

ReactDOM.render(
  <Greeter name={firstName} message='Message from prop!'/>,
  document.getElementById('app')
);
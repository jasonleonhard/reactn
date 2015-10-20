var MyComponent = React.createClass({
  render: function(){
    return (
       <div>
          <h1> {this.props.text} </h1>
          <p> {this.props.children} </p>
        </div>;
    )}
});


React.render( 
  <div>
    <MyComponent text="Welcome"> time </MyComponent>
    <MyComponent text="to"> to </MyComponent>
    <MyComponent text="Reactn"> react </MyComponent>
  </div>
  , document.getElementById('react-container'));

// Renders a yellow sticky note with words penciled on
var Note = React.createClass({
    render: function(){
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                        className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                        className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
        );
    },
    edit: function(){
        alert('editing note');  // <button onClick={this.edit}
    },
    remove: function(){
        alert('removing note');
    }
});

// this.props.children above allows this text
React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));
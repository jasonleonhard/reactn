// Renders a yellow sticky note with words penciled on
// great example of state, triggered by events, such as clicking specific buttons

var Note = React.createClass({
    // render: function(){
    //     return (
    //         <div className="note">
    //             <p>{this.props.children}</p>    // allows INNERhtml to be visible
    //             <span>
    //                 <button onClick={this.edit} // attaches function to button
    //                     className="btn btn-primary glyphicon glyphicon-pencil"/>
    //                 <button onClick={this.remove}
    //                     className="btn btn-danger glyphicon glyphicon-trash"/>
    //             </span>
    //         </div>
    //     )
    // },
    renderDisplay: function() {
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
        )
    },
    renderForm: function() {
        return (
            <div className="note">
                <textarea defaultValue={this.props.children} 
                    className="form-control"></textarea>
                <button onClick={this.save} 
                    className="btn btn-success btn-xs glyphicon glyphicon-floppy-disk" />
            </div>
        )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    },
    getInitialState: function() {
        // alert('getInitialState note');
        return {editing: false}         // cannot edit on initialize
    },
    edit: function(){
        // alert('editing note');          // <button onClick={this.edit}
        this.setState({editing: true}); // can edit while true
    },
    save: function() {
        // alert('saving note');
        this.setState({editing: false}); // when saved no more editing
    },
    remove: function(){
        alert('removing note');         
        // this.setState({removing: true});
    }
});

// this.props.children above allows this text
React.render(<Note>Hello World</Note>, 
    document.getElementById('react-container'));
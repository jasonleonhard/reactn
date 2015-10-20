// Renders a yellow sticky note with words penciled on
// great example of state, triggered by events, such as clicking specific buttons
// component 1 Note
var Note = React.createClass({
    getInitialState: function() {
        // alert('getInitialState note');
        return {editing: false}         // cannot edit on initialize
    },
    edit: function(){
        // alert('editing note');       // <button onClick={this.edit}
        this.setState({editing: true})  // can edit while true
    },
    save: function() {
        // alert('saving note');
        var val = this.refs.newText.getDOMNode().value; // newText variable will grab value of that text area
        alert('saving note not fully implimented\n' + val);
        this.setState({editing: false}); // when saved no more editing
    },
    remove: function(){
        alert('removing note');         
        // this.setState({removing: true});
    },
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
                <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
                <button onClick={this.save} className="btn btn-success btn-xs glyphicon glyphicon-floppy-disk" />
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
    }
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
    // }
});

// component 2 Board, propTypes are validations
var Board = React.createClass({
    propTypes: {
        count: function(props, propName){
            if (typeof props[propName] !== "number") {
                return new Error('The count property must be a number');
            }
            if (props[propName] > 100) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: [
            'Send Resume and Cover Letter',
            'Call Airbnb',
            'Keep an eye on email and phone',
            'Tech Interview'
            ]
        };

    },
    // map creates new array by calling function on every element in array, 
    // i and note allow us to display all notes by index
    render: function() {
        return( 
            <div className="board">
                {this.state.notes.map(function(note,i){ 
                    return ( <Note key={i}>{note}</Note>);
                })}
            </div>
        );
        // return <div className="board">{this.props.count}</div>
    }
});

// render component 1 & 2 simultaneously 
React.render(<Board count={10}/>, 
    document.getElementById('react-container'));


// // render component 2
// React.render(<Board count={10}/>, 
//     document.getElementById('react-container'));

// // render component 1
// // this.props.children above allows this text
// React.render(<Note>Hello World</Note>, 
//     document.getElementById('react-container'));

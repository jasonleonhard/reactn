// Renders a yellow sticky note with words penciled on
// great example of state, triggered by events, such as clicking specific buttons

// Component 1 Note:
var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}         // cannot edit on initialize
    },

    // randomizes positon of notes on board
    // fire before first render, part of reacts lifecycle
    // this.style styles notes and makes their postition appear randomly on the board
    // 150 is width of note
    componentWillMount: function() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150) + 'px',
            top: this.randomBetween(0, window.innerHeight - 150) + 'px',
            transform: 'rotate(' + this.randomBetween(-15, 15) + 'deg)'
        };
    },

    // Unique Keys: The Board class below is the Parent, it has notes who are children and have a key property
    // react will rerender the element based on id
    // generates random number between min and max
    randomBetween: function(min, max) {
        return (min + Math.ceil(Math.random() * max));
    },

    edit: function(){
        this.setState({editing: true})  // can edit while true
    },

    save: function() {
        this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index)
        this.setState({editing: false}); // when saved no more editing
    },

    remove: function(){
        this.props.onRemove(this.props.index);
    },

    renderDisplay: function() {
        return (
            <div className="note" style={this.style}>
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
            <div className="note" style={this.style}>
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
});


// Component 2 Board: propTypes are validations
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

    // notes array becomes the views sticky notes (notes can be prepopulated here)
    getInitialState: function() {
        return {
            notes: [ // autopopulate a few notes below when not commented out
            // 'Send Resume + Cover Letter',
            // 'Call Airbnb',
            // 'Keep an eye on email and phone',
            // 'Tech Interview'
            ]
        };
    },

    // removed above auto populating notes for this function
    // save state in array, push text to array, update state of notes in array
    add: function(text) {
        var arr = this.state.notes;
        arr.push(text);
        this.setState({notes: arr});
    },

    // store notes state, set current array position to newText, update state of notes array
    update: function(newText, i) {
        var arr = this.state.notes;
        arr[i] = newText;
        this.setState({notes:arr});
    },

    // similar, but splice 1 item at index i, from array when removing, then sets/updates state
    remove: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },

    // eachNote returns note after indexing and either updating or removing, instead of in render function
    // bc attaching events to notes is simpler and less code
    eachNote: function(note, i) {
        return (
            <Note key={i}
                index={i}
                onChange={this.update}
                onRemove={this.remove}
            >{note}</Note>
        );
    },

    // map function creates new array by calling function on every element in array, 
    // key i indexes and note allow us to display all notes by index
    // bind adds placeholder text for notes when added freshly
    render: function() {
        return( 
            <div className="board">
                {this.state.notes.map(this.eachNote)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                        onClick={this.add.bind(null, "new note")}> </button>
            </div>
        );
    }
});

// Render Components 1 & 2 simultaneously 
React.render(<Board count={10}/>, 
    document.getElementById('react-container'));

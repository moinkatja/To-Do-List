import React, { Component } from 'react'

export class AddToDo extends Component {

    state = {
        title: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({ title: "" });
    }

    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        };
        this.toggleBox = this.toggleBox.bind(this);
    }

    toggleBox() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
        });
    }

    render() {
        const { opened } = this.state;
        if (opened) {
            return (
                <div>
                    <h1>To Do List <i className="fa fa-plus-square" onClick={this.toggleBox}></i></h1>
                    <form onSubmit={this.onSubmit}>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} placeholder="Add TO-DO here" required />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>To Do List <i className="fa fa-plus-square" onClick={this.toggleBox}></i></h1>
                </div>
            )
        }
    }
}

export default AddToDo;

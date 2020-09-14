import React from "react";

class NewDMForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isPrivate: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.action(this.state).then(
            () => this.props.history.push(`client/conversations`)
        );
        this.props.closeModal();

    }

    onChangeUpdate(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        return (
            <div className="new-dm-form">
                <h2>Create a New DM</h2>
                <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.onChangeUpdate('name')} placeholder="# e.g.spooky-honk" value={this.state.name} />
                    <button>Go</button>
                </form>
            </div>
        )
    }
}

export default NewDMForm;
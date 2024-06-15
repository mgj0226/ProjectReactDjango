import React, { Component } from 'react';

export default class RoomJoinPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomCode: "",
            error: "",
        };
    }

    handleTextFieldChange = (e) => {
        this.setState({
            roomCode: e.target.value,
        });
    }

    roomButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                code: this.state.roomCode,
            }),
        };
        fetch("/api/join-room", requestOptions)
            .then((response) => {
                if (response.ok) {
                    this.props.history.push(`/room/${this.state.roomCode}`);
                } else {
                    this.setState({ error: "Room not found." });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1>Join a Room</h1>
                <input
                    type="text"
                    placeholder="Enter a Room Code"
                    value={this.state.roomCode}
                    onChange={this.handleTextFieldChange}
                />
                <button onClick={this.roomButtonPressed}>Enter Room</button>
                <p>{this.state.error}</p>
            </div>
        );
    }
}
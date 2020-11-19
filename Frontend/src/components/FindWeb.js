import React, { Component } from 'react';
import axios from 'axios'

class FindWeb extends Component {
    //     const { history, match } = this.props
    // const { params } = match
    // const { username } = params
    state = {
        match: this.props.match,
        params: this.props.match.params,
        username: this.props.match.params.username,
        data: null
    }

    checkUser() {
        axios
            .get("http://127.0.0.1:8000/api/users/" + this.state.username)
            .then(res => {
                this.setState({ data: res.data })
                console.log("Getting Username ", res.data);
            })
            .catch(err => {
                this.setState({data:"WNF"})
                console.log("Mil nahi raha" + err)});

    }

    componentDidMount() {
        this.checkUser()
    }

    render() {
        let website = <h1>Loading...</h1>
        if (this.state.data != null && this.state.data != "WNF") {
            website = <div>
                {this.props.history.replace("/"+this.state.username+"/home")}
            </div>
        }
        if (this.state.data === "WNF") {
            website = <h1>Website not found.</h1>
        }

        return website
    }
}

export default FindWeb;
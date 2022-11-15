import React, { Component } from "react";

export default class Banner extends Component {
    constructor(props) {
    super(props);
    this.state = {
        info : this.props.info,
    }
    };
    render() {
        return (
            <section className={this.state.info.type} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/${this.state.info.type}.png')`}}>
                <h3 className={this.state.info.type + "__title"}>{this.state.info.text}</h3>
            </section>
        )
    }
}
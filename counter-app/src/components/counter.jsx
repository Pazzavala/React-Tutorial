import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        // imageUrl: "https://picsum.photos/200",
        tags: ["tag1", "tag2", "tag3"],
    };

    style = {
        fontSize: 20,
        fontWight: "bold",
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <React.Fragment>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span
                    style={this.style}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={this.handleIncrement}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {this.renderTags()}
                {this.state.tags.length === 0 && "Please add Tags!"}
            </React.Fragment>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 text-bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;

        return count === 0 ? "Zero" : count;
    }
}

export default Counter;

import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        // imageUrl: "https://picsum.photos/200",
        // tags: ["tag1", "tag2", "tag3"],
    };

    style = {
        fontSize: 20,
        fontWight: "bold",
    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        console.log("props", this.props);
        return (
            <div>
                {/* <img src={this.state.imageUrl} alt=""/> */}
                <span
                    // style={this.style}
                    className={this.getBadgeClasses()}
                >
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => {
                        this.handleIncrement({ id: 1 });
                    }}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* {this.renderTags()} */}
                {/* {this.state.tags.length === 0 && "Please add Tags!"} */}
            </div>
        );
    }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return (
    //         <ul>
    //             {this.state.tags.map((tag) => (
    //                 <li key={tag}>{tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    getBadgeClasses() {
        let classes = "badge m-2 text-bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.state;

        return value === 0 ? "Zero" : value;
    }
}

export default Counter;

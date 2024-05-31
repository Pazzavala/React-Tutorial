import React, { Component } from "react";

class Counter extends Component {
    style = {
        fontSize: 25,
        fontWight: "bold",
    };

    render() {
        const { onIncrement, onDelete, onReset, counters, counter } =
            this.props;

        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => onDelete(counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        const { counter } = this.props;
        let classes = "badge m-2 text-bg-";
        classes += counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { counter } = this.props;
        const { value } = counter;

        return value === 0 ? "Zero" : value;
    }
}

export default Counter;

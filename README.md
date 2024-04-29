# React-Tutorial by Mosh

# Notes

-   By convention we put all our components under src -> components
-   `<h1>Hello World</h1>` this is a jsx expression, these get compiled to React.createekement(...) but with bable we get this done auto matically
-   `<h1>Hello World</h1><button>Increment</button>` -> Bable doesnt know how to compile this so we need to surround into a div, or `<React.Fragment>
-   JSX Prittier Fix -> Add this to setting file:
    ```json
    "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ```
-   Dynamically display a value: `state = { };`
-   State a special propertie whcih is an object that contains data that a coponent needs.
-   Now to render that we use this notation `<span>{}</span>` where we can include any js expression within the brackts

```JavaScript
import React, { Component } from "react";

class Counter extends Component {
    state = { count: 0 };
    render() {
        return (
            <React.Fragment>
                <span>{this.state.count}</span>
                <button>Increment</button>
            </React.Fragment>
        );
    }
}

export default Counter;
```

## Setting Attributes

```JavaScript
    state = { count: 0, imageUrl: "https://picsum.photos/200" };
    <img src={this.state.imageUrl} alt=""/>
```

-   Editing a class Atribute `<span className="badge text-bg-primary m-2">`

    -   badge text-bg-primary -> give a badge as primary color
    -   m-2 gives a margin of 2

-   Applying Styles

```JavaScript
style = {
        fontSize: 10,
        fontWight: "bold",
    };
<span style={this.style} className="badge text-bg-primary m-2" >

or

<span style={{fontSize: 10}}>
```

## Rendering classes dynamically

```Javascript
let classes = "badge m-2 text-bg-";
classes += this.state.count === 0 ? "warning" : "primary";

<span
                    style={this.style}
                    className={classes}
                >
```

-   Keep things sepret from render method like calculations into a sepereat method

## Render list

```javaScript
state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
};
<ul>
    {this.state.tags.map((tag) => (
        <li key = {tag} >{tag}</li>
    ))}
</ul>
```

-   We add key to make each li element to a unique key ALWAYS!

## Conditional Tags

```javaScript
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

or Better

render() {
    return (
        <React.Fragment>
            {this.state.tags.length === 0 && "Please Create new tags!}
        </React.Fragment>
    )
}

```

# Shortcuts

-   Ctrl + D ---> MultiCursor
-   Ctrl + p ---> Go to file
-   Ctrl + Shift + p --> Open a file
-   Ctrl + , --> Settings in VS
-   Ctrl + Shift + R --> Refactor to create method

## From Simple React Snippets

| Snippet | Renders                          |
| ------- | -------------------------------- |
| ccc     | Class Component With Constructor |
| cc      | Class Component                  |
| cdc     | componentDidCatch                |
| cdm     | componentDidMount                |
| cdu     | componentDidUpdate               |
| cp      | Context Provider                 |
| cpf     | Class Property Function          |
| cpc     | Class Pure Component             |
| cwm     | componentWillMount               |
| cwrp    | componentWillReceiveProps        |
| cwu     | componentWillUpdate              |
| cwun    | componentWillUnmount             |
| ffc     | Function Component               |
| gds     | getDerivedStateFromProps         |
| gsbu    | getSnapshotBeforeUpdate          |
| hoc     | Higher Order Component           |
| impc    | Import React / PureComponent     |
| imrd    | Import ReactDOM                  |
| imrc    | Import React / Component         |
| imr     | Import React                     |
| imrs    | Import React / useState          |

```

```

```

```

```

```

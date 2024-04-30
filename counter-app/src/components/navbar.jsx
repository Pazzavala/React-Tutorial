import React from "react";

// SFC - Stateless Functional Coponent
const NavBar = ({ totalCounters }) => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">
                    Navbar{" "}
                    <button
                        type="button"
                        class="btn btn-primary"
                    >
                        Notifications{" "}
                        <span class="badge text-bg-secondary">
                            {totalCounters}
                        </span>
                    </button>
                </span>
            </div>
        </nav>
    );
};

export default NavBar;

// class NavBar extends Component {
//     render() {
//         return (
//             <nav class="navbar bg-body-tertiary">
//                 <div class="container-fluid">
//                     <span class="navbar-brand mb-0 h1">
//                         Navbar{" "}
//                         <button
//                             type="button"
//                             class="btn btn-primary"
//                         >
//                             Notifications{" "}
//                             <span class="badge text-bg-secondary">
//                                 {this.props.totalCounters}
//                             </span>
//                         </button>
//                     </span>
//                 </div>
//             </nav>
//         );
//     }
// }

// export default NavBar;

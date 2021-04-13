import React, { Component } from "react";
import StyledComponent from "./StyledComponent";

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <img src={logo} className="logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent />
      </div>
    );
  }
}

export default App;

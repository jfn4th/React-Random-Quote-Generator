import React from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
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

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: '',
			color: ''
		};
	}

	render() {
		return (
			<div className="App">
				<h1>This is rendered by react!</h1>
			</div>
		);
	}
}

export default App;

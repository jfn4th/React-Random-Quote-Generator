import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: '',
			author: '',
			color: ''
		};
	}

	componentDidMount() {
		fetch('https://api.quotable.io/random').then((results) => results.json()).then((data) => {
			let quote = data.content;
			let author = data.author;
			this.setState({
				quote: quote,
				author: author
			});
		});
	}

	render() {
		return (
			<div id="wrapper">
				<div id="quote-box">
					<div id="text-area">
						<span id="text">{this.state.quote}</span>
					</div>
					<div id="author-area">
						<span id="author">{this.state.author}</span>
					</div>
					<div id="button-area">
						<div id="share-btns">
							<a href="" id="tweet-quote" />
						</div>
						<div id="new-btn">
							<button id="new-quote" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

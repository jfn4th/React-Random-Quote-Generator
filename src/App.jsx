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
		this.newQuote = this.newQuote.bind(this);
	}

	newQuote() {
		fetch('https://api.quotable.io/random').then((results) => results.json()).then((data) => {
			const quote = data.content;
			const author = data.author;
			this.setState({
				quote: quote,
				author: author
			});
		});
	}

	componentDidMount() {
		this.newQuote();
	}

	render() {
		const tweet =
			'https://twitter.com/intent/tweet?text=' +
			encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
		return (
			<div id="quote-box">
				<div id="text-area">
					<span id="text">{this.state.quote}</span>
				</div>
				<div id="author-area">
					<span id="author">- {this.state.author}</span>
				</div>
				<br />
				<div id="button-area">
					<div id="share-btns">
						<a className="button" href={tweet} id="tweet-quote">
							Share quote
						</a>
					</div>
					<div id="new-btn">
						<button className="button" id="new-quote" onClick={this.newQuote}>
							New Quote
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

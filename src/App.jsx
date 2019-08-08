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
			const r = Math.floor(Math.random() * 200);
			const g = Math.floor(Math.random() * 200);
			const b = Math.floor(Math.random() * 200);
			this.setState({
				quote: quote,
				author: author,
				color: `rgb(${r}, ${g}, ${b})`
			});
			console.log(this.state.color);
		});
	}

	componentDidMount() {
		this.newQuote();
	}

	render() {
		const tweet =
			'https://twitter.com/intent/tweet?text=' +
			encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);
		const textStyle = {
			color: this.state.color
		};
		const backgroundStyle = {
			backgroundColor: this.state.color
		};
		document.body.style.backgroundColor = `${this.state.color}`;
		return (
			<div id="quote-box">
				<div id="text-area">
					<i className="fas fa-quote-left color-transition" style={textStyle} />
					<span id="text" className="color-transition" style={textStyle}>
						{this.state.quote}
					</span>
				</div>
				<div id="author-area">
					<span id="author" className="color-transition" style={textStyle}>
						- {this.state.author}
					</span>
				</div>
				<br />
				<div id="button-area">
					<div id="share-btns">
						<a className="button color-transition" href={tweet} style={backgroundStyle} id="tweet-quote">
							Share quote
						</a>
					</div>
					<div id="new-btn">
						<button
							className="button color-transition"
							id="new-quote"
							style={backgroundStyle}
							onClick={this.newQuote}
						>
							New Quote
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;

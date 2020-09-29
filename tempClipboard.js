
buttonClicked = () =>  {
	if (this.state.value == null) {
		this.setState({value: 'BOING'});
	} else {
		this.setState({value: null});
	}
}

render() {
	return (
		<button
			className="gridbox"
			onClick={ this.buttonClicked }
		>
			{this.state.value}
		</button>
	);
}
}

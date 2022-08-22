// example Class Components
import React, { Component } from 'react';

class CounterClass extends Component {

	// to use the props
	constructor(props){
		super(props);
		this.state = { counter: 0 }; // old way to set the initial state
	}

	// calls API
	componentDidMount() {
		console.log('render the DOM');
	}

	// updated, the state was changed
	componentDidUpdate(previousProps, previousState) {
		console.log('updated the DOM');
		console.log('Previous Props:', previousProps);
		console.log('Previous State:', previousState);
	}

	// before unmount, close component, finish the call to API
	componentWillUnmount() {
		console.log('Bye Component');
	}

	// function that returns an object to can set the states
	increase(number){
		// to change the state is necessary use setState
		// returns a new object with the new state
		this.setState((previousState) => {
			return {
				// counter: previousState.counter + 1
				counter: previousState.counter + number
			}
		})
	}

	// function that returns an object to can set the states
	decrease(number){
		this.setState((previousState) => {
			return {
				// counter: previousState.counter - 1
				counter: previousState.counter - number
			}
		})
	}

	render(){
		return(
			<div>
				<h1>Counter: {this.state.counter}</h1>
				<button onClick={() => this.increase(this.props.numberToIncrease)}>Increase</button>
				<button onClick={() => this.decrease(6)}>Decrease</button>
			</div>
		)
	}
}

export default CounterClass;

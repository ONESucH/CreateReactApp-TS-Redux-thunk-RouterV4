import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import { IStateUsers } from '../../types/users';
import './style.css';

const App = (props: any) => {
	const { users } = props;

	return (
		<div className="App">
			<h1>App page</h1>
			<button onClick={() => props.getUsers()}>Получить API</button>
			<div className="result">{JSON.stringify(users)}</div>
		</div>
	);
};

const mapStateToProps = (state: IStateUsers) => ({
	users: state.users
});

const mapDispatchToProps = (dispatch: any) => ({
	getUsers: () => dispatch(getUsers())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

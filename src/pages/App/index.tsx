import React from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import { IPropsUsers, IStateUsers } from '../../types/users';
import './style.css';

const App = (props: IPropsUsers) => {
	const { users, getUsers } = props;

	return (
		<div className="App">
			<h1>App page</h1>
			<button onClick={() => getUsers()}>Получить API</button>
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

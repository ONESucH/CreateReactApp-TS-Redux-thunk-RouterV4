import { GET_USERS, IInitialAction } from '../types/users';

export default (state = {}, action: IInitialAction) => {
	switch (action.type) {
		case GET_USERS:
			console.log('GET_USERS', action);
			return action.payload;

		default:
			return state;
	}
}
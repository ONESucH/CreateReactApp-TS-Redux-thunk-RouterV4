import { GET_USERS, IResponseUsers } from '../types/users';
import { get } from '../api';

export const getUsers = () => async (dispatch: any) =>
	await get('https://jsonplaceholder.typicode.com/todos')
		.then(async (payload: IResponseUsers[]) => {
			await dispatch({
				type: GET_USERS,
				payload
			});
		});
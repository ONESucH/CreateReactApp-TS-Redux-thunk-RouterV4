export const GET_USERS = 'GET_USERS';

export interface IResponseUsers {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

export interface IInitialAction {
	type: string;
	payload: IResponseUsers[];
}

export interface IStateUsers {
	users: IResponseUsers[];
}
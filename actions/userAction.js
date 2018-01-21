import axios from 'axios'


export const userActions = {
	getUsers: () => {
		const url = 'https://randomuser.me/api/';
		return {
			type: 'FETCH_USER',
			payload: axios.get(url)
		}
	},
	getUserById: (id) => {
		const url = 'https://jsonplaceholder.typicode.com/users';
		const options = {
			params: {
				id,
			}
		}
		return {
			type: 'FETCH_USER',
			payload: axios.get(url, options)
		}
	},
	addUser: (id, username, email) => {
		const url = 'https://jsonplaceholder.typicode.com/users';
		const data = {id, username, email}
		const options = {
			method: 'POST',
			url,
			data,
		    headers: { 'Content-Type': 'application/json' }
		}
		return {
			type: 'ADD_USER',
			payload: axios(options)
		}
	},
	deleteUser: (id) => {
		const url = 'https://jsonplaceholder.typicode.com/users';
		const data = {id}
		const options = {
			method: 'DELETE',
			url,
			data,
		    headers: { 'Content-Type': 'application/json' }
		}
		return {
			type: 'DELETE_USER',
			payload: axios(options)
		}
	}
}


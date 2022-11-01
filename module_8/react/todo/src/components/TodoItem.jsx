import { React, Component, useState } from 'react';

// class components
// functional component
//props

// class TodoItem extends Component {
// 	constructor(props) {
// 		super();
// 	}

// 	componentDidMount(){
// 		console.log('Component has mounted')
// 	}

// 	render() {
// 		return
// 		<div className="todoItem">
// 			<p>{this.props.todo}</p>
// 			<div className="todoActions">
// 				<button>delete</button>
// 				<button>edit</button>
// 			</div>
// 		</div>;
// 	}
// }
export const API_ROUTE = 'https://todolistapp12345.herokuapp.com/todos/';

function TodoItem({ todo, deleteTodo, editTodo }) {
	const updateStatus = (event) => {
		const checked = event.target.checked;
		fetch(`${API_ROUTE}${todo.id_2}/`, {
			method: 'PATCH',
			body: JSON.stringify({ completed: checked }),
			headers: {
				'Content-Type': 'application/json',
			},
		}).then((res) => {
			if (res.ok) {
			} else {
				alert('Error updating status');
			}
		});
	};
	return (
		<>
			<div className="todoItem">
				<p>Task: {todo.task}</p>
				<span>Status : {todo.completed ? 'Completed' : 'Not Completed'} </span>
				<input
					type="checkbox"
					onClick={(event) => updateStatus(event)}
					defaultChecked={todo.completed}
				></input>
				<div className="todoActions">
					<button onClick={() => deleteTodo(todo)}>delete</button>
					<button onClick={() => editTodo(todo)}>edit</button>
				</div>
			</div>
		</>
	);
}

export default TodoItem;

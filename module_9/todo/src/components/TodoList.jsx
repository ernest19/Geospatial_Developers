import { React, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { API_ROUTE } from './TodoItem';

function TodoList({ userInput, taskIsCreated, editTodo, taskIsUpdated }) {
	const [todo, setTodo] = useState([]);
	const [todoIsDeleted, setTodoIsDeleted] = useState(false);
	
	const deleteTodo = (todo) => {
		const { id_2, task } = todo;
		alert(`Do you want to delete: ${task}`);
		const url = `${API_ROUTE}${id_2}/`;
		fetch(url, {
			method: 'DELETE',
		}).then((res) => {
			if (res.status === 204) {
				alert('Item successfully deleted');
				setTodoIsDeleted(true);
			} else {
				alert('Error deleting todo item');
				setTodoIsDeleted(false);
			}
		});
	};

	useEffect(() => {
		//fetch api
		//make api call
		fetch('https://todolistapp12345.herokuapp.com/todos/')
			.then((res) => res.json())
			.then((data) => setTodo(data.results));
	}, [userInput, taskIsCreated, todoIsDeleted, taskIsUpdated]);

	return (
		<div className="todoList">
			{todo
				.filter((value) =>
					value.task.toLowerCase().includes(userInput.toLowerCase())
				)
				.map((todo) => {
					return (
						<TodoItem
							todo={todo}
							key={todo.id_2}
							deleteTodo={deleteTodo}
							editTodo={editTodo}
						/>
					);
				})}
		</div>
	);
}

export default TodoList;

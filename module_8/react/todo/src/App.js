import { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import { API_ROUTE } from './components/TodoItem';

function App() {
	const [task, setTask] = useState('');
	const [taskIsCreated, setTaskIsCreated] = useState(false);
	const [taskIsUpdated, setTaskIsUpdated] = useState(false);
	const [editingMode, setEditingMode] = useState(false);
	const [todoId, setTodoID] = useState('');

	const getUserInput = (text) => {
		setTask(text);
	};

	const editTodo = (todo) => {
		setEditingMode(true);
		setTask(todo.task);
		setTodoID(todo.id_2);
	};

	const createTodo = () => {
		if (task === '') {
			alert('Input box is empty');
		} else {
			fetch(API_ROUTE, {
				method: 'POST',
				body: JSON.stringify({ task: task }),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => {
				if (res.status === 201) {
					setTask('');
					setTaskIsCreated(true);
				} else {
					alert('Error creating todo');
				}
			});
		}
	};

	const updateTodo = () => {
		if (task === '') {
			alert('Input box is empty');
		} else {
			fetch(`${API_ROUTE}${todoId}/`, {
				method: 'PATCH',
				body: JSON.stringify({ task: task }),
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((res) => {
				if (res.ok) {
					setTask('');
					setEditingMode(false);
					setTaskIsUpdated(true);
				} else {
					alert('Error creating todo');
				}
			});
		}
	};
	return (
		<div className="App">
			<h1>My Todo List</h1>
			<div>
				{!editingMode ? (
					<button
						style={{
							padding: '10px',
							backgroundColor: 'green',
							color: 'white',
							outline: 'none',
							border: 'none',
							cursor: 'pointer',
							width: '5rem',
							marginRight: '5px',
						}}
						onClick={createTodo}
					>
						Add Task
					</button>
				) : (
					<button
						style={{
							padding: '10px',
							backgroundColor: 'blue',
							color: 'white',
							outline: 'none',
							border: 'none',
							cursor: 'pointer',
							width: '5rem',
							marginRight: '5px',
						}}
						onClick={updateTodo}
					>
						Edit Task
					</button>
				)}
				<input
					type="text"
					value={task}
					onChange={(event) => getUserInput(event.target.value)}
					placeholder="Type your tasks here..."
					style={{ padding: '10px', width: '15rem', marginRight: '5px' }}
				></input>
				<SearchBox
					taskIsCreated={taskIsCreated}
					taskIsUpdated={taskIsUpdated}
					editTodo={editTodo}
				/>
			</div>
		</div>
	);
}

export default App;

import { React, useState } from 'react';
import TodoList from './TodoList';

//lifecycle
//hooks => functional component
//class component - lifecycycle methods

//useEffect => when your component is mounted, when a value/props is updated
//useState => Store data in a component
//useRef => reference an html element
//useMemo => use for optimizing components
//useCallback
//useReducer
//useContext => prevent prop drilling

function SearchBox({ taskIsCreated, editTodo, taskIsUpdated }) {
	const [userInput, setUserInput] = useState('');

	const handleChange = (event) => {
		setUserInput(event.target.value);
	};

	return (
		<>
			<input
				type="search"
				placeholder="Search todo..."
				className="searchBox"
				value={userInput}
				onChange={(event) => handleChange(event)}
			></input>
			<TodoList
				userInput={userInput}
				taskIsCreated={taskIsCreated}
				taskIsUpdated={taskIsUpdated}
				editTodo={editTodo}
			/>
		</>
	);
}

export default SearchBox;

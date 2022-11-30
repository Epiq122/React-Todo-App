import React, {useState} from 'react';

import './App.css';
import {TodoTable} from "./components/TodoTable";
import {NewTodoForm} from "./components/NewTodoForm";

export const App = () => {

    const [showAddTodoForm, setShowAddTodoForm] = useState(false);

    const [todos, setTodos] = useState([
        {
            rowNumber: 1,
            rowDescription: "Feed Dog",
            rowAssigned: "Hank"
        },
        {
            rowNumber: 2,
            rowDescription: "Get in the flask",
            rowAssigned: "Little Nicky"
        },
        {
            rowNumber: 3,
            rowDescription: "Learn to code",
            rowAssigned: "Rob",
        },
        {
            rowNumber: 4,
            rowDescription: "Buy some steaks",
            rowAssigned: "Jason",

        }
    ])

    // this is for our onclick event
    const addTodo = (description: string, assigned: string) => {
        let rowNumber = 0;
        if (todos.length > 0) {
            rowNumber = todos[todos.length - 1].rowNumber + 1;
        } else {
            rowNumber = 1;
        }
        const newTodo = {
            rowNumber: todos.length + 1,
            rowDescription: description,
            rowAssigned: assigned

        }
        // this is from our useState hook, this is how we update the state and add the new items
        setTodos(todos => [...todos, newTodo])
    }

    // delete todo function
    const deleteTodo = (deleteTodoRowNumber: number) => {
        // this is from our useState hook, this is how we update the state and add the new items
        let filtered = todos.filter(todo => todo.rowNumber !== deleteTodoRowNumber)
        setTodos(filtered)

    }
    return (
        <div className="mt-5 container">
            <div className="card">
                <div className="card-header">
                    Your Todo's
                </div>
                <div className="card-body">
                    <TodoTable todos={todos} deleteTodo={deleteTodo}/>
                    <button className="btn btn-primary"
                            onClick={() => setShowAddTodoForm(!showAddTodoForm)}>{showAddTodoForm ? "Hide" : "Add Todo"}
                    </button>
                    {showAddTodoForm &&
                        <NewTodoForm addTodo={addTodo}/>
                    }
                </div>
            </div>
        </div>
    );
}



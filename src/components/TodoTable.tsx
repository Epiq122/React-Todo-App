import React from "react";
import {TodoRowItem} from "./TodoRowItem";

export const TodoTable: React.FC<{ todos: TodoModel[], deleteTodo: Function }> = (props) => {

    return (
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
            </tr>
            </thead>
            <tbody>

            {props.todos.map(todo => (
                <TodoRowItem rowNumber={todo.rowNumber}
                             rowDescription={todo.rowDescription}
                             rowAssigned={todo.rowAssigned}
                             key={todo.rowNumber}
                             deleteTodo={props.deleteTodo}/>
            ))}

            </tbody>
        </table>
    )
}


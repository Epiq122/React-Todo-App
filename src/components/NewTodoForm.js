import {useState} from "react";

function NewTodoForm(props) {

    const [description, setDescription] = useState("");
    const [assigned, setAssigned] = useState("");


    // OnChange Handlers
    const descriptionChange = (event) => {
        setDescription(event.target.value);
    }
    const assignedChange = (event) => {
        setAssigned(event.target.value);
    }

    const submitTodo = (event) => {
        // if there both not empty
        if (description !== "" && assigned !== "") {
            // call the addTodo function from App.js
            props.addTodo(description, assigned);
            // clear the input fields
            setDescription("");
            setAssigned("");

        }
    }
    return (
        <div className="mt-5">
            <form action="">
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={assignedChange}
                           value={assigned}/>

                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={descriptionChange}
                              value={description
                              }/>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )

}

export default NewTodoForm;
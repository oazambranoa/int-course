import React from "react";
import './TodoForm.css'

function TodoForm ( { addTodo, setOpenModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('')


    const onChange = (event) => {
       setNewTodoValue(event.target.value)
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    const onSubmit= (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTodoValue}
                onChange= {onChange}
                placeholder="Cortar la cebolla para el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className = "TodoForm-button TodoForm-button--cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export { TodoForm }
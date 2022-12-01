import React from "react";
import './TodoCounter.css'

function TodoCounter( { totalTodos, completedTodos, loading} ){
    
    return(
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has complentado {completedTodos} de {totalTodos} TODOs
        </h2>
    )
}

export {TodoCounter};

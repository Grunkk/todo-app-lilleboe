import Todo from "./Todo";

export default function Todos({todoStart, removeToDos}) {
    return(
        <main className="main-content">
            {todoStart.map((todo) => (
                <Todo key={todo.id} title={todo.title} content={todo.content} removeToDos={removeToDos} id={todo.id} />
            ))}

        </main>
    )
}
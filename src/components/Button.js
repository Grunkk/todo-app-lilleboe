export default function Button({removeToDos, id}) {
    return (
        <button className="todo-btn" onClick={() => removeToDos(id)} >Ferdig</button>
    )
}
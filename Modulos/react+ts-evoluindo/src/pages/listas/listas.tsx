import { useState } from "react";
import "./listas.css";

export default function Lista() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [edit, setEdit] = useState({
    enabled: false,
    task: "",
  });

  function addTask() {
    if (!input) {
      alert("Informe uma tarefa para cadastrar!");
      return;
    }

    if (edit.enabled) {
      saveEdit();
      return;
    }

    setTasks((tarefas) => [...tarefas, input]);
    setInput("");
  }

  function deleteTask(item: string) {
    const newTask = tasks.filter((task) => task != item);
    setTasks(newTask);
  }

  function editTask(item: string) {
    setInput(item);
    setEdit({
      enabled: true,
      task: item,
    });
  }

  function saveEdit() {
    const findIndexTask = tasks.findIndex((task) => task === edit.task);
    const allTasks = [...tasks];

    allTasks[findIndexTask] = input;
    setTasks(allTasks);

    setEdit({
      enabled: false,
      task: "",
    });

    setInput("");
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div className="addTask">
        <input
          type="text"
          placeholder="Digite o nome da Tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>
          {edit.enabled ? "Editar" : "Adicionar"}
        </button>
      </div>

      <div className="task">
        {tasks.map((item, index) => (
          <section key={index}>
            <button
              className="btn-excluir btn"
              onClick={() => deleteTask(item)}
            >
              Excluir
            </button>
            <button className="btn-editar btn" onClick={() => editTask(item)}>
              Editar
            </button>
            <span>{item}</span>
          </section>
        ))}
      </div>
    </div>
  );
}

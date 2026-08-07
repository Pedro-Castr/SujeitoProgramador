import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import "./listas.css";

export default function Lista() {
  const [input, setInput] = useState("");

  const [tasks, setTasks] = useState<string[]>(() => {
    const tarefasSalvas = localStorage.getItem("@tarefasTS");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  const [edit, setEdit] = useState({
    enabled: false,
    task: "",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    localStorage.setItem("@tarefasTS", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(item: string) {
    const newTask = tasks.filter((task) => task != item);
    setTasks(newTask);
  }

  function editTask(item: string) {
    inputRef.current?.focus();

    setInput(item);
    setEdit({
      enabled: true,
      task: item,
    });
  }

  const saveEdit = useCallback(() => {
    const findIndexTask = tasks.findIndex((task) => task === edit.task);

    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;

    setTasks(allTasks);
    setEdit({
      enabled: false,
      task: "",
    });

    setInput("");
  }, [tasks, edit, input]);

  const totalTarefas = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const addTask = useCallback(() => {
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
  }, [edit.enabled, input, saveEdit]);

  return (
    <div className="tarefas">
      <h1 className="titulo-tarefas">Lista de Tarefas</h1>

      <div className="addTask">
        <input
          type="text"
          placeholder="Digite o nome da Tarefa..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
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

      <p className="msg-rodape">Você tem {totalTarefas} tarefas em andamento</p>
    </div>
  );
}

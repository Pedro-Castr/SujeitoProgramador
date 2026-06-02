import { useState } from "react";
import { db } from "./firebaseConnection";
import { collection, addDoc, getDoc, doc } from "firebase/firestore";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  async function handleAdd() {
    /* await setDoc(doc(db, "posts", "12345"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Dados registrados no banco");
      })
      .catch((error) => {
        console.log("Erro do firebase: " + error);
      }); */

    await addDoc(collection(db, "posts"), {
      titulo: titulo,
      autor: autor,
    })
      .then(() => {
        console.log("Dados registrados com sucesso");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("Um erro do firebase aconteceu: " + error);
      });
  }

  async function buscarPost() {
    const postRef = doc(db, "posts", "12345");

    await getDoc(postRef)
      .then((snapshot) => {
        setAutor(snapshot.data().autor);
        setTitulo(snapshot.data().titulo);
      })
      .catch((error) => {
        console.log("Erro ao buscar post: " + error);
      });
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>
      <div className="container">
        <label>Título:</label>
        <textarea
          type="text"
          placeholder="digite um título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        ></textarea>

        <label>Autor:</label>
        <input
          type="text"
          placeholder="Autor do post"
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />

        <button onClick={handleAdd}>Cadastrar</button>

        <button onClick={buscarPost}>Buscar post</button>
      </div>
    </div>
  );
}

export default App;

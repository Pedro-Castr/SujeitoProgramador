import { useEffect, useState } from "react";
import { auth, db } from "./firebaseConnection";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import "./App.css";

function App() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  const [posts, setPosts] = useState([]);
  const [idPost, setIdPost] = useState("");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [user, setUser] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    async function loadPosts() {
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        let listaPost = [];

        snapshot.forEach((doc) => {
          listaPost.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(listaPost);
      });
    }

    loadPosts();
  }, []);

  useEffect(() => {
    async function checkLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(true);
          setUserDetails({
            uid: user.uid,
            email: user.email,
          });
        } else {
          setUser(false);
          setUserDetails({});
        }
      });
    }

    checkLogin();
  }, []);

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
    /* const postRef = doc(db, "posts", "12345");
    await getDoc(postRef)
      .then((snapshot) => {
        setAutor(snapshot.data().autor);
        setTitulo(snapshot.data().titulo);
      })
      .catch((error) => {
        console.log("Erro ao buscar post: " + error);
      }); */

    const postsRef = collection(db, "posts");

    await getDocs(postsRef)
      .then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            titulo: doc.data().titulo,
            autor: doc.data().autor,
          });
        });

        setPosts(lista);
      })
      .catch((error) => {
        console.log("Ocorreu um erro ao buscar posts: " + error);
      });
  }

  async function editarPost() {
    const docRef = doc(db, "posts", idPost);

    await updateDoc(docRef, {
      titulo: titulo,
      autor: autor,
    })
      .then((snapshot) => {
        setIdPost("");
        setAutor("");
        setTitulo("");
      })
      .catch((error) => {
        console.log("Erro ao atualizar post: " + error);
      });
  }

  async function excluirPost(id) {
    const docRef = doc(db, "posts", id);

    await deleteDoc(docRef).then(() => {
      alert("post deletado com sucesso.");
    });
  }

  async function novoUsuario() {
    await createUserWithEmailAndPassword(auth, email, senha)
      .then(() => {
        alert("usuário cadastrado com sucesso");
        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        if (error.code === "auth/weak-password") {
          alert("Senha inválida! Utilize uma senha mais forte");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Esse email já está sendo utilizado");
        }
      });
  }

  async function logarUsuario() {
    await signInWithEmailAndPassword(auth, email, senha)
      .then((value) => {
        alert("Usuário logado com sucesso");

        setUserDetails({
          uid: value.user.uid,
          email: value.user.email,
        });
        setUser(true);

        setEmail("");
        setSenha("");
      })
      .catch((error) => {
        console.log("Erro ao logar usuário: " + error);
      });
  }

  async function fazerLogout() {
    await signOut(auth);
    setUser(false);
    setUserDetails({});
  }

  return (
    <div>
      <h1>ReactJS + Firebase</h1>

      {user && (
        <div>
          <strong>Seja bem vindo! Você está logado</strong>
          <p>{userDetails.email}</p>
        </div>
      )}

      <div className="container">
        <h2>Cadastrando Usuário</h2>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite um email"
        />
        <label>Senha</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
        />

        <br />
        <button onClick={novoUsuario}>Cadastrar</button>
        <br />
        <button onClick={logarUsuario}>Fazer Login</button>
        <br />
        <button onClick={fazerLogout}>Sair da Conta</button>
        <br />
      </div>

      <div className="container">
        <h2>Cadastrando Posts</h2>
        <label>Id do Post</label>
        <input
          placeholder="digite o ID do post"
          value={idPost}
          onChange={(e) => setIdPost(e.target.value)}
        />{" "}
        <br />
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
        <button onClick={editarPost}>Atualizar post</button>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <strong>ID: {post.id}</strong> <br />
                <span>Título: {post.titulo} </span> <br />
                <span>Autor: {post.autor}</span> <br />
                <button onClick={() => excluirPost(post.id)}>
                  Excluir
                </button>{" "}
                <br /> <br />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

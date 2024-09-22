import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault(); // form태그의 onSubmit 이벤트 방지
    if (toDo == "") {
      return;
    }
    setToDos(currentArr => [toDo, ...currentArr]);
    setToDo("");
  };

  return <div>
    <h1>My ToDo List ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder="Write Something to do.." />
      <button>{"전송"}</button>
    </form>
    <hr />
    <ul>
      {toDos.map((toDo, idx) => (
        <li key={idx}>{toDo.toUpperCase()}</li>
      ))}
    </ul>
  </div>;
}

export default App;
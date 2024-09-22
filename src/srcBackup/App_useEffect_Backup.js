import Button from "../Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyWord(e.target.value);
  useEffect(() => {
    console.log("처음 렌더링 한번만 API 가져올게?");
  }, []);
  useEffect(() => {
    if (keyWord !== "" && keyWord.length > 5) {
      console.log("입력한 keyWord 검색만 하고 싶네? ", keyWord);
    }
  }, [keyWord]);
  useEffect(() => {
    console.log("입력한 counter 클릭에 반응 하네? ", counter);
  }, [counter]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Here.."
        value={keyWord}
        onChange={onChange}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={'클릭하세요'} />
      <button onClick={onClick}>더하기 버튼</button>
    </div>
  );
}

export default App;

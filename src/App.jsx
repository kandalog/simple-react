import axios from "axios";
import "./App.css";

const URL = "https://simple-express-12.onrender.com";

// セッションIDがクッキーにセットされる
const test = async () => {
  const res = await axios.get(URL, {});
  console.log(res.data);
};

// セッションIDがクッキーにセットされる
const register = async () => {
  const res = await axios.post(
    URL + "/set",
    {},
    {
      withCredentials: true,
    }
  );
  console.log(res.data);
};

// セッションIDから値を取り出す
const acquire = async () => {
  const res = await axios.post(
    URL + "/get",
    {},
    {
      withCredentials: true,
    }
  );
  console.log(res.data);
};

function App() {
  return (
    <div>
      <div>
        <button onClick={test}>test</button>
      </div>
      <button onClick={register}>登録</button>
      <button onClick={acquire}>取得</button>
    </div>
  );
}

export default App;

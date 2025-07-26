import Button from "../Button/Button.jsx";
import React, {useState} from "react";

function Home() {

   // const [count, setCount] = useState(0)
  let [count,setCount] = useState(0)
  let [page,setPage] = useState("Home")
  let [user,setUser] = useState({name: "John Doe", age: 30, email: "ad@ex.c"})

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <h1 className={"text-xl bg-red-700"}>{page}</h1>
      <p>{count}</p>
      <p className={count > 5 ? 'bg-amber-800' : 'bg-blue-950'}>{user.name}</p>
      <button onClick={handleClick}>counetr</button>
      {/*<Button/>*/}
    </div>
  )
}

export default Home
/**
 *
 */

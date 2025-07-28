import React, {useEffect, useState} from 'react';
import axios from "axios";
import style from './about.module.css';
function About() {

  const [count, setCount] = useState(0);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("useEffect is called in About component");

    fetchData();

    return () => {
      console.log("useEffect cleanup is called in About component");
    }

  }, []);

  useEffect(() => {
    if (count === 0) {
      return;
    }

    console.log("update count is called: ", count);

  }, [count]);

  function updateCount() {
    setCount(count + 1);
  }

  // call apis

  async function fetchData() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    let {data} = await axios.get(url);
    setPosts(data);
  }

  return (
      <div>
        <h1>About</h1>
        {posts.length > 0 ? posts.map((post) =>
            <div key={post.id} className="border p-4 mb-4">
              <h2 className={`text-xl font-semibold ${style.about}`}>{post.title}</h2>
              <p>{post.body}</p>
            </div>
        ):
            <div className="flex items-center justify-center h-screen">
              <div
                  className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
            </div>

        }

        <span className="text-2xl font-bold">Count: {count}</span>
        <button onClick={updateCount}>update count</button>
      </div>
  );
}

export default About;
/* App

import React, { useState } from "react";
import "./styles.css";
import useAxios from "./useAxios";

const App = () => {
  const { loading, refetch } = useAxios({
    url: "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
  });
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{loading ? "loading" : "re loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};

export default App;


*/

import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = (opts, axiosInstance = axios) => {
  const [ranNum, setRanNum] = useState(0);

  const [state, setState] = useState({
    loading: true,
    data: null,
    error: null,
  });
  if (!opts.url) {
    return;
  }
  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setRanNum(Math.random());
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loadging: false,
          error,
        });
      });
  }, [ranNum]);
  return { ...state, refetch };
};

export default useAxios;

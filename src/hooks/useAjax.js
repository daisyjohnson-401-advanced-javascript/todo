import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = (url) =>  {


  const [list, setList ] = useState({});

  useEffect( () => {


    async function fetchData(){
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/todo');
    const results = response.data.results;
    console.log(results);
    setList(results);
    }

    fetchData();

  }, [url]);

  return {
    list,
    setList,
  }
}

export default useAjax;
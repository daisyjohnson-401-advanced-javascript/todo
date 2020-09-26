import { useState, useEffect } from 'react';
import axios from 'axios';

const useAjax = url =>  {


  const [list, setList ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
    async function fetchData(url){
    setIsLoading(true);
    const response = await axios.get(url);
    const results = response.data.results;
    setList(results);
    setIsLoading(false);
    }

    fetchData(url);

  }, [url]);

  return {
    list,
    setList,
    isLoading,
    setIsLoading,
  }
}

export default useAjax;
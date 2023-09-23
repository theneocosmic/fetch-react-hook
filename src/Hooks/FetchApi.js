import {useEffect, useState} from 'react';

export function useFetchApi (url) {
    const [data, setData ] = useState();
    const [error,setError] = useState();
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data)
            setData(data)
        })
        .catch((error)=>setError(error))
        .finally(()=>setLoading(false));
    },[]);

        return {data,error,loading};

}
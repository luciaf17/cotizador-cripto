import {useState, useEffect} from "react";
import axios from "axios";

const useGetData = (url) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
        error: null,
    });

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios(url);
    
                setState({
                    data: res.data,
                    error: null,
                    loading: false,
                });
            } catch (error) {
                setState({
                    data: [],
                    error: error,
                    loading: false,
                });
            }
        }
        getData();
    }  , [state.data]);

    
    return [state.data, state.loading, state.error];
}

export default useGetData;
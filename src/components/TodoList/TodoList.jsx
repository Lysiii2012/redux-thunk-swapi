import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { fetchSwapiData, clearTodos } from "../../features/swapiSlice/swapiSlice";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
    const [endpoint, setEndpoint] = useState('users');
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const status = useSelector((state) => state.todos.status);
    const error = useSelector((state) => state.todos.error);

    const handleFetch = () => {
        if (endpoint.trim() !== '') {
            dispatch(fetchSwapiData(endpoint));
        }
    };

    const handleClear = () => {
        dispatch(clearTodos());
        setEndpoint('');
    }; 

    return (
        <>  
          <div className="swapi_top">
              <Input value={endpoint} onChange={e => setEndpoint(e.target.value)} />
              <Button onClick={handleFetch} text={"Get info"} />
          </div>
       
          <div className='result'>
              {status === 'loading' && <div>Loading...</div>}
              {status === 'failed' && <div style={{ color: 'red' }}>Error: {error}</div>}
              {status === 'succeeded' && <pre>{JSON.stringify(todos, null, 2)}</pre>}
          </div>
          <footer>
              <Button className="clear-button" onClick={handleClear} text={"Clear"} />
          </footer>
        </>
    );
}

export default TodoList;

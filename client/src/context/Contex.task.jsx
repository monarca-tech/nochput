import {
  useReducer,
  useEffect,
  useContext,
  createContext,
  useState,
} from "react";

const ContextTask = createContext();

const url = import.meta.env.VITE_URL;

function reducer(state, action) {
  switch (action.type) {
    case "succes":
      return { ...state };
    case "succes_add":
      return { ...state, data: action.payload };
    case "succes_addtask":
      return { ...state, data: [...state.data, action.payload] };
    case "DeleteTask":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case "updatetask":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    
  }
}


// eslint-disable-next-line react/prop-types
export function ProviderTask({ children }) {
  const [show, setshow] = useState(false);
  const [ids, setids] = useState(0);
  const [inputAdd, setinputAdd] = useState("");
  const [inputupdate, setinputudate] = useState("");
  const [state, dispach] = useReducer(reducer, { data: [] });

  // get api
  async function dataGetApi() {
    dispach({ type: "succes" });
    const res = await fetch(url);
    const data = await res.json();
    dispach({ type: "succes_add", payload: data });
  }
  //render api
  useEffect(() => {
    dataGetApi();
  }, []);

  // add data apis
  async function Addtask() {
    if (inputAdd.length > 3) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: inputAdd, complete: false }),
      });
      const data = res.json();
      dispach({ type: "succes_addtask", payload: data });
      dataGetApi();
      setinputAdd('')
    }
  }
  // delete data apis
  async function DeleteTask(id) {
    await fetch(url + `/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispach({ type: "DeleteTask", payload: id });
    dataGetApi();
  }
  // show the windows update
  function showUpdate(id) {
    setshow(!show);
    setids(id);
  }
  //update data apis
  async function updateTask() {
    if (inputupdate.length >= 3) {
      const res = await fetch(`${url}/${ids}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: inputupdate }),
      });
      const data = res.json();
      dispach({ type: "updatetask", payload: data });
      setshow(!show);
      dataGetApi();
    }
  }
  // complete task api
  async function complatetask(id) {
    // Encuentra la tarea actual para alternar el valor de `complete`
    const currentTask = state.data.find((task)=>task.id_task === id)
    if (currentTask) {
     const updatedTask = {
      ...currentTask,
      complete: !currentTask.complete
     }
  
      // Realiza la actualización en la API
      const res = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });
  
      const data = await res.json();
  
      // Actualiza el estado global con la nueva tarea
      dispach({ type: "updatetask", payload: data });
  
      // Vuelve a obtener los datos
      dataGetApi();
    }
  }

  const dataexport = {
    state,
    Addtask,
    setinputAdd,
    DeleteTask,
    setshow,
    showUpdate,
    show,
    setinputudate,
    updateTask,
    complatetask,
    inputupdate,
    inputAdd
  };

  return (
    <ContextTask.Provider value={dataexport}>{children}</ContextTask.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useContextTask() {
  if (!ContextTask) {
    throw new Error("useContextTask must be used within a ProviderTask");
  }
  return useContext(ContextTask);
}

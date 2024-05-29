import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../lib/paths";

export const TasksContext = createContext(null);

export const TasksProvider = ({children}) => {
    let navigate = useNavigate();

    const [tasks, setTasks] = useState(null);

    const getTasks = (cards) => {
        setTasks(cards);
        navigate(paths.MAIN);
    };

    return (
        <TasksContext.Provider value={{tasks, setTasks, getTasks}}>
            {children}
        </TasksContext.Provider>
    );
};
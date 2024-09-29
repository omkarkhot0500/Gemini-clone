import { createContext, useState } from "react";
import run from "../Config/Gimini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prePrompt, setPrePrompt] = useState([]);
    const [showResult, setShoeResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShoeResult(true);
        setRecentPrompt(input);
        setInput("")
        const response = await run(input)
        let responseArrey = response.split("**");
        let newReaponse="" ;
        for(let  i=0; i<responseArrey.length; i++) {
            if(i===0|| i%2 !== 1) {
                newReaponse += responseArrey[i];
            } else {
                newReaponse += "<b>" + responseArrey[i]+"</b>";
            }
        }
        let newReaponse2 = newReaponse.split("*").join("</br>");
        setResultData(newReaponse2)
        setLoading(false)
    }

    const contextValue = {
        onSent,
        prePrompt,
        setPrePrompt,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider
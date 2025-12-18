import { useState } from "react";
import axios from "axios";

const AiAssistant = () => {
    const [open, setOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");

    const handleAsk = async () => {
        if (!prompt) return;


        const res = await axios({

            method: "POST",
            url: "http://localhost:5029/api/gemini",
            data: prompt

        })
        setResponse(res.data.text);

       
    }
    const SendQuestion=(e)=>{
        setPrompt(e.target.value)
    }

    return (
        <div className="Aiassistant-outerbox">
            {!open && (
                <button className="assist-btn" onClick={() => setOpen(true)}  >
                    Need Help?
                </button>
            )}

            {open && (
                <div className="assistant-box">
                    <div className="assistant-header">
                        <h4>AI Assistant</h4>
                        <button onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <div className="assistant-body">
                        {response ? (
                            <p className="assistant-response">{response}</p>
                        ) : (
                            <p className="assistant-placeholder">
                                Ask something about this portfolio or MERN stack…
                            </p>
                        )}
                    </div>

                    <div className="assistant-footer">
                        <input
                            type="text"
                            placeholder="Type your question…"
                            value={prompt}
                            onChange={SendQuestion}
                        />
                        <button onClick={handleAsk}>Ask</button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default AiAssistant;

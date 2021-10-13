import React, {useState, useRef}from 'react'

export default function Kumar() {
    const [inputvalue, setinputvalue] = useState("");
    const [finalValue, setfinalValue] = useState([]);
    const inputref = useRef(null);
  
    const handlechange = (e) => {
        const values = e.target.value;
        console.log(values,"kumar");
        const y = [...inputvalue, values];
        setinputvalue(y);
    };
    const handlesubmit = () => {
        const k = inputref.current;
  
        const x = [...inputvalue, inputvalue];
        // const x = [...inputvalue];
        setfinalValue(x);
        console.log(k);
    };
  
    return (
        <div className="App">
            <button type="submit" onClick={handlesubmit}>
                {" "}
                submit
            </button>
            <input
                type="text"
                name="name"
                placeholder="text"
                ref={inputref}
                // value={inputvalue}
                onChange={handlechange}
            ></input>
            <p>
                {finalValue.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </p>
        </div>
    );
}


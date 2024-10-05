import React, { useState } from "react";
import data from "./data";
import "./style.css";

const Accordian = () => {
  const [seleted, setSeleted] = useState(null);
  const [mulseleted, setMulseleted] = useState(false);
  const [mul, setMul] = useState([]);

  function handleSingleseletion(id) {
    console.log(id);
    setSeleted(id === seleted ? null : id);
    // console.log(data)
  }

  function handleMulseletion(id) {
    let cpymul = [...mul];
    const findindex = cpymul.indexOf(id);
    console.log(findindex);
    if (findindex === -1) cpymul.push(id);
    else cpymul.splice(findindex,1);
    setMul(cpymul)
    
  }

  return (
    <div>
      <div className="wrapper">
      <h1>Accordian</h1>
        <button onClick={() => setMulseleted(!mulseleted)}>
          {" "}
          Enable Multi Selection{" "}
        </button>
        <div className="accordian">
         
          {data && data.length > 0 ? (
            data.map((dataitem) => (
              <div
                key={dataitem.id}
                className="item"
                onClick={
                  mulseleted
                    ? () => handleMulseletion(dataitem.id)
                    : () => handleSingleseletion(dataitem.id)
                }
              >
                <div
                  className="title"
                  onClick={() => handleSingleseletion(dataitem.id)}
                >
                  <h3>{dataitem.question}</h3>
                  <span>+</span>
                </div>
                {
                  mulseleted ? mul.indexOf(dataitem.id) !== -1 &&(
                    <div className="content">
                    <p>{dataitem.answer}</p>
                  </div>
                  )
                  : 
                  seleted === dataitem.id  &&(
                    <div className="content">
                    <p>{dataitem.answer}</p>
                  </div>
                  )
                }
                {/* {seleted === dataitem.id ? (
                  <div className="content">
                    <p>{dataitem.answer}</p>
                  </div>
                ) : null} */}
              </div>
            ))
          ) : (
            <h1>No data found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordian;

import React from "react";

const JsxExamples = () => {

    const userName = " Carlos";

    const user  = {

        name: "Ana",
        lastName: "Souza"

    }

    return (

        <div>
            <h2>Conteudo que o usuário vai ver</h2>
             {/*Listando dados do usuário*/}
             <p>O nome do usuário é:{userName}</p>
        </div>
    );
};

export default JsxExamples
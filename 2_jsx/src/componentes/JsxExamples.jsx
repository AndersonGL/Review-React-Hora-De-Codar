import React from "react";

const JsxExamples = () => {

    const userName = " Carlos";

    const user = {

        name: "Ana",
        lastName: "Souza",

    }

    function getGreeting(name) {
        return `Olá ${name}`;
    }

    const userIsLoggedIn = true;

    const userRole = "admin";

    const users = [

        {id:1, name: "João"},
        {id:2, name: "Paulo"},
        {id:3, name: "Pedro"},

    ];




    return (

        <div>
            <h2>Conteudo que o usuário vai ver</h2>
            {/*Listando dados do usuário*/}
            <p>O nome do usuário é:{userName}</p>

            <p>Usuário: {user.name} {user.lastName} </p>

            <p>{2 + 2}</p>

            <p> {getGreeting(userName)}</p>

            <p>{getGreeting("Anderson")}</p>

            {/*Diferenças do HTML*/}

            <div className="alguma-coisa" >Esse Cara</div>

            <div className="teste">ok</div>

            <button onClick={() => alert("teste")}>clique em mim</button>

            <input type="text" placeholder="Digite algo" />


            {/*RENDERIZAÇÃO FUNCIONAL*/}

            {userIsLoggedIn ? (<div>  <p>Caso: Está logado</p> </div>)

                : (<p>Caso: Não está logado</p>)}



            <p>
                {userRole === "admin" && <p>Você é um admin</p>}
            </p>

              {/*RENDERIZAÇÃO DE LISTAS*/}

              <div>
                <ul>
                    {users.map((user) => (
                      
                      <li key =
                        {user.id} > 
                      {user.id}  - {user.name}
                      </li>


                    ))};
                </ul>
              </div>


        </div>
    );
};

export default JsxExamples
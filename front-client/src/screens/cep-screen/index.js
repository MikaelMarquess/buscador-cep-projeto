import React from "react";
import SearchCep from "../../components/search-cep";
import "../../styles/home.css"
const CepRoute = () => {
    return(
        <div className="container">
            <div className="box">
                <h1>Buscar CEP</h1>
            <SearchCep/>
            </div>
        </div>
    )
}

export default CepRoute
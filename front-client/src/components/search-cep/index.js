import React, {Fragment, useState} from "react";
import services from "../../connect_API/cep-search-api/cepService";
import "../../styles/showData.css"


const SearchCep = () => {
    const [cep, setCep] = useState("")
    const [show, setShow] = useState(false)
    let [allData, setAllData] = useState({})

    const handleSearch = async() => {
        const response = await services.search(cep)
        try {

            if(response.error){
                setShow(false)
                alert(response.error)
                return
            }
            if(response.cep){
            setAllData(response.cep)
            setShow(true)
                return response
            }
        } catch (error) {
            setShow(false)
            
        }
    }

    return(
        <Fragment>
            <input type="text" placeholder="Procurar..." onChange={(e) => setCep(e.target.value)}/>
            <button type="button" onClick={handleSearch}>Buscar</button>
            {show &&(
                <div className="dataView">
                 <p>{`Cidade: ${allData.localidade}`}</p>
                 <p>{`Região: ${allData.regiao}`}</p>
                 <p>{`Estado: ${allData.estado}(${allData.uf})`}</p>
                 <p>{`IBGE: ${allData.ibge}`}</p>
                 <p>{`DDD: ${allData.ddd}`}</p>
                 </div>
            )
             }
        </Fragment>
    )
}

export default SearchCep
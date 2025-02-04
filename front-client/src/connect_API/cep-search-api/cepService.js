import Api from "./api"

const services = {
    search: async(cep) => {
        try {
            const response = await Api.get(`/?cep=${cep}`)
                return response.data        
        } catch (error) {
            if(error.response && error.response.data){
                return {error: error.response.data.error}
            }
            console.log("ERRO:", error)
            return {error: "Erro ao enviar o CEP"}
        }
    }
}

export default services
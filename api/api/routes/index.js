var express = require('express');
const axios = require("axios")
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res) {
  let {cep} = req.query
  console.log("VALOR DA QUERY", cep)
  try {
    if(!cep){
      res.status(404).json({error: "CEP não informado."})
    }else{
      const regex = /^\d{8}$/
      if(!regex.test(cep)){
        res.status(404).json({error: "CEP no formato inválido, forneça apenas 8 números sem caracteres especiais."})
      }else{
          let response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
          if(!response.data.erro){
            res.json({"cep": response.data})
            console.log(response.data)
          }else{
            res.status(404).json({error: "CEP não encontrado"})
          }
      
      }
    }

  } catch (error) {
    console.log(error)
    res.json("ERRO: ", error)
  }
});

module.exports = router;

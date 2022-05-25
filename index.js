
const OrdenDAO = require("./DAO/Orden")
const ordenDAO = new OrdenDAO();
 ordenDAO.porID("001_400000337").then(r=>{        
    const {numero_orden} = r[0];
    console.log(numero_orden);
    
})











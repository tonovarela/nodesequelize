
const { QueryTypes } = require("sequelize");
const DAO=require("./DAO");
class Orden extends DAO{
    async listar(){
        const resultados = await this.obtenerData("select top 1 * from Orden");
        return resultados    
    }
    async porID(numero_orden) {
        return await this.sequelize.query("select  * from Orden where numero_orden=:numero_orden",
        {
            replacements:{numero_orden},                        
            type:QueryTypes.SELECT
        }
        );        
    }
}

module.exports=Orden;
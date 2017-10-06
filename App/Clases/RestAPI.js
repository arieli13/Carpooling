export default class RestAPI{
    static restapi = null;
    
    static ip  = "192.168.0.3";
    static puerto = "8080";
    
    constructor(){
    }

    static autenticacion(usuario, contrasennia){
        return new Promise((resolve, reject)=>{
            fetch('http://'+this.ip+':'+this.puerto+'/api/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre_usuario: usuario,
                    pass: contrasennia,
                })
            })
            .then((response) => response.json())
            .then((responseJson) => {
                if(responseJson['error']){
                    reject( {error:responseJson['descripcion']} );
                }else{
                    resolve(responseJson);
                }
            })
            .catch((response) => response.json())
            .catch((error) => {
                reject( {error:JSON.stringify(error, null, 2)});
            });
        });
    }
}
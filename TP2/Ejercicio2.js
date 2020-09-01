const  getLastFM  =  async ( )  => 
 {
    const  apiKey  =  'bd171c0a459861fa63452fa6b814a6e2' ;
    const Respuesta =  await  fetch ( `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=10&api_key= $ { apiKey } & format = json` ) ;
    const  (  artistas )   =  aguardar Respuesta.json( ) ;
    console.log (typeof (Respuesta) ) ;
    console.log (artistas) ;
    vamos  armadoTabla =  
    <tr>
                        <td><×Artista </×</td>
                        <td><×Reproducciones </× </td>
                        <td><×Oyentes </×</td>
                    </tr> 

    const  tabla  =  documento . querySelector ( "tabla" )
    artistas . artista . forEach ( element  => 
         {
        armadoTabla  +=  
        <tr>
            <td> $ { elemento . nombre } 
            </td>
            <td> $ { elemento . playcount } 
            </td>
            <td> $ { elemento . oyentes } 
            </td>
        </tr>
    
        tabla . innerHTML  =  armadoTabla ;
    } ) ;


}   


getLastFM ( )
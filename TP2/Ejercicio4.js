function  jugador ( nombre ) {
    let . nombre  =  nombre ;
    let . pv  =  100 ;
    let . sp  =  100 ;
    let . tirarFlecha  =  función ( jugador ) 
    {
        if  ( jugador . pv <= 0 ) {
            consola . log ( `El jugador $ { Jugador . nombre } ha muerto` )
        } más
         {
            jugador . pv  =  jugador . pv  -  10 ;
        }
    }
    esto . curar  =  función ( jugador ) 
    {
        jugador . pv  =  jugador . pv  +  5 ;
        consola . log ( `+5 de viad para $ { jugador . nombre } ` )
    }
} ;

let  orco  = new jugador ("Orco") ;
let  legolas  =  new  jugador("Legolas" ) ;
consola . log ( orco ) ;
consola . registro ( legolas ) ;

función Mostrar Estado()
{
    consola . log ( orco ) ;
    consola . registro ( legolas ) ;   
}
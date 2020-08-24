function EdadJubilacion(nombre,edad,sexo )
let nombre= prompt('ingrese su nombre');
let edad= prompt('ingrese su edad');
let sexo= prompt('ingrese su sexo');

Saxo.toUppercase();

if(sexo === 'femenino'){
    if(edad >59){
        console.log(nombre + 'se encuentra en edad de jubilarse');
    }
    else{
        console.log(nombre + 'no se encuentra en edad de junilarse');
    }
}
else{
    if(edad> 64){
        console.log(nombre + 'se encuentra en edad de junilarse');
        console,log(nombre +'no se encuentra en edad de jubilarse');
    }
}
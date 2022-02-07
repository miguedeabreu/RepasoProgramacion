function IntroducePais (pais:string)
{
    if (pais == "USA" || pais == "Canada" || pais == "Mexico" || pais == "Chile" || 
        pais == "Venezuela")
    {
        console.log("Usted se encuentra en America.");
    }
    else if (pais == "Portugal" || pais == "España" || pais == "Italia" || 
            pais == "Grecia" ||pais == "Alemania")
    {
        console.log("Usted se encuentra en Europa.");
    }
    else if (pais == "China" || pais == "Corea" || pais == "Japon" || 
            pais == "Filipinas" ||pais == "Singapur")
    {
        console.log("Usted se encuentra en Asia.");
    }
    else if (pais == "Marruecos" || pais == "Tanzania" || pais == "Egipto" || 
            pais == "Angola" || pais == "Madagascar")
    {
        console.log("Usted se encuentra en Africa.");
    }
    else if (pais == "Australia" || pais == "Nueva Zelanda" || pais == "Samoa" || 
            pais == "Fiyi" || pais ==  "Palaos")
    {
        console.log("Usted se encuentra en Oceania.");
    }
    else {
            console.log("El país no se encuentra en nuestra lista.")
    }
}

IntroducePais("Canada");

function SignoZodiacal (dia,mes)
{
    let resultado: string;

    if (((dia>20 && dia<32) && (mes == "marzo")) || ((dia>0 && dia<21) && (mes == "abril")))
    {
        resultado = "Aries";
    }
    else if (((dia>20 && dia<31) && (mes == "abril")) || ((dia>0 && dia<22) && (mes == "mayo")))
    {
        resultado = "Tauro";
    }
    else if (((dia>21 && dia<32) && (mes == "mayo")) || ((dia>0 && dia<22) && (mes == "junio")))
    {
        resultado = "Geminis";
    }
    else if (((dia>21 && dia<31) && (mes == "junio")) || ((dia>0 && dia<23) && (mes == "julio")))
    {
        resultado = "Cancer";
    }
    else if (((dia>22 && dia<32) && (mes == "julio")) || ((dia>0 && dia<23) && (mes == "agosto")))
    {
        resultado = "Leo";
    }            
    else if (((dia>22 && dia<32) && (mes == "agosto")) || ((dia>0 && dia<23) && (mes == "septiembre")))
    {
        resultado = "Virgo";
    }
    else if (((dia>22 && dia<31) && (mes == "septiembre")) || ((dia>0 && dia<23) && (mes == "octubre")))
    {
        resultado = "Libra";
    }
    else if (((dia>22 && dia<32) && (mes == "octubre")) || ((dia>0 && dia<23) && (mes == "noviembre")))
    {
        resultado = "Escorpio";
    }
    else if (((dia>22 && dia<31) && (mes == "noviembre")) || ((dia>0 && dia<22) && (mes == "diciembre")))
    {
        resultado = "Sagitario";
    }
    else if (((dia>21 && dia<32) && (mes == "diciembre")) || ((dia>0 && dia<21) && (mes == "enero")))
    {
        resultado = "Capricornio";
    }   
    else if (((dia>20 && dia<32) && (mes == "enero")) || ((dia>0 && dia<19) && (mes == "febrero")))
    {
        resultado = "Acuario";
    }
    else if (((dia>18 && dia<30) && (mes == "febrero")) || ((dia>0 && dia<21) && (mes == "marzo")))
    {
        resultado = "Piscis";
    }
    else    
    {
        resultado = "SUS PARAMETROS SON INCORRECTOS";
    }

    return resultado;
}

console.log(SignoZodiacal(12,"abril"));
console.log(SignoZodiacal(12,"octubre"));
console.log(SignoZodiacal(12,"diciembre"));
console.log(SignoZodiacal(23,"agosto"));

export function tipoNumero (numero)
{
    if (numero %2 == 0)
    {
        console.log("El número introducido es par.");
    }
    else
    {
        console.log("El numero introducido es impar");
    }
}

tipoNumero(56);


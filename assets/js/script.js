var Radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

var traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

var dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

//Agregar código para el desafio 2 aquí

/*##################----------  Requerimiento 1  -------------########*/
/*se debe pasar la informacion entregada en el ejemplo a objeto de array */ 
traumatologia.push(
    {
        hora: '09:00',
        especialista:' RENÉ POBLETE',
        paciente:'ANA GELLONA',
        rut: '13123329-7',
        prevision: 'ISAPRE',
    },
    {
       hora: '09:30',
       especialista: 'MARIA SOLAR',
       paciente: 'RAMIRO ANDRADE',
       rut:'12221451-K',
       prevision: 'FONASA',
    },
    {
        hora:'10:00',
        especialista: 'RAUL LOYOLA',
        paciente:'CARMEN ISLA',
        rut:'10112348-3',
        prevision:'ISAPRE',
    },
    {
        hora:'10:30',
        especialista:'ANTONIO LARENAS',
        paciente:'PABLO LOAYZA',
        rut: '13453234-1',
        prevision:'ISAPRE',
    },
    {
        hora:'12:00',
        especialista:'MATIAS ARAVENA',
        paciente:'SUSANA POBLETE',
        rut:'14345656-6',
        prevision:'FONASA',
    }

);
/*visualizo si esta ingresado en el array traumatologia*/
console.log(traumatologia);

/*###############-----------  Requerimiento 2   ----------##########*/

Radiologia.shift();/*elimino el primer objeto del array*/
Radiologia.pop(); /*elimino el ultimo objeto del array*/

/*visualizo en consola que este ok*/
console.log(Radiologia);

/* Modulos universales*/
/*recorrido del array para listar los datos completos de los elementos del array*/
const datosTotalesPacientes = (pacientes) => {
    let viewHtml =''

    pacientes.forEach(paciente => {
        viewHtml += `<p>${paciente.hora} - ${paciente.paciente} - ${paciente.rut} - ${paciente.prevision}</p>`;
    });
    return viewHtml;
};

/* Recorrido de un array para listar solo nombres de los pacientes*/
const datosNombrePacientes = (pacientes) => {
    let viewHtml =''

    pacientes.forEach(paciente => {
        viewHtml += `<p>${paciente.paciente}</p>`;
    });
    return viewHtml;
};

/* recorrido que liste solo nombre y prevision de los datos de un array*/
    const datoNombrePrevision = (paciente =>{
        let viewHtml = ''
        paciente.forEach(paciente =>{
            viewHtml += `<p>${paciente.paciente} - ${paciente.prevision}</p>`
        });
        return viewHtml;
    });



/*#########---------  Requerimiento 3   -------#########*/


/* modulo para insertar en el HTML todos los datos de los pacientes*/
const mostrarPacientes =(pacientes, div) => {
    const listaPacientes = datosTotalesPacientes(pacientes)
    const contenedorPacientes = document.getElementById(div)
    contenedorPacientes.innerHTML = listaPacientes
};
/* pasamos los datos solicitados llamando al modulo e ingresando los parametros requeridos del array y el id del contenedor */ 
mostrarPacientes(dental,"lista-dental");


/*#######-------  Requerimiento 4   -------########*/

/* modulo que permite insertar en el html los nombres de los pacientes */
const mostrarNombresPacientes =(pacientes, div) => {
    const listaPacientes = datosNombrePacientes(pacientes)
    const contenedorPacientes = document.getElementById(div)
    contenedorPacientes.innerHTML = listaPacientes

}

/* concatenamos los array */
const totalPacientes = dental.concat(Radiologia,traumatologia)

/*llamado al modulo*/
mostrarNombresPacientes(totalPacientes,"lista-total")


/* ######## ------   Requerimiento 5 -------#######*/

/* Filtramos del array dental los que son iguales estrictamente  a ISAPRE*/
const pacientesDentalIsapres = dental.filter(pacientes => {
    if (pacientes.prevision === 'ISAPRE'){
        return pacientes
        }
    })

    /*  modulo para insertar el listado resultante en el html */
    const mostrarDentalIsapre =(pacientes, div) => {
        const listaPacientes = datoNombrePrevision(pacientes)
        const contenedorPacientes = document.getElementById(div)
        contenedorPacientes.innerHTML = listaPacientes
    };
/* llamado al modulo*/
mostrarDentalIsapre(pacientesDentalIsapres,"lista-isapre-dental");

/* Requerimiento 6*/ 

/* Filtramos del array  los que son iguales estrictamente  a FONASA*/
const pacientesTraumaFonasa = traumatologia.filter(pacientes => {
    if (pacientes.prevision === 'FONASA'){
        return pacientes
        }
    });

    /*  modulo para insertar el listado resultante en el html */
    const mostrarTraumaFonasa =(pacientes, div) => {
        const listaPacientes = datoNombrePrevision(pacientes)
        const contenedorPacientes = document.getElementById(div)
        contenedorPacientes.innerHTML = listaPacientes
    };


mostrarDentalIsapre(pacientesTraumaFonasa,"lista-fonasa-traumatologia");


//Agregar código para el desafio 2 aquí


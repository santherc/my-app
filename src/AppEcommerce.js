import { useState, useEffect } from 'react'
import Boton from './clases/clase5/Boton';
import Form from './clases/clase5/Form';
import Titulo from './clases/clase5/Titulo';
import NavBar from './components/Navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function AppEcommerce() {
    // const estado = useState(0)
    // const count = estado[0]
    // const setCount = estado[1]
    const [count, setCount] = useState(14)
    const [bool, setBool] = useState(true)
    const [fecha, setFecha] = useState(Date())
    const [array, setArray] = useState([1, 2, 3])


    useEffect(() => {

        //console.log('tarea Asincronica pesada con delay ultimo')
        console.log('api tarda segundos ultimo siempre') // segundos
        return () => { // sea ejecutará cada vez antes del desmontado del componente
            console.log('andes del desmontado ocurre la limpieza')
                //window.removeEventListener('clik', algunaFuncion)
        }
    })

    useEffect(() => {

        //console.log('tarea Asincronica pesada con delay ultimo')
        console.log('api tarda segundos ultimo una sola vez') // segundos
        return () => { // sea ejecutará cada vez antes del desmontado del componente
            console.log('andes del desmontado ocurre la limpieza')
                //window.removeEventListener('clik', algunaFuncion)
        }
    }, [])


    useEffect(() => {

        //console.log('tarea Asincronica pesada con delay ultimo')
        console.log('cuando cambie bool') // segundos
            //window.addEventListener('clik', algunaFuncion)

        return () => { // sea ejecutará cada vez antes del desmontado del componente
                console.log('andes del desmontado ocurre la limpieza')
                    //window.removeEventListener('clik', algunaFuncion)
            }
            //setBool(!bool)

    }, [bool, count])




    // let count = 0   // estado nuestro componente


    const handlerClick = () => {
        //count++//count = count + 1
        setCount(count + 1)
        setFecha(Date())
            //console.log(count)
    }

    console.log('antes del rendering')

    return ( <
        div className = "App" >
        <
        NavBar / > { /* <Titulo /> */ } { /* <Form boton={Boton} /> */ } <
        center > { count } < br / > { fecha } < br / >
        <
        button onClick = { handlerClick } > click < /button> <
        button onClick = {
            () => setBool(!bool) } > click bool < /button> <
        /center> <
        /div>
    );
}
import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header";
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  // [] mostrado abajo es un arreglo vacio
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora"
  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }])

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorDestaque: "#57C278",
      colorFondo : "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorDestaque: "#82CFFA",
      colorFondo : "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorDestaque: "#A6D157",
      colorFondo : "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorDestaque: "#E06B69",
      colorFondo : "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorDestaque: "#DB6EBF",
      colorFondo : "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorDestaque: "#FFBA05",
      colorFondo : "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorDestaque: "#FF8A29",
      colorFondo : "#FFEEDF"
    } 
  ])

  //Ternario --> condicion ? --> si es verdadero :seMuestra --> si no noSe Muestra
  //otra forma de escribirlo
  //condicion && seMuestra  -->> si la condicion se cumple muestra lo indicado, si no, no muestra nada

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //spread operator al poner los tres puntos (...) se interpreta que estamos copiando algo, en este caso un valor que esta dentro de "colaboradores"
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = () => {
    console.log("Eliminar colaborador")     
  }

  //Actualizar color de equipo
  const actualizarColor = (color, titulo) => {
    console.log("actualizar: ", color, titulo)
    const equiposActualizados = equipos.map ((equipo) => {
      if(equipo.titulo === titulo) {
        equipo.colorDestaque = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }
  
  // "<></>" se interpreta como vacio
  return (
    <div>
      <Header />
      { 
        mostrarFormulario && <Formulario 
        equipos = { equipos.map((equipo) => equipo.titulo) }
        registrarColaborador = { registrarColaborador }
        />
      }
      <MiOrg cambiarMostrar = { cambiarMostrar }/>
      {
        equipos.map((equipo) => <Equipo 
          datos = { equipo } 
          key = { equipo.titulo }
          colaboradores = { colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo) }
          eliminarColaborador = { eliminarColaborador }
          actualizarColor = { actualizarColor }
          />
          )
      }

      <Footer />     
    </div>
  );
}

export default App;

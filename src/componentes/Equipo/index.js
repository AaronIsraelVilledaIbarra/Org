import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo = (props) => {
    //Destructuracion

    const { colorFondo, colorDestaque, titulo } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    // Utilizamos fragments (<></>) para evitar que el codigo se rompa
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={{ backgroundColor: colorFondo }}>
                <input 
                    type = "color"
                    className = "input-color"
                    value = { colorFondo }
                    onChange = { (evento) => {
                        actualizarColor(evento.target.value, titulo)
                    }}
                />
                                    
                <h3 style={{ borderColor: colorDestaque }}>{ titulo }</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => 
                        <Colaborador 
                        datos = { colaborador }
                        key = { colaborador.nombre }
                        colorDestaque = { colorDestaque }
                        eliminarColaborador = { eliminarColaborador }
                        /> )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo
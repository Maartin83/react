import {useEffect, useState} from "react";
import {getUser, isRoleAdmin, isRoleUser, returnToken, returnTokenJson} from "../Config/auth";
import axios from "axios";
import Swal from "sweetalert2";
import NavBar from "../NavBar";
import data from "bootstrap/js/src/dom/data";

const RegistrarCitaUser = () => {
    const [fecha, setFecha] = useState('');
    const [horariosDisponibles, setHorariosDisponibles] = useState([]);
    const [horarioSeleccionado, setHorarioSeleccionado] = useState({});
    const [cita, setCita] = useState({
        horario:{
            id:''
        },
        usuario:{
            id:''
        },
        nombresapellidos:'',
        edad: '',
        numeroCelular: '',
        documento: '',
        especialidad: '',
        comentarios: ''
    });

    useEffect(() => {
        if (!isRoleUser()) {
            window.location.href = "/error403";
        }
        getUser().then(c => setCita({...cita, usuario:{
                id:c.id
            }}));
        if (fecha) {
            axios.get(`http://localhost:8080/api/horario/get/${fecha}`, returnToken())
                .then((response) => {
                    setHorariosDisponibles(response.data);
                })
                .catch((error) => {
                    console.error('Error al obtener los horarios disponibles:', error);
                });
        }

    }, [fecha]);

    const handleHorarioSeleccionado = (horario) => {
        setHorarioSeleccionado(horario);
        setCita({...cita, horario: {
                id:horario.id
            }});
    };

    const handleRegistroCita = async (e) => {
        e.preventDefault();
        if (cita.especialidad === "" || cita.especialidad === null) {
            await Swal.fire({
                title: 'Seleccione una especialidad',
                icon: 'error',
                showCancelButton: false,
                confirmButtonText: 'Aceptar',
                cancelButtonText: 'Cancelar',
            });
            return;
        }

        // Parámetros para la solicitud de inicio de pago
        const detalle= cita.especialidad
        const monto= 80.00 // Puedes cambiar el monto si es necesario


        try {
            console.log(cita);

            // Realiza una solicitud POST a la URL de inicio de pago
            const responsePago = await axios.post(
                `http://localhost:8080/api/pagos/iniciar-pago?detalle=${detalle}&monto=${monto}`,
                returnTokenJson()
            );
            // Verifica si la solicitud de inicio de pago fue exitosa
            if (responsePago.data) {
                const detallesCita = JSON.stringify(cita);
                localStorage.setItem('detallesCita', detallesCita);
                window.location.href = (responsePago.data);
            } else {
                await Swal.fire({
                    title: 'Error al iniciar el pago',
                    text: 'No se pudo iniciar el proceso de pago. Por favor, inténtelo de nuevo.',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar',
                });
            }
        } catch (error) {
                await Swal.fire({
                    title: error,
                    text: 'No se puede registrar la cita, rellene los campos obligatorios correctamente',
                    icon: 'error',
                    showCancelButton: false,
                    confirmButtonText: 'Aceptar',
                    cancelButtonText: 'Cancelar',
                });
            }

    };
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCita({...cita, [name]: value});
    }

    return (
        <div>
            <NavBar/>
            <div className="container" style={{ marginTop: "150px" }}>
                <h2 className="mt-4 ">Registre los datos de la Cita: </h2>
                <span className="text-muted">Los campos con (*) son obligatorios</span>
                <hr/>
                <form>
                    <div className="mb-3 ">
                        <label>Nombres y Apellidos: (*)</label>
                        <input
                            type="text"
                            className="form-control"
                            name="nombresapellidos"
                            required={true}
                            value={cita.nombresapellidos}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Edad: (*)</label>
                        <input
                            type="number"
                            className="form-control "
                            name="edad"
                            required={true}
                            value={cita.edad}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Documento de Identidad: (*)</label>
                        <input
                            type="text"
                            className="form-control"
                            name="documento"
                            required={true}
                            value={cita.documento}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Número de Celular:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="numeroCelular"
                            value={cita.numeroCelular}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Especialidad: (*)</label>
                        <select
                            className="form-select"
                            name="especialidad"
                            required={true}
                            value={cita.especialidad}
                            onChange={handleInputChange}
                        >
                            <option value="">Seleccione una especialidad</option>
                            <option value="Odontologia Integral">Odontologia Integral</option>
                            <option value="Ortodoncia">Ortodoncia</option>
                            <option value="Estetica Dental">Estetica Dental</option>
                            <option value="Endodoncia">Endodoncia</option>
                            <option value="Periodoncia">Periodoncia</option>
                            <option value="Implantes Dentales">Implantes Dentales</option>
                            <option value="Protesis Dental">Protesis Dental</option>
                            <option value="Odontopediatria">Odontopediatria</option>
                            <option value="Radiografia Dental">Radiografia Dental</option>
                            {/* Agrega más opciones de especialidades según tus necesidades */}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Comentario:</label>
                        <textarea
                            className="form-control"
                            name="comentarios"
                            value={cita.comentarios}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="col-md-3 col-form-label">Selecciona una fecha: (*)</label>
                        <div className="col-md-4">
                            <input
                                type="date"
                                className="form-control"
                                value={fecha}
                                required={true}
                                onChange={(e) => setFecha(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="col-md-3 col-form-label">Seleccione un Horario Disponible: (*)</label>
                        <div className="row">
                            {horariosDisponibles.map((horario) => (
                                <div
                                    key={horario.id}
                                    className={`col-md-4 mb-3 ${
                                        horario.habilitado ? '' : 'deshabilitado'
                                    }`}
                                >
                                    <button type="button"
                                            className={`card cursor-pointer ${horarioSeleccionado === horario ? 'seleccionado' : ''}`}
                                            onClick={() => handleHorarioSeleccionado(horario)}
                                    >
                                        <div className="card-body">
                                            <h5 className="card-title">Horario</h5>
                                            <p className="card-text">{horario.horaInicio} - {horario.horaFin}</p>
                                            <p className="card-text">Doctor: {horario.doctor.nombres}</p>
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={handleRegistroCita} className="btn btn-primary">
                        Registrar Cita
                    </button>
                </form>

            </div>
        </div>
    );
};
export default RegistrarCitaUser;
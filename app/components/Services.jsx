export function Services(){
    return(
        <div id="services-container">
            <h3 id="services-title">servicios</h3>
            <div id="services">
                <div id="parking" className="service">
                    <div id="parking-title-container" className="service-title-container">
                        <i id="parking-icon" className="service-icon fa-solid fa-car"></i>
                        <h4 id="parking-title" className="service-title">Estacionamiento</h4>
                    </div>
                    <div id="parking-text-container" className="service-text-container">
                        <p id="parking-text" className="service-text">
                            Accesos: Av Santa Fe 3253 y en Arenales 3360.
                            <br/><br/>
                            Horario: de lunes a domingo de 8 a 23 horas.
                            <br/><br/>
                            Recordá que una vez abonado el ticket en las cajas de estacionamientos del primer subsuelo, tenés 10 minutos para retirar tu vehículo.
                        </p>
                    </div>
                </div>
                <div id="handicapped" className="service">
                    <div id="handicapped-title-container" className="service-title-container">
                        <i id="handicapped-icon" className="service-icon fa-solid fa-wheelchair-move"></i>
                        <h4 id="handicapped-title" className="service-title">Personas con movilidad reducida</h4>
                    </div>
                    <div id="handicapped-text-container" className="service-text-container">
                        <p id="handicapped-text" className="service-text">
                            Contamos con ascensores y baños para personas discapacitadas o con movilidad reducida en todos los pisos del centro comercial.
                        </p>
                    </div>
                </div>
                <div id="wifi" className="service">
                    <div id="wifi-title-container" className="service-title-container">
                        <i id="wifi-icon" className="service-icon fa-solid fa-wifi"></i>
                        <h4 id="wifi-title" className="service-title">WI-FI</h4>
                    </div>
                    <div id="wifi-text-container" className="service-text-container">
                        <p id="wifi-text" className="service-text">
                            El centro comercial cuenta con servicio de internet inalámbrica.
                            <br/><br/>
                            Red: Alto Palermo Wi-Fi
                            <br/><br/>
                            Acceso: Libre
                        </p>
                    </div>
                </div>
                <div id="transport" className="service">
                    <div id="transport-title-container" className="service-title-container">
                        <i id="transport-icon" className="service-icon fa-solid fa-train-subway"></i>
                        <h4 id="transport-title" className="service-title">Transporte</h4>
                    </div>
                    <div id="transport-text-container" className="service-text-container">
                        <p id="transport-text" className="service-text">
                            Colectivo: Líneas 29, 39, 64, 68, 111, 128
                            <br/><br/>
                            Subte: Línea D - Estación Bulnes
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
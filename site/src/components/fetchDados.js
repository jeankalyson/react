import { useEffect, useState } from "react";
import "../App.css"


const FetchDados = () => {
    const url = 'https://random-data-api.com/api/device/random_device?size=20'
    const [Dispositivo, setDispositivo] = useState([]);

    const getDispositivo = async() =>{
        const response = await fetch(url);
        const celular = await response.json();
        setDispositivo(celular);
    };
    useEffect(() =>{
        getDispositivo();
    },[])
    return(<>
        <header class="text-center">
                          <h2 className="api">API DE CELULARES</h2>
        </header>
        <section>
            {
                Dispositivo.map((i) =>{
                    const {id,manufacturer,model,version, uid,build_number,platform,serial_number } = i;
                    return(
                        <div key={id}>
                            <h1 className="nome">MODELO : {model}</h1>
                            <p><b>MANUFATUREIRA :</b>{manufacturer}</p>
                            <p><b>VERSÃO : </b>{version}</p>
                            <p><b>PLATAFORMA : </b>{platform}</p>
                            <p><b>UID : </b>{uid}</p>
                            <p><b>BUILD_NUMBER: </b>{build_number}</p>
                            <p><b>SERIAL_NUMBER : </b>{serial_number}</p>
                        </div>
                    )
                })
            }
        </section>
    </>);
};

export default FetchDados;
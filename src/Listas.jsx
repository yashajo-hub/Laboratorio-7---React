import Cards from "./Cards";
import { useState } from 'react';

const Listas = () => {
    const artistas = [
        { id: 1, nombre: "André Rieu", imagen: 'andre_rieu.jpg' },
        { id: 2, nombre: "Max Richter", imagen: 'max_richter.jpg' },
        { id: 3, nombre: "Ludovico Einaudi", imagen: 'ludovico_einaudi.jpg' },
    ];

    const [total, setTotal] = useState(0);
    const [busqueda, setBusqueda] = useState("");

    const artistasFiltrados = artistas.filter((artista) =>
        artista.nombre.toLowerCase().includes(busqueda.toLowerCase()),
    );

    return (
        <div
            style={{
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <h1>Total de likes de artistas: {total}</h1>

            <input
                style={{
                    padding: "10px",
                    marginBottom: "20px",
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",

                }}
                type="text"
                placeholder="Ingrese nombre de un artista"
                value={busqueda}
                onChange={(e) => {
                    setBusqueda(e.target.value);

                }}
            />


            <div style={{ display: 'flex', gap: '10px' }}>
                {artistasFiltrados.length === 0 && (
                    <p style={{ color: "#ccc", fontSize: "20px" }}>
                        No se encontraron artistas con el nombre "{busqueda}"
                    </p>
                )}
                {artistasFiltrados.map((artista) => {
                    return <Cards key={artista.id} nombre={artista.nombre} img={artista.imagen}
                        onlike={() => {
                            setTotal(total + 1);
                        }}
                    />
                })}
            </div>
        </div>
    );
};

export default Listas;

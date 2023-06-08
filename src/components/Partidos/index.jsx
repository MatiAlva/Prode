import '../../scss/Partidos.scss';
import Navbar from '../Navbar';

function Partidos() {
	return (
		<>
			<Navbar />
			<main>
				<h1 className="partidos__title">PARTIDOS</h1>
				<button className="btn btn-sec--light">Seleccionar liga</button>
				<section>
					<div className="partidos__dia w-100">
						<h3 className="fw-400">SÁBADO 13</h3>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<p>Finalizado</p>
								<p className="btn btn-sec--dark-outline">1:1</p>
							</div>
							<p>Equipo</p>
						</div>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<p>En vivo</p>
								<p className="btn btn-sec--dark">2:1</p>
							</div>
							<p>Equipo</p>
						</div>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<button className="btn btn--primary">Hacer pronóstico</button>
								<p className="btn btn-sec--dark-outline">19:00</p>
							</div>
							<p>Equipo</p>
						</div>
					</div>
					<div className="partidos__dia w-100">
						<h3 className="fw-400">DOMINGO 14</h3>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<button className="btn btn--primary">Hacer pronóstico</button>
								<p className="btn btn-sec--dark-outline">16:30</p>
							</div>
							<p>Equipo</p>
						</div>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<button className="btn btn--primary">Hacer pronóstico</button>
								<p className="btn btn-sec--dark-outline">19:00</p>
							</div>
							<p>Equipo</p>
						</div>
						<div className="partidos__partido flex--row w-100">
							<p>Equipo</p>
							<div className="marcador flex--col">
								<button className="btn btn--primary">Hacer pronóstico</button>
								<p className="btn btn-sec--dark-outline">21:30</p>
							</div>
							<p>Equipo</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export default Partidos;

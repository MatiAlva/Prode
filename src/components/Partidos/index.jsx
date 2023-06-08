import { useEffect, useState } from 'react';
import '../../scss/Partidos.scss';
import Card from '../Card';
function Partidos({ match }) {
	const [result, setResult] = useState(null);

	useEffect(() => {
		fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
			headers: {
				'X-RapidAPI-Key': import.meta.env.VITE_KEY,
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setResult(data.response);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<main>
			<section>
				<h1 className="partidos__title">PARTIDOS</h1>
				<button className="btn btn-sec--light">Seleccionar liga</button>
				<div className="partidos__dia w-100">
					<h3 className="fw-400">
						{new Intl.DateTimeFormat('es-AR', {
							dateStyle: 'full',
						}).format(new Date())}
					</h3>
					{result ? (
						result.map((match) => <Card match={match} key={match.fixture.id} />)
					) : (
						<div>Loading...</div>
					)}
				</div>
			</section>
		</main>
	);
}

export default Partidos;

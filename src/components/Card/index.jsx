import '../../scss/Partidos.scss';

const Card = ({ match }) => {
	return (
		<div className="partidos__partido flex--row w-100">
			<p>{match.teams.home.name}</p>
			<img
				src={match.teams.home.logo}
				alt={match.teams.home.name}
				className="logo"
			/>
			<div className="marcador flex--col">
				{match.fixture.status.long != 'finished' ? (
					<>
						<p className="fw-400">{match.fixture.status.long}</p>
						<p>{match.fixture.status.elapsed}</p>
						<span className="btn btn-sec--dark">
							{match.goals.home}:{match.goals.away}
						</span>
						<button className="btn btn--primary">Hacer pronóstico</button>
					</>
				) : (
					<>
						<p className="fw-400">{match.fixture.status.long}</p>
						<p className="btn btn-sec--dark-outline">
							{match.goals.home}:{match.goals.away}
						</p>
					</>
				)}
			</div>
			<img
				src={match.teams.away.logo}
				alt={match.teams.away.name}
				className="logo"
			/>
			<p>{match.teams.away.name}</p>
		</div>
	);
};

export default Card;

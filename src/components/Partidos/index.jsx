import '../../scss/Partidos.scss';
function Partidos({ match }) {
    return (
        <>
            <main>
                <section>
                    <div className="partidos__dia w-100">
                        <h3 className="fw-400">{match.fixture.date}</h3>
                        <div className="partidos__partido flex--row w-100">
                            <p>{match.teams.home.name}</p>
                            <img src={match.teams.home.logo} alt={match.teams.home.name} className='logo' />
                            <div className="marcador flex--col">
                                <>
                                    {
                                        match.fixture.status.long != 'finished' ? (
                                            <>
                                                <p className="fw-400">{match.fixture.status.long}</p>
                                                <p>{match.fixture.status.elapsed}</p>
                                                <p className="btn btn-sec--dark">{match.goals.home}:{match.goals.away}</p>
                                                <button className="btn btn--primary">Hacer pronóstico</button>
                                            </>
                                        ) : (
                                            <>
                                                <p className="fw-400">{match.fixture.status.long}</p>
                                                <p className="btn btn-sec--dark-outline">{match.goals.home}:{match.goals.away}</p>
                                            </>
                                        )
                                    }
                                </>
                            </div>
                            <p>{match.teams.away.name}</p>
                            <img src={match.teams.away.logo} alt={match.teams.away.name} className='logo' />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Partidos;
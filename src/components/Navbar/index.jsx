import '../../scss/Navbar.scss';

function Navbar() {
	return (
		<header className="primary-header flex">
			<a className="navlink brand fw-700">PRODE</a>
			<nav>
				<ul className="navbar flex">
					<li>
						<a className="navlink">Inicio</a>
					</li>
					<li>
						<a className="navlink active">Partidos</a>
					</li>
					<li>
						<a className="navlink">Ranking</a>
					</li>
					<li>
						<a className="navlink">Grupos</a>
					</li>
					<li>
						<a className="navlink">FAQ</a>
					</li>
					<li>
						<a className="btn btn--primary">Logout</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;

import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

export function FooterComponent() {
  return (
    <Container fluid className="bg-dark mt-auto">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <small className="col-md-4 mb-0 text-white">2024 MyPokemon Deck</small>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <Image src="/img/logo.svg" width={30} className="me-2 mb-1" />
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://pokeapi.co/"
              rel="noreferrer"
              target="_blank"
              className="nav-link px-2 text-white"
            >
              <small>API Official Site</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://pokeapi.co/"
              rel="noreferrer"
              target="_blank"
              className="nav-link px-2 text-white"
            >
              <small>API Documentation</small>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://pokeapi.co/"
              rel="noreferrer"
              target="_blank"
              className="nav-link px-2 text-white"
            >
              <small>Source code</small>
            </a>
          </li>
        </ul>
      </footer>
    </Container>
  );
}
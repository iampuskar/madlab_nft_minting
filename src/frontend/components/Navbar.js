import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import logo from './logo.svg'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="primary" variant="light">
            <Container>
                <Navbar.Brand>
                    <img src={logo} width="40" height="40" className="" alt="" />
                    &nbsp; Madlab NFT Project
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create NFT</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">Purchases Items</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>

                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;
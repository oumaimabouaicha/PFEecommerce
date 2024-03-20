import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link } from "react-router-dom"
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch ,useSelector} from "react-redux"
import { useNavigate } from "react-router-dom";
//import { logout, reset } from "../features/AuthSlice";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
//import {urlimage} from "../axios/Api"
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

//import SettingsApplicationsIcon from '@mui/iconsmaterial/SettingsApplications';

const NavScroll = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClickListItem = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
        };
const {user} = useSelector((state) =>state.auth);


const navigate = useNavigate();
const {cartTotalQuantity} = useSelector((state) => state.storecart);
return (
<Navbar expand="lg" className="bg-body-tertiary">
<Container fluid>


<IconButton size="large"
edge="end"
aria-label="account of current user"
aria-haspopup="true"
color="error"
onClick={()=>{navigate("/cart")}}
>
<ShoppingCartIcon sx={{ fontSize: 40 }}/>
<Badge badgeContent={cartTotalQuantity>0?cartTotalQuantity:0}

color="success">
</Badge>
</IconButton>
<Navbar.Brand href="#"> </Navbar.Brand>
<Navbar.Toggle aria-controls="navbarScroll" />
<Navbar.Collapse id="navbarScroll">
<Nav
className="me-auto my-2 my-lg-0"
style={{ maxHeight: '100px' }}
navbarScroll
>
<Nav.Link as={Link} to="/articles">Articles</Nav.Link>
<Nav.Link as={Link} to="/categories">Catégories</Nav.Link>
<Nav.Link as={Link} to="/scategories">Sous Catégories</Nav.Link>
<Nav.Link as={Link} to="/articlesadmin">Articles Admin</Nav.Link>
<NavDropdown title="Link" id="navbarScrollingDropdown">
<NavDropdown.Item href="#action3">Action</NavDropdown.Item>
<NavDropdown.Item href="#action4">
Another action
</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action5">
Something else here
</NavDropdown.Item>
</NavDropdown>
<Nav.Link href="#" disabled>
Link
</Nav.Link>
</Nav>

<Stack direction="row" spacing={2}>
<h6 style={mystyle}>{user.email}</h6>
<Avatar alt="Remy Sharp" src={user.avatar} />

</Stack>

<Form className="d-flex">
<Form.Control
type="search"
placeholder="Search"
className="me-2"
aria-label="Search"
/>
<Button variant="outline-success">Search</Button>

</Form>
</Navbar.Collapse>
</Container>
</Navbar>
)
}
export default NavScroll
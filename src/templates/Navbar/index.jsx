import logo from '../../assets/Prosperix.png';
import {StyledButton} from '../../Components/button.style'
import {StyledNavbar} from '../../Components/Navbar.style'

function Navbar() {
    return(
            <StyledNavbar>
                <a href="">

                    <img src={logo} alt="" />

                </a>
                <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Service</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Help</a></li>
                </ul>
                <div>
                <button className='Login'>Login</button>
                <StyledButton>Get started</StyledButton>
                </div>
            </StyledNavbar>
    )
}

export default Navbar;
import React from 'react'
import './Header.css'
import logo from '../../assets/logo_netflix.png'
import profile from '../../assets/netflix_avatar.png'
import { HeaderLogo, HeaderLogoImg, HeaderUser, HeaderUserImg } from './styles'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'


const Header = ({black}) => {
    const history = useHistory()

    return (
            <header className={black ? 'black' : ''}>
                <HeaderLogo>
                    <a onClick={() => goToHomePage(history)}>
                        <HeaderLogoImg src={logo} alt="Netflix" />
                    </a>
                </HeaderLogo>
                <HeaderUser>
                    <a href="#">
                        <HeaderUserImg src={profile} alt="Usuário" />
                    </a>
                </HeaderUser>
            </header>
    )
}

export default Header

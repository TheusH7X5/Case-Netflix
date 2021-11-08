import React from 'react'
import { 
    BackgroundItem, 
    Button, 
    DivEntrar, 
    Container, 
    HeaderLogo, 
    HeaderLogoImg, 
    SombraTop,
    SombraBottom,
    InputContainer,
    ButtonContainer,
    InputButtonContainer
} from './styles'
import logo from '../../assets/logo_netflix.png'
import { useHistory } from 'react-router-dom'
import { goToFilmListPage } from '../../routes/coordinator'


const HomePage = () => {

    const history = useHistory()
    return (
        <Container>
            <BackgroundItem>
                <SombraTop>
                    <SombraBottom>
                <header>
                    <HeaderLogo>
                        <HeaderLogoImg src={logo} alt="Netflix" />
                <divContainer>
                    <h1>Filmes, séries e muito mais. Sem Limites.</h1>
                    <h3>Assista onde quiser. Cancele quando quiser.</h3>
                    <h5>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h5>
                    <InputButtonContainer>
                        <InputContainer />
                        <ButtonContainer>Vamos lá</ButtonContainer>
                    </InputButtonContainer>
                </divContainer>
                    </HeaderLogo>
                    <DivEntrar>
                        <Button onClick={() => goToFilmListPage(history)}>Entrar</Button>
                    </DivEntrar>
                </header>
                    </SombraBottom>
                </SombraTop>
            </BackgroundItem>
        </Container>
    )
}

export default HomePage

import styled from 'styled-components'
import banner from '../../assets/background_netflix.png'

export const Container = styled.div`
`
export const SombraTop = styled.div`
    background: Linear-gradient(to top, #111 1%, transparent 99%);
    width: 100%;
    height: 100vh;
`
export const SombraBottom = styled.div`
    background: Linear-gradient(to bottom, #111 1%, transparent 99%);
    width: 100%;
    height: 100vh;
`

export const BackgroundItem = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: url(${banner});
    opacity: 0.95;
`
export const HeaderContainer = styled.div`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background: transparent;
    
`
export const HeaderLogo = styled.div`
    height:6rem;
    margin-top: 1rem;
    opacity: 2;
`
export const HeaderLogoImg = styled.img`
    height:100%;
`
export const DivEntrar = styled.div``

export const Button = styled.button`
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    padding: 7px 17px;
    border-radius: 3px;
    text-decoration: none;
    align-items: center;
    margin-right: 2.5rem;
    transition: all ease 0.2s;
    background-color: #E50914;
    color: #fff;
    margin-top: 1rem;
    border: none;
    opacity: 2;
    &:hover {
        opacity: 0.7;
    }
    @media(max-width: 768px) {
    font-size: 10px;
}
`
export const DivContainer = styled.div`
width: 100%;
`
export const InputButtonContainer = styled.div`
display: flex;
height: 3rem;
@media(max-width: 768px) {
    width: 150%;
}
`
export const InputContainer = styled.input`
    width: 65%;
`
export const ButtonContainer = styled.button`
    font-size: 16px;
    border-radius: 3px;
    text-decoration: none;
    transition: all ease 0.2s;
    background-color: #E50914;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
    @media(max-width: 768px) {
    font-size: 10px;
}
`
import styled from 'styled-components'

export const FeaturedVertical = styled.div`
    width: inherit;
    height: inherit;
    background: Linear-gradient(to top, #111 10%, transparent 90%);
`
export const FeaturedHorizontal = styled.div`
    width: inherit;
    height: inherit;
    background: Linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left:2rem;
    padding-bottom: 150px;
    padding-top: 70px;
`
export const FeaturedName = styled.div`
    font-size: 60px;
    font-weight: bold;

@media(max-width: 768px) {
    font-size: 40px;
}
`
export const FeaturedInfo = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

@media(max-width: 768px) {
    font-size: 16px;
}
`
export const FeaturedPoints = styled.div`
    display: inline-block;
    margin-right: 15px;
    color: #46d369;
`
export const FeaturedYear = styled.div`
    display: inline-block;
    margin-right: 15px;
`
export const FeaturedSeasons = styled.div`
    display: inline-block;
    margin-right: 15px;
`
export const FeaturedDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;

@media(max-width: 768px) {
    font-size:14px;
    max-width: 100%;
    margin-right: 2rem;
}
`
export const FeaturedButtons = styled.div`
    margin-top: 15px;
`
export const FeaturedWatchButton = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    background-color: #fff;
    color: #000;
    &:hover {
        opacity: 0.7;
    }
    @media(max-width: 768px) {
    font-size: 16px;
}
`
export const FeaturedMyListButton = styled.a`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
    background-color: #333;
    color: #fff;
    &:hover {
        opacity: 0.7;
    }
    @media(max-width: 768px) {
    font-size: 16px;
}
`
export const FeaturedGenres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;

@media(max-width: 768px) {
font-size: 16px;
}
`
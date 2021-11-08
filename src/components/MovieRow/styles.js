import styled from 'styled-components'

export const Title = styled.h2`
    margin: 0 0 0 2rem;
`
export const ListArea = styled.div`
    overflow-x: hidden;
    padding-left: 2rem;
`
export const MovieRowItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;
`
export const MovieRowItemImg = styled.img`
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover{
        transform: scale(1);
    }
`
export const MovieRowList = styled.div`
    transition: all ease 0.5s;
`
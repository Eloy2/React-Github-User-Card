import React from 'react';
import styled from 'styled-components';

const blue = '#61dafb';

const green = '#00ff91';

const CardDiv = styled.a`
    width: 20%;
    height: 49.3vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    border-radius: 5px;
    border: 2px solid ${blue};
    padding: 0 0 1% 0;
    margin: 1.5%;
    transition: transform .2s;
    &:hover {
        transform: scale(1.07);
      }
`

const CardImg = styled.img`
    border-radius: 5px;
    width: 100%;
    height: auto;
`

const P = styled.p`
    color: ${green};
    font-size: small;
`

const P2 = styled.p`
    color: ${blue};
    font-size: small;
`

const DetailDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
`


const Card = props => {
    return (
        <CardDiv href={props.user.html_url}>
            <CardImg alt={""} src={props.user.avatar_url}></CardImg>
            <DetailDiv> <P2>Name: </P2> <P>{props.user.name}</P> </DetailDiv>
            <DetailDiv> <P2>Login: </P2> <P>{props.user.login}</P> </DetailDiv>
            <DetailDiv> <P2>Following: </P2> <P>{props.user.following}</P> </DetailDiv>
            <DetailDiv> <P2>Followers: </P2> <P>{props.user.followers}</P> </DetailDiv>
            <DetailDiv> <P2>Public_repos: </P2> <P>{props.user.public_repos}</P> </DetailDiv>
        </CardDiv>
    )
}

export default Card;
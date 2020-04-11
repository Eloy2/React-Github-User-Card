import React from 'react';
import styled from 'styled-components';

const blue = '#61dafb';

const green = '#00ff91';

const CardDiv = styled.a`
    width: 20%;
    height: 40.2vh;
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
    width: 90%;
`


class FollowingCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          following: []
         };
    }

    // componentDidMount() {
    //     this.props.followingUrls.map(item => {
    //         axios
    //         .get(item)
    //         .then(res => {
    //             const user = res.data;
    //             console.log("user", user);
    //             this.setState({ following: [...user, user]})
    //         })
    //         .catch(err => console.log("error in followingCard axios", err))
    //         return this.setState({ following: [...item, item]})
    //     })
    //     console.log("Card Following State", this.state.following);
    // }

    render() {
        return (
            this.props.following.map( item => {
                    console.log(item)
                    return (
                        <CardDiv href={item.html_url}>
                            <CardImg alt={""} src={item.avatar_url}></CardImg>
                            <DetailDiv> <P2>Login: </P2> <P>{item.login}</P> </DetailDiv>
                            <DetailDiv> <P2>ID: </P2> <P>{item.id}</P> </DetailDiv>
                            <DetailDiv> <P2>Node ID: </P2> <P>{item.node_id}</P> </DetailDiv>
                        </CardDiv>
                    )
                }
            )

        )
    }
}

export default FollowingCard;
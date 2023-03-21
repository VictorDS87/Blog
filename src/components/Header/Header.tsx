import { Container, HomeContainer } from "./styles";

import headerImage from '../../assets/logoHeader.svg'

export function Header() {
    return (
        <HomeContainer>
            <Container>
                <img src={headerImage} alt="" />
                
            </Container>

        </HomeContainer>
    )
}
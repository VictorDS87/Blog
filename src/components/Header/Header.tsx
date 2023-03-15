import { HomeContainer, Pato } from "./styles";

import headerImage from '../../assets/logoHeader.svg'

export function Header() {
    return (
        <HomeContainer>
            <Pato>
                <img src={headerImage} alt="" />
                
            </Pato>

        </HomeContainer>
    )
}
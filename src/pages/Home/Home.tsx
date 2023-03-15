import { Header } from "../../components/Header/Header";
import { Profile } from "../../components/Profile/Profile";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Header />
            <Profile />
        </HomeContainer>
    )
}
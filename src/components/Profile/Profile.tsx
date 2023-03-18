import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import { CardProfile, LinkProfile, Name, ProfileContainer, ProfileInfo, ProfileInfoLowerPart } from "./styles";

// <Buildings size={32} /> <GithubLogo size={32} /> <Users size={32} />


import { Buildings, GithubLogo, Users } from "phosphor-react";
import toForwardImage from '../../assets/toForward.svg' 

export function Profile() {

    const { profiles } = useContext(BlogContext)
    return (
        <ProfileContainer>
            
            <img src={profiles?.avatar} alt="" />

            
            <CardProfile>
                
                <ProfileInfo>
                    <Name>{profiles?.nameProfile}</Name>
                    <LinkProfile>
                        
                        GITHUB
                        <a href={profiles?.url} target="_blank">
                            <img src={toForwardImage} alt="" />
                            
                        </a>
                    </LinkProfile>
                </ProfileInfo>
                <ProfileInfo>
                    <p>{profiles?.bio}</p>
                </ProfileInfo>

                <ProfileInfoLowerPart>
                    <p><GithubLogo size={24} /> <span>{profiles?.login}</span></p>
                    <p><Buildings size={24} /> <span>{profiles?.company}</span></p>
                    <p><Users size={24} /> <span>{profiles?.followers} seguidores</span></p>
                </ProfileInfoLowerPart>

                    
                    


            </CardProfile>
            
        </ProfileContainer>
    )
}
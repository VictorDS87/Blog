import styled from 'styled-components'
import { ReactElement } from "react"

export const Container = styled.main`
   width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: -5rem;

    background: #0B1B2B;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    
    display: flex;
    justify-content: center;

    img {
        height: 160px;
        border-radius: 6px;
        margin: 2rem 1rem;
    }
    
`;

export const PostContainer = styled.main`
    
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 2rem auto;

    h1, h2, h3, h4, h5 {
        color: ${props => props.theme.title};
    }
    
    a{
        color: ${props => props.theme.blue};
    }
    
    p {
        color: ${props => props.theme.text};

        strong {
            color: ${props => props.theme.title};
        }
    }
    
    li {
        strong {
            color: ${props => props.theme.title};
        }
        color: ${props => props.theme.text};
        
    }

`;


export const CardProfile = styled.div`
    width: 100%;
    /* display: flex; */
    padding: 1rem;  
    margin-top: -1rem;
`
export const Title = styled.div`
    font-size: 1.5rem;
    color: ${props => props.theme.title};
    margin-bottom: 1rem;
`

export const ProfileInfo = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 0.82rem;
    
    color: ${props => props.theme.title};
    
    a {
        color: ${props => props.theme.blue};
        text-decoration: none;

        &:hover {
            filter: brightness(0.5);
            transition: 0.3s;
        }
    }
`
export const ProfileInfoLowerPart = styled.div`
    display: flex;
    gap: 2rem;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.subtitle};

    svg {
        color: ${props => props.theme.label};
    }
    p {
        display: flex;
        align-items: center;
        gap: 0.4rem;       
    }

    
`

export const LinkPost = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 0.7rem;
    color:#3294F8;
    
    display: flex;
    align-items: center;

    img {
        align-items: center;
        cursor: pointer;
        width: 12px;
        height: 12px;
        &:hover {

            background: #3294F8;
        }
    }
`
import styled, { css } from 'styled-components'

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: -5rem;
    margin-left: 22.289rem;


    background: #0B1B2B;
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    
    display: flex;
    
    img {
        height: 160px;
        border-radius: 6px;
        margin: 2rem 1rem;
    }
`

export const CardProfile = styled.div`
    width: 100%;
    /* display: flex; */
    padding: 1rem;  
`

export const ProfileInfo = styled.div`
    display: flex;
    justify-content: space-between;

    align-items: center;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.text};
`
export const ProfileInfoLowerPart = styled.div`
    display: flex;
    gap: 2rem;

    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.subtitle};

    margin-top: 2.7rem;
    svg {
        color: ${props => props.theme.label};
    }
    p {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        
        
    }

    
`

export const Name = styled.p`
    color: ${porps => porps.theme.title};
    font-size: 1.5rem;
    /* margin-top: 0.8rem; */

    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    
`

export const LinkProfile = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    
    display: flex;
    margin-top: 2.1rem;
    font-size: 0.7rem;

    color:#3294F8;
    img {
        cursor: pointer;
        margin-top: 0.0000001rem;
        width: 12px;
        height: 12px;
        &:hover {

            background: #3294F8;
        }
    }
`
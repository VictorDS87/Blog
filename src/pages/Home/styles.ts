import styled from 'styled-components'

export const HomeContainer = styled.main`
    width: 100%;
    max-width: 1980px;

`

export const SummaryBlogContainer = styled.main`
    width: 100%;
    max-width: 1173px;
    margin: 0 auto;  
    margin-top: 2rem;

    columns: 2 auto; 
`

export const CardBlog = styled.div`
    /* display: flex; */
    
    text-overflow: ellipsis; 
    
    width: 100%;
    

    /* Base/Post */

    background: #112131;
    border-radius: 10px;
    white-space: normal; 
    
    overflow: hidden;
    text-overflow: clip; 

    cursor: pointer;

    transition: 0.3s;
    &:hover {
        filter: brightness(50%)
    }
    
`

export const Title = styled.div`
    font-family: 'Nunito', sans-serif;
    font-weight: 700;

    font-size: 1.15rem;
    margin: 1rem;

    display: flex;
    /* align-content: center; */
    align-items: center;
    justify-content: space-between;

    color: ${props => props.theme.title};
`

export const DateBlog = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
 
    margin-top: 1rem;
    font-size: 0.75rem;

    color: ${props => props.theme.subtitle};
`

export const Body = styled.p`
    font-family: 'Nunito', sans-serif;
    font-weight: 400;

    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4; 
    -webkit-box-orient: vertical; 
    margin: 1rem;

    color: ${props => props.theme.text};
`
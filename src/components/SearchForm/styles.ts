import styled from "styled-components"

export const SearchFormContainer = styled.form`
    
    width: 100%;
    max-width: 1167px;
    margin: 0 auto;  
    
    div { 
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        color: ${props => props.theme.title};
    }
    
    input {
        margin-top: 0.5rem;
        border-radius: 6px;
        height: 45px;       
        width: 98.5%;
        background-color: ${props => props.theme.input};
        color: ${props => props.theme.text};
        border: none;
        padding-left: 20px;
    }
`

export const SearchFormDiv = styled.div`
    margin-top: 2rem;
`
export const LabelSpan = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    span {
        color: ${props => props.theme.span};
        font-size: 0.85rem;
        margin-right: 1.4rem;
    }
`
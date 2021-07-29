import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 20em;
`

export const ImageContainer = styled.div`
    position: relative;
    height: 10em;
    width: 4em;

    > div {
        transform: translate3d(0, -0.9em, 0);
    }
`

export const TextContainer = styled.div`
    text-align: left;
    height: 107px;
    width: 120px;
    align-self: flex-end;
    
    > h2 {
        height: 3em;
    }
    
    > div {
        height: 40px;
        font-size: 0.8em;
        
        > div {
            //display: none;
        }
    }
`

export const TextLink = styled.a`
    font-weight: 600;
    color: ${(props) => props.theme.highlight};
    border-bottom: 0.15em solid ${(props) => props.theme.highlight};
`
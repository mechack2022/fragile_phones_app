import styled from 'styled-components'

 export const ButtonContainer = styled.button`
    text-transform:capitalise;
    color:var(--lightBlue);
    font-size:1.4rem;
    background:transparent;
    padding:0.2rem 0.5rem;
    border-radius:0.5rem;
    border:0.05rem solid var(--lightBlue);
    margin:0.5rem 0.2rem 0.5rem 0;
    cursor:pointer;
    transition:all 2s ease-in-out;
    &:hover{
        background:var(--lightBlue);
        color:var(--mainblue)
    }
    &:focus{
        outline:none;
    }

` 
export const NavWrapper= styled.nav`
    background:var(--mainblue)!important;
    .nav-link{
        color:var(--lightBlue);
        text-transform:capitalise;
        font-size:1.3rem;
    };

`
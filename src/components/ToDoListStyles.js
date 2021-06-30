import styled from "styled-components";

export const ListContainer = styled.div`
width: 30rem;
display: flex;
justify-content: center;
flex-direction: column;
margin: 1rem auto;
border-radius: 0.5rem;
background: #fafafa;
`

export const Title = styled.h1`
text-align: center;
padding: 2.5rem;
`

export const ListTitle = styled.p`
text-align: center;
padding: 1rem;
font-size: 1.2rem;
`

export const ListForm = styled.form`
width: 90%;
text-align: center;
margin: auto;
`

export const InputForm = styled.input`
outline: none;
padding: 0.3rem;
width: 70%;
border-radius: 0.3rem;
border: 1px solid black;
font-size: 1.2rem;
`

export const Button = styled.button`
width: 50%;
background: #000;
color: #fafafa;
border: none;
outline: none;
cursor: pointer;
border-radius: 0.3rem;
padding: 0.4rem;
margin: 1rem;
font-size: 1rem;
`

export const ItemContainer = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
`

export const ItemBtn = styled.button`
width: 2rem;
height: 2rem;
border: none;
background-color: #fafafa;
color: ${p => p.bgcolor ? "green" : "red"};
`

export const Items = styled.li`
display: flex;
justify-content: space-around;
`

export const BtnContainer = styled.div`
display: flex;
`


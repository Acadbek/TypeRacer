import styled from "styled-components";

export const Block = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh
`
export const WrapperCar = styled.div`
	transform:  translateX(${({ pressed }) => pressed ? pressed + 'px' : 0})
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1000px;	
	margin: 40px auto;
`

export const Text = styled.div`
color: ${({ completed }) => completed ? 'green' : 'red'}};
font-size: 20px;
`

export const Input = styled.input`
width: 400px;
padding: 10px; 10px;
border: solid green 3px;
border-radius: 4px;
outline: none;
`
import styled from "styled-components";

export const Block = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh
`
export const Car = styled.div`
	transform:  translateX(${({ pressed }) => pressed ? pressed + 'px' : 0})
`
export const Wrapper = styled.div`
	display: flex;
	gap: 10px;
`
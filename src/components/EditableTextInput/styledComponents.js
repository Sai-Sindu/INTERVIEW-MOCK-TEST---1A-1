import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`
export const TextCard = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
  padding: 50px;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    padding: 30px;
  }
`
export const Heading = styled.h1`
  color: #000000;
  font-size: 35px;
  font-weight: 600;
`

export const EditableTextCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const InputCard = styled.input`
  border: 1px solid #cbd2d9;
  outline: none;
  border-radius: 5px;
  padding: 15px;
  font-size: 15px;
  color: #323f4b;
`
export const Text = styled.p`
  color: #323f4b;
  font-size: 20px;
`

export const TextCardButton = styled.button`
  background-color: #d946ef;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  margin-left: 15px;
  padding: 10px;
`

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto;
  flex: 1;
`

const Form = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <Background>
      <Form>
        adsdsa
      </Form>      
    </Background>

  )
}

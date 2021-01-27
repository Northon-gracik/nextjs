import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  background-image: url("https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/03/29142631/nextjs-now-2.jpg");
  height: 700px;
  align-items: center;
  justify-content: center;
  display: flex;
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

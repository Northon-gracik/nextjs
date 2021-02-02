import styled from 'styled-components'
import QuizBackground from '../src/components/QuizBackground'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/03/29142631/nextjs-now-2.jpg");
  flex: 1;
`

const Form = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return (
    <QuizBackground backgroundImage={"https://www.google.com/url?sa=i&url=https%3A%2F%2Flinguinecode.com%2Fpost%2Fdeploy-nextjs-custom-server-to-now-2&psig=AOvVaw09Iuhie2oFxm8a2FrjPaIY&ust=1611876845456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDBkqmjve4CFQAAAAAdAAAAABAh"}>
      <Form>
        adsdsa
      </Form>      
    </QuizBackground>

  )
}

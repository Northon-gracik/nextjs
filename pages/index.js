import styled from 'styled-components'
import Background from '../src/components/QuizBackground'
import { useState } from 'react'
import axios from 'axios'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  display: flex;
  width: 100%;
  /* background-size: cover;
  background-position: center;
  background-image: url("https://daqxzxzy8xq3u.cloudfront.net/wp-content/uploads/2019/03/29142631/nextjs-now-2.jpg"); */
  flex: 1;
  height: 100%;
  min-height: 667px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.Background}
`

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.primary};
`

function Home( props ) {
  return (
    <Background>
      <Form>
        <p>
          {props.name}
        </p>
        
      </Form>      
    </Background>

  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/1`)
  const json = await res.json()
  const name = await json.name
  return{ name: name }
}

export default Home;
// export async function  getSeverSideProps(context) {
//   // const name = axios.get(`https://rickandmortyapi.com/api/character/1`)
//   //   .then(resp => resp.name)
  
//   let name = 'nathalia'
//   console.log(name)
//   return {
//     props: {
//       name
//     }
//   }
// }
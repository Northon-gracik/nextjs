import styled from 'styled-components'
import { useState } from 'react'
import axios from 'axios'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const Background = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  height: 100%;
  min-height: 667px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.Dark.background}
`

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  background-color: ${({ theme }) => theme.colors.Dark.primary};
  flex-direction: column;
  border: 3px solid ${({ theme }) => theme.colors.Dark.contrast};
  overflow: hidden;
  border-radius: 10px
`
const Header = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.Dark.contrast};
  width: 100%;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`


function Home( props ) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = ( event ) => {
    event.preventDefault();
    axios.post('/api/login', {email, password})
  }

  return (
    <Background>
      <Card>
        <Header>
          <p>Header</p>
        </Header>
        <Content>
          <p>
            <form 
              onSubmit={handleSubmit}
              flex-direction="column"
            >
              <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                autoComplete="off"
              />
              {/* <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                autoComplete="off"
              /> */}
              <button 
                type="submit"
              >
                Login
              </button>
            </form>
          </p>
        </Content>
      </Card>      
    </Background>

  )

}

/* Home.getInitialProps = async (ctx) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/1`)
  const json
   = await res.json()
  const name = await json.name
  return{ name: name }
} */

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
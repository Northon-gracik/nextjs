// src/components/QuizBackground/index.js
import styled from 'styled-components';

const QuizBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg || "#f00"};
  flex: 1;
  background-image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Flinguinecode.com%2Fpost%2Fdeploy-nextjs-custom-server-to-now-2&psig=AOvVaw09Iuhie2oFxm8a2FrjPaIY&ust=1611876845456000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMDBkqmjve4CFQAAAAAdAAAAABAh";
  @media screen and (max-width: 500px) {
    
    &:after {
      content: "";
      background-size: cover;
    background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
      display: block;
      width: 100%;
      height: 210px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;

import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes` 
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const showDown = keyframes` 
  0% {
    transform: translateY(-25px);
    
  }
  100% {
    transform: translateY(0);
  }
`;

const scaleAnimation = keyframes` 
  0% {
    transform: scale(.88);
  }
`;

const showUp = keyframes` 
  0% {
    transform: translateY(25px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ResultWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const JigContainer = styled.div`
  padding: 6px;
  border-radius: 14px;
  background: #212121;
  transform: scale(.88);
  animation: ${fadeIn} .7s ease, ${showDown} .5s ease, ${scaleAnimation} .5s ease;
  animation-delay: .35s;
  animation-fill-mode: backwards;
`;

export const SliceContainer = styled.div`
  width: 69px;
  height: 69px;
  margin: 1.5px;
`;

export const Slice = styled.div.attrs(({ifZero}) => ({
  style: {
    opacity: ifZero && .4
  }
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 3px solid #2e2e2e;
  border-radius: 9px;
  background: 
    url(${props => props.bgUrl}) 
    no-repeat 
    -${props => props.positionX}px 
    -${props => props.positionY}px 
    / 300px;
  background-color: #7b7b7b;
  filter: drop-shadow(0 0 10px rgba(58,58,58,.2));
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} .7s ease, ${showDown} .5s ease;
  margin-top: 6vh;
`

export const TitleText = styled.div`
  font-size: 19px;
  color: #828282;
  margin: 11px;
  letter-spacing: .98px;
`

export const Title = styled.div`
  font-size: 31px;
  font-weight: 500;
  color: #E5E5E5;
  letter-spacing: 1.6px;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} .7s ease, ${showDown} .5s ease;
  animation-delay: .7s;
  animation-fill-mode: backwards;
`

export const ScoreText = styled.div`
  font-size: 19px;
  color: #828282;
  margin: 11px;
  letter-spacing: .98px;
`

export const Score = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Number = styled.div`
  font-size: 38px;
  font-weight: 500;
  color: #E5E5E5;
  letter-spacing: 1.6px;
`

export const Text = styled.div`
  font-size: 25px;
  font-weight: 400;
  color: #B2B2B2;
  letter-spacing: 1px;
  margin: 4px;
`

export const ToSort = styled.div`
  position: absolute;
  bottom: 22px;
  font-size: 23px;
  font-weight: 500;
  color: #A5A5A5;
  letter-spacing: 1.3px;
  transition: transform .18s ease;
  animation: ${fadeIn} .7s ease, ${showUp} .5s ease;
  animation-delay: .9s;
  animation-fill-mode: backwards;
  &:active{
    transform : scale(.9);
  }
`
import styled from 'styled-components'
import React, { useState } from 'react'
import logoCopperUltralight from '../assets/logoCopperUltralight.svg'
import logo from '../assets/LogoScopperUltralight.svg'

export default function HappyBirthday({ onClick }) {
  const [explanationVisible, setExplanationVisible] = useState(false)
  return (
    <>
      {explanationVisible ? (
        <StyledExplanation>
          <p>Liebe Mama,</p>

          <p>
            Du inspirierst mich seit ich denken kann mit Deiner Kreativität und
            Deinem technischen Verständnis, sodass es garnicht so sehr
            verwundern kann, dass mir auf der Suche nach einem Geschenk die Idee
            für mein Gesellenstück kam.
          </p>

          <p>
            Wahrscheinlich habt ihr euch schon gefragt was ich da mache, nun
            wird das Geheimnis gelüftet!
          </p>

          <p>Ich baue Dir Deine eigene Sewing Planner App! </p>
          <img className="logo" src={logo} alt="" />
          <img src={logoCopperUltralight} alt="Sewing Planner" />
          <span> - Sewrly - </span>
          <p>
            In der Du Deine Nähprojekte speichern kannst, eine Übersicht hast wo
            das Projekt gerade steht, und in einer Einkausliste festhalten
            kannst, was vielleicht noch fehlt. Wenn das Projekt fertig ist,
            kannst Du ein Bild hochladen und noch weitere Details festlegen, was
            Du das nächste Mal anders machen willst o.ä.
          </p>

          <p>
            Nach einer Woche bin ich noch nicht sehr weit, aber hier kannst Du
            Dir schonmal anschauen und ausprobieren, wie das ganze vielleicht
            mal aussehen wird:
          </p>
          <button onClick={onClick}>Zeig her!</button>
        </StyledExplanation>
      ) : (
        <StyledHappyBirthday>
          <p>Happy Birthday Mama!</p>
          <button onClick={() => setExplanationVisible(true)}>
            Geschenk öffnen
          </button>
        </StyledHappyBirthday>
      )}
    </>
  )
}
const StyledExplanation = styled.main`
display: flex;
flex-direction: column;
  background: var(--copper-medium);
  height: 100%;
  width: 100vw;
  color: var(--copper-ultralight);
  font-weight: 500; 
  padding: 30px 20px;

  span {
    margin: auto;
    font-size: 20px;
  }
  p {
    font-size: 26px;
    margin: 15px 0;
  }

  .logo {
    width: 100px;
    margin: auto;
    fill: var(--copper-ultralight);
  }
  img {
    padding: 20px 0;
  }
  button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    color: var(--teal-medium);
    margin: auto;
    background: var(--copper-ultralight);
    :active {
      background: var(--teal-medium);
      color: var(--copper-ultralight);
    }
`

const StyledHappyBirthday = styled.main`
  background: var(--copper-gradient);
  height: 100vh;
  width: 100vw;
  color: var(--copper-ultralight);
  text-align: center;

  p {
    font-size: 60px;
    padding: 60px 0;
  }

  button {
    width: 200px;
    height: 50px;
    border-radius: 10px;
    font-size: 20px;
    color: var(--teal-medium);
    background: var(--copper-ultralight);
    :active {
      background: var(--teal-medium);
      color: var(--copper-ultralight);
    }
`

import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const page404 = () => (
  <Main>
    <Helmet>
      <title>Error page</title>
    </Helmet>
    <Text>
      <H1>404</H1>
      <H4>SVENSKA:</H4>
      <P>
        Jag tror att du kan ha gått vilse! Jag är så ledsen, men den sida du
        letade efter verkar ha flyttats, raderats eller existerar inte. Du kan
        gå tillbaka till var du var eller gå direkt till vår{' '}
        <Link to="/">hemsida</Link>
      </P>
      <H4>ENGLISH:</H4>
      <P>
        I think you may be lost! I am so sorry but the page you were looking for
        appears to have been moved, deleted or does not exist. You could go back
        to where you were or head straight to our <Link to="/">home page.</Link>
      </P>
      <H4>DEUTSCH:</H4>
      <P>
        Ich denke du bist verloren! Es tut mir so leid, aber die Seite, nach der
        Sie gesucht haben, wurde verschoben, gelöscht oder existiert nicht mehr.
        Sie könnten zurückgehen, wo Sie waren, oder direkt auf unsere{' '}
        <Link to="/">Homepage</Link> gehen.
      </P>
      <H4>FRANÇAIS:</H4>
      <P>
        Je pense que vous pourriez être perdu! Je suis désolé mais la page que
        vous recherchez semble avoir été déplacée, supprimée ou n’existe pas.
        Vous pouvez retourner où vous étiez ou aller directement à notre{' '}
        <Link to="/">page d'accueil</Link>.
      </P>
      <H4>NEDERLANDS:</H4>
      <P>
        Ik denk dat je misschien verdwaald bent! Het spijt me heel erg, maar de
        pagina waarnaar u op zoek was lijkt te zijn verplaatst, verwijderd of
        bestaat niet. U kunt teruggaan naar waar u was of direct naar onze{' '}
        <Link to="/">startpagina</Link> gaan.
      </P>
      <H4>DANSK:</H4>
      <P>
        Jeg tror, du kan gå tabt! Jeg er ked af det, men siden du søgte synes at
        være blevet flyttet, slettet eller eksisterer ikke. Du kunne gå tilbage
        til hvor du var eller gå direkte til vores{' '}
        <Link to="/">hjemmeside</Link>.
      </P>
      <H4>NORSK:</H4>
      <P>
        Jeg tror du kan gå tapt! Jeg beklager, men siden du leter etter, synes å
        ha blitt flyttet, slettet eller ikke eksisterer. Du kan gå tilbake til
        hvor du var eller gå rett til vår <Link to="/">hjemmeside</Link>.
      </P>
      <H4>SUOMI:</H4>
      <P>
        Luulen, että saatat kadota! Olen pahoillani, mutta etsimäsi sivu näytti
        olevan siirretty, poistettu tai sitä ei ole. Voisit palata sinne, missä
        olit tai menisit suoraan <Link to="/">kotisivullemme</Link>.
      </P>
      <H4>ESPAÑOL:</H4>
      <P>
        ¡Creo que puedes estar perdido! Lo siento mucho, pero la página que
        estabas buscando parece haber sido movida, eliminada o no existe.
        Podrías volver a donde estabas o dirigirte directamente a nuestra{' '}
        <Link to="/">página de inicio</Link>.
      </P>

      <H4>ITALIANO:</H4>
      <P>
        Penso che potresti essere perso! Mi dispiace, ma la pagina che stavi
        cercando sembra essere stata spostata, cancellata o non esiste. Potresti
        tornare al punto in cui ti trovavi o andare direttamente alla nostra{' '}
        <Link to="/">home page</Link>.
      </P>
    </Text>
  </Main>
)
export default page404

const Main = styled.div`
  //position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-color: #2e3830;
  color: #e6dbc9;
  padding: 0;
  margin: 0;
`

const Text = styled.div`
  max-width: 37.5em;
  margin: auto;
  padding: 2em;
  height: 100%;
  background-color: #2e3830;
  color: #e6dbc9;
  & a {
    color: inherit;
  }
`

const H1 = styled.h1`
  font-size: 7em;
  text-align: center;
`
const H4 = styled.h4`
  padding: 1em 0 0 0;
  margin: 0;
`
const P = styled.p`
  padding: 0 0 0.5em 0;
  margin: 0;
  border-bottom: 1px solid #e6dbc9;
  &:last-child {
    border-bottom: none;
  }
`

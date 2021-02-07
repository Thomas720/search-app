import React from 'react'
import { Container } from 'react-bootstrap'

const HomeScreen = () => {
    return (
        <Container className="home-page">
        <h2 className="hello">HELLO!</h2>
        <p className="home_p">
          Can you guess the artist? This quiz is unique and fun because it
          involves
          <br /> a series of popular song, and you have to imagine who sing the
          song. <br />
          For someone who is a fan of music, this may be a total breeze. <br />
          Those who are not as familiar with music can learn something new.{" "}
          <br /> To paly the game you need to sign up first.
        </p>

        <p class="good_luck">Good Luck!</p>
      </Container>
    )
}

export default HomeScreen

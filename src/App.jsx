import React, { useState } from 'react'
import Button from './components/button'
import './App.css'

import myImageFr from './images/1.png'
import myImageSec from './images/2.png'
import myImageTh from './images/3.png'

function App() {
  const images = [
    { id: 1, src: myImageFr },
    { id: 2, src: myImageSec },
    { id: 3, src: myImageTh },
  ]

  const [votes, setVotes] = useState([0, 0, 0])

  const handleVote = (id) => {
    const newVotes = [...votes]
    newVotes[id - 1] += 1
    setVotes(newVotes)
  }

  const getWinner = () => {
    const maxVotes = Math.max(...votes)
    const winningImage = images.find((image) => votes[image.id - 1] === maxVotes)
    return winningImage
  }

  const handleShowWinner = () => {
    const winner = getWinner();
    alert(`The winner is: Smiley ${winner.id}`)
  }

  return (
    <>
      <ul>
        {images.map((image) => (
          <li key={image.id} className={`image-${image.id}`}>
            <img src={image.src} alt="" width={50} height={50} />
            <Button count={votes[image.id - 1]} onClick={() => handleVote(image.id)} />
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleShowWinner}>Show Results</button>
    </>
  )
}

export default App
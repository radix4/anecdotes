import React, { useState } from 'react'

// @return random int from 0 to max - 1
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const App = props => {
  const [selected, setSelected] = useState(0)
  console.log(props.anecdotes.length)
  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <div>
        <button
          onClick={() => setSelected(getRandomInt(props.anecdotes.length))}>
          next
        </button>
      </div>
    </div>
  )
}

export default App

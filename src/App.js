import React, { useState } from 'react'

const App = props => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0)) //creates an array with 0s filled

  console.log('array length: ', props.anecdotes.length)
  console.log('array: ', votes)

  // return a random number from 0 to array length
  const randomNumber = () =>
    Math.floor(Math.random() * Math.floor(props.anecdotes.length))

  const handleVote = () => {
    const copy = { ...votes }
    copy[selected] += 1

    return setVotes(copy)
  }

  return (
    <div>
      <div>{props.anecdotes[selected]}</div>
      <div>selected = {selected}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={() => setSelected(randomNumber)}>next anecdote</button>
      </div>
    </div>
  )
}

export default App

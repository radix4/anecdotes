import React, { useState } from 'react'

const App = props => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0)) //creates an array with 0s filled
  const [mostVote, setMostVote] = useState(0)
  const [mostVoteIndex, setMostVoteIndex] = useState(0)

  // return a random number from 0 to array length
  const randomNumber = () =>
    Math.floor(Math.random() * Math.floor(props.anecdotes.length))

  const handleVote = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setMostVote(Math.max(mostVote, copy[selected]))
    setVotes(copy)
    handleMostVote()
  }

  const handleMostVote = () => {
    for (let i = 0; i < props.anecdotes.length; i++) {
      if (votes[i] === mostVote) {
        setMostVoteIndex(i)
        break
      }
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={() => setSelected(randomNumber)}>next anecdote</button>
      </div>

      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[mostVoteIndex]}</div>
      <div>has {mostVote} votes</div>
    </div>
  )
}

export default App

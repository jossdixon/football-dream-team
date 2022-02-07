import React, { useState } from 'react';

const AddToList = () => {

  const [input, setInput] = useState({
    name: "",
    url: "",
    position: "",
    age: "",
    club: "",
    nation: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Player's name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="URL to image of the player"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"

      />
      <input
        type="text"
        placeholder="What position?"
        className="AddToList-input"
        value={input.position}
        onChange={handleChange}
        name="position"
      />
      <input
        type="text"
        placeholder="How old?"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="What club?"
        className="AddToList-input"
        value={input.club}
        onChange={handleChange}
        name="club"
      />
      <input
        type="text"
        placeholder="Nationality?"
        className="AddToList-input"
        value={input.nation}
        onChange={handleChange}
        name="nation"
      />
      <textarea
        placeholder="Notes about the player..."
        className="AddToList-input"
        value={input.notes}

      />
    </div>
  )
}

export default AddToList

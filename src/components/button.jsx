import React from "react"

function Button({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      <span>{count}</span>
    </button>
  )
}

export default Button
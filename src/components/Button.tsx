import { useState } from "react"

export function Button() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )
}
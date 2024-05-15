"use client"

import { useEffect } from "react"


const ErrorBoundary = ({ error,reset}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <div>
      Errore in Single service
      <button onClick={reset}>Try again</button>
    </div>
  )
}

export default ErrorBoundary

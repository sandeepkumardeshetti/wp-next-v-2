"use client"

import Link from "next/link"

const ErrorBoundary = ({reset}) => {
  return (
    <div>
    Something HAs gone wrong. 
    <Link href="/" >Homw</Link>
    <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default ErrorBoundary

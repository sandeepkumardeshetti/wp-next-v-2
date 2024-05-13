"use client"

import Link from "next/link"

const ErrorBoundary = ({reset}) => {
  return (
    <div>
    Something HAs gone wrong. 
    <Link href="/team" >team</Link>
    <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default ErrorBoundary

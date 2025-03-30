import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

function index({}: Props) {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>router.push(`/users
        `)}>Route</button>
    </div>
  )
}

export default index
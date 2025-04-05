import { useRouter } from 'next/router'
import React from 'react'



function Index() {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>router.push(`/users
        `)}>Route</button>
    </div>
  )
}

export default Index
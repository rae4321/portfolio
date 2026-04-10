import { useState, useEffect } from "react"

const PreLoader = () => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

  return (
    loading && (
        <div className='w-screen h-screen fixed flex items-center justify-center bg-black z-60'>
        <div className='w-16 h-16 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
    </div>
    )
  )
}

export default PreLoader
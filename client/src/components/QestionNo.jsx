/* eslint-disable react/prop-types */

import { useState } from "react"

function QestionNo({number}) {
  const [visited, setVisited] = useState(false)

  const handleSelect = () => {
    setVisited(true)
  }

  return (
    <>
        <div className={`border border-stone-600 py-2 rounded-lg  hover:text-white cursor-pointer transition-all ${visited ? 'bg-sky-600 text-white border-none hover:bg-sky-700':'hover:bg-stone-600'} active:bg-sky-600`} onClick={handleSelect}>
          <span className="font-semibold text-sm text-center block">{number}</span>
        </div>
    </>
  )
}

export default QestionNo
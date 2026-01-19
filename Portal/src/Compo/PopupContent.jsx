import React from 'react'

const PopupContent = ({copied}) => {
  return (
    <section>
      { copied && <div>Copied</div>}
    </section>
  )
}

export default PopupContent
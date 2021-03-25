import React from 'react'
import Button from '@material-ui/core/Button'

export default function CopyBtn({link}) {
  return (
    <Button variant="outlined" size="small" onClick={(e) => {
      navigator.clipboard.writeText(link)
      e.target.innerText = 'Copied !'
    }}>Copy</Button>
  )
}

import React from 'react'
import PublishSharpIcon from '@material-ui/icons/PublishSharp'
import Button from '@material-ui/core/Button'

import CopyBtn from './copy_btn'
import Spinner from './spinner'

export default function ClickedButton({val,link,action}) {
  if(val === 'upload') {
    return (
      <>
        <Button variant="outlined" color="default" size="small" onClick={action}>
          <PublishSharpIcon size="small"/> upload
        </Button>
      </>
    )
  }
  else if(val === 'copy') { return <CopyBtn link={link} /> }
  else if(val === 'spinner') { return <Spinner /> }
}
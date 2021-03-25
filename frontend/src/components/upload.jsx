import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../index.css'

import ClickedButton from './click_btn_conditional'

export default function UploadButtons() {
  const [selectImg,setSelectImg] = useState('inline')
  const [uploadBtnDisp,setuploadBtnDisp] = useState('none')
  const [message,setMessege] = useState('')
  
  const [val,setVal] = useState('upload')
  const [link,setLink] = useState('')
  
  function fun_change(e) {
    setSelectImg('none')
    setMessege('Your image is selected plress upload button to get the link')
    setVal('upload')
    setuploadBtnDisp('inline')
  }
  
  
  function makeRequest(url,formDataObj) {
    fetch(url,{ method : 'post',body : formDataObj})
    .then(res => res.text())
    .then(resLink => {
      setLink(resLink)
      setVal('copy')
      setMessege('press on copy button to copy link')
    })
    .catch(e => alert(e))
  }
  
  
  function fetchLink() {
    setVal('spinner')
    setMessege('wait...')
    let formDataObj = new FormData(document.getElementById('form'))
    makeRequest('http://127.0.0.1:3001/post',formDataObj)
  }
  
  return (
    <div className="app_div">
      <form id="form">
        <input accept="image/*" className="input_file" onChange={fun_change} name="file_img" id="contained-button-file" type="file" />
        <label htmlFor="contained-button-file" style={{display : selectImg}}>
          <Button variant="contained" color="primary" component="span">
            Select image
          </Button>
        </label>
        <p className="col_green">{message}</p>
        <div className="upload_div" style={{display : uploadBtnDisp}}>
          <ClickedButton val={val} link={link} action={fetchLink}/>
        </div>
      </form>
    </div>
  );
}
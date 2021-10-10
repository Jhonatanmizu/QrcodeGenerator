import React, { useState } from 'react';
import QRious from 'qrious'

export default function Qrcode(props) {
  const [text, setText] = useState('')
  function generateCode(e){
    const qr = new QRious({
      element: document.getElementById('qrcode'),
      size:300
    })
    setText(e.target.value)
    qr.value = text
  
    return qr.toDataURL()
  }

  return (
    <div >
      <h1>{props.title}</h1>
      <div>
        <input type="text" name="qrcode" 
        placeholder="Digite o site que deseja gerar o qrcode" 
        value={text} onChange={generateCode} />
      </div>
      <canvas id="qrcode"></canvas>
    </div>
  );
}

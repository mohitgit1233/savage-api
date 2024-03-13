"use client"

import { useState } from "react"
import "../component.css";

const ApiForm = () => {
  const [apiUrl, setApiUrl] = useState("http://localhost:3000/api/savage-excuses")
  const [excuseVar, setExcuse] = useState({})
  const sendRequest = async () => {
    const response = await fetch(apiUrl, { cache: 'no-store' })
    const data = await response.json()
    console.log(data)
    setExcuse(data)
  }
  return (
    <div className="formapi">
      <h1 className="try">Try it</h1>
      <div className="button-url-wrapper">
        <input type="text" className="api-text" value={apiUrl} disabled onChange={() => (console.log("l"))} />
        <button className="send-button" onClick={() => { sendRequest() }}>
          Submit
        </button>
      </div>
      

      <div className="out">
        <h3>Plain text(non-devs)</h3>
        <div className="res-box-2">

          <p>
            <b>Excuse</b> : {excuseVar.excuse}
          </p>

          <p>
            <b>Use of excuse</b> :{excuseVar.use}
          </p>

        </div>
      </div>

      <div className="out">
        <h3>Response(devs)</h3>
        <div className="res-box">

          {JSON.stringify(excuseVar)}

        </div>
      </div>

    </div>
  )
}
export default ApiForm
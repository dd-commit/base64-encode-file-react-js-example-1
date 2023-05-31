import logo from './logo.svg';
import './App.css';
import base64Encoder from 'base64-encode-file'
function App() {
  let handlechange=async(e)=>{
console.log(e.target.files[0])
console.log(await base64Encoder(e.target.files[0]))
  }
  return <>
<input type='file' onChange={handlechange}></input>
  </>
}

export default App;

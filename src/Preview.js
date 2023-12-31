import {useState, useEffect} from 'react'
import Form from './Form'
import link from './assets/link.png'

function Preview() {
  const [copied, setCopied] = useState(false);

  function clearCopiedAfterDelay() {
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  }
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href.replace("preview","share")).then(()=> {
        setCopied(true);
        clearCopiedAfterDelay();
    })
  }
  return (
    <div>
      <div onClick={() => copyToClipboard()} className=" flex gap-2 absolute bottom-0 right-0 border-2 text-white-100 rounded-xl backdrop-blur-sm transition duration-300 hover:backdrop-blur-md p-3 m-10 cursor-pointer">
        <p>Copy Link</p>
        <img className=" invert scale-75" src={link} alt="" />
      </div>
      <div 
      className={`${copied ? "opacity-100" : "opacity-0"} flex ease-out duration-300 justify-center items-center text-white-100 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-0 p-3 backdrop-blur-xl border-2 rounded-xl mt-5 `}>
        Link copied to clipboard
      </div>
      <Form />
    </div>
  );
}

export default Preview
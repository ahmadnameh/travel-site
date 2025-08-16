import { React, useEffect, useContext, useRef } from 'react'
import { createPortal } from 'react-dom';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import AlertWindowContext from '../../../contexts/AlertWindowContext';
import  "./AlertWindow.scss"

const AlertContainer = ({ children ,closable = false, setClose }) => {

  const{alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  function handleClosingWindow() {
    if(setClose) {
      setClose();
    }
    setAlertWindowProperty(prev=>({...prev,on:false}))
  }

  const modalRef = useRef(null);

  useEffect(() => {
    if(!closable) return;
    
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleClosingWindow();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return(
    <div className='Alert-Window'>
      <div ref={modalRef}>
        {children}
        {closable && 
          <span className='closeIcon'>
            <CancelPresentationIcon onClick={handleClosingWindow}/>
        </span>}
      </div>
    </div>
  )
}
const AlertWindow = ({ children, closable = false, setClose }) => {
  return (
    createPortal(
      <AlertContainer closable={closable} setClose={setClose}>
        {children}
      </AlertContainer>,document.getElementById('alerting-window')
    )
  )
}



export default AlertWindow

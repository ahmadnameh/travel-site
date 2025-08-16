import { React, useContext } from 'react'
import AlertWindow from '../AlertWindow/AlertWindow';
import AlertWindowContext from '../../../contexts/AlertWindowContext';
import "./ResponseStatusWindow.scss";

const ResponseStatusWindow = () => {

  const{alertWindowProperty,setAlertWindowProperty} = useContext(AlertWindowContext)

  return (
    alertWindowProperty.type === "loading" ?
      <AlertWindow>
        <div className='LoadingWindow'>
          <div className="loader"></div>
          <p>Loading...</p>
        </div> 
      </AlertWindow>
      :
      <AlertWindow closable={true}>
        <div className='ErrorMessageWindow'>
          <img src={alertWindowProperty.type == "error" ? "/assets/warning-sign-9769.png" : "/assets/pngwing.com (1).png"} style={{width:'130px'}}/>
          <p className='errorMessage'>{alertWindowProperty.message}</p>
        </div> 
      </AlertWindow>
    )
}

export default ResponseStatusWindow

import { React, useState } from 'react'
import HalfRating from '../Rating/Rating'
import CommentIcon from '@mui/icons-material/Comment';
import RequiredLoginAlert from '../requiredLoginAlter/RequiredLoginAlert';
import "./commentsReview.scss";


const Comments_review = ({ data }) => {
  const[ personalReview, setPersonalReview ] = useState({
    comment:"",
    rate:0
  })
  const ColorsArray = [
    "red", "pink", "blue", "violet", "green", "yellow"
  ]

  function handleChange(e) {
    setPersonalReview(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const[loginRequiredWindowON,setLoginRequiredWindowON] = useState(false)

  function sendComment() {
    setLoginRequiredWindowON(true)
  }

  return (
    <div className="commentSection">
      <div>
        <img src="/assets/like.png" alt="icon" />
        <h3>Commnets & Reviews :</h3>
      </div>
    <div>
    
    <div className='comments_review'>
      {data.data.map((item,index)=>(
        <div key={index}>
        <div className=''>
          <p style={{backgroundColor: ColorsArray[index]}}>{item.user.first_name.at(0)}{item.user.last_name.at(0)}</p>
          <p>{item.user.first_name}</p>
        </div>
        <HalfRating value={item.stars}/>
        <p>{item.comment}</p>
        <hr/>
        </div>
      ))}
    
    </div>
    <div className="addcomment">
        <p>
          Share with our Your experiance <CommentIcon/>
        </p>
        <div><HalfRating type='controlled' /></div>
        <form>
        <textarea placeholder="Write a comment" value={personalReview.comment} name="comment" onChange={handleChange}/>
        </form>
        <button className="sendreviewbutton"  onClick={(e)=>sendComment(e)}>Send a review</button>
    </div>
    </div>

    {loginRequiredWindowON && <RequiredLoginAlert onClose={()=>setLoginRequiredWindowON(false)} />}
    </div>
  )
}

export default Comments_review

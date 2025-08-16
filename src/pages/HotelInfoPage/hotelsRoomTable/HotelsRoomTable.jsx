import React from 'react'
import "./hotelsRoomTable.scss"
const HotelsRoomTable = ({ RoomsData, setSelectedRoomId }) => {
  return (
    <div>
      <table className='roomTable'>
        <tr>
          <th>Room Type</th>
          <th>Beds</th>
          <th>Number Of Room</th>
          <th>Price for night</th>
        </tr>
        {RoomsData.map((item,index)=>(
          <tr key={index}>
            <td onClick={()=>setSelectedRoomId(prev=>({...prev, selectedRoomType:item.room_type }))}>
              <button>{item.room_type}</button>
            </td>
            <td>{item.beds}</td>
            <td>{item.room_count}</td>
            <td className='price'>{item.price_for_night}$</td>
        </tr>
        ))}
        
        
      </table>
    </div>
  )
}

export default HotelsRoomTable

import React from "react";
import VerifiedIcon from '@mui/icons-material/Verified';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import ChecklistIcon from '@mui/icons-material/Checklist';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import "./Adverts.scss"

const Adverts = (props) => {

	if(props.name==="home"){
		return (
			<div className="homeAdverts">
				<div className="container">
					<div>
						<div>
							<h3>Why Book in Our Site ??</h3>
							<ul>
								<li><span>Book your trip in simple steps</span></li>
								<li><span>Cancel reservation before 48 hours</span></li>
								<li><span>See reviews and rate</span></li>
								<li><span>Find your next destination</span></li>
								<li><span>Search the best value hotel</span></li>
								<li><span>See reviews and rate</span></li>
								<li><span>Find your next destination</span></li>
							</ul>
						</div>
					</div>
					<div>
						<img src="/assets/booking online flight.png" alt="pic"></img>
					</div>
				</div>
			</div>
	)}

	else if(props.name==="hotel"){
	return(
		<div className="hotelAdverts">
			<div className="container ">
				<div>
					<img src="/assets/hoteladverts1239.png" alt="pic"></img>
				</div>
				<div>
					<p>Book your suiet in yout favorite hotel</p>
					<p className="centring-flex"><VerifiedIcon />View the details , ratings and opinions of visitors.</p>
					<p className="centring-flex"><VerifiedIcon />Choose what suits your request from many offers.</p>
					<p className="centring-flex"><VerifiedIcon />Book in simple and easy steps.</p>
				</div>

			</div>
		</div>
	)
	}
	else if(props.name==="trip"){
	return(
			<div className="container tripAdverts">
				<div>
					<h3>What does the trip package include ? <EmojiObjectsIcon/></h3>
					<span>your dream getway will include all of these features , so...</span> <br/>
					<p> round-trip flight tickets <ConnectingAirportsIcon/></p>
					
					<p>hotel reservations are part of the package<DryCleaningIcon/></p>
					<p>hotel stays, and sightseeing access – all in one package<ChecklistIcon/></p>
					<button >Search Now <LocationSearchingIcon/></button>
				</div>
				<div>
					<img src="/assets/pexels-vincent-gerbouin-1174732.jpg" alt="pic"></img>
				</div>
			</div>
	)
	}
}

export default Adverts
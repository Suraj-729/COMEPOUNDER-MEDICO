import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

import "../../assets/css/compeounder.css"; // Adjust the path as needed
import "../../assets/css/innerstyle.css"; // Adjust the path if necessary

const Search = () =>{
    return(
           <div>
            <section className="innerBanner">
	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-12">
				<div className="homeHeading">
					<div className="select-area">
						<div className="avail-form">
							<div className="select-area-wrapper">
								<div>
									<select name="" id="" className="form-control">
										<option value="">All Treatments and Venus</option>
									</select>
								</div>
								<div>
									<input type="text" className="form-control location" placeholder="Current Location" />
								</div>
								<div>
									<input type="date" className="form-control" placeholder="Any date" />
								</div>
								<div>
									<input type="time" className="form-control" placeholder="Time" />
								</div>
								<button className="readmoreBtn"><span>Search</span> </button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
           </div>
    )
}
export default Search;
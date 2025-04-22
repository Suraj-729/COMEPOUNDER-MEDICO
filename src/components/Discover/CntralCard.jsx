import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";


const CntralCard = ({ imageSrc, title, rows }) => {
    return (
        <div>
           <div className="row">
			<div className="col-md-6">
				<div className="facilities-wrapper">
					<div className="faclicity-header ">
						<h4>Central : AYUSHMAN BHARAT</h4>
					</div>
					<div className="faclicity-body">
						<table>
							<tbody>
								<tr>
									<th>Facility</th>
									<th>Type</th>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div className="col-md-6">
				<div className="facilities-wrapper">
					<div className="faclicity-header">
						<h4>State : BSKY</h4>
					</div>
					<div className="faclicity-body">
						<table>
							<tbody>
								<tr>
									<th>Facility</th>
									<th>Type</th>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
								<tr>
									<td>Hospital</td>
									<td>ABC</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
        </div>
)}  

export default CntralCard;
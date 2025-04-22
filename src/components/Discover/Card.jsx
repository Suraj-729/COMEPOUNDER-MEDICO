import React from "react";
import "../../assets/css/compeounder.css";
import "../../assets/css/innerstyle.css";
const Facilities = () => {
    const data = [
      {
        region: "Central",
        program: "AYUSHMAN BHARAT",
        details: [
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
        ],
      },
      {
        region: "State",
        program: "BSKY",
        details: [
          { facility: "Hospital", type: "ABC" },
          { facility: "Hospital", type: "ABC" },
        ],
      },
    ];
  
    return (
      <div className="row">
        {data.map((item, index) => (
          <div className="col-md-6" key={index}>
            <div className="facilities-wrapper">
              <div className="faclicity-header">
                <h4>
                  {item.region} : {item.program}
                </h4>
              </div>
              <div className="faclicity-body">
                <table>
                  <tbody>
                    <tr>
                      <th>Facility</th>
                      <th>Type</th>
                    </tr>
                    {item.details.map((detail, idx) => (
                      <tr key={idx}>
                        <td>{detail.facility}</td>
                        <td>{detail.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Facilities;
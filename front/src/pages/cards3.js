import React from "react";
import { MDBCard, MDBCardImage, MDBIcon} from "mdbreact";

const Cards3 = () => {
  return (
    <MDBCard className="mx-4" style={{ width: "20rem" }} collection>
      <MDBCardImage className="img-fluid" zoom src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg" />
      <div className="stripe light">
        <a href="#!">
          <p>Title
            <MDBIcon icon="chevron-right" />
          </p>
        </a>
      </div>
    </MDBCard>
  );
}

export default Cards3;
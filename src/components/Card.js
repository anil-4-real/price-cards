import { Button } from "react-bootstrap";

function Card(props) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {props.type.title}
          </h5>
          <h6 className="card-price text-center">
            ${props.type.price}
            <span className="period">/month</span>
          </h6>
          <hr />

          <ul className="fa-ul">
            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.type.users !== "Single User" ? (
                <b>{props.type.users}</b>
              ) : (
                <>{props.type.users}</>
              )}
            </li>

            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.type.storage}
            </li>

            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.type.publicProjects}
            </li>

            <li>
              <span className="fa-li">
                <i className="fas fa-check"></i>
              </span>
              {props.type.communityAccess}
            </li>

            <li
              className={props.type.privateProjectsEnabler ? "" : "text-muted"}
            >
              <span className="fa-li">
                <i
                  className={
                    props.type.privateProjectsEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.privateProjects}
            </li>

            <li className={props.type.phoneSupportEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.phoneSupportEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.phoneSupport}
            </li>

            <li className={props.type.subdomainEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.subdomainEnabler
                      ? "fas fa-check"
                      : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.subdomain}
            </li>

            <li className={props.type.reportsEnabler ? "" : "text-muted"}>
              <span className="fa-li">
                <i
                  className={
                    props.type.reportsEnabler ? "fas fa-check" : "fas fa-times"
                  }
                ></i>
              </span>
              {props.type.reports}
            </li>
          </ul>

          <div className="d-grid">
            <Button className="primary-btn text-uppercase">Buy</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

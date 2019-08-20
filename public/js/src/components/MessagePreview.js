import { prependOnceListener } from "cluster";

function MessagePreview(props) {
  return (
    <li className="message-preview">
      <a href="#">
        <div className="media">
          <span className="pull-left">
            <img
              className="media-object"
              src="http://placehold.it/50x50"
              alt=""
            />
          </span>
          <div className="media-body">
            <h5 className="media-heading">
              <strong>{props.messageName}</strong>
            </h5>
            {props.messageDate}

            <p>{props.messageMessage}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

function MessagePreview() {
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
              <strong>John Smith</strong>
            </h5>
            <DateTime />
            <p>Lorem ipsum dolor sit amet, consectetur...</p>
          </div>
        </div>
      </a>
    </li>
  );
}

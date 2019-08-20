import { prependOnceListener } from "cluster";

function DateTime(props) {
  return (
    <p className="small text-muted">
      <i className="fa fa-clock-o" /> {Date()}
    </p>
  );
}

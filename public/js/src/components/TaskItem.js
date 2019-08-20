function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
      <span className="badge">{props.taskDate}</span>
      <i className="fa fa-fw fa-calendar" /> {props.taskName}
    </a>
  );
}

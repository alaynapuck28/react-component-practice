function TasksPanel(props) {
  let tasksDiv = [];
  tasksDiv = props.tasks.map((task, i) => {
    return <TaskItem key={i} taskName={task.task} taskDate={task.date} />;
  });

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className="fa fa-clock-o fa-fw" /> Tasks Panel
        </h3>
      </div>
      <div className="panel-body">
        <div className="list-group">{tasksDiv}</div>
        <div className="text-right">
          <a href="#">
            View All Activity <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

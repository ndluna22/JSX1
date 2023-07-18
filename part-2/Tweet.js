//username --> props.username
//person who wrote tweet --> props.name
//date of tweet --> props.date
//message --> props.message

function Tweet(props) {
  return (
    <div>
      <p> Name: {props.name}</p>
      <p> Username: {props.username}</p>
      <p> Date: {props.date}</p>
      <p> Message: {props.message}</p>
    </div>
  );
}

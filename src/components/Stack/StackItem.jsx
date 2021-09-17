function StackItem(props) {
  return (
    <div className={`stack-item ${props.group}`}>
      <h4>{props.group}</h4>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item}>
              <img src={item} alt={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StackItem;

export function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      <p>{props.content}</p>
    </div>
  )
}

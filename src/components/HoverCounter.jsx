import withCounter from "../HOC/withCounter";

const HoverCounter = (props) =>{

  const {count, increment} = props;

  return(
    <h1  onMouseEnter={increment}>Hovered {count} Times</h1>
  )
}

export default withCounter(HoverCounter);
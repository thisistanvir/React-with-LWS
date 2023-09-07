import withCounter from "../HOC/withCounter";


const ClickCounter = (props) => {

  const {count, increment} = props;

  return(
    <button type="button" onClick={increment}>Clicked {count} Times</button>
  )
}

export default withCounter(ClickCounter);
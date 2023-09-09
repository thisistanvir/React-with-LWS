
export default function HoverCounter ({count, incrementCount}){
  return(
    <h1  onMouseEnter={incrementCount}> Hovered {count} Times</h1>
  )
}

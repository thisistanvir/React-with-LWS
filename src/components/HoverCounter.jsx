
export default function HoverCounter ({theme, count, incrementCount}){

  const style = "dark" === theme ? {backgroundColor: "#000", color: "#fff"} : null;

  return(
    <h1 style={style}  onMouseEnter={incrementCount}> Hovered {count} Times</h1>
  )
}
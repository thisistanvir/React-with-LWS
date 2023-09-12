
export default function HoverCounter ({theme, switchTheme, count, incrementCount}){

  const style = "dark" === theme ? {backgroundColor: "#000", color: "#fff"} : null;

  return(
    <div>
      <h1 style={style}  onMouseEnter={incrementCount}> Hovered {count} Times</h1>
      <button type="button" onClick={switchTheme}>
          Change Theme
      </button>
    </div>
  )
}
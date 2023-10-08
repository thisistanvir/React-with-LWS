import useWindowWidth from "../hooks/useWindowWidth";

function LayoutComponentTwo(){

  const onSmallScreen = useWindowWidth();

    return(
      <div className={onSmallScreen ? "small" : "large"}>
        <h3>There is a another component.</h3>
      </div>
    )
}
export default LayoutComponentTwo;
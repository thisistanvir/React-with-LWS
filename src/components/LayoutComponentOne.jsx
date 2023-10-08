import useWindowWidth from "../hooks/useWindowWidth";


function LayoutComponentOne(){
const onSmallScreen = useWindowWidth(600);

    return(
      <div>
        <h3>You browser on {onSmallScreen ? "small" : "large"} device.</h3>
      </div>
    )
}
export default LayoutComponentOne;
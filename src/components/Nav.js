import "./Nav.css"

function Nav(clickedLink, setClickedLink) {
    const handleClick = (event) => {
        event.preventDefault
        if (event.target === "homeRepair"){
            setClickedLink("home")
        } else if (event.target === "autoRepair"){
            setClickedLink('auto')
        } else if (event.target === "treeRemoval"){
            setClickedLink("tree")
        } else if (event.target == "emergency"){
            setClickedLink("emergency")
        } else if (event.target === "other"){
            setClickedLink("other")
        }
    }
    return (
        <div className="navContainer">
            <ul className="navBar">
                <li id="homeRepair" onClick={handleClick}>Home Repairs/Remodels</li>
                <li id="autoRepair" onClick={handleClick}>Automotive Repairs</li>
                <li id="treeRemoval" onClick={handleClick}>Residential Tree Removal</li>
                <li id="emergency" onClick={handleClick}>After-Hours/Emergency Service</li>
                <li id="other" onClick={handleClick}>Other Services</li>
            </ul>
        </div>
    )
}
export default Nav;
import "./Nav.css"

function Nav({setClickedLink}) {
    
    return (
        <div className="navContainer">
            <ul className="navBar">
                <li id="homeRepair" onClick={() => setClickedLink('home')}>Home Repairs/Remodels</li>
                <li id="autoRepair" onClick={() => setClickedLink('autoRepair')}>Automotive Repairs</li>
                <li id="treeRemoval" onClick={() => setClickedLink('treeRemoval')}>Residential Tree Removal</li>
                <li id="emergency" onClick={() => setClickedLink('emergency')}>After-Hours/Emergency Service</li>
                <li id="other" onClick={() => setClickedLink("other")}>Other Services</li>
            </ul>
        </div>
    )
}
export default Nav;
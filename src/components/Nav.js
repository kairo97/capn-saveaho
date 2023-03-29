import "./Nav.css"

function Nav({setClickedLink}) {

    return (
        <div className="navContainer">
            <ul className="navBar">
                <li className="navItem" id="homeRepair" onClick={() => setClickedLink('home')}>Home Repairs/Remodels</li>
                <li className="navItem" id="autoRepair" onClick={() => setClickedLink('autoRepair')}>Automotive Repairs</li>
                <li className="navItem" id="treeRemoval" onClick={() => setClickedLink('treeRemoval')}>Residential Tree Removal</li>
                <li className="navItem" id="emergency" onClick={() => setClickedLink('emergency')}>After-Hours/Emergency Service</li>
                <li className="navItem" id="other" onClick={() => setClickedLink("other")}>Other Services</li>
            </ul>
        </div>
    )
}
export default Nav;
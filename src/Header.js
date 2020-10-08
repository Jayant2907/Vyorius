import React from 'react'
import "./Header.css"
import {Button} from "@material-ui/core"
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <img className="vyorius_logo"
            src="data:image/png;base64,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" 
            alt="Vyorius Logo"></img>
            <div className="components">
                <Link to="/services" className="components_links">Why Vyorius?</Link>
                <Link to="/services" className="components_links">Solutions</Link>
                <Link to="/services" className="components_links">Product</Link>
                <Link to="/services" className="components_links">Use Cases</Link>
                <Link to="/services" className="components_links">Team</Link>
                <Link to="/services" className="components_links">Partners</Link>
                <Link to="/services" className="components_links">Contact Us</Link>
            </div>
            <Button className="btn">Launch Vyorius  > </Button>
            
        </div>
    )
}

export default Header

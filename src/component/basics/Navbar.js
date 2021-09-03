import React from 'react'

const Navbar = ({ filterItem, menuList }) => {
    return (
        <nav className="navbar">
            <div className="btn-group" >
                {
                    menuList.map((currElement) => {
                        return (
                            <button className="btn-group__item" onClick={() => filterItem(currElement)}>{currElement}</button>
                        )
                    })
                }

            </div>
        </nav>
    )
}

export default Navbar;

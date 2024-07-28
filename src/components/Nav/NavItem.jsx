
import React from 'react'


const NavItem = ({ NavIcon, NavText, NavRoute, setIsOpen }) => {


    const handleScroll = (NavRoute) => {
        const element = document.getElementById(NavRoute);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button
            onClick={() => handleScroll(NavRoute)}
            className={`rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray   py-1.5  space-x-4 text-base`}
        >
            {NavIcon}
            <span>{NavText}</span>
        </button>
    )
}

export default NavItem
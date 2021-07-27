import React from 'react';
import '../sidebar/Sidebar.css';
import 'boxicons';

export default function Sidebar() {
    const links = [
        { name: "Home", icon: "home" },
        { name: "Add Category", icon: "home" }
    ];
    return (
        <div className="sidebar">
            <div className="heading">
                <box-icon name='cake' color={"#FFF"} size={"md"}></box-icon>
                <div className="logo-text">Star Cakes</div>
            </div>
            <ul className="nav-list">
                {links.map(({ name, icon }, index) => {
                    return (
                        <li key={index}>
                            <a href={name}>
                                <box-icon name={icon} type='solid' size={'md'} color={"#FFF"}></box-icon>
                                <span className="tab-text">{name}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

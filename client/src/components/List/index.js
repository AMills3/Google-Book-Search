import React from "react";

export let List = ({ children }) => (
    <ul className="list-group"> { children } </ul>
);
export function ListItem( { children }) {
    return <li className="list-group-item"> { children } </li>;
};
import React from "react";
import { ListItem } from "../List";

let Book = ({
    title,
    author,
    description,
    image,
    link,
    Button
}) => {
    let truncateText = (str, length, ending) => {
        if(str) {
            if(length === null) {
            length = 100;
            }
            if(ending === null) {
            ending = ".....";
            }
            if(str.length > length) {
            return str.substring(0, length - ending.length) + ending;
            } else {
                return str;
            }
        }
        return str;
    };

let truncateDescrip = truncateText(description, 255, ".....");

return(
    <ListItem>
        <div className="mediaPreview">
            <article className="media">
                <figure className="mediaLeft">
                    <p>
                        <img className="image is-128xauto" src={ image } alt={ title } />
                    </p>
                </figure>
                    <div className="mediaContent">
                        <h3 className="headName"> { title } </h3>
                            <p className="headSub"> by { author } (Author) </p>
                            <p className="pArticle"> { truncateDescrip } </p>
                            <div className="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2 bd-highlight">
                                <a
                                href={ link }
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    View
                                </a>
                            </div>
                            <div className="p-2 bd-highlight">
                                <Button />
                            </div>
                        
                            </div>
                    </div>
            </article>
        </div>
    </ListItem>
);

};

export default Book;
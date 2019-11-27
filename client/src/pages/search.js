import React, { Component } from "react";
import BookList from "../components/BookList/index";
import API from "../utils/API";
import { List } from "../components/List/index";
import { toast } from "react-toastify";

class Search extends Component {
    state = {
        books: [],
        q: "",
        message: "Search for books from the Google Books API"
    };

    handleInputChange = event => {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    getBooks = () => {
        API.getBooks(this.state.q)
        .then(res =>
            this.setState({
                books: res.data,
                currentPage: 1
            })
        )

        .catch(() => {
            toast.error("Your search did not match any results.");

            this.setState({
                books: [],
                message: "Your search did not match any results.",
                currentPage: 1
            });
        });
    };

    handlePageSubmit = event => {
        event.preventDefault();
        toast.info("Searching...");
        this.getBooks();
    };

    handleBookSave = id => {
        let book = this.state.books.find(book => book.id === id);

        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            link: book.volumeInfo.infoLink,
            author: book.volumeInfo.author,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail
        }).then(() => this.getBooks());
    };

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-10 col-centered">
                        <div className="d-flex flex-wrap flex-row bd-highlight mb-3 justify-content-center align-items-center">
                            <div className="order-sm-2 p-2 bd-highlight">
                            </div>
                            <div className="order-sm-1 p-2 bd-highlight">
                                <h1 className="heading-title mx-sm-3 mb-2">
                                    Google Book Search
                                </h1>
                                <h2 className="heading-subtitle mx-sm-3 mb-2">
                                    Search for and save books.
                                </h2>
                                <SearchPage
                                handleInputChange={ this.handleInputChange }
                                handlePageSubmit={ this.handlePageSubmit }
                                q={ this.state.q }
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-10 col-centered card-content mb-4">
                        <h1 className="heading-title mx-sm-3 mb-2 text-center">
                            Results
                        </h1>
                        { this.state.books.length ? (
                            <List>
                                { this.state.books.map(book => (
                                    <Book
                                    key={ book.id }
                                    title={ book.volumeInfo.title }
                                    link={ book.volumeInfo.infoLink}
                                    author={ book.volumeInfo.author.join(", ") }
                                    description={ book.volumeInfo.description}
                                    image={ book.volumeInfo.imageLinks.thumbnail }
                                    Button={() => (
                                        <button
                                        onClick={() => this.handleBookSave(book.id)}
                                        className="btn save-button heading-subtitle ml-2"
                                        >
                                            Save
                                        </button>
                                    )}
                                    />
                                ))}
                            </List>
                        ) : (
                            <div className="mockup-content">
                                <h2 className="heading-title text-center">
                                    { this.state.message }
                                </h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
};

export default Search;
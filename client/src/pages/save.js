import React, { Component } from "react";
import BookList from "../components/BookList/index";
import API from "../utils/API";
import { List } from "../components/List/index";
import { toast } from "react-toastify";

class Saved extends Component {
    state = {
        books: []
    };

    componentDidMount() {
    this.getSavedBooks();
    }

    getSavedBooks = () => {
        API.getSavedBooks()
        .then(res =>
            this.setState({
                books: res.data
            })
        )

        .catch(err => console.log(err));
    };

    handleBookDelete = async id => {
        let originalBooks = this.state.books;
        try {
            await.API.deleteBook(id).then(res => this.getSavedBooks());
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
            toast.error("This book is now deleted.");
            this.setState({ books: originalBooks });
        }
    };

    render() {
        let { length: count } = this.state.books;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-8 col-centered">
                        <div className="d-flex flex-row bd-highlight mb-3 justify-content-center align-center">
                            <div className="p-2 bd-highlight">      
                            </div>
                            <div className="p-2 bd-highlight">
                                <h1 className="heading-title mx-sm-3 mb-2">
                                    Google Book Search
                                </h1>
                                <h2 className="heading-subtitle mx-sm-3 mb-2 text-center">
                                    Showing { count } books in the database.
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 col-centered card-content">
                        { this.state.books.length ? (
                            <List>
                                { this.state.books.map(book => (
                                    <Book
                                    key={ book._id }
                                    title={ book.title }
                                    link={ book.link }
                                    author={ book.author.join(", ") }
                                    description={ book.description }
                                    image={ book.image }
                                    Button={() => (
                                        <button
                                        onClick={() => this.handleBookDelete(book._id) }
                                        className="btn delete-button heading-subtitle ml-2"
                                        >
                                            Delete
                                        </button>
                                    )}
                                    />
                                ))}
                            </List>
                        ) : (
                            <div className="mockup-content">
                                <h3 className="brand-title text-center">
                                    No books saved in the database.
                                </h3>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };
};

export default Saved;
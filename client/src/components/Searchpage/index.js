import React from "react";

function SearchPage({ q, handleInputChange, handlePageSubmit }) {
    return(
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <label htmlFor="Title" className="sr-only">
                    Search Book
                </label>
                    <input
                    className="form-control heading subtitle"
                    id="Title"
                    type="text"
                    value={ q }
                    placeholder="Book Title"
                    name="q"
                    onChange={ handleInputChange }
                    size="55"
                    required
                    />
            </div>
                <button
                onClick={ handlePageSubmit }
                type="submit"
                className="btn btn-lg search-button heading-subtitle"
                >
                    Search
                </button>
        </form>
    );
};

export default SearchPage;
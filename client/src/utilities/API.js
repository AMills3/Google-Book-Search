import http from "../services/httpService";

export default {
    getBooks: function(q) {
        return http.get("/api/google", {
        params: { q: "title:" + q }
    });
},
getSavedBooks: function() {
    return http.get("/api//books");
},
deleteBook: function(id) {
    return http.delete("/api//books/" + id);
},
saveBook: function(bookData) {
    return http.post("/api//books", bookData);
}
};
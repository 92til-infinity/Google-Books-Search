import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";
import BookCard from "../components/BookCard";
import Book from "../components/Book";
// import Footer from "../components/Footer";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({
        books: res.data
      }))
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getSavedBooks());
  }



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                Here are your saved books
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <BookCard title="Saved" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book key={book._id} title={book.title} subtitle={book.subtitle} link={book.link} authors={book.authors.join(",")} description={book.description} image={book.image}
                      Button={() => (
                        <button onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2">X</button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                  <h2 className="text-center">Saved Books will go here</h2>
                )}
            </BookCard>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col size="md-2">
            <button to="/">← Back to home</button>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    )
  }
}


export default Saved;

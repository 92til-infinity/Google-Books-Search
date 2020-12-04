import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import BookCard from "../components/BookCard";
// import Footer from "../components/Footer";
import Book from "../components/Book"
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Books extends Component {
  state = {
    books: [],
    q: "",
    message: "Search, Search, Search"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.q)
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(() =>
        this.setState({ books: [], message: "nothing to show here" })
      );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = id => {
    const book = this.state.books.find(book => book.id === id);
    API.saveBook({
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      author: book.volumeInfo.authors,
      link: book.volumeInfo.infoLink,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      googleId: book.id
    })
      .then(() => this.getBooks());

  }
  render() {

    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <BookCard title="book-search" icon="far fa-book">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                q={this.state.q}
              />
            </BookCard>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <BookCard title="results">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book key={book.id} title={book.volumeInfo.title} subtitle={book.VolumeInfo.subtitle} link={book.volumeInfo.infoLink} authors={book.volumeInfo.authors} description={book.volumeInfo.description} image={book.volumeInfo.imageLinks.thumbnail} Button={() => (<button onclick={() => this.handleBookSave(book.id)} className="btn btn-primary ml-2"> Put in Saved</button>)} />
                  ))}
                </List>
              ) : (<h2 className="text-center">{this.state.message}</h2>)}
            </BookCard>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    );
  }
}


export default Books;

import React from 'react';
import { Modal, Form, Container, Button } from 'react-bootstrap';

class updateMovie extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    let movieToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value,
      theatre: this.props.selectedMovie.theatre,
      dateTime: this.props.selectedMovie.dateTime,
      poster: this.props.selectedMovie.poster,
      status: event.target.status.checked,
      review: event.target.review.value,
      _id: this.props.selectedMovie._id,
      __v: this.props.selectedMovie.__v
    };

    this.props.updatedMovie(movieToUpdate);
    this.props.updateCloseModal();
  };

  render() {
    return (
      <>
        <div className="Modal">
          <Modal
            show={this.props.openModal}
            onHide={this.props.updateCloseModal}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
              <>
                <Container className="mt-5">
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="title">
                      <Form.Label>Title</Form.Label>
                      <Form.Control type="text" readOnly value={this.props.selectedMovie.title}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="text" readOnly value={this.props.selectedMovie.description}/>
                    </Form.Group>
                    <Form.Group controlId="status">
                      <Form.Check type="checkbox" label="Watched" defaultChecked={this.props.selectedMovie.status}/>
                    </Form.Group>
                    <Form.Group controlId="review">
                      <Form.Label>Review</Form.Label>
                      <Form.Control type="text" defaultValue={this.props.selectedMovie.review}/>
                    </Form.Group>
                    <Button variant="info" type="submit">Submit Review!</Button>
                  </Form>
                </Container>
              </>
            </Modal.Body>
          </Modal>
        </div >
      </>

    );
  }
}

export default updateMovie;
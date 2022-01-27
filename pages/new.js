import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import {
  Col,
  Container,
  Row,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const NewJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: null,
    status: "",
    contact: "",
    note: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter job title" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" placeholder="Enter Salary" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Just applied" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Contact</Form.Label>
              <Form.Control type="text" placeholder="Is there a contact?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Note</Form.Label>
              <Form.Control type="text" placeholder="Notes" />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewJob;

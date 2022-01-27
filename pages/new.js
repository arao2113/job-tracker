import { useState, useEffect } from "react";
import fetch from "isomorphic-fetch";
import { Col, Container, Row, Form, Button, Spinner } from "react-bootstrap";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css";

const NewJob = () => {
  const [form, setForm] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    status: "",
    contact: "",
    note: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(error).length === 0) {
        createJob();
      } else {
        setIsSubmitting(false);
      }
    }
  }, [error]);

  const createJob = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: {
          Accept: "application:json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validate = () => {
    let err = {};

    if (!form.title) {
      err.title = "Title is required";
    }
    if (!form.company) {
      err.company = "Company is required";
    }
    if (!form.location) {
      err.description = "Location is required";
    }

    return err;
  };

  return (
    <Container>
      <h1>Add Job</h1>
      <div>
        {isSubmitting ? (
          <Spinner animation="border" />
        ) : (
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    error={
                      error.title
                        ? {
                            content: "Please enter a job title",
                            pointing: "below",
                          }
                        : null
                    }
                    label="Title"
                    placeholder="Job Ttile"
                    name="title"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter company name"
                    name="company"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    name="location"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Salary</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Salary"
                    name="salary"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Just applied"
                    name="status"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Is there a contact?"
                    name="contact"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Add notes here"
                    style={{ height: "100px" }}
                    name="note"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Col>
          </Row>
        )}
      </div>
    </Container>
  );
};

export default NewJob;

import fetch from "isomorphic-fetch";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";

const Index = ({ jobs }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Welcome to Job Tracker.</h1>
          <h2>Total Jobs Applied: {jobs.length}</h2>
          {jobs.map((job) => {
            return (
              <Card key={job._id}>
                <Card.Header as="h5">{job.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{job.company}</Card.Title>
                  <Card.Text>{job.note}</Card.Text>
                  <Link href={`/${job._id}`}>
                    <Button>View</Button>
                  </Link>
                  <Link href={`/${job._id}/edit`}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

Index.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/jobs/");
  const { data } = await res.json();

  return { jobs: data };
};

export default Index;

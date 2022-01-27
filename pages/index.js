import Link from "next/link";
import fetch from "isomorphic-fetch";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Index = ({ jobs }) => {
  return (
    <Container>
      <Row className="mt-50">
        <Col>
          {jobs.map((job) => {
            return (
              <Card key={job._id}>
                <Card.Header as="h5">{job.title}</Card.Header>
                <Card.Body>
                  <Card.Title>{job.company}</Card.Title>
                  <Card.Text>{job.note}</Card.Text>
                  <Button>View</Button>
                  <Button variant="warning">Edit</Button>
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
  const res = await fetch("http://localhost:3000/api/jobs");
  const { data } = await res.json();

  return { jobs: data };
};

export default Index;

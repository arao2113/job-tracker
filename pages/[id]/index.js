import fetch from "isomorphic-fetch";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Spinner, Button, Card, Container, Row, Col } from "react-bootstrap";
import { Confirm } from "semantic-ui-react";

const Job = ({ job }) => {
  const [confirm, setConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isDeleting) {
      deleteJob();
    }
  }, [isDeleting]);

  const open = () => setConfirm(true);
  const close = () => setConfirm(false);

  const deleteJob = async () => {
    const jobId = router.query.id;

    try {
      const deleted = await fetch(
        `https://job-tracker-virid.vercel.app/api/jobs/${jobId}`,
        {
          method: "DELETE",
        }
      );

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    close();
  };

  return (
    <div>
      {isDeleting ? (
        <Spinner animation="border" />
      ) : (
        <>
          <Container>
            <Row>
              <Col>
                <Card>
                  <Card.Header as="h5">{job.title}</Card.Header>
                  <Card.Body>{`Company: ${job.company}`}</Card.Body>
                  <Card.Body>{`Location: ${job.location}`}</Card.Body>
                  <Card.Body>{`Salary: $${job.salary}`}</Card.Body>
                  <Card.Body>{`Status: ${job.status}`}</Card.Body>
                  <Card.Body>{`Contact: ${job.contact}`}</Card.Body>
                  <Card.Body>{`Note: ${job.note}`}</Card.Body>
                </Card>
                <Button variant="danger" onClick={open}>
                  Delete
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Confirm open={confirm} onCancel={close} onConfirm={handleDelete} />
    </div>
  );
};

Job.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(
    `https://job-tracker-virid.vercel.app/api/jobs/${id}`
  );
  const { data } = await res.json();

  return { job: data };
};

export default Job;

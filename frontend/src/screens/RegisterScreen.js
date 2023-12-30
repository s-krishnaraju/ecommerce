import React from "react";
import { register } from "../actions/userActions";
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form, Button, Row, Col, FormGroup, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";

function RegisterScreen() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect")
    : "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchingPassword, setMatchingPassword] = useState(true);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const [name, setName] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMatchingPassword(false);
    } else {
      setMatchingPassword(true);
      dispatch(register(name, email, password));
      setShowSuccessMessage(true);
    }
  };

  return (
    <FormContainer>
      <h1>Register</h1>
      {showSuccessMessage ? (
        <>
          <Alert
            className="p-0 w-75"
            style={{ color: "green", fontSize: "1.3rem" }}
            variant="none"
          >
            Your registration has successfully completed
          </Alert>
          <Link to={`/login/?redirect=${redirect}`}>
            <Button variant="info" type="button">
              Continue
            </Button>
          </Link>
        </>
      ) : (
        <>
          {" "}
          <Form onSubmit={submitHandler}>
            <FormGroup controlId="name" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter First and Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </FormGroup>
            <FormGroup controlId="email" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </FormGroup>

            <FormGroup controlId="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              ></Form.Control>
            </FormGroup>

            <FormGroup controlId="confirm-password" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password Again"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                required
              ></Form.Control>
              {!matchingPassword && (
                <Alert
                  style={{ fontSize: ".9rem", color: "red" }}
                  className="mt-2 p-0"
                  variant="none"
                >
                  Passwords must be the same
                </Alert>
              )}
            </FormGroup>
            {loading ? (
              <Loader></Loader>
            ) : error ? (
              <div>
                <Message variant="danger">{error}</Message>
                <Button type="submit" variant="info">
                  Sign In
                </Button>
              </div>
            ) : (
              <Button type="submit" variant="info">
                Register
              </Button>
            )}
          </Form>
          <Row className="py-3">
            <Col>
              Already Have An Account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/register"}>
                Sign In
              </Link>
            </Col>
          </Row>
        </>
      )}
    </FormContainer>
  );
}

export default RegisterScreen;

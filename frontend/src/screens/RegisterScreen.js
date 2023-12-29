import React from "react";
import { register } from "../actions/userActions";
import { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
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
  const [passwordMessage, setPasswordMessage] = useState("");
  const [name, setName] = useState("");
  const userRegister = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    <FormContainer>
      <h1>Register</h1>
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
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </FormGroup>

        <FormGroup controlId="confirm-password" className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password Again"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></Form.Control>
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
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default RegisterScreen;

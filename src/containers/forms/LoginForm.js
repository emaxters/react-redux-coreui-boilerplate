import React from 'react';
import { Button, Col, InputGroup, Input, InputGroupAddon, InputGroupText, Row, FormText, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';


const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = "Please enter the username";
    }
    if (!values.password) {
        errors.password = "Please enter the Password";
    }
    return errors;
}

const renderField = ({
    input,
    label,
    type,
    icon,
    meta: { touched, error, warning }
}) => (
        <FormGroup className="mb-3">
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <i className={icon}></i>
                    </InputGroupText>
                </InputGroupAddon>
                <Input {...input} type={type} placeholder={label} /><br />
            </InputGroup>
            {touched && ((error && <FormText color="danger">{error}</FormText>))}
        </FormGroup>
    )

let LoginForm = props => {
    const { handleSubmit, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <Field component={renderField} icon="fa fa-user" type="text" label="Username" name="username" />
            <Field component={renderField} icon="fa fa-key" type="password" label="Password" name="password" />
            <Row>
                <Col xs="6">
                    <Button color="primary" disabled={submitting} type="submit">Login</Button>
                </Col>
                <Col xs="6" className="text-right">
                    <Button color="link" className="px-0">Forgot password?</Button>
                </Col>
            </Row>
        </form>
    );
}


export default reduxForm({
    form: 'login',
    validate
})(LoginForm);
import React from 'react';
import API from '../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 40px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #0064e0;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const Button = styled.button`
  background-color: #0064e0;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

const validationSchema = Yup.object({
  email: Yup.string().email('Email inválido').required('Requerido'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await API.post('/api/users/login', values);
        const { token } = response.data;
        localStorage.setItem('token', token);
        alert('¡Inicio de sesión exitoso!');
      } catch (error) {
        alert(error.response?.data?.message || 'Error al iniciar sesión');
      }
    },
  });

  return (
    <Container>
      <Title>Iniciar Sesión</Title>
      <form onSubmit={formik.handleSubmit}>
        <Label>Email:</Label>
        <Input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorText>{formik.errors.email}</ErrorText>
        )}

        <Label>Contraseña:</Label>
        <Input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorText>{formik.errors.password}</ErrorText>
        )}

        <Button type="submit">Iniciar Sesión</Button>
      </form>
    </Container>
  );
}

export default Login;

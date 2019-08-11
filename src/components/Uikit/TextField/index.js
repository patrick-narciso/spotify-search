import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tokens from '../Tokens';
import Field from '../Field';

const TextField = ({ label, id, type, onChange, value, placeholder }) => (
  <Field label={label} id={id}>
    <TextFieldWrapper>
      <TextFieldInput id={id} name={id} type={type} onChange={onChange} placeholder={placeholder} value={value} />
    </TextFieldWrapper>
  </Field>
);

const TextFieldWrapper = styled.div`
  position: relative;
`;

const TextFieldInput = styled.input`
  width: 100%;
  box-sizing: content-box;
  padding: 8px 15px;
  border: none;
  border-bottom: 1px solid ${tokens.color('grey', 'dark')};
  margin: 0;
  color: ${tokens.brand('white')};
  outline: none;
  font-size: ${tokens.fontSize('xl')};
  font-family: ${tokens.get('type.regularFontFamily')};
  font-weight: bold;
  transition: all 0.2s ease;

  &::placeholder {
    color: ${tokens.color('grey', 'dark')};
  }

  &::-webkit-input-placeholder {
    color: ${tokens.color('grey', 'dark')};
  }

  &::-ms-input-placeholder {
    color: ${tokens.color('grey', 'dark')};
  }
`;

TextField.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

TextField.defaultProps = {
  id: '',
  type: '',
  onChange: () => {},
  value: '',
};

export default TextField;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tokens from '../Tokens';

const Field = ({ id, children, label }) => (
  <FieldWrapper>
    {label && <Label htmlFor={id}>{label}</Label>}

    <InputWrapper>{children}</InputWrapper>
  </FieldWrapper>
);

const FieldWrapper = styled.div`
  margin-bottom: 25px;
  margin-right: 20px;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-family: ${tokens.get('type.regularFontFamily')};
  font-size: ${tokens.fontSize('s')};
  color: ${tokens.brand('white')};
  line-height: 24px;
  margin-left: 3px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

Field.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
};

Field.defaultProps = {
  label: '',
};

export default Field;

import styled from '@emotion/styled';

export const ModalWrap = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  height: '100vh',
  width: '100vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
}));

export const ModalContent = styled('div')(() => ({
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  width: '80%',
  height: '500px',
  maxWidth: '400px',
  textAlign: 'center',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
}));

export const ButtonWrapper = styled('div')(() => ({
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
}));

export const StyledButton = styled('button')(() => ({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
}));

export const DescriptionContainer = styled('div')(() => ({
  maxHeight: '170px',
  overflowY: 'auto',
}));

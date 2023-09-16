import styled from "@emotion/styled";

export const Container = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
}));

export const Card = styled('div')(() => ({
  maxWidth: '345px',
  height: '410px',
  marginLeft: '20px',
  marginBottom: '20px',
  borderRadius: '15px',
  border: '2px solid',
  borderColor: 'rgb(204, 204, 240)',
  '&:hover': {
    cursor: 'pointer',
    borderColor: 'rgb(80, 80, 251)',
  },
}));

export const CardActions = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-around',
  margin: '15px 0',
}));

export const Button = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '35px',
  width: '120px',
  backgroundColor: '#d1dcf6',
  border: '1px solid #9eb1db',
  borderRadius: '3px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#a5c0fa',
  },
}));

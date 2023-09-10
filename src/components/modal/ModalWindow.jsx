import React from "react";
import { ButtonWrapper, DescriptionContainer, ModalContent, ModalWrap, StyledButton } from "./styled";
import { CardMedia, Container, Typography } from "@mui/material";

export default function ModalWindow({ content, handleCloseModal }) {
  const handleClose = () => {
    handleCloseModal(); 
  };

  return (
    <ModalWrap>
      <ModalContent>
        <Container>
        <CardMedia 
          component="img" 
          src={content.img} 
          alt="Image" 
          style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
        />
        <h2>{content.title}</h2>
        <DescriptionContainer>
          <Typography>{content.description}</Typography>
        </DescriptionContainer>
        <ButtonWrapper>
          <StyledButton onClick={handleClose}>Close</StyledButton>
          <StyledButton>Start Quiz</StyledButton>
        </ButtonWrapper>
      </Container>
      </ModalContent>
    </ModalWrap>
  );
}

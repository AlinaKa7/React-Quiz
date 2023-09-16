import React, { useState } from "react";

import ModalWindow from "../../components/modal/ModalWindow";
import { Button, Card, CardActions, Container } from "./styled";
import { CardContent, CardMedia, Typography } from "@mui/material";

export default function CardUnit({ quizzes }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
      <Container >
        <Card >
          <CardMedia
            component="img"
            image={quizzes.img}
            title={quizzes.title}
            style={{ 
              width: "100%", 
              maxHeight: "200px", 
              objectFit: "contain", 
              borderTopLeftRadius: "15px",
              borderTopRightRadius: "15px" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" >
              {quizzes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {quizzes.description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions >
            <Button size="small">Start Quiz</Button>
            <Button  size="small" onClick={handleShowModal}>Show More</Button>
          </CardActions>
        </Card>
        {isShowModal && (
        <ModalWindow content={quizzes} handleCloseModal={handleShowModal} />
        )}
      </Container> 
  );
}

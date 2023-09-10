import { Button } from "@mui/base";
import { Card, CardActions, CardContent, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import ModalWindow from "../../components/modal/ModalWindow";

//import {styles} from "./styles";

export default function CardUnit({ quizzes }) {
  const [isShowModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(!isShowModal);
  };

  return (
      <Container className="container">
        <Card className="card-item">
          <CardMedia
            className="image"
            image={quizzes.img}
            title={quizzes.title}
            alt="Image" 
            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div" >
              {quizzes.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" >
              {quizzes.description.slice(0, 100)}...
            </Typography>
          </CardContent>
          <CardActions className="action-block">
            <Button className="start-btn" size="small">Start Quiz</Button>
            <Button className="show-btn" size="small" onClick={handleShowModal}>Show More</Button>
          </CardActions>
        </Card>
        {isShowModal && (
        <ModalWindow content={quizzes} handleCloseModal={handleShowModal} />
        )}
      </Container> 
  );
}


/* <div style={styles.Container}>
      <Card style={styles.Item}>
        <CardMedia
          style={styles.Media}
          image={quizzes.img}
          title={quizzes.title}
        />
        <CardContent style={styles.content}>
          <Typography gutterBottom variant="h5" component="div" style={styles.title}>
            {quizzes.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={styles.description}>
            {quizzes.description.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions style={styles.actions}>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>  */

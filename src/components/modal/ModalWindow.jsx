import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { CardMedia, Container, Typography } from '@mui/material';
import {
  ButtonWrapper,
  DescriptionContainer,
  ModalContent, ModalWrap,
  StyledButton,
} from './styled';

export default class ModalWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
    };
  }

  handleClose = () => {
    this.setState({ isModalOpen: false });
    this.props.handleCloseModal();
  };

  render() {
    return (
      <ModalWrap>
        <ModalContent>
          <Container>
          <CardMedia
            component="img"
            src={this.props.content.img}
            alt="Image"
            style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
          />
          <h2>{this.props.content.title}</h2>
          <DescriptionContainer>
            <Typography>{this.props.content.description}</Typography>
          </DescriptionContainer>
          <ButtonWrapper>
            <StyledButton onClick={this.handleClose}>Close</StyledButton>
            <StyledButton>Start Quiz</StyledButton>
          </ButtonWrapper>
        </Container>
        </ModalContent>
      </ModalWrap>
    );
  }
}

ModalWindow.propTypes = {
  content: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};

// previous code without class (for me)

// import React from 'react';
// import { PropTypes } from 'prop-types';

// import { CardMedia, Container, Typography } from '@mui/material';
// import {
//   ButtonWrapper, DescriptionContainer, ModalContent, ModalWrap, StyledButton,
// } from './styled';

// export default function ModalWindow({ content, handleCloseModal }) {
//   const handleClose = () => {
//     handleCloseModal();
//   };

//   return (
//     <ModalWrap>
//       <ModalContent>
//         <Container>
//         <CardMedia
//           component="img"
//           src={content.img}
//           alt="Image"
//           style={{ width: '100%', maxHeight: '200px', objectFit: 'contain' }}
//         />
//         <h2>{content.title}</h2>
//         <DescriptionContainer>
//           <Typography>{content.description}</Typography>
//         </DescriptionContainer>
//         <ButtonWrapper>
//           <StyledButton onClick={handleClose}>Close</StyledButton>
//           <StyledButton>Start Quiz</StyledButton>
//         </ButtonWrapper>
//       </Container>
//       </ModalContent>
//     </ModalWrap>
//   );
// }

// ModalWindow.propTypes = {
//   content: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//   }).isRequired,
//   handleCloseModal: PropTypes.func.isRequired,
// };

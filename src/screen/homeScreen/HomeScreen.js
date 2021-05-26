import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './_homeScreen.scss';
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';
import Video from '../../components/video/Video';

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {
          [...new Array(20)].map(() => (
            <Col lg={3} md={4}>
              <Video />
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default HomeScreen

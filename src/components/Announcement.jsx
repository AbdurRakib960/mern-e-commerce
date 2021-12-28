import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  color: white;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  fonst-size: 14px;
  font-weight: bold;
`;

const Announcement = () => {
  return <Container>Super Deal ! Free shipping on orders over 50$</Container>;
};

export default Announcement;

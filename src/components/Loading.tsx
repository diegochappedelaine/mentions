import { LoadingImg } from "assets";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src={LoadingImg} alt="Loading" />
    </Container>
  );
};

export default Loading;

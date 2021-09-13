import { BiWorld, BiMessageAltDetail, BiNews } from "react-icons/bi";
import styled from "styled-components";
import { randomElementFromArray } from "utils";

const ImageContainer = styled.div<{ $backgroundColor: string }>`
  height: 24px;
  width: 24px;
  position: absolute;
  right: 15px;
  bottom: 45px;
  background: ${({ $backgroundColor }) => $backgroundColor};
  border-radius: 50%;
  color: white;
  border: 3px solid white;
  display: grid;
  place-items: center;
`;

const DataTypes = [
  { background: "#86D838", icon: <BiWorld /> },
  { background: "#2D4149", icon: <BiNews /> },
  { background: "#29BFD5", icon: <BiMessageAltDetail /> },
];

const DataTypeIcon = () => {
  const { background, icon } = randomElementFromArray(DataTypes);
  return <ImageContainer $backgroundColor={background}>{icon}</ImageContainer>;
};

export default DataTypeIcon;

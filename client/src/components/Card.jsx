import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image
          type={type}
          src="https://legiit-service.s3.amazonaws.com/e6b231fb2b3929775603d68aba761207/6f2c8ec05be61314ccee5bce008da04c.jpg"
        />
        <Details type={type}>
          <ChannelImage
            type={type}
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?cs=srgb&dl=pexels-juan-mendez-1536619.jpg&fm=jpg"
          />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Lama Dev</ChannelName>
            <Info>660,908 viws · 1 day ago </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
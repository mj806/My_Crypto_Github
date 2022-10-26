import React from "react";
import styled from "styled-components";

export const CoinContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const CoinRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid #d7d7d7;
  width: 900px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;
export const CoinItem = styled.div`
  display: flex;
  align-items: center;
  padding-right: 24px;
  min-width: 300px;
`;
export const CoinHeader1 = styled.h1`
  font-size: 16px;
  width: 150px;
`;
export const BitPic = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`;
export const BitSymbol = styled.p`
  text-transform: uppercase;
`;
export const CoinData = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  width: 100%;
`;
export const CoinPrice = styled.p`
  width: 110px;
`;
export const CoinVol = styled.p`
  width: 230px;

  @media (max-width: 768px) {
    margin-left: 5rem;
  }
`;
export const coinCap = styled.p`
  width: 230px;
`;
export const cPercentRed = styled.p`
  width: 100%;
  color: red;
`;

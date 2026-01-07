import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: ${({ width }) => (width ? width : "32%")};
  background-color: var(--bs-white);
  box-shadow: var(--primary-box-shadow);
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
  transition: all var(--primary-transition-time);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--card-hover-shadow);
  }
  
  @media only screen and (max-width: 768px) {
    width: 49%;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Top = styled.div``;

export const Bottom = styled.div`
  padding-bottom: 12px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform var(--primary-transition-time);
  
  ${Container}:hover & {
    transform: scale(1.05);
  }
  
  ${({ profile }) =>
    profile === "true" &&
    `
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: -14px;
    object-fit: cover;
  `}
`;

export const ImageContainer = styled.div`
  overflow: hidden;
  border-radius: 12px 12px 0 0;
`;

export const TopItem = styled.div`
  position: relative;
`;

export const TopItemContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.5) 100%);
`;

export const TopItemInfo = styled.div`
  position: inherit;
  bottom: 12px;
  display: flex;
  margin-left: 18px;
  align-items: center;
`;

export const BottomItem = styled.div`
  width: 90%;
  margin: 0px auto;
  padding-top: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const PriceText = styled.h3`
  color: var(--bs-blue);
  margin-bottom: 4px;
  padding: 4px 0px;
  font-size: 1.5rem;
  font-weight: 700;
  background: var(--gradient-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Text = styled.p`
  ${({ location }) =>
    location &&
    `
    color: var(--bs-white);
    margin-left: 10px;
    font-weight: 600;
    text-transform: capitalize;
    font-size: 0.95rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  `}
  
  ${({ description }) =>
    description &&
    `
    padding: 4px 0px;
    color: var(--bs-gray);
    font-size: 0.9rem;
    margin-bottom: 12px;
    line-height: 1.6;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    min-height: 48px;
    flex: 1;
  `}
`;

export const Anchor = styled(Link)`
  color: var(--bs-gray-dark);
  transition: color var(--primary-transition-time);
`;

export const Title = styled.h2`
  margin-bottom: 4px;
  padding: 4px 0px;
  text-transform: capitalize;
  font-size: 1.15rem;
  font-weight: 600;

  ${Anchor} {
    color: var(--bs-gray-dark);
    transition: color var(--primary-transition-time);
    
    &:hover {
      color: var(--bs-blue);
    }
  }
`;

export const ListingAgent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  margin-top: 12px;
  border-top: 1px solid var(--bs-gray-light);
  position: relative;
`;

export const ListingAgentImage = styled.div``;

export const ListingAgentName = styled.h2`
  font-size: 0.95rem;
  margin-left: 12px;
  font-weight: 500;
  color: var(--bs-gray-dark);
  
  &:hover ${Anchor} {
    color: var(--bs-blue);
  }
`;

export const LisitngButton = styled.button`
  background: var(--gradient-blue);
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  cursor: pointer;
  transition: all var(--primary-transition-time);
  box-shadow: var(--subtle-shadow);
  font-weight: 500;
  margin: 16px auto;
  display: block;
  width: fit-content;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px -4px rgba(37, 99, 235, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  ${Anchor} {
    color: var(--bs-white);
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

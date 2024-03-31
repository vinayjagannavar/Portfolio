import React from 'react';
import styled from 'styled-components';
import { certifications } from '../../data/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CertificationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Certification = styled.div`
  width: 100%;
  max-width: 300px; /* Adjust the width as needed */
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 24px;
`;

const CertificationImageLink = styled.a`
  display: block;
  border-radius: 8px;
  overflow: hidden;
`;

const CertificationImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
  object-fit: cover;
`;

const CertificationName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 16px;
  margin-bottom: 8px;
  text-align: center;
`;

const CertificationDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
`;

const Certifications = () => {
  return (
    <Container id="certifications">
      <Wrapper>
        <Title>Certifications</Title>
        <Desc>Here are some of my certifications acquired over time.</Desc>
        <CertificationsContainer>
          {certifications.map((certification) => (
            <Certification key={certification.id}>
              <CertificationImageLink href={certification.certificateURL} target="_blank" rel="noopener noreferrer">
                <CertificationImage src={certification.image} alt={certification.name} />
              </CertificationImageLink>
              <CertificationName>{certification.name}</CertificationName>
              <CertificationDescription>{certification.description}</CertificationDescription>
            </Certification>
          ))}
        </CertificationsContainer>
      </Wrapper>
    </Container>
  );
};

export default Certifications;

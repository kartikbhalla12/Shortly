import * as React from 'react';
import styled from 'styled-components';

export interface AboutProps {}

const AboutWrapper = styled.section`
	padding: 6rem 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	overflow: hidden;
	/* background-image: url('/images/illustration-working.svg');
	background-repeat: no-repeat;
	background-position: center right -8rem;
	background-size: 40rem; */
`;

const Content = styled.div`
	/* margin: 0 5rem; */
	margin-left: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 40%;
`;

const GetStartedButton = styled.div`
	width: fit-content;
	background-color: #2acfcf;
	color: white;
	padding: 0.6rem 2rem;
	border-radius: 10rem;
	cursor: pointer;

	&:hover {
		background-color: #9be3e2;
	}
`;

const MainHeading = styled.h1`
	font-size: 5rem;
	margin: 0;
	line-height: 5.5rem;
`;
const SubHeading = styled.h3`
	font-size: 1.2rem;
	color: #939398;
	font-weight: 600;
	width: 80%;
`;

const ImageWrapper = styled.div`
	flex-basis: 50%;
	margin-right: -20rem;
`;
const BrandImage = styled.img``;

const About: React.FC<AboutProps> = () => {
	return (
		<AboutWrapper>
			<Content>
				<MainHeading>More than just shorter links</MainHeading>
				<SubHeading>
					Build your own brand's recognition and get detailed insights on how
					your links are performing
				</SubHeading>
				<GetStartedButton>Get Started</GetStartedButton>
			</Content>
			<ImageWrapper>
				<BrandImage src='/images/illustration-working.svg' />
			</ImageWrapper>
		</AboutWrapper>
	);
};

export default About;

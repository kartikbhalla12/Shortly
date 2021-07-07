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

	@media (max-width: 700px) {
		padding: 2rem 0;
		flex-direction: column;
	}
`;

const Content = styled.div`
	order: 1;
	margin-left: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-basis: 46%;

	@media (max-width: 700px) {
		order: 2;
		margin: 0 2rem;
		text-align: center;
	}
`;

const ImageWrapper = styled.div`
	/* flex-basis: 50%; */
	order: 2;
	margin-right: -10rem;

	@media (max-width: 1280px) {
		margin-right: -8rem;
	}

	@media (max-width: 700px) {
		margin-right: -20rem;
		order: 1;
	}
	@media (max-width: 450px) {
		margin-right: -12rem;
		order: 1;
	}
`;

const BrandImage = styled.img`
	width: 40rem;

	@media (max-width: 1280px) {
		width: 35rem;
	}

	@media (max-width: 1000px) {
		width: 28rem;
	}

	@media (max-width: 700px) {
		width: 45rem;
		margin-bottom: 2rem;
	}
	@media (max-width: 450px) {
		width: 30rem;
	}
`;

const MainHeading = styled.h1`
	font-size: 5rem;
	margin: 0;
	line-height: 5.5rem;

	@media (max-width: 1280px) {
		font-size: 4rem;
		line-height: 4.5rem;
	}

	@media (max-width: 1000px) {
		font-size: 3rem;
		line-height: 3.5rem;
	}
	@media (max-width: 450px) {
		font-size: 2.5rem;
		line-height: 3rem;
	}
`;
const SubHeading = styled.h3`
	font-size: 1.2rem;
	color: #939398;
	font-weight: 600;
	width: 80%;

	@media (max-width: 1280px) {
		font-size: 1.1rem;
		width: 90%;
	}
	@media (max-width: 1000px) {
		font-size: 1rem;
		width: 90%;
	}

	@media (max-width: 700px) {
		font-size: 1.1rem;
		width: 100%;
	}
	@media (max-width: 450px) {
		font-size: 1rem;
	}
`;

const GetStartedButton = styled.div`
	width: fit-content;
	background-color: #2acfcf;
	color: white;
	padding: 0.8rem 2rem;
	border-radius: 10rem;
	cursor: pointer;

	&:hover {
		background-color: #9be3e2;
	}

	@media (max-width: 700px) {
		margin: 0 auto;
		font-size: 1.25rem;
	}
`;

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

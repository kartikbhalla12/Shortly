import * as React from 'react';
import styled from 'styled-components';

export interface AboutProps {}

const AboutWrapper = styled.section`
	padding: 6rem 0;
	background-image: url('/images/illustration-working.svg');
	background-repeat: no-repeat;
	background-position: center right -8rem;
	background-size: 40rem;
`;

const Content = styled.div`
	margin: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 40%;
`;

const GetStartedButton = styled.div`
	width: fit-content;
	background-color: #2acfcf;
	color: white;
	padding: 0.4rem 1rem;
	border-radius: 10rem;
	cursor: pointer;
`;

const MainHeading = styled.h1`
	font-size: 5rem;
	margin: 0 auto;
	line-height: 6rem;
`;
const SubHeading = styled.h3`
	font-size: 1.2rem;
	color: #939398;
	font-weight: 600;
`;

const About: React.FC<AboutProps> = () => {
	return (
		<AboutWrapper>
			<Content>
				<MainHeading>More than just shorter links</MainHeading>
				<SubHeading>
					Build your own brand's recognition and get details insights on how
					your links are performing
				</SubHeading>
				<GetStartedButton>Get Started</GetStartedButton>
			</Content>
		</AboutWrapper>
	);
};

export default About;

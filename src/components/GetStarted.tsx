import * as React from 'react';
import styled from 'styled-components';

export interface GetStartedProps {}

const GetStartedWrapper = styled.section`
	padding: 3rem 0;
	background-color: #3b3054;
	background-image: url('/images/bg-boost-desktop.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
	/* background-size: 40rem; */
`;

const Content = styled.div`
	margin: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	color: white;
	font-size: 2rem;
	margin: 0 auto;
	line-height: 6rem;
`;

const GetStarted: React.FC<GetStartedProps> = () => {
	return (
		<GetStartedWrapper>
			<Content>
				<MainHeading>Boost your links today</MainHeading>

				<GetStartedButton>Get Started</GetStartedButton>
			</Content>
		</GetStartedWrapper>
	);
};

export default GetStarted;

import * as React from 'react';
import styled from 'styled-components';

import { Button } from './common/styledComponents';
import scrollToShortener from './utils/scrollToShortener';

export interface GetStartedProps {}

const GetStartedWrapper = styled.section`
	padding: 3rem 0;
	background-color: #3b3054;
	background-image: url('/images/bg-boost-desktop.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;

	@media (max-width: 700px) {
		background-image: url('/images/bg-boost-mobile.svg');
	}
`;

const Content = styled.div`
	margin: 0 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 700px) {
		margin: 0 2rem;
	}
`;

const GetStartedButton = styled(Button)`
	width: fit-content;
	padding: 0.4rem 1.5rem;
	margin-top: 1rem;
`;

const MainHeading = styled.h1`
	color: white;
	font-size: 2.5rem;
	margin: 0 auto;
	text-align: center;

	@media (max-width: 700px) {
		font-size: 2rem;
	}

	@media (max-width: 450px) {
		font-size: 1.5rem;
	}
`;

const GetStarted: React.FC<GetStartedProps> = () => {
	return (
		<GetStartedWrapper>
			<Content>
				<MainHeading>Boost your links today</MainHeading>

				<GetStartedButton onClick={scrollToShortener}>
					Get Started
				</GetStartedButton>
			</Content>
		</GetStartedWrapper>
	);
};

export default GetStarted;

import * as React from 'react';
import styled from 'styled-components';

export interface StatisticsProps {}

const StatisticsWrapper = styled.section`
	padding: 6rem 5rem;
	background-color: #eff0f6;
	text-align: center;

	@media (max-width: 700px) {
		padding: 2rem;
	}
`;

const MainHeading = styled.h1`
	color: #3b3054;
	font-size: 2.5rem;
	margin-bottom: 0.5rem;

	@media (max-width: 700px) {
		font-size: 2rem;
	}
`;

const SubHeading = styled.h4`
	color: #939398;
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 0rem;

	@media (max-width: 450px) {
		font-size: 1rem;
	}
`;
const StatsWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin-top: 6rem;

	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

const StatsBox = styled.div`
	position: relative;

	text-align: left;
	background-color: white;
	padding: 2rem;
	border-radius: 5px;
	margin: 0 1rem;
	box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12);
	width: 18%;
	height: fit-content;

	@media (max-width: 700px) {
		width: auto;
		text-align: center;
		margin: 0;
	}

	&#second {
		margin-top: 3rem;
		@media (max-width: 700px) {
			margin-top: 6rem;
		}
	}

	&#third {
		margin-top: 6rem;
		@media (max-width: 700px) {
			margin-top: 6rem;
		}
	}

	h4 {
		margin-top: 2.5rem;
		font-size: 1.5rem;
		margin-bottom: 0;
	}

	p {
		font-size: 1rem;
		line-height: 1.7rem;
		color: #939398;
	}
`;

const ImageWrapper = styled.div`
	position: absolute;
	width: 6rem;
	height: 6rem;
	background-color: #3b3054;
	border-radius: 50%;
	top: -3rem;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		width: 2.5rem;
	}

	@media (max-width: 700px) {
		left: 50%;
		transform: translateX(-50%);
	}
`;

const Line = styled.div`
	position: absolute;
	top: 45%;
	width: 50%;
	height: 0.5rem;
	background-color: #2acfcf;

	@media (max-width: 700px) {
		width: 80vh;
		top: 25rem;
		left: 50%;
		transform: translateX(-50%) rotate(90deg);
	}

	@media (max-width: 420px) {
		width: 100vh;
		top: 40rem;
	}

	@media (max-width: 280px) {
		width: 150vh;
		top: 50rem;
	}

	@media (max-width: 280px) {
		width: 180vh;
		top: 60rem;
	}
`;

const Statistics: React.FC<StatisticsProps> = () => {
	return (
		<StatisticsWrapper>
			<MainHeading>Advanced Statistics</MainHeading>
			<SubHeading>
				Track how your links are performing across the web with our advances
				statistics dashboard
			</SubHeading>
			<StatsWrapper>
				<Line />
				<StatsBox>
					<ImageWrapper>
						<img src='/images/icon-brand-recognition.svg' alt='' />
					</ImageWrapper>
					<h4>Brand Recognition</h4>

					<p>
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</StatsBox>
				<StatsBox id='second'>
					<ImageWrapper>
						<img src='/images/icon-detailed-records.svg' alt='' />
					</ImageWrapper>
					<h4>Detailed Records</h4>
					<p>
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</StatsBox>

				<StatsBox id='third'>
					<ImageWrapper>
						<img src='/images/icon-fully-customizable.svg' alt='' />
					</ImageWrapper>
					<h4>Fully Customizable</h4>
					<p>
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</StatsBox>
			</StatsWrapper>
		</StatisticsWrapper>
	);
};

export default Statistics;

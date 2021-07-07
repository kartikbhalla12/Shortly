import * as React from 'react';
import styled from 'styled-components';

export interface FooterProps {}

const FooterWrapper = styled.section`
	padding: 4rem 0;
	background-color: #232027;
	color: white;

	@media (max-width: 1250px) {
		padding: 2rem 0;
	}
`;

const Content = styled.div`
	margin: 0 5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 1250px) {
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 700px) {
		margin: 0 2rem;
	}
`;

const Logo = styled.div`
	/* flex-basis: 35%; */
	font-size: 2.5rem;
	font-weight: 800;

	/* margin-right: 1.5rem; */

	@media (max-width: 1250px) {
		margin: 1rem 0;
	}
`;

const IconWrapper = styled.div`
	/* flex-basis: 35%; */
	display: flex;
	flex-direction: row;
	justify-content: right;
	align-items: top;

	@media (max-width: 1250px) {
		margin: 1rem 0;
	}
`;

const Icon = styled.svg`
	margin: 0 0.75rem;
	width: 2.8rem;
	height: 2.8rem;
	cursor: pointer;

	path {
		fill: white;
	}

	&:hover path {
		fill: #2acfcf;
	}

	@media (max-width: 1250px) {
		width: 2rem;
		height: 2rem;
	}
`;

const FooterNav = styled.div`
	flex-basis: 35%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	/* align-items: center; */

	@media (max-width: 1250px) {
		margin: 1rem 0;
	}
	@media (max-width: 700px) {
		text-align: center;
		flex-direction: column;
	}
`;
const FooterNavCategory = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1250px) {
		margin: 0 2rem;
	}

	@media (max-width: 700px) {
		margin: 1.5rem 0;
	}
`;

const CategoryHeader = styled.h4`
	margin-top: 0;
	@media (max-width: 700px) {
		margin-bottom: 1rem;
	}
`;

const CategoryName = styled.p`
	color: #bfbfbf;
	margin: 0.4rem 0;
	cursor: pointer;

	&:hover {
		color: #2acfcf;
	}

	@media (max-width: 700px) {
		margin: 0.3rem 0;
	}
`;

const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterWrapper>
			<Content>
				<Logo>Shortly</Logo>
				<FooterNav>
					<FooterNavCategory>
						<CategoryHeader>Features</CategoryHeader>
						<CategoryName>Link Shortening</CategoryName>
						<CategoryName>Branded Links</CategoryName>
						<CategoryName>Analytics</CategoryName>
					</FooterNavCategory>
					<FooterNavCategory>
						<CategoryHeader>Blog</CategoryHeader>
						<CategoryName>Developers</CategoryName>
						<CategoryName>Support</CategoryName>
					</FooterNavCategory>
					<FooterNavCategory>
						<CategoryHeader>Company</CategoryHeader>
						<CategoryName>About</CategoryName>
						<CategoryName>Our Team</CategoryName>
						<CategoryName>Careers</CategoryName>
						<CategoryName>Contact</CategoryName>
					</FooterNavCategory>
				</FooterNav>
				<IconWrapper>
					<Icon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
						<path d='M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z' />
					</Icon>
					<Icon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'>
						<path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
					</Icon>
					<Icon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
						<path d='M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z' />
					</Icon>
					<Icon xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
						<path d='M12,2C6.477,2,2,6.477,2,12c0,4.237,2.636,7.855,6.356,9.312c-0.087-0.791-0.167-2.005,0.035-2.868 c0.182-0.78,1.172-4.971,1.172-4.971s-0.299-0.599-0.299-1.484c0-1.391,0.806-2.428,1.809-2.428c0.853,0,1.265,0.641,1.265,1.408 c0,0.858-0.546,2.141-0.828,3.329c-0.236,0.996,0.499,1.807,1.481,1.807c1.777,0,3.143-1.874,3.143-4.579 c0-2.394-1.72-4.068-4.177-4.068c-2.845,0-4.515,2.134-4.515,4.34c0,0.859,0.331,1.781,0.744,2.282 c0.082,0.099,0.093,0.186,0.069,0.287c-0.076,0.316-0.244,0.995-0.277,1.134c-0.043,0.183-0.145,0.222-0.334,0.133 c-1.249-0.582-2.03-2.408-2.03-3.874c0-3.154,2.292-6.052,6.608-6.052c3.469,0,6.165,2.472,6.165,5.776 c0,3.447-2.173,6.22-5.189,6.22c-1.013,0-1.966-0.527-2.292-1.148c0,0-0.502,1.909-0.623,2.378 c-0.226,0.868-0.835,1.958-1.243,2.622C9.975,21.843,10.969,22,12,22c5.522,0,10-4.478,10-10S17.523,2,12,2z' />
					</Icon>
				</IconWrapper>
			</Content>
		</FooterWrapper>
	);
};

export default Footer;

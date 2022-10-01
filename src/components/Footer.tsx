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

	a {
		text-decoration: none;
		color: #bfbfbf;

		&:hover {
			color: #2acfcf;
		}
	}
`;

const LogoLink = styled.a`
	color: white ;
	text-decoration: none;
`; 
const Footer: React.FC<FooterProps> = () => {
	return (
		<FooterWrapper>
			<Content>
				<Logo><LogoLink href='/'>Shortly</LogoLink ></Logo>
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
						<CategoryName>
							<a
								href='https://www.kartikbhalla.dev'
								target='_blank'
								rel='noreferrer'>
								Contact
							</a>
						</CategoryName>
					</FooterNavCategory>
				</FooterNav>
				<IconWrapper>
					<a
						href='https://www.github.com/kartikbhalla12'
						target='_blank'
						rel='noreferrer'>
						<Icon
							fill='#FFFFFF'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 30 30'>
							<path d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z' />
						</Icon>
					</a>
					<a
						href='https://www.twitter.com/kartikbhalla12'
						target='_blank'
						rel='noreferrer'>
						<Icon
							fill='#FFFFFF'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 30 30'>
							<path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
						</Icon>
					</a>
					<a
						href='https://www.linkedin.com/in/kartikbhalla/'
						target='_blank'
						rel='noreferrer'>
						<Icon
							fill='#FFFFFF'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 30 30'>
							<path d='M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z' />
						</Icon>
					</a>
					<a
						href='https://www.instagram.com/_kartikbhalla/'
						target='_blank'
						rel='noreferrer'>
						<Icon
							fill='#FFFFFF'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 30 30'>
							<path d='M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z' />
						</Icon>
					</a>
				</IconWrapper>
			</Content>
		</FooterWrapper>
	);
};

export default Footer;

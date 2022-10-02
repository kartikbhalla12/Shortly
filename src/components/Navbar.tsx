import * as React from 'react';
import styled from 'styled-components';
import { Button } from './common/styledComponents';

export interface NavbarProps {}

const NavWrapper = styled.div`
	margin: 0 5rem;
	padding-top: 2rem;
	font-weight: 600;

	@media (max-width: 700px) {
		margin: 0 2rem;
	}
`;

const Nav = styled.section`
	display: flex;
	justify-content: space-between;

	/* margin: 0 5rem; */

	/* @media (max-width: 700px) {
		margin: 0 2rem;
	} */
`;

const LeftParent = styled.div`
	display: flex;
	flex-direction: row;
`;

const Logo = styled.div`
	font-size: 1.6rem;
	font-weight: 800;
	margin-right: 1.5rem;
`;

const CategoryParent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;

	@media (max-width: 700px) {
		display: none;
	}
`;

const Category = styled.div`
	margin: 0 1rem;
	color: #939398;
	font-size: 1rem;
	cursor: pointer;

	&:active {
		color: #424242;
	}
	
	@media (max-width: 800px) {
		font-size: 0.9rem;
		margin: 0 0.6rem;
	}
`;

const LoginParent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 0.9rem;

	@media (max-width: 700px) {
		display: none;
	}
`;

const SignInButton = styled.div`
	color: #939398;
	padding: 0.25rem 1rem;
	border-radius: 1rem;
	margin-right: 1rem;
	cursor: pointer;
	&:active {
		color: #424242;
	}

	@media (max-width: 800px) {
		font-size: 0.9rem;
		margin-right: 0.6rem;
	}
`;

const SignUpButton = styled(Button)`
	padding: 0.4rem 1rem;
	font-size: 1rem;

	@media (max-width: 800px) {
		font-size: 0.9rem;
	}
`;

const MenuIcon = styled.img`
	display: none;
	width: 2rem;
	cursor: pointer;

	@media (max-width: 700px) {
		display: block;
	}
`;

const MenuWrapper = styled.div`
	margin: 1rem 0;
	height: 0px;
	background-color: #3a3053;
	border-radius: 8px;
	overflow: hidden;
	transition: height 0.25s linear;
	display: flex;
	justify-content: center;
	/* align-items: center; */

	@media (min-width: 700px) {
		display: none;
	}

	&.show {
		transition: height 0.25s linear;
		height: 23rem;
	}
`;

const Menu = styled.div`
	text-align: center;
	color: white;
	width: 100%;
	padding: 1rem 2rem;
`;

const MenuCategory = styled(Category)`
	color: white;
	margin: 1.5rem auto;
	width: fit-content;
	font-size: 1rem;

	&:active {
		color: #2acfcf;
	}
`;
const HorizontalRow = styled.div`
	height: 1px;
	background-color: #939398;
`;

const MenuSignInButton = styled(SignInButton)`
	&:active {
		color: #2acfcf;
	}
	color: white;
	margin: 1rem auto;
	width: fit-content;
`;

const MenuSignUpButton = styled(SignUpButton)`
	margin: 1.5rem auto;
	padding: 0.8rem 2rem;
`;

const MenuLink = styled.a`
	color: #939398;
	text-decoration: none;

	@media (max-width: 700px) {
		color: white;
	}
`;

const LogoLink = styled.a`
	color: black;
	text-decoration: none;
`;

const Navbar: React.FC<NavbarProps> = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	return (
		<NavWrapper>
			<Nav>
				<LeftParent>
					<Logo><LogoLink href='/'>Shortly</LogoLink></Logo>
					<CategoryParent>
						<Category><MenuLink href='https://www.kartikbhalla.dev'>Go Back to Kartik's Portfolio</MenuLink></Category>
						<Category>Features</Category>
						<Category>Pricing</Category>
						<Category>Resources</Category>
					</CategoryParent>
				</LeftParent>
				<LoginParent>
					<SignInButton>Login</SignInButton>
					<SignUpButton>Sign Up</SignUpButton>
				</LoginParent>
				<MenuIcon
					src='/images/menu.svg'
					onClick={() => {
						if (showMenu) setShowMenu(false);
						else setShowMenu(true);
					}}></MenuIcon>
			</Nav>
			<MenuWrapper className={showMenu ? 'show' : ''}>
				<Menu>
					<MenuCategory><MenuLink href='https://www.kartikbhalla.dev'>Go Back to Kartik's Portfolio</MenuLink></MenuCategory>
					<MenuCategory>Features</MenuCategory>
					<MenuCategory>Pricing</MenuCategory>
					<MenuCategory>Resources</MenuCategory>
					<HorizontalRow />
					<MenuSignInButton>Login</MenuSignInButton>
					<MenuSignUpButton>Sign Up</MenuSignUpButton>
				</Menu>
			</MenuWrapper>
		</NavWrapper>
	);
};

export default Navbar;

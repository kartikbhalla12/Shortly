import * as React from 'react';
import styled from 'styled-components';

export interface NavbarProps {}

const Nav = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 1rem 0;
	font-weight: 600;
	font-size: 0.9rem;
	margin: 0 5rem;
`;

const LoginParent = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 0.9rem;
`;

const SignInButton = styled.div`
	color: #939398;
	padding: 0.25rem 1rem;
	border-radius: 1rem;
	margin-right: 1rem;
	cursor: pointer;
`;

const SignUpButton = styled.div`
	background-color: #2acfcf;
	color: white;
	padding: 0.4rem 1rem;
	border-radius: 10rem;
	cursor: pointer;
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
`;

const Category = styled.div`
	margin: 0 1rem;
	color: #939398;
	font-size: 0.9rem;
	cursor: pointer;
`;

const Navbar: React.FC<NavbarProps> = () => {
	return (
		<Nav>
			<LeftParent>
				<Logo>Shortly</Logo>
				<CategoryParent>
					<Category>Features</Category>
					<Category>Pricing</Category>
					<Category>Resources</Category>
				</CategoryParent>
			</LeftParent>
			<LoginParent>
				<SignInButton>Login</SignInButton>
				<SignUpButton>Sign Up</SignUpButton>
			</LoginParent>
		</Nav>
	);
};

export default Navbar;

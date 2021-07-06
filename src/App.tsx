import * as React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';

export interface AppProps {}

const Wrapper = styled.div`
	margin: 0 5rem;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
`;

const App: React.FC<AppProps> = () => {
	return (
		<Wrapper>
			<Navbar />
		</Wrapper>
	);
};

export default App;

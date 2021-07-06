import * as React from 'react';
import styled from 'styled-components';
import About from './components/About';
import Navbar from './components/Navbar';

export interface AppProps {}

const Wrapper = styled.div`
	font-family: 'Poppins', sans-serif;
`;

const App: React.FC<AppProps> = () => {
	return (
		<Wrapper>
			<Navbar />
			<About />
		</Wrapper>
	);
};

export default App;

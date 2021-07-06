import * as React from 'react';
import styled from 'styled-components';
import About from './components/About';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
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
			<GetStarted />
			<Footer />
		</Wrapper>
	);
};

export default App;

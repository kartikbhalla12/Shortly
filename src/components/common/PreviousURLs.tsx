import * as React from 'react';
import styled from 'styled-components';

export interface PreviousURLsProps {
	previousUrls: {
		originalURL: string;
		shortURL: string;
	};
}

const PreviousUrls = styled.div`
	display: flex;
	padding: 1rem 2rem;
	justify-content: space-between;
	background-color: white;
	color: #232127;
	font-size: 1rem;
	border-radius: 8px;
	margin-bottom: 1rem;
	align-items: center;
`;

const OriginalUrl = styled.span`
	width: 60%;
`;
const ShortenUrlWrapper = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	justify-content: space-between;
`;
const ShortenUrl = styled.span`
	color: #2acfcf;
`;

const CopyUrlButton = styled.div`
	/* width: fit-content; */
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2acfcf;
	color: white;
	/* font-weight: 700; */
	font-size: 1rem;
	padding: 0.5rem 1.5rem;
	border-radius: 6px;
	cursor: pointer;
	/* flex-basis: 15%; */
	margin-left: 1rem;
	cursor: pointer;
	width: 4rem;

	&:hover {
		background-color: #9be3e2;
	}

	&.copied {
		background-color: #3a3053;
	}
`;

const PreviousURLs: React.FC<PreviousURLsProps> = props => {
	const [isCopied, setIsCopied] = React.useState(false);
	return (
		<PreviousUrls>
			<OriginalUrl>{props.previousUrls.originalURL}</OriginalUrl>
			<ShortenUrlWrapper>
				<ShortenUrl
					onClick={() => window.open(props.previousUrls.shortURL, '_blank')}>
					{props.previousUrls.shortURL}
				</ShortenUrl>
				<CopyUrlButton
					onClick={() => {
						navigator.clipboard.writeText(props.previousUrls.shortURL);
						setIsCopied(true);

						setTimeout(() => setIsCopied(false), 1000);
					}}
					className={isCopied ? 'copied' : ''}>
					{isCopied ? 'Copied!' : 'Copy'}
				</CopyUrlButton>
			</ShortenUrlWrapper>
		</PreviousUrls>
	);
};

export default PreviousURLs;

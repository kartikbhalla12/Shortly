import * as React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';
import validUrl from 'valid-url';
import PreviousURLs from './common/PreviousURLs';

export interface UrlShortenerProps {}

const UrlShortenerWrapper = styled.section`
	position: relative;
	margin-top: 10rem;
	padding: 8rem 5rem 2rem 5rem;
	background-color: #eff0f6;
`;
const InputWrapper = styled.div`
	background-color: #eff0f6;
	position: absolute;
	width: calc(100% - 10rem);
	background-color: #3b3054;
	background-image: url('/images/bg-shorten-desktop.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
	border-radius: 8px;
	margin-top: -14.5rem;
	display: flex;
	justify-content: space-between;
`;

const InnerContainer = styled.div`
	padding: 4rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const InputContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const ErrorContainer = styled.div`
	position: absolute;
	bottom: 2rem;
	margin-top: 0.5rem;
	width: 80%;
	color: #e16768;
	font-style: italic;
`;

const Input = styled.input`
	height: 3rem;
	font-size: 1.4rem;
	padding: 1rem 2rem;
	border-radius: 8px;
	flex-basis: 80%;

	box-shadow: none;
	/* font-weight: 600; */
	border: 2px solid transparent;

	&.error,
	&.error&:focus,
	&.error&:active,
	&.error&:focus-visible {
		border: 2px solid #e16768;
	}

	&.error&::placeholder {
		color: #e16768;
	}

	&:focus,
	&:active,
	&:focus-visible {
		border: 0;
		box-shadow: 0;
		outline: 0 !important;
	}
`;

const ShortenButton = styled.div`
	/* width: fit-content; */
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2acfcf;
	color: white;
	font-weight: 700;
	font-size: 1.5rem;
	padding: 0 1.5rem;
	border-radius: 8px;
	cursor: pointer;
	flex-basis: 15%;
	margin-left: 2rem;

	&:hover {
		background-color: #9be3e2;
	}
`;

const LoaderOverride = css`
	display: block;
	color: white;
	margin: 0 auto;
	border-color: red;
`;

const UrlShortener: React.FC<UrlShortenerProps> = () => {
	const [error, setError] = React.useState('');
	const [url, setUrl] = React.useState('');
	const [loading, setLoading] = React.useState(false);
	const [previousURLs, setPreviousURLs] = React.useState<
		{ originalURL: string; shortURL: string }[]
	>([]);

	const validateURL = (url: string) => {
		if (!url) return 'Please add a link';
		if (!validUrl.isUri(url)) return 'Please provide a valid URL!';
		return '';
	};

	const getShortUrl = async (url: string) => {
		setLoading(true);

		const error = validateURL(url);
		if (error) {
			setError(error);
			setLoading(false);
		} else {
			setError('');
			try {
				const { data } = await axios.get(
					`https://api.shrtco.de/v2/shorten?url=${url}`
				);
				setPreviousURLs([
					...previousURLs,
					{ originalURL: url, shortURL: data.result.full_short_link },
				]);
				setLoading(false);
				setUrl('');
			} catch (ex: any) {
				setError('URL not supported!');
				setLoading(false);
			}
		}
	};

	return (
		<UrlShortenerWrapper>
			<InputWrapper>
				<InnerContainer>
					<InputContainer>
						<Input
							type='url'
							placeholder='Shorten a link here...'
							value={url}
							onChange={e => setUrl(e.target.value)}
							className={`${error ? 'error' : ''}`}
							onKeyDown={e => {
								if (e.key == 'Enter') {
									if (!loading) getShortUrl(url);
								}
							}}
						/>
						<ShortenButton
							onClick={() => {
								if (!loading) getShortUrl(url);
							}}>
							{loading ? (
								<BeatLoader
									loading={loading}
									css={LoaderOverride}
									color='#fff'
									size={15}
								/>
							) : (
								'Shorten it!'
							)}
						</ShortenButton>
					</InputContainer>
					<ErrorContainer style={{ flexDirection: 'column' }}>
						{error}
					</ErrorContainer>
				</InnerContainer>
			</InputWrapper>
			{previousURLs.map((url, key) => (
				<PreviousURLs key={key} previousUrls={url} />
			))}
		</UrlShortenerWrapper>
	);
};

export default UrlShortener;

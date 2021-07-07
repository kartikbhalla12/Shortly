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

	@media (max-width: 700px) {
		padding: 9rem 2rem 2rem 2rem;
	}
`;
const InputWrapper = styled.div`
	background-color: #eff0f6;
	position: absolute;
	width: calc(100% - 18rem);
	background-color: #3b3054;
	background-image: url('/images/bg-shorten-desktop.svg');
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	border-radius: 8px;
	margin-top: -14.5rem;
	display: flex;
	justify-content: space-between;
	padding: 4rem;

	@media (max-width: 700px) {
		background-image: url('/images/bg-shorten-mobile.svg');
		width: calc(100% - 8rem);
		margin-top: -15.5rem;
		padding: 2rem;
		flex-direction: column;
	}
`;

const InputContainer = styled.div`
	flex-basis: 80%;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
`;

const ErrorContainer = styled.div`
	left: 4rem;
	position: absolute;
	bottom: 2rem;
	margin-top: 0.5rem;
	width: 80%;
	color: #e16768;
	font-style: italic;

	@media (max-width: 700px) {
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
	}
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
		border: 2px solid transparent;
		box-shadow: 0;
		outline: 0 !important;
	}

	@media (max-width: 1250px) {
		font-size: 1.2rem;
		height: 1.5rem;
	}
`;

const ShortenButton = styled.div`
	flex-basis: 20%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #2acfcf;
	color: white;
	font-weight: 700;
	font-size: 1.5rem;
	padding: 0 0.5rem;
	border-radius: 8px;
	cursor: pointer;
	text-align: center;
	margin-left: 2rem;

	&:hover {
		background-color: #9be3e2;
	}

	@media (max-width: 1250px) {
		font-size: 1rem;
	}
	@media (max-width: 1000px) {
		font-size: 1rem;
		margin-left: 1rem;
		flex-basis: 30%;
	}

	@media (max-width: 700px) {
		position: relative;
		margin: 1rem 0 0 0;
		padding: 1rem;
		font-size: 1.2rem;
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
	const shortenedURLRef = React.useRef<HTMLDivElement>(null);

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
				if (shortenedURLRef.current)
					shortenedURLRef.current.scrollIntoView({
						behavior: 'smooth',
						block: 'nearest',
						// inline: 'nearest',
					});
			} catch (ex: any) {
				setError('URL not supported!');
				setLoading(false);
			}
		}
	};

	return (
		<UrlShortenerWrapper>
			<InputWrapper>
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
					<ErrorContainer style={{ flexDirection: 'column' }}>
						{error}
					</ErrorContainer>
				</InputContainer>
				<ShortenButton
					onClick={() => {
						if (!loading) getShortUrl(url);
					}}>
					{loading ? (
						<BeatLoader
							loading={loading}
							css={LoaderOverride}
							color='#fff'
							size={12}
						/>
					) : (
						'Shorten it!'
					)}
				</ShortenButton>
			</InputWrapper>
			<div ref={shortenedURLRef}>
				{previousURLs.map((url, key) => (
					<PreviousURLs key={key} previousUrls={url} />
				))}
			</div>
		</UrlShortenerWrapper>
	);
};

export default UrlShortener;

import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import Main from '../containers/Main';

const HomePage: NextPage = () => {
    return (
		<>
			<Head>
				<title>Home Project DiploAI</title>
				<meta name="description" content="Generated for Mauricio Bernal"/>
			</Head>
			<Main />

		</>
    );
}
export default HomePage;
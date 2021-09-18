import React from 'react'
import Head from 'next/head'
import 'macro-css'

import {CssBaseline, MuiThemeProvider} from '@material-ui/core'

import {Header} from '../components/Header/Header'
import {theme} from '../theme'

import '../styles/globals.scss'


export default function MyApp({Component, pageProps}: any) {
    return (
        <>
            <Head>
                <title>RJournal</title>
                <link rel="icon" href={'/favicon.ico'}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"/>
            </Head>
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Header />
                <Component {...pageProps} />
            </MuiThemeProvider>
        </>
    )
}

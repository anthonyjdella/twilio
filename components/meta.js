import Head from 'next/head'

export default function Meta() {
    return(
        <Head>
            <title>Anthony&apos;s Twilio Interview</title>
            <meta name="description" content="Anthony Dellavecchia, the software engineer" />
            <link rel="shortcut icon" href="/images/flat-avatar-2022.svg" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/flat-avatar-2022.svg" />
            <link rel="icon" type="image/png" sizes="32x32" href="/images/flat-avatar-2022.svg"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/flat-avatar-2022.svg"/>

            <meta property="og:title" content="Anthony's Twilio Interview" />
            <meta property="og:type" content="website" />
        </Head>
    )
}
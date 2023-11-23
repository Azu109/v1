import type { FC } from "react";
import Head from "next/head";
interface IProps {
  title: string
}
export const Header:FC<IProps> = function({title}){
    return (
    <Head>
        <title>{title} | Azu</title>
        <link rel="icon" href="/icon.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta name="title" content="Azu"/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://azu109.com"/>
        <meta property="og:title" content="Azu | Shiming De"/>
        <meta property="og:image" content="https://azu109.com/icon.jpg"/>
        <meta property="theme-color" content="#d6cdf9"/>


        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      </Head>
    );
};

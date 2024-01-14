import Link from "next/link";
import React from "react";

type Props = {
    header: string;
    text: string;
};

const Hero = (props: Props) => {
    const { header, text } = props;

    return (
        <article className='hero _container'>
            <figure className='hero__description'>
                <header className='hero__description-header'>{header}</header>

                <p className='hero__description-text'>
                    {text}
                    <Link href={"#"}> Read more &#8594;</Link>
                </p>
            </figure>

            <div className='hero__bg-container'>{/* <Image src/> */}</div>
        </article>
    );
};

export default Hero;

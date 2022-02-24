import Link from 'next/link'
import Meta from '../components/meta'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import React from 'react'
import Image from "next/image"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._confetti = this._confetti.bind(this);
  }

  _confetti() {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
      confettiConfig: {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 140,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "20px",
        height: "20px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      },
    }));
    console.log("confetti!");
    console.log(this.state.showComponent);
    console.log(this.state.confettiConfig);
  }

  render() {
    return (
        <div className={styles.container}>
            <Meta />

            <main className={styles.mainTitle}>
                <div className={styles.bubble}>
                    <Image
                        src="/images/text-bubble.svg"
                        alt="text-bubble"
                        width={350}
                        height={300}
                    />
                    <p className={styles.bubbleText}>
                        Ahoy, thanks for this opportunity!
                    </p>
                </div>
                <div>
                    <h1 className={`${styles.title} ${styles.welcome}`}>
                        Anthony&apos;s
                        <br />
                        Twilio Interview
                    </h1>
                    <p className={`${styles.subtitle}`}>
                        Please, take a look around. I created this to Be Bold
                        and Don&apos;t Settle{" "}
                        <Link href="https://www.twilio.com/company/values">
                            <a
                                className={`${styles.link} ${styles.link1}`}
                                target="_blank"
                            >
                                (Twilio Values)
                            </a>
                        </Link>
                    </p>
                </div>
            </main>

            <main className={styles.mainGrid}>
                <div className={styles.grid}>
                    <Link href="/">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                Presentation &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                My presentation for the Twilio interview.
                            </p>
                        </a>
                    </Link>

                    <Link href="/what-are-apis">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                What are APIs? &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                Twilio provides many APIs, but what is an API?
                                Check out this beginner article.
                            </p>
                        </a>
                    </Link>

                    <Link href="/my-top-5">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                My Top 5 &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                Here are my top 5 favorite technical blog posts
                                (which I&apos;ve written).
                            </p>
                        </a>
                    </Link>

                    <Link href="/my-roadmap">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                My Roadmap &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                Where I see myself at Twilio (hopefully) and
                                along my DevRel journey.
                            </p>
                        </a>
                    </Link>

                    <Link href="/product-lifecycle">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                Product Lifecycle &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                I document my thought process during the
                                creation of this website (so meta).
                            </p>
                        </a>
                    </Link>

                    <Link href="/about">
                        <a className={`${styles.card}`}>
                            <h2 className={`${styles.cardTitle}`}>
                                About Me &rarr;
                            </h2>
                            <p className={`${styles.cardBody}`}>
                                Just some background information about me and this website.
                            </p>
                        </a>
                    </Link>
                </div>
            </main>

            <Footer />
        </div>
    );
  }
}

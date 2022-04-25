import Image from 'next/image'

import classes from './hero.module.scss'

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/archit.jpg"
          alt="An image showing Archit"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Archit</h1>
      <p>
        I blog about web development - especially frontend frameworks like Angular or React
      </p>
    </section>
  )
}

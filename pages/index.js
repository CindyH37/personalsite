import 'katex/dist/katex.min.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="leading-[2.0]">
      <div>
        <p className="pt-10 text-center text-5xl">Hi, I'm Cindy.</p>
      </div>
      <br />
      <div className="flex gap-8">
        <div className="w-3/5">
          I'm a rising freshman at{' '}
          <a href="https://www.williams.edu/" target="_blank" rel="noreferrer">
            Williams College
          </a>{' '}
          and a cofounder of{' '}
          <a href="https://www.nexusworkshop.org" target="_blank" rel="noreferrer">
            The Nexus Workshop
          </a>
          . Broadly speaking, I’m most interested in figuring out what I’m interested in.
          {/* Currently Exploring */}
          <br /> <br />
          <p className="text-center text-2xl font-bold">Currently Exploring</p>
          <ul>
            <li>
              Attending{' '}
              <a href="https://www.startupschool.org/" target="_blank" rel="noreferrer">
                Startup School
              </a>
              , possibly the most informative free online program I've ever participated in.
            </li>
            <li>
              Reading{' '}
              <a
                href="https://www.elizabethgilbert.com/books/eat-pray-love/"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                Eat, Pray, Love
              </a>{' '}
              by Elizabeth Gilbert. This is a memoir about - get this - eating, praying, and loving.
              I needed something uplifting and so far it's been amazing.
            </li>
            <li>
              Various creative pursuits including{' '}
              <a
                href="https://en.wikipedia.org/wiki/Printmaking"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                printmaking
              </a>{' '}
              and crocheting a wool beanie.
            </li>
          </ul>
          {/* Up Next */}
          <br />
          <p className="text-center text-2xl font-bold">Up Next</p>
          <ul>
            <li>
              Participating in
              <a
                href="https://www.janestreet.com/wise-nyc-email"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                {' '}
                WiSE
              </a>
              , a two-day introduction to quantitative trading and life at Jane Street, neither of
              which I know anything about as of now.
            </li>
            <li>
              Reading{' '}
              <a
                href="http://www.emilymandel.com/sot.html"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                Sea of Tranquility
              </a>{' '}
              by Emily St. John Mandel and{' '}
              <a
                href="https://www.oceanvuong.com/copy-of-home"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                On Earth We're Briefly Gorgeous
              </a>{' '}
              by Ocean Vuong.
            </li>
            <li>
              Crocheting a cow keychain and an{' '}
              <a
                href="https://en.wikipedia.org/wiki/Amigurumi"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                amigurumi
              </a>{' '}
              bunny to keep me company at college.
            </li>
          </ul>
          <br />
        </div>
        <div className="mx-auto block w-1/4">
          <Image src="/static/images/pineapple.png" width="550" height="600" />

          {/* Put your Dickinson poem here */}
        </div>
      </div>
    </div>
  )
}

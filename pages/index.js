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
              and{' '}
              <a
                href="https://en.wikipedia.org/wiki/Amigurumi"
                target="_blank"
                rel="nonreferrer noreferrer"
              >
                amigurumi
              </a>
              .
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
          </ul>
          {/* Past Projects*/}
          <br />
          <p className="text-center text-2xl font-bold">Past Projects</p>
          <ul>
            <li>
              <a href="https://www.duolingo.com/" target="_blank" rel="noreferrer">
                Duolingo
              </a>
              . On June 28, I celebrated reaching a 365-day streak. By now I'm about 90% done with
              the French course and plan to keep going until I finish it. Then I'll probably move on
              to another language.
            </li>
            <li>
              <a
                href="https://an-eternal-golden-braid.super.site/"
                target="_blank"
                rel="noreferrer"
              >
                An Eternal Golden Braid
              </a>
              . This is a website I built during a monthlong project in May. It's based on Douglas
              Hofstadter's Gödel, Escher, Bach, which was my first exposure to (rather primitive)
              AI.
            </li>
          </ul>
        </div>
        <div className="mx-auto block w-1/4">
          <Image src="/static/images/pineapple.png" width="550" height="600" />
        </div>
      </div>
    </div>
  )
}

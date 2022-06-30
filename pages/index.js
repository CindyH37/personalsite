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
              Learning about startups at{' '}
              <a href="https://www.startupschool.org/" target="_blank" rel="noreferrer">
                Startup School
              </a>
              .
            </li>
            <li>
              Reading{' '}
              <a href="https://theprecipice.com/" target="_blank" rel="nonreferrer noreferrer">
                The Precipice
              </a>{' '}
              by Toby Ord, a book about existential risks and what we can do about them. This is
              because I recently started to become interested in AI alignment.
            </li>
            <li>
              Various creative pursuits including piano, amigurumi crochet, and Chinese brush
              painting.
            </li>
          </ul>
          {/* Past Projects*/}
          <br />
          <p className="text-center text-2xl font-bold">Past Projects</p>
          <ul>
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

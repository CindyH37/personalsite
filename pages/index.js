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
          Welcome to my site! I'm a first-year student at{' '}
          <a href="https://www.williams.edu/" target="_blank" rel="noreferrer">
            Williams College
          </a>{' '}
          interested in mathematics, economics, and comparative literature. (Yes, all at once.) I
          also like looking at pineapples but not eating them.
          {/* HYPERLINK CODE HERE: I'm also a cofounder of{' '}
          <a href="https://www.nexusworkshop.org" target="_blank" rel="noreferrer">
            The Nexus Workshop
          </a>
          . */}
          {/* Currently Exploring */}
          <br /> <br />
          <p className="text-center text-2xl font-bold">Currently Interested In</p>
          <ul>
            <li>
              Effective Altruism: What does it really mean to do good and how can we maximize our
              impact on the world?
            </li>
            <li>
              Language: How does it change the way we think and tell stories? Why does everything
              get "lost in translation?" How might I go about becoming a polyglot?
            </li>
            <li>
              Beauty in Academia: Is beauty reason enough to pursue a subject? What even is beauty,
              anyway (especially contrasted with functionality)? Does all of mathematics have
              real-world applications? And most importantly, does it need to in order to be
              worthwhile?
            </li>
          </ul>
          {/* Up Next */}
          <br />
          <p className="text-center text-2xl font-bold">
            Less Philosophical Things Keeping Me Busy
          </p>
          <ul>
            <li>
              My Classes: Probability, Advanced Chinese, The Nature of Narrative, Principles of
              Microeconomics
            </li>
            <li>
              Things I Sometimes Go To: Effective Altruism Discussions, Chinese and French Language
              Tables, Mathematics Faculty Seminars
            </li>
            <li>Trying to Learn: Flow Arts (Poi Spinning)</li>
          </ul>
          <br />
        </div>
        <div className="mx-auto block w-1/4">
          <Image src="/static/images/pineapple.png" width="550" height="600" />
          {/* Put your Dickinson poem here */}
          <p className="font-style: italic">
            I'm Nobody! Who are you? <br />
            Are you – Nobody – too? <br />
            Then there's a pair of us! <br />
            Don't tell! they'd advertise – you know!
            <br /> <br />
            How dreary – to be – Somebody! <br />
            How public – like a Frog – <br />
            To tell one's name – the livelong June – <br />
            To an admiring Bog!
            <br /> <br />
          </p>
          - Dickinson
        </div>
      </div>
    </div>
  )
}

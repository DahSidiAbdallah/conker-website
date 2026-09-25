import React from 'react'

import '../Panels.scss'
import './Faq.scss'

export const FaqPanel = () => {
  return (
    <section className="panel faq">
      <h2 className="panel-headline">
        Frequently Asked Questions
      </h2>

      <p className="question speech-bubble">
        Q) When is it going to be done?
      </p>
      <p className="answer speech-bubble">
        A) ... these things take years. Right now it&apos;s just me - at the current rate of progress it&apos;ll be done around 2030!
      </p>

      <p className="question speech-bubble">
        Q) What about Twelve Tails (12T)? Have you uncovered anything cool yet?
      </p>
      <p className="answer speech-bubble">
        A) There&apos;s very little in terms of 12T content left in BFD (see <a href="https://tcrf.net/Conker%27s_Bad_Fur_Day" target="_blank" rel="noreferrer">TCRF</a>). in terms of code - probably a lot has been re-used/re-cycled.
      </p>

      <p className="question speech-bubble">
        Q) Ok, then what about the DEBUG and ECTS ROMs?
      </p>
      <p className="answer speech-bubble">
        A) The DEBUG ROM is very similar in terms of layout to the retail ROMs, I expect much of the code/assets are the same too. ECTS ROM does not have the same layout and so needs further investigation.
      </p>

      <p className="question speech-bubble">
        Q) I&apos;m in. What can I do to help?
      </p>
      <p className="answer speech-bubble">
        A) Great! Checkout the <a href="https://github.com/mkst/conker/wiki/Contributing" target="_blank" rel="noreferrer">Contributing</a> page on the <a href="https://github.com/mkst/conker/wiki" target="_blank" rel="noreferrer">Wiki</a> or find me on Discord (mkst#4741).
      </p>

      <p className="question speech-bubble">
        Q) Damn, this website is horrible.
      </p>
      <p className="answer speech-bubble">
        A) Not really a question... But yeah, feel free to <a href="https://github.com/mkst/conker-website" target="_blank" rel="noreferrer">improve it!</a>
      </p>

    </section>
  )
}

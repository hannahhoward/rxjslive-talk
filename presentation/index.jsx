// Import React
import React from 'react'
import '../assets/prism-tomorrow-ally.css'

// Import Spectacle Core tags
import { Deck } from 'spectacle'
import { Notes } from './slideTemplates/components.jsx'
import AboutMeSlide from './slideTemplates/about-me-slide.jsx'
import QuoteSlide from './slideTemplates/quote-slide.jsx'
import DefinitionSlide from './slideTemplates/definition-slide.jsx'
import ListSlide from './slideTemplates/list-slide.jsx'
import SimpleSlide from './slideTemplates/simple-slide.jsx'
import ConceptSlide from './slideTemplates/concept-slide.jsx'
import ImageSlide from './slideTemplates/image-slide.jsx'
import QuotesSlide from './slideTemplates/quotes-slide.jsx'
import colors from './slideTemplates/colors'
import CodeSlide from './slideTemplates/code-slide.jsx'
import FancyCodeSlide from './slideTemplates/fancy-code-slide.jsx'
// import { headerColor, textColor, bgColor } from "./slideTemplates/utilities.jsx";

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'
import { headingColor, textColor } from './slideTemplates/utilities'
import { BlockQuote, Quote, Cite } from './slideTemplates/components'
// Import theme
import createTheme from 'spectacle/lib/themes/default'
import BoxBounce from './demos/box-bounce'
import LoginForm from './demos/login-form'
preloader({})

// Require CSS
require('normalize.css')
const theme = createTheme(colors, {
  primary: 'Bangers',
  secondary: 'Helvetica'
})
console.log(theme)
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}>
        <AboutMeSlide>
          <Notes>
            <p>Hi everyone I'm Hannah!</p>
            <p>Before we start just a bit about me--</p>
            <p>
              If you're looking for me on the internet, @techgirlwonder is my
              handle on most platforms, that's my little logo. FYI I use she/her
              pronouns
            </p>
            <p>
              I work for Carbon Five. We're a product development agency that
              works with all kinds of clients from startups to enterprise,
              helping them turn their ideas into software. We're hiring and
              hirable, so come find us afterward if you're interested
            </p>
            <p>Finally, here's my dog. She's cute and she can vouch for me.</p>
          </Notes>
        </AboutMeSlide>
        <DefinitionSlide
          fit={false}
          colon={false}
          term="Reactive Architecture!"
          definition="(with signal graphs)">
          <Notes>
            <p>So let's talk about Reactive Architecture!</p>
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          fit={false}
          title="But first..."
          image="rupaul.gif"
          text="So Happy To Be Among My People!">
          <Notes>
            <p>
              First though can I just say how happy I am to be Among folks like
              me!
            </p>
            <p>
              And by that for once I don't mean among my fellow queers but
              rather among people who love them some reactive programming!
            </p>
            <p>
              Seriously, I am excited to go really deep about How you actually
              build applications with RxJS. Like big, real world applications.
            </p>
          </Notes>
        </ImageSlide>
        <ListSlide
          title="Last Year's RX Talk"
          appear={false}
          ordered={false}
          list={['20 Minutes What', '5 Minutes Why', '5 Minutes How']}>
          <Notes>
            <p>Last Year I gave a talk about RX at a bunch of conferences</p>
            <p>It was like a lot of conference talks on RX.</p>
            <p>
              Most of my time was spent trying to explain what exactly this
              thing is.
            </p>
            <p>
              Which leaves very little time for why you'd use reactive
              programming to build your apps and how to actually do it.
            </p>
          </Notes>
        </ListSlide>
        <ListSlide
          title="Instead..."
          appear={false}
          ordered={false}
          list={[
            <span style={{ textDecoration: 'line-through' }}>
              20 Minutes What
            </span>,
            '10 Minutes Why',
            '20 Minutes How'
          ]}>
          <Notes>
            <p>
              I'm gonna try to get a bit deeper today on the why and the how --
              why RX is a good model and some the tricks and ideas for doing it
              well.
            </p>
          </Notes>
        </ListSlide>
        <ListSlide
          fit={false}
          title="By the end of this talk you should be able to..."
          appear={false}
          list={[
            'Describe role of RXJS in applications',
            'Conceptualize Reactive Architecture Through Signal Graphs',
            'Use some awesome tools to simplify your RxLife!'
          ]}>
          <Notes>
            <p>
              I used to be a teacher and I like to begin my talks by listing the
              ways I hope to empower you today...
            </p>
            <p>
              First, I want help you identify the value of Observables as an
              abstraction, particularly in the context of GUI front end apps
            </p>
            <p>
              Next, I want you to understand software architecture in a reactive
              context, through a pattern I call a Signal Graph
            </p>
            <p>
              Finally I want to get down to nuts and bolts, and show you some Rx
              tools that can make your life easier.
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          fit={false}
          title={
            <div>
              Part 1<br />
              Brief Frontend Review
            </div>
          }
          image="dog-butt.gif">
          <Notes>
            <p>
              Let's talk about frontends! Or, more specifically, the basic
              components of a frontend GUI based application in todays world!
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          text="Frontends Interact With Users"
          image="dog-request.jpg">
          <Notes>
            The first big component of any frontend application is the part that
            presents information to the user and gathers user input -- commonly
            called the view layer
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          text="Frontends Interact With Backends And Services"
          image="dogcall.jpg">
          <Notes>
            The next big thing a frontend does is talk to servers and other
            external services. Or, in a native context -- system resources like
            storage or settings. This layer of services is often called the
            Model or Service Layer
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          text="Frontends translate data to user interfaces"
          image="doge-meme.jpg">
          <Notes>
            <p>
              The last big responsibilty of the frontend is to coordinate
              between the users interactions with an interface and data and
              responses coming from various services. This is actually often the
              biggest job -- there's a lot of translation, combination, etc to
              do here. And people are always trying new and better ways to
              handle this -- so much so that this layer seems to get renamed
              frequently. For today we'll call it ViewModel, though it's also
              been called the Controller, Presenter, and Presentation Model.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide inverted fit={false} title="MVVM" image="MVVM.png">
          <Notes>
            <p>
              So our basic frontend architecture looks like this, commonly
              called MVVM or model view view model.
            </p>
            <p>
              We're going to spend today digging into the ViewModel, figuring
              out what it does and how you use RX to build it.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="wellbehaved.jpg"
          text="Nothing happens without a good view model!">
          <Notes>
            <p>I like to think of view models as being like teachers</p>
            <p>
              Teachers are the heart of the classroom. They mediate between the
              underlying learning materials and the student needs. They
              coordinate everything that happens. People in the teaching
              profession will often say no learning without a good teacher. And
              just like teachers, the view model is the heart of the front end.
            </p>
          </Notes>
        </ImageSlide>
        <SimpleSlide statement="Example">
          <Notes>
            <p>
              But what exactly is the view model doing? To really get into
              specifics, we need a real world example, not a silly metaphor to
              some frivolous endeavor like education.
            </p>
            <p>
              It's time to look at important product you might really find in
              today's tech industry
            </p>
          </Notes>
        </SimpleSlide>
        <ImageSlide
          inverted
          fit={false}
          title="Introducing ShamCoin!"
          image="salesman.jpg"
          text="Hottest new cryptocurrency startup. Will solve all problems.">
          <Notes>
            <p>
              I'd like to introduce you to ShamCoin, a hot new cyptocurrency
              startup working to put public services that normally been free on
              a paid private blockchain.
            </p>
            <p>
              ShamCoin users can sign up for one more more ShamCoin accounts
              with only a credit card. They can send make purchases for goods
              and services from other users with only a 25% service fee. And
              they can bid for priority appointments at the DMV so they can jump
              ahead of the little people
            </p>
          </Notes>
        </ImageSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Calculate Values"
          source="totalAccountValue.js">
          <Notes>
            <p>
              Let's say we want to show the users current account balance in
              their preferred currency. We might write a function in our view
              model that looks something like this -- it takes various input
              values, does some calculations on them, and produces an output.
              It's pretty simple - it's a pure function that helps transform
              data into a format we actually want to display.
            </p>
            <p>
              This is a pretty common action of ViewModels -- we transform data
              in one format to another format with some kind of calculation
              function
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Keep track of state"
          source="bidAmount.js">
          <Notes>
            <p>
              Often our view model has to maintain some kind of state for user
              interface. We might trust our server or a hard drive to persist
              our state, but our view model will handle maintaining our state in
              real-time.
            </p>
            <p>
              We can imagine there's a form for adjusting a bid for a DMV
              appointment, where we can increase and decrease our bid, or set it
              directly, or reset a bid to 0
            </p>
            <p>
              In the recent past we often would maintain state with some kind of
              object that contained data and presented methods for manipulating
              that data.
            </p>
            <p>
              These days we often express state as a function that takes the
              last state value and an action an returns a new state. You're
              probably most familiar with this pattern if you've used redux
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Pass user requests to services"
          source="sendShamCoin.js">
          <Notes>
            <p>
              Finally our view model often does a lot of ferrying of information
              back and forth with the service layers. Here we might submit a
              money transfer to a server and return the actual amount
              transferred after a service fee.
            </p>
          </Notes>
        </CodeSlide>
        <ImageSlide
          fit={false}
          inverted
          title="View Model is easy!"
          image="abc.jpg"
          text="It's just functions, right?">
          <Notes>
            <p>
              There are probably other edge cases, but this covers a whole lot
              of what view models do
            </p>
            <p>And honestly these things don't look so hard</p>
            <p>
              If we can express the whole view model as a series of simple
              functions, we can easily test it. The logic becomes easy to
              express and clear to read for other programmers.
            </p>
            <p>
              So is ShamCoin is ready to secure series B funding from the
              founders college buddies from Stanford and become the next billion
              dollar unicorn?
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="wellbehaved.jpg"
          title="Not so fast!">
          <Notes>
            <p>But wait!</p>
            <p>
              Before we buy that roadster and book our burning man camp, let's
              return to the teaching metaphor for a second
            </p>
            <p>
              Can we express what the teachers does as a pure set of rules with
              a predictable outcome?
            </p>
            <p>
              Maybe in this well behaved classroom we could. If the students are
              predictable and the lesson is great and everything goes exactly
              according to plan, then maybe.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          fit={false}
          inverted
          image="classroom-chaos.gif"
          title="#TheRealWorld">
          <Notes>
            <p>But what about this classroom?</p>
            <p>This is what my classroom looked like when I taught.</p>
            <p>I wasn't very good at it.</p>
            <p>And it wasn't just me or the students.</p>
            <p>
              Believe or not, for three months, I taught a middle school class
              on computer skills with no actual computers.
            </p>
            <p>
              It's a long story and you can ask me about it over drinks sometime
            </p>
            <p>But this is what an actual frontend program looks like</p>
            <p>You don't control the flow of execution.</p>
            <p>You get interrupted.</p>
            <p>User input arrive when it's ready.</p>
            <p>Servers respond when they're ready, if they respond at all</p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="kanye-taylor.gif"
          title="#FrontendLife">
          <Notes>
            <p>
              So what can we do? How do write a program that is essentially a
              series of rude interruptions and things not going as planned?
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          fit={false}
          title={
            <div>
              Part 2<br />
              Contextful Programming
            </div>
          }
          image="russiandoll.jpg">
          <Notes>
            <p>We're finally ready to start thinking about why RX</p>
            <p>
              And I want to introduce the why of RX through a concept called
              contextful programming
            </p>
            <p>
              If you google this phrase, you won't find much, and it's cause my
              co-worker Michael Avila came up with it
            </p>
            <p>
              I think it's super cool and explains a lot, to me, about why we
              use Observables and other tools like them. And I hope one day you
              will be able to google it and see his picture next to it.
            </p>
          </Notes>
        </ImageSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Let's revisit..."
          source="totalAccountValue.js">
          <Notes>
            <p>Let's revisit our calculation function.</p>
            <p>
              All most all these values probably came from a server. Which means
              we don't know when we'll get them. Also we don't know if they'll
              have values. They could be errors. And the errors might be
              different type. Even the currency might be an error.
            </p>
            <p>
              Let's leave the when out of it for now and just say that our if
              any of our accounts are in error, the whole thing is an error
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Eek!"
          zoom={1}
          source="totalAccountValueWithErrors.js">
          <Notes>
            <p>Wow. So that font size went down.</p>
            <p>
              The length of the function doubled and we're spending all the
              extra lines on checks for errors
            </p>
            <p>The truth is we're not even dealing with errors here.</p>
            <p>
              All this extra effort is really to deal with the one case we care
              about -- where everything is a success.
            </p>
            <p>But that logic is lost in a sea of error checks</p>
          </Notes>
        </CodeSlide>
        <FancyCodeSlide
          notes={
            <div>
              <p>
                What if we wrapped our parameters in a little class we'll call a
                result?
              </p>
              <p>
                A result is just a value that's either a success or a failure.
                And you can see we have some very simple methods to make results
                of each type
              </p>
              <p>
                We have some simple methods to determine if a result is a
                success or a failure
              </p>
              <p>
                And now we have a map function. Which wow-- a map isn't just for
                arrays and observables? Pretty cool! Here our map function takes
                a transformation and applies it to the results value, but only
                if the result is a success, and then puts it back inside a new
                result
              </p>
              <p>
                Now I'm gonna ask you to take a leap of faith with me and let's
                define a "Super Map" function we'll call apply. Apply is just
                like map, but the transformation itself is wrapped in a result.
                We'll see how this is useful in a second
              </p>
            </div>
          }
          transition={[]}
          lang="javascript"
          source="result.js"
          ranges={[
            { loc: [0, 16], title: 'A Result Class!' },
            { loc: [1, 3], note: 'Static Methods To Make A Result' },
            { loc: [4, 11], note: 'Constructor and utility methods' },
            { loc: [12, 13], note: 'A map function' },
            { loc: [13, 15], note: 'Apply function = Map++' }
          ]}
        />
        <CodeSlide
          fit={false}
          inverted
          title="The Results Are In!"
          source="totalAccountValueResult.js">
          <Notes>
            <p>
              Armed with our new result class, let's go back to our calculation
            </p>
            <p>Wow this isn't so bad we're back to regular size font!</p>
            <p>
              There's really only a few lines that are different from our
              function which would have failed with errors
            </p>
            <p>
              Now, mind you there's a few lines in here that are a bit
              complicated.
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          zoom={4}
          fit={false}
          inverted
          title="It's Magic!"
          source="keyLine.js">
          <Notes>
            <p>
              You could write an entire essay on what's going on in line inside
              the reducer, but sufficed to say it's unwrapping on result,
              partially applying an add operation, then unwrapping the other
              result, and completing the add operation, assuming both are
              successes.
            </p>
            <p>
              Once again, buy me a drink if you wanna talk about this all night.
            </p>
            <p>
              But if you could get used to this slightly unfamiliar syntax,
              could you see the value of writing things this way?
            </p>
          </Notes>
        </CodeSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Context"
          definition="Any type that wraps another value so you can work with it
        declaritively">
          <Notes>
            So our result class is an example of a context. It's a type that
            wraps another value, and abstracts away some of the difficults of
            working with that value.
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          image="box.png"
          inverted
          fit={false}
          title="In other words...">
          <Notes>
            Basically a context is a box. And before you say a context is too
            weird.... really, you know this.
          </Notes>
        </ImageSlide>
        <CodeSlide
          zoom={4}
          fit={false}
          inverted
          title="Ever seen this?"
          source="numberArray.js">
          <Notes>You've worked with contexts before</Notes>
        </CodeSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Array"
          definition="A context for working with values that are in a collection">
          <Notes>
            An array is a context that helps you work with values in a
            collection
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          inverted
          fit={false}
          title="Yup. It's a box"
          image="person_in_box.jpg">
          <Notes>Arrays are definitely boxes</Notes>
        </ImageSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Revisiting API Calls"
          source="sendShamCoin.js">
          <Notes>
            <p>
              What about our function to talk to our backend. Does that api call
              look like it returns immediately?
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Solve With Callbacks?"
          source="sendShamCoinCb.js">
          <Notes>
            <p>
              How will we solve this? Maybe we we'll pass a callback... and make
              our code progressively hard to read
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Or Keep Our Promises"
          source="sendShamCoin.js">
          <Notes>
            <p>
              Or maybe it's not so bad, cause maybe our API call has been
              written to return a promise.
            </p>
          </Notes>
        </CodeSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Promise"
          definition="A context for working with a value that isn't available yet">
          <Notes>
            You know Promises. That thing you work with in your programming life
            all the time that wrap the return values of asynchronous operations.
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          inverted
          fit={false}
          title="Promises"
          image="Boxy-but-good.jpg">
          <Notes>Yea, promises are pretty boxy and they work pretty well</Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          title="Beware"
          text="Haskell shall not be named"
          image="voldemort.jpg">
          <Notes>
            <p>
              Now, a few of you in the audience may know where I'm getting a lot
              of this from
            </p>
            <p>
              And to be honest, I'm conspicuously avoiding diving into the deep
              end of functional programming
            </p>
            <p>
              There is probably someone here in the audience who feels boxes
              don't describe the full truth here
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="category-theory.png"
          title="I've made a terrible mistake">
          <Notes>
            <p>
              To which I say, I would like for someone to know what the heck I'm
              talking about
            </p>
            <p>
              Seriously, you wanna talk about abstract algebraic structures?
            </p>
            ><p>To that I say...</p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="portlandia-box.jpg"
          title="Put"></ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="person_in_box_2.jpg"
          title="A"></ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="box-dog.jpg"
          title="Box"></ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="box-on-head.jpg"
          title="On It"></ImageSlide>
        <ImageSlide
          inverted
          fit={false}
          image="imac-box.jpg"
          title="One More Box...">
          <Notes>
            <p>
              But we're not quite done, cause we still have one very important
              box to talk about.
            </p>
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          inverted
          fit={false}
          term="Observable"
          definition="A context that wraps a value that will change over time">
          <Notes>
            <p>Yes. I'm talking about the reason we're here.</p>
            <p>
              Observable are a very special context cause it deals with values
              that change over time
            </p>
          </Notes>
        </DefinitionSlide>
        <ImageSlide
          fit={false}
          inverted
          image="classroom-chaos.gif"
          title="Reminder...">
          <Notes>
            <p>
              Observables address one of our biggest concerns in frontend
              programming: not being able to control when things happen
            </p>
            <p>And that makes them really powerful.</p>
            <p>
              Especially in the Rx context where our builtin toolbelt of things
              they can do is so large we've spent half the conference just going
              over different operators.
            </p>
          </Notes>
        </ImageSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Still stuck"
          source="totalAccountValueResult.js">
          <Notes>
            <p>
              Let's revisit our calculation one more time. It handles errors,
              but we still have no idea when these values become available (or
              definitely error).
            </p>
            <p>
              In fact they could become available at totally different times!
            </p>
            <p>
              What if we imagine these parameters are all observables? Could we
              make this balance function always express the right value over
              time?
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          zoom={4}
          title="A very powerful line of code"
          source="combineLatest.js">
          <Notes>
            <p>
              Basically, every time a new value becomes available for one of
              these accounts or the currency changes, we want to redo our
              calculation.
            </p>
            <p>
              And basically, Rx has a single operator to do all that. We use
              combineLatest plus a map, and while I'm glossing over some
              possible pitfalls, this basically can convert our function into an
              always up to date reflection of the current totalAccountValue.
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          zoom={1}
          title="About Time"
          source="totalAccountValueFinal.js">
          <Notes>
            <p>
              So here's our final version. It's a bit longer, but it does so
              much more.
            </p>
            <p>
              And actually while we left both the observables and the results
              inside the function, the operations are generalizable enough that
              we could take an abiritrary function to calculate from values and
              wrap all the parameters in results and observables and handle all
              the unwrapping outside the logic of the function itself, leaving
              us with just our original implementation.
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="What about state?"
          source="bidAmount.js">
          <Notes>
            <p>
              What about these reducers? It sure would be nice if we could get
              rid of that whole third party library we're using just to keep our
              state over time.
            </p>
            <p>
              And it'd be even cooler if we could make our code simpler in the
              process.
            </p>
          </Notes>
        </CodeSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Spoiler Alert"
          description="RxJS is a 3rd party library"
        />
        <CodeSlide
          fit={false}
          inverted
          zoom={2}
          title="Reducer ❤️ observables"
          source="reducerForObservables.js">
          <p>
            This is a function I wrote that I'm not gonna dig deep on, but the
            basic idea is rather than deal with the hole mess of a switch
            statement, I want to use single functions that update the state for
            each type of message. And then I'm gonna use observables to
            programmatically wrap up those messages so that each action is
            triggered by a single observable, which calls the right function to
            update the state.
          </p>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Easier to just show..."
          source="bidAmountRx.js">
          <Notes>
            <p>
              While that last slide was a whole lot of weird, the yield is
              pretty awesome
            </p>
            <p>
              Look at this super simple declarative syntax we have for building
              a reducer for a set of observables
            </p>
            <p>It's practically just a rule set</p>
            <p>
              And while the code on the last page took me a bit to come up with,
              I'll let you know how you can avoid writing it yourself by the end
              of this talk!
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="Making the async sync"
          source="sendShamCoin.js">
          <Notes>
            <p>
              Lastly let's look at our server call. Promises helped give us a
              declarative way to work with a single response, but what if we
              wanted to have an always up to date value for the last response
              from the server...?
            </p>
          </Notes>
        </CodeSlide>
        <CodeSlide
          fit={false}
          inverted
          title="API Magic"
          source="sendShamCoinRx.js">
          <Notes>
            <p>
              It's surprisingly simple, because of one of Rx's most amazing
              operators, called SwitchMap
            </p>
            <p>
              If we treat our inputs as observables, and combine them together
              with combineLatest, we can use SwitchMap to make our api calls,
              but the amazing thing about switchmap is it will emit when the
              actual promise resolves, and combine those responses into a
              stream.
            </p>
            <p>
              So we get an always up to date value of the last server response.
            </p>
          </Notes>
        </CodeSlide>
        <ImageSlide
          inverted
          fit={false}
          title="Starting to come together"
          image="building-blocks.jpg">
          <Notes>
            <p>
              At this point we have some great architectural building blocks for
              our view model. We're almost there.
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          fit={false}
          title={
            <div>
              Part 3<br />
              Signal Graphs
            </div>
          }
          image="grid2.gif">
          <Notes>
            <p>
              We need to start thinking about how all these components fit
              together.
            </p>
            <p>
              How do we design an architecture to connect user inputs, state
              changes, service calls, and updating the UI?
            </p>
          </Notes>
        </ImageSlide>
        <ImageSlide
          image="yoda.gif"
          inverted
          fit={false}
          title="Learn by doing">
          <Notes>
            Rather than giving a big explanation, let's try see if we can
            discover a pattern by building some UI with RX
          </Notes>
        </ImageSlide>
        <BoxBounce inverted />
        <CodeSlide
          lang="javascript"
          source="buttonStream.js"
          inverted
          fit={false}
          title="Everything you need in RX"
          notes={
            <div>
              <p>So let's look at how this works</p>
              <p>Our first step is to look up our DOM elements</p>
              <p>
                Then, we use `fromEvent` to generate observables from DOM events
              </p>
              <p>we'll use map to convert a click even to a position</p>
              <p>
                Finally, we user merge to merge the two position streams, which
                gives us a stream of the current position of the ball
              </p>
              <p>
                And that's it -- we did all of this with just Rx, and no other
                libraries
              </p>
            </div>
          }
        />
        <ImageSlide inverted image="round2.png">
          <Notes>
            That's pretty awesome but let's see if we can level up and build
            something more real world
          </Notes>
        </ImageSlide>
        <LoginForm inverted />
        <FancyCodeSlide
          lang="javascript"
          source="loginStream.js"
          ranges={[
            { loc: [0, 7], title: 'But how tho?' },
            {
              loc: [0, 7],
              note: "Let's say we have an API"
            },
            { loc: [7, 10], note: 'Get some dom elements' },
            {
              loc: [11, 13],
              note: 'Login Attempt = Grab last user + password on each submit '
            },
            {
              loc: [13, 16],
              note: 'Login Response = the magic of mergeMap'
            },
            {
              loc: [17, 21],
              note: 'Login In Progress = toggel between attempts + responses'
            },
            {
              loc: [22, 25],
              note: 'Login Successes = filter responses for successes'
            },
            {
              loc: [26, 29],
              note: 'Login Failures = same thing!'
            },
            {
              loc: [30, 34],
              note: 'Failure Message = extract from failures, clear on attempt'
            },
            {
              loc: [35, 38],
              note: 'User token = extract from login successes'
            },
            {
              loc: [39, 44],
              note: 'Use token to get a protected resource'
            }
          ]}
        />
        <ImageSlide
          image="signals-cia.gif"
          title="Signal Graph"
          fit={false}
          text="How data propogates through your program"
          inverted>
          <Notes>
            So finally we're starting to see an architectural pattern, and it
            emerges from the drawings we're making on in each of these examples.
            We're starting to see a kind of graph emerge of how data propopates
            through a system with observables. There's a term for this concept.
            It's called a signal graph. The signals are the emissions from
            observables, and the graph is how they're all tied together. This is
            how we architect programs with Observables. Our programs become a
            series of reactive data streams, starting with primary signals and
            extending to all the derivations based on those primary signals. And
            taken together, those form a signal graph.
          </Notes>
        </ImageSlide>
        <ImageSlide
          inverted
          image="signal_graph.svg"
          title="Real App Signal Graph"
          fit={false}>
          <Notes>
            When I'm on teams that write programs with Observables, we actually
            maintain a signal graph as a seperate diagram! Here's an example
            that's part of an actual producton application I worked on.
          </Notes>
        </ImageSlide>

        <ImageSlide
          fit={false}
          inverted
          title="Primary Signals"
          text="The Subject of the matter..."
          image="puzzle.jpg">
          <Notes>
            The primary signals of your graph are always subjects... I always
            think of subjects as the puzzle pieces everything plugs into.
            They're the feeders for your graph.
          </Notes>
        </ImageSlide>
        <ListSlide
          inverted={true}
          ordered={false}
          appear={true}
          title="Types Of Primary Signals"
          list={[
            <span>
              <strong>Input Signals:</strong> Have data, represent a value,
              probably a Behavior Subject
            </span>,
            <span>
              <strong>Gate Signals:</strong> No data, represent an event like
              clicking a button, don't replay - just a Subject
            </span>
          ]}></ListSlide>
        <DefinitionSlide
          fit={false}
          inverted
          term="Derived Signals"
          definition="A piece of data derived from primary or other derived signals"></DefinitionSlide>
        <ListSlide
          inverted={true}
          ordered={false}
          appear={true}
          title="Types Of Derived Signals"
          list={[
            <span>
              <strong>Validation Signals:</strong> run validations on user
              inputs, produce a set of errors
            </span>,
            <span>
              <strong>Result Signals:</strong> Derive further result data from
              earlier signals, ignore if results are in error
            </span>
          ]}></ListSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Rule #1"
          description="Signal Graphs is the global state of a program">
          <Notes>
            Observables don't always represent global state. They often
            represent transient operations. Observables in your signal graph are
            values. They represent the global state.
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Signal Graphs"
          description="Connect to components, but live outside">
          <Notes>
            That means they connect inside components but they are defined and
            managed outside
          </Notes>
        </ConceptSlide>
        <CodeSlide
          lang="javascript"
          source="shareReplay.js"
          inverted
          fit={false}
          title="Always share replay, start with">
          <Notes>
            Because even derived signals are pieces of state, they should always
            be shared and have an initial value
          </Notes>
        </CodeSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Rule #2"
          description="Push Values To The Edges">
          <Notes>
            <p>
              This ones a bit less obvious, but you find in production, that you
              almost always have values push to the edges of the graph through
              all their derived signals, even if they are in error state.
            </p>
            <p>That means using Result Types for all your derived signals</p>
          </Notes>
        </ConceptSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Best Practice"
          description="Use Typescript!">
          <Notes>
            <p>
              You don't have to use typescript, but my experience is that
              signals are so much easier to work with when you know the types
              match.
            </p>
          </Notes>
        </ConceptSlide>
        <ListSlide
          ordered={true}
          appear={true}
          inverted
          title="Production Concerns"
          list={[
            'How do I test?',
            'How do I make sure my graph is sound?',
            'Ack RxJs idiosyncracies!',
            'One big graph or lots of smaller ones?',
            'Diagramming is hard'
          ]}>
          <Notes>
            <p>
              At Carbon Five we write a lot of code using Signal Graphs.
              Obviously there are concerns that come up when you use this in
              production.
            </p>
            <p>You might be wondering how you test your signals</p>
            <p>
              Or how you make sure your graphs don't have cycles or missing
              dependencies
            </p>
            <p>
              Also, RxJs has some idiosycracies I haven't covered here that you
              might encounter. Google hot/cold observables
            </p>
            <p>
              And then as your program grows if you have just one graph it gets
              huge.... so maybe you want a few graphs and a way to represent
              connections
            </p>
            <p>
              And finally, these graph diagrams sure take a lot of time to
              maintain. Man I thought we were agile why we spending all this
              time on documentation instead of working software?
            </p>
            <p>
              So we've spent a lot of time at Carbon Five over several projects
              developing best practices around all of these
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          image="boughtthecompany.jpg"
          inverted
          text={
            <BlockQuote style={{ textAlign: 'right' }}>
              <Quote
                style={{ fontSize: '2.66rem' }}
                textColor={headingColor(true)}>
                I liked Signal Graphs so much I bought the company!
              </Quote>
              <Cite textColor={textColor(true)}>me, 2018</Cite>
            </BlockQuote>
          }>
          <Notes>
            And recently I thought, what if we could take all those best
            practices and build a library to encode them so other people could
            skip over these hurdles?
          </Notes>
        </ImageSlide>
        <DefinitionSlide
          term="Signal"
          definition="A library for frontend state management using signal graphs">
          <Notes>
            So I'd like to tell you about Signal, a library for doing state
            management in your frontend javascript apps with signal graphs
          </Notes>
        </DefinitionSlide>
        <ConceptSlide
          fit={false}
          inverted
          concept="Very Importat Life Lesson"
          description="No Releases with talks....">
          <Notes>
            <p></p>
          </Notes>
        </ConceptSlide>
        <CodeSlide
          lang="javascript"
          source="totalAccountValueSignal.js"
          inverted
          fit={false}
          title="One line = Observables + Results">
          <Notes>
            Because even derived signals are pieces of state, they should always
            be shared and have an initial value
          </Notes>
        </CodeSlide>
        <CodeSlide
          lang="javascript"
          source="bidAmountSignal.js"
          inverted
          fit={false}
          title="Awesome Reducers">
          <Notes>
            Because even derived signals are pieces of state, they should always
            be shared and have an initial value
          </Notes>
        </CodeSlide>
        <ListSlide
          ordered={true}
          appear={true}
          inverted
          title="And More!"
          list={[
            'Awesome Graph DI',
            'Connects To React!',
            'Great Testing',
            'Connect Graphs To Graphs',
            'Stay Tuned!'
          ]}>
          <Notes>
            <p>
              At Carbon Five we write a lot of code using Signal Graphs.
              Obviously there are concerns that come up when you use this in
              production.
            </p>
            <p>You might be wondering how you test your signals</p>
            <p>
              Or how you make sure your graphs don't have cycles or missing
              dependencies
            </p>
            <p>
              Also, RxJs has some idiosycracies I haven't covered here that you
              might encounter. Google hot/cold observables
            </p>
            <p>
              And then as your program grows if you have just one graph it gets
              huge.... so maybe you want a few graphs and a way to represent
              connections
            </p>
            <p>
              And finally, these graph diagrams sure take a lot of time to
              maintain. Man I thought we were agile why we spending all this
              time on documentation instead of working software?
            </p>
            <p>
              So we've spent a lot of time at Carbon Five over several projects
              developing best practices around all of these
            </p>
          </Notes>
        </ListSlide>
        <ImageSlide
          inverted
          fit={false}
          title="That's all folks!"
          image="slushie.gif"
          text={
            <div>
              rxjslive-talk.techgirlwonder.com
              <br />
              github.com/hannahhoward/rxjslive-talk
            </div>
          }
        />
      </Deck>
    )
  }
}

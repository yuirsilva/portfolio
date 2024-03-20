---
title: "People don't know what a REST API is"
pubDate: 2024-03-18
description: "It's 2024 and they still say that is JSON"
author: "Yuri Candido da Silva"
image:
    url: "https://htmx.org/img/createdwith.jpeg"
    alt: "HTMX logo."
tags: ["rest-api", "htmx", "hypertext"]
---

> What needs to be done to make the REST architectural style clear on the notion that hypertext is a constraint? In other words, if the engine of application state (and hence the API) is not being driven by hypertext, then it cannot be RESTful and cannot be a REST API. Period. Is there some broken manual somewhere that needs to be fixed?

Two weeks ago, I made my <a href="https://github.com/yuirsilva/justdoit" target="_blank">first project</a> using HTMX and Golang: a simple to-do app. I decided to build this after reading "<a href="https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/">How Did REST Come To Mean The Opposite of REST?</a>", an essay by Carson Gross. What really got me in this essay was the fact that I was one of them: the people who misuse the term REST (REpresentational State Transfer).

Matter fact, I had never looked up the definition of a REST API; my friends always referred to it as a JSON API, and it didn't sound strange to me. Why? The thing is: the whole industry is used to referring to it as a JSON API, even though it's wrong.

### HATEOAS

HATEOAS stands for "Hypermedia as the Engine of Application State." It is a constraint in the REST architecture that aims to guide the design of web APIs. The fundamental idea behind HATEOAS is to make APIs more self-descriptive. Also, the server's response is easily understandable by the client, as it only needs to know how to render HTML. The available actions are tied to the resource.

#### Example

Picture this example: You have an API that returns information about the air quality in your bedroom. If you have more than 1400 ppm (unhealthy by the way), you can’t close your windows. What should be the HTTP response?

For an HTML response, we could have something like this for good air quality (using HTMX of course):

```html
<div>
    <h1>Air quality score: Good</h1>
    <h2>571 ppm</h2>
    <p>Bellow 1000 ppm - optimal CO<sub>2</sub> level indoors</p>
    <div>
        <button>Close windows</button>
        <button>Turn on AC</button>
    </div>
</div>
```

Notice how self-descriptive the HTML response is, the possible performant actions by the user are within the response itself. The client doesn't need a ternary operator to render the air quality, the "Close windows" button or whatever is attached in the response. Again, the client only needs to know how to render HTML.

For a bad air quality, we can have this:

```html
<div>
    <h1>Air quality score: Bad</h1>
    <h2>1420 ppm</h2>
    <p>Above 1400 ppm - brain cognitive function decreases by 50%</p>
    <div>
        <button>Turn on AC</button>
    </div>
</div>
```

See the difference? The client will render the available button and the other information, nothing more. Believe it or not, you don't even have to write a **documentation** to understand a REST API (Swagger users in shambles rn).

Now for a JSON response, we could have something like this for bad air quality:

```json
{
    "status": "unhealthy",
    "value": 1420
}
```

Despite the server's smaller response size, the client still needs to understand how to handle the `status`. For example, in a React application, we would fetch this API and use conditionals to render a different UI.

### So what?

Going back to HATEOAS, we saw that the client requires no prior knowledge of the application or server to handle the response, just an understanding of hypermedia (HTML). From this, we can conclude that JSON APIs are NOT REST APIs; they're JSON RPC APIs! They fail to follow the HATEOAS constraint, therefore, they cannot be considered RESTful APIs. We can call them <a href="https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/#how-rest-came-to-mean-restless" target="_blank">RESTless APIs</a>.

So please, don't say that these JSON RPC APIs are REST, they fail to achieve the <a href="https://martinfowler.com/articles/richardsonMaturityModel.html" target="_blank">Glory of REST</a>.

The only thing we can do to change people's mind in the future is to continue writing and sharing about what REST really is.

<a href="https://github.com/yuirsilva/justdoit/tree/main" target="_blank">Just do it, my little project in HTMX.</a>
![Just do it, my little project in HTMX](https://github.com/yuirsilva/justdoit/blob/main/screenshot/therightway.png?raw=true)

### Credits

- Shout out to <a href="https://htmx.org/" target="_blank">HTMX</a> and its creators
- <a href="https://roy.gbiv.com/untangled/2008/rest-apis-must-be-hypertext-driven" target="_blank">Fielding's original blog post</a>
- <a href="https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/" target="_blank">How Did REST Come To Mean The Opposite of REST?</a>
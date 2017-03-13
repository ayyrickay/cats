# cats
A simple app that renders a grid of cat photos/facts, and allows users to delete unwanted fact/photo combos

## time to complete
From start to finish, this app probably took 8 - 10 hours. I had to brush up on Redux (I've been using MobX for the past few months) and I really agonized over my data fetching patterns (despite still not being happy with how it turned out.) I also played around with functional components, which felt more Redux-y, in place of ES6 class components.

## running the app
npm install for dependencies, npm start to launch the app on localhost

## tooling & design choices
#### webpack 2
Yolo.

#### babel
Because arrow functions and spread operators are all that matters - especially in Redux, dude.

#### removing cards
I considered just hiding cards with a display:none CSS marker, but I quickly decided that I probably wasn't getting at the nature of the brief, and that in some ways it was less interesting. I like the idea that, once a cat is gone... It's gone.

#### thunk
I used thunk as middleware in order to handle async server requests, dispatching functions as actions. This allowed for some potential antipatterns, though. I considered a situation in which a card can contain a photo, a fact, or (ideally) both. But, I felt like the card should really be a whole object, and so I more or less build the card by chaining actions together - once we get pictures, we get facts, and facts get associated with pictures.

I might go back and refactor this so that either action (GET_PICTURES and GET_FACTS) can go in and create/update cards, but I'd rather implement some test coverage first.

#### mixed nature-first file structure
I mostly organized files by their nature rather than their domain - so, components go together, even though the app component serves a very different purpose than the CardGrid and Card components. In production and on a team, I might prefer domain-first file structure (e.g., an App folder with the main reducer, and a Cards folder with Card-specific actions and reducers), but for code review type of work, I like the quick understanding that there are some components, a reducer, and some styles. The reducer, however, felt useful as a set of domains, and so actions and the reducing function are collected together by their domain (i.e., card reducer vs. main reducer).

#### components
I set up the CardGrid as a connected component that is solely responsible for interacting with the state tree and rendering cards accordingly. This is nice, because the Card component has a single purpose of presentation logic.

## todo
#### testing
I should have done TDD (I know, I know) but post-hoc tests are better than none. I'll probably use Tape, and potentially enzyme to check on the HTML of my components.

#### refactor?
The two async requests are pretty tightly bound right now, and it's unpleasant.

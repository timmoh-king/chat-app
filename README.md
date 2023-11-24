## Using Node.js, GraphQL and React to build a real-time chat app

To build our new real-time chat application we'll be using [GraphQL](https://github.com/dotansimha/graphql-yoga), [MongoDB](https://www.mongodb.com/), [Node.js](https://nodejs.org/en), and most importantly [ReactHooks](https://legacy.reactjs.org/docs/hooks-intro.html). This app will offer users the ability to view all of the other online users once they have logged in, so they can chat with anyone on the platform. There will also be a feature to notify users when new members log in or if the person they're chatting with is actively typing a response. Sound like a good plan? Awesome, let's get going!

If you already have create-react-app installed globally on your computer, go to the root folder and run this command:
`create-react-app`

Take some time to clear the src/folder of all files except index.js, App.js and index.css. While you are still in the src/folder, run the following command:
```
$ rm app.test.js logo.svg app.css
```
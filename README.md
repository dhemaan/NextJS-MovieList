
# Next-JS-Movie-List

This POC is just to explore the Next.JS by implementing the movie library as a thought. In this POC, we consume the Netfix open API and display the Movie/show in tiles. On clicking Movie/Show it's description page will be opened.

implemented an API for the Contact US page and to store data in MongoDB.

Used React-testing-library for writing the test cases.

Next-PWA npm package is used to implement the Progressive Web App capabilities. Where Next-PWA generates the workbox and auto-generates sw.js file.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.


## Tech Stack

**Client:** Next JS, React, CSS, Html, React-testing-library, Next-PWA

**Server:** Node


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Deployment

To deploy this project run

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## API Reference

#### Get all movies

```http
  GET /search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. aef59a858amshb88e9ab642a09ebp1ec2eejsnaee3529809a4 |

#### Get item

```http
  GET /title/details/?ids=${id}&lang=en
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Demo

https://next-js-movie-list.vercel.app/


## Code Repo
https://github.com/dhemaan/NextJS-MovieList.git

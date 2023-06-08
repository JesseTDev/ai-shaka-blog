## Surfing & Traveling Blog - A Next.js 13 Project (AI Integration)

# Project Overview

This project is a mobile-first responsive blog focused on surfing and traveling. It's developed using Next.js 13 and styled with Tailwind CSS. The blog leverages OpenAI's API to deliver unique, AI-generated content to the users based on their preferences.

Users can access the blog posts from the front-end, which connects to a planet-scale AWS database. This ensures smooth and quick access to all content, regardless of location. Users can edit the blog posts and submit their updates to the database, or they can use the AI generation feature to create new posts. They can select the type of writer they want for the AI to mimic, ensuring a diverse and personalised range of content using the blog title.

To assist users with navigating the site, I have integrated with 'Chatbase' AI chatbot. Whether it's questions about the site or how to contact, the chatbot is there to help.

Users can easily sign in using their Google or GitHub accounts, ensuring a quick and seamless onboarding process.

## Tech Stack

- Next.js 13 (Next.js Routing, SSC & CSR)
- Typescript
- Tailwind CSS
- Prisma
- NextAuth.js
- Tiptap Editor
- OpenAI API
- Chatbase Chatbot

## Features

- Responsive, mobile-first design
- AI generated blogs with customizable author styles
- Editable blog posts
- Integrated AI chatbot
- Google & GitHub sign-in
- Advert and subscribe sidebar for a newsletter
- Smooth scrolling functionality via React Smooth Scroll

## Disclaimer

Please note that this application is deployed on Vercel, and they only allow a 5-second window for API requests. If OpenAI's API is experiencing high demand, this could potentially affect the generation of new blogs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

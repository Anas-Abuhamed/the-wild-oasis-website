//? bookings = reservations

// Todo: create nextjs project: npx create-next-app@14 prjName
// Todo routing: 
// 1) for each route create folder named as route name in app folder
// 2) create js file in the folder
// 3) run url http://localhost:3000/foldername
// todo custom label as you see above: 
// settings -> search(custom labels) -> you can add items
// Every nextJS app needs to have on global layout (this is why we can't delete layoutJS file)

// Slides are important***

// Component types:

//* 1) Client components:
//  regular components
//  interactive components
//  To select client components: 
//  1) use "use client" directive at the top of the module
//  for Client sub tree, child need no "use client"
//*  every children for client component will be client component too

//! Slides are important***

//* 2) React server components:
//  new fullstack architecture for react apps
//  the server is integral part of react component trees with server components.
//  components rendered on the server, no interactivity(state(s)) -> 0kb Js -> f(data)
//  Default in apps use the RSC architecture(like next.js)
//  No API
//  Things like context API don't work  in server Components

// Server components can have props(must be serializable when passed to client components, no functions or classes)
// Server components prefered to data fetching
// Server components re-render when URL change(navigation)

//  RSC not active by default in new React apps (like vite) it needs to be implemented by framework like next.js(app router)

// In react server components: the component can be async function, can do fetching in server side not on client side then the data will come from server not fetch on client side(see network section )
//* For loader, just add Loading.js(add your content) in app file and it will be for all pages (sub routes) and nested ones when they have sth to fetch
//* You can add loading.js file in subroutes like what at cabins
// To make folder private(like components: rename it to _components)
// Use this "@/app/" instead of "../../"
// We can write title in this way instead of standard way: 
// title: {
//     template: "%s / The Wild Oasis", // %s: what title in each page 
//     default: "Welcome / The Wild Oasis" // if the page doesn't has a title
//   }
//  To set favicon: just set the icon image with name "icon.ext" in app folder
//  fonts prefered to be in your own server instead to downloaded from google server. more performance, preventing layout shift

// *Image component: 
//  more optimization
//  Responsive image
//  !should specify width and height for it
//  *IF no need for width and height you can import image and use it in src property
//  quality(0 - 100%) for image px, when changed the size of img changed
//  can set fill to fill the whole area
//  placeholder property: for What will appear before loading //* With staticly images
//* If there is image with url or sth like this, u can use fill property and do some css code (see about page line 46 (image2))
//* If image source (in <Image />) comes from api (search about it) just add what in next.config.mjs (get the hostname and pathname from error appear in page ) 

//* best way: 1) put it inside parent element (almost div), give it relative property & aspect-ratio: 1 / 1 (aspect-square)
//* give the Image component object-cover


//* Layout: you can add nested layout(s) for page by create layout file inside the folder page, then the content will appear in all sup-pages(children)

//* Enviroment variables (.env.local file):
//  variables that we can setup for nodejs enviroment, usually place them in seperate file, then nextjs load that file and can get this variable.
//  todo: way to get this variable(s): process.env.NAME_OF_VARIABLE
//! This variables just available in server
//  todo: way to let them available to client just add before variable name the pre("NEXT_PUBLIC"), ex: NEXT_PUBLIC_VAR_NAME"

//! In .env.local don't write any semicolon(;)

//* Suspense boundary: 
//todo : when we have one static component (independent (like static text)) and stream data(like fetch) then we use suspense
//todo: just wrap the data fetching component into suspense boundary

//* Dynamic route(s):
//todo: create folder called [Id(any name you want for the data)]
//todo: create page.js in this folder
//* to get data from url pass params as a prop for function in [] page (see [cabinId])

//* to generate dynamic metadata (see the generateMetadata function in [cabinId] page )

//* ERROR BOUNDARY:
//todo: create error.js file
//* can have more than error boundary
//! error(s) in callback function(s) not be caught here (only rendering error)
//* to catch any error even in rootlayout then create file called global-error.js (it will replace entire layout)

//*NotFound error (like not valid url):
//todo: create file called not-found.js
//* place any code at it
//* This page has two ways to show:
//* 1) automaticly by create file (url doesn't exist)
//* 2) manually: by calling notFound function

//* SSR:
//* each route can be either static(pre-rendering) or dynamic
//todo: see SLides
//todo: you can run "npm run build" and see in terminal what is static and dynamic

//* convert dynamic routes pages(if finite routes(like cabins)) to static rendering(for best performence):
//todo: write generateStaticParams() like in [cabinId] page;

//* Static Site Generation(SSG) (when all routes static)
//* ○ : for static // ƒ : for dynamic
//* to deploy the site on any hosting provider support static site
//todo: write output: "export" in next.config.mjs
//todo: npm run build then out folder will appear
//todo: to deploy the static project on any hosting provider (github, etc...) you will use out folder
//* you can open out folder in vs and golive, you can navigate between pages and all content appear but images don't work
//* images didn't work because of optimized image (<Image />), you can solve this problem by use custom loader (like cloudinary)

//* Partial pre-rendering (PPR) search about it in documentation

//* CACHING
//! caching not work in development mode
//todo: to force the page dynamically: 
//* export const revalidate = 0; // no need dynamic page if data will be static all the time
//todo caching in dev mode: 
//todo: 1) run npm run build && npm run start (u can put them in script like prod in package.json)
//* npm prod will not listen for any changes in code

//* Incremental static re-generation (ISR): re-generate static page and fetch fresh data from time to time
//* def of : export const revalidate = 0 (time (in s));
//* unstable_noStore(); // to not caching the data like data fetching (called uncached data fetching)

//* In component tree: 
//* client component can (render) server component
//todo: if server component is passed as {prop} (children or other) (import the server component in top of tree)
//*client component can't (import) server component //see lec 462

//* usePathname() hook return the url path 
//todo:   const pathname = usePathname();

//* Sharing state between client & server (URL)
//! params in url can just be usable in page.js // search about it
//todo: pass {searchParams} as a prop (log it)
//* make the page dynamically rendering (because can't know it's value in run time)
//* export const revalidate = 3600; doesn't make sense when we use serachParams, so just use one of them (i will let it in the cabins page for education)
//* in page.js when use {searchParams} as a prop to get params from url (the page will re-render because of navigation)


//todo: use web api called URLSearchParams (see Filter.js component)
//* useful espically when we have more than one param
//* in this operation you always import from "next/navigation"
//todo: store value of useSearchParams function in variable
//todo: use this value in URLSearchParams(value) and store it in variable
//todo: then you can do crud operationon these params
//todo: to set param: params.set("nameOfParams(key)", value)
//todo: you will define router from useRouter(); to navigate by using replace with this function
//* in this filter when you try to navigate to another type of this filter there's no loading spinner will appear (because of suspense work) (try ti setTimeOut in data-service)
//todo: give suspense a key(like list)

//*router.replace will replace the current route in the browser route stack, which means that you can't navigate back to the previous route in your browser. router.push simply add the route to the stack.

//* data fetching stratigies:
//* use Promise.all
//* do fetch in parallel
//* useful if we have more than one fetch in same place/time
//* if we have like delay of two or more in async function then it will take the longest one not the sum of them
//*todo: const [desOfFun1, desOfFun2] Promise.all([function1(), function2(), ....etc]) 

//* onSelect: next prop   (DateSelector.js)
//todo: specify a callback function which will recive selected element

//* ContextAPI
//* way to share state
//* worked for client components
//todo: like previous project(same syntax), but with "use client";
//* in this application we assume that this context will be needed for whole components or for parnet component (client component(s)) so we place it in layout

//* API endpoint:
//* Create API(s) endpoint with route handlers
//todo: create route.js file in folder
//todo: make GET, POST, etc... functions in route.js
//todo: use Response.json(); web standard feature
//! route.js can't be in folder that contain page.js (reason of reasons: page.js return html / route.js return data like json format, etc... )

//* Auth.js or nextAuth (same)
//* way of authentecation and authraization
//* npm i next-auth@beta
//todo: you need to put your variables in local with same way of what in this project
//todo: for NEXTAUTH_URL : same of page's url
//todo: for NEXTAUTH_SECRET : take it from  https://generate-secret.vercel.app/50 (any number) (search generate vercel secret)

//* If you want it for google authntecation then: 
//todo: you want to create project in google developer console
//todo: go to API & Services/OAuth consent screen
//todo: go for audience to add user(s), add yourself
//todo: go to credentials, create OAuth client ID
//todo: add the page's url, and the redirect URL http://localhost:3000/api/auth/callback/google it will be like this for google (from auth.js document)
//todo: if you want to add logo go to branding
//todo: after you create this credentials it will view (client ID) and (Client secret) you should put them in .env file before you close the model in the google page
//* see auth.js
//todo: import NextAuth from "next-auth";
//todo: to get the session you will got it from auth: const session = await auth()  // export const { auth, handlers: { GET, POST } } = NextAuth(authConfig);  //Navigation.js
//todo: print session to know more
// import Google from "next-auth/providers/google";

// const authConfig = {
//   providers: [ // for what providers you will add like google, facebook, github
//     Google({
//       clientId: process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,
//     })]
// }

//*after that, put this in route.js: export { GET, POST } from "@/app/_lib/auth"

// export const { auth, handlers: { GET, POST } } = NextAuth(authConfig); // import GET & POST function in [...nextauth].js file

//* [...name] folder : handle all routes that have the pre url // create route.js
//* example app/api/auth/[...nextauth] // it will handle this url app/api/auth/whatItEndedDoesn'tMatter

//*  MIDDLEWARE in next.js
//* provided by auth.js
//* used to protect routes from unsigned in users (in this project)
//* two ways:
//* request -> middleware -> app route -> response
//* request -> middleware -> response

//* run before every route in project
//* need to be exported from middleware.js/.ts in the root folder (outside* app folder)
//* usecases: 1) read & set cookies and headers
//*           2) authetication & autherization
//*           3) server-side analytics
//*           4) redirect based on geolocation
//*           5) A/B testing

//* for next middleware
//todo: create function middleware(request) {
// return NextResponse.redirect(new URL("/about", request.url))
//} 

//* for auth.js middleware
//todo: use auth from nextAuth(); function (in auth.js)
//todo: store the auth in middleware variable and export it
//todo: in auth.js add callbacks after providers
//todo: add in it authorized({auth, request}) { // if it return true then the user can access the matching route(s)
//  return true or false depend if there's user or not
//}

//todo: to let your login page show instead of pre-built page:
//todo: in auth.js add pages: {}

//todo: to add sign in action to page, we will use server actions
//todo: allow some interactivity in server components
//* the way is to wrap the content in form and use action attribute and write custom async function from serveraction functions (signinButton.js)
//todo: create actions.js file  (see it)

//* signup operation
//* it will done when a new guest enter the site first time (when do sign in)
//todo: add signIn() callback in auth.js

//* session({session, user}) callback
//* for edit the existing session that come from auth function
//todo:  session.user.guestId = guest.id; return session;
//! session created when user logged in

//* server actions
//todo: write: "use server" // only for server actions
//* async functions created in server component can pass as a prob to client component (unlike functions)
//* standalone file: exported functions become server actions, can be imported into any component
//* when serveraction is called, post request is made to this url (create api endpoint automatically)
//* in serveractions the code never reach client
//* unlike server components, server actions require a running web server 

//* used of server actions: 
//* action attribute in <form> element (in server & client component)
//* event handlers (for client)
//* useEffect (for client)

//* it can do: 
//* perform data mutations (create, update, delete)
//* update the UI with new data: revalidate cache with revalidatePath & revalidateTag
//* work with cookies

//* in server action function you can get the hook inputs {name, value} by pass a paramter for the server action 

//* when you update data in db, the data still the same of older data (but after few seconds it will changes (if navigate to other route, then come back to see))
//todo: for that you need to use manual cache revalidation 
//* revalidation: clear cache -> fill it in fresh data
//todo: revalidatePath("the route you want to revalidate") // used it in server action function (updateGuest)
//* do it when we have data from this server action will appear on screen


//* useFormStatus hook  // in updateProfileForm.js
//* used in component inside form
//* give us pending state // pending mean that it's in work right now

//* as a backend:
//! anyone can delete any booking by get the cURL of delete operation, and just change the ID
//todo: to protect the database from that:
//* we will get the bookings for current user and see if the booking will delete exist in his bookings or not

//* useTransation hook 
//* used to display loading for buttons
//* used to mark a server action as a transition
//* when you used it, the ui will stay responsive, it doesn't block it
//* give us two thing: 
//* pending: a boolean that give us that the state transition is happening or not
//* startTransition function: used to wrap the heavy state update into


//* Optimistice UI    // ReservationList.js
//* tell the ui and the user that operation is done, but it's working in background
//* EX: when user delete reservation (async action), the ui will immediately update, and the operation of delete will continue in background
//todo: useOptimistic hook
//* passed to it two state: actual state, optimistic state
//* return state (when no async action running), and setter function
//* the setter function recieve the current state, and what the ui should be like
//* if there is an error in operation, then the ui will comeback to the previous ui

//* to pass single/multiple arguments to the server action from form:  // ReservationForm.js
//todo: 1) for few arguments (1 / 2)
//todo: 2) by use bind(thisArg, the data you will pass to server action) method
//todo: serveraction.bind(null (usually), data you need to pass) and store it
//todo: put the above in action form property 
//* for server action function the parameters should look like this (bookingData (what i passed to bind function), formData)

//* instead of every time write formData.get(""), we can do that for all data:
//todo: Object.entries(formData.entries());

//* you can use this structure in form property: 
//* action={async (formData) => {}; another function}





//? search about online payments stripe]
//? search about zod library // for validation

import Image from "next/image";
import Link from "next/link"; // nextJS package // different with React Link that React link use to instead of href
import bg from "@/public/bg.png";
export default function Page() { // ssr
  return (
    <main className="mt-24">
      <Image className="object-cover"
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        alt="Mountains and forests with two cabins" /> {/*object-cover = (object-fit: cover) like background-size: cover */}

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
        >
          Explore luxury cabins
        </Link>
      </div>
    </main>
    //* <a href="/cabins">Cabins</*a> in anchor: pages do reload when navigate
  );
}
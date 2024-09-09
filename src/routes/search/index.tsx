// import { component$ } from "@builder.io/qwik";
// import { useVisibleTask$ } from "@builder.io/qwik";
// import { useTask$ } from "@builder.io/qwik";

// import { createClient } from "@supabase/supabase-js";
// import Fuse from "fuse.js";

// // Create a single supabase client for interacting with your database

// //  TVg4bT!s!9vUssS
// export default component$(() => {


//     useTask$(async () => {
        
//         const supabase = createClient(projectURL, publicAnonkey);

//         const { data: supaDatabase, error } = await supabase
//           .from("supaDatabase")
//           .select("*");
    
//         console.log( supaDatabase);


//     })
//   const publicAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZmpwbm5pZHhvZmVoaW1qd2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjc4MzYsImV4cCI6MjA0MDg0MzgzNn0.5SErapK980ZQoXUxcCPHziJ_t2J63d9mAklZzB7A2E4"
//   const projectURL = "https://ugfjpnnidxofehimjwfo.supabase.co";

//   useVisibleTask$(async () => {
//       // supabase.auth.signInWithPassword("realwebsdigital@gmail.com", "Tenda2000.");
  
//       const supabase = createClient(projectURL, publicAnonkey);

//       const { data: supaDatabase, error } = await supabase
//         .from("supaDatabase")
//         .select("*");
  
      
// const fuseOptions ={keys:[ "id", "information" ]}

// const fuse = new Fuse(supaDatabase, fuseOptions)


// // Change the pattern
// const searchPattern = "5"

// const q =  fuse.search(searchPattern);


// console.log("wwwwwwwwwwwwwwww",q)
      
// // supabase.channel('custom-all-channel')
// // .on(
// //   'postgres_changes',
// //   { event: '*', schema: 'public', table: 'supaDatabase' },
// //   (payload) => {
// //     console.log('Change received!', payload)
// //   }
// // )
// // .subscribe()



//         console.log( supaDatabase);




//     console.log("dsfsdfsd ");
//   });

//   return <>hello this is search</>;
// });

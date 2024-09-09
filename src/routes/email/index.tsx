/* eslint-disable qwik/no-use-visible-task */
import { component$, useComputed$, useSignal } from "@builder.io/qwik";
// import { Resend } from 'resend';
import { createClient } from "@supabase/supabase-js";
import { routeLoader$ } from "@builder.io/qwik-city";
const publicAnonkey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZmpwbm5pZHhvZmVoaW1qd2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjc4MzYsImV4cCI6MjA0MDg0MzgzNn0.5SErapK980ZQoXUxcCPHziJ_t2J63d9mAklZzB7A2E4";
const projectURL = "https://ugfjpnnidxofehimjwfo.supabase.co";

export const supabase = createClient(projectURL, publicAnonkey);

export const useSuperbase = routeLoader$(async () => {
  const startTime = performance.now();

  const { data: towingJobs } = await supabase
    .from("towingJobs")
    .select(
      "id, created_at, type, vehicleTowed, towDate, jobstatus, vehicleOwners!inner(*)"
    );

  type dataTypes = {
    id: number;
    created_at: string;
    type: string;
    vehicleTowed: string;
    towDate: string;
    jobstatus: boolean;
    vehicleOwners: any[];
  };

  const data: dataTypes[] | null = towingJobs;

  // console.log( "towingJobs are",towingJobs)

  // supabase.from('towingJobs').select("*").textSearch("" ,{} )

  const endTime = performance.now();
  const executionTime = endTime - startTime; // Time in milliseconds

  console.log(`Execution time: ${executionTime.toFixed(2)} milliseconds`);
  return data;
});

export default component$(() => {
  const superbaseLoader$ = useSuperbase().value;
  superbaseLoader$


  // console.log(superbaseLoader$?.[1].created_at as any);

  // console.log(  typeof superbaseLoader$?.[1].created_at as any)

  const searchFieldValue = useSignal("");
  const searchResultsPreview = useSignal<any[]>([]);
  // const { data: towingJobs } = await supabase
  // .from("towingJobs")
  // .select(
  //   "id, created_at, type, vehicleTowed, towDate, jobstatus, vehicleOwners!inner(*)"
  // );

  useComputed$(async () => {
    const startTime = performance.now();

    if (searchFieldValue.value == "") {
      console.log("fsdfdsfsdf " + searchFieldValue.value);
      // const { data, error } = await supabase
      //   .from("allVehiclesDatabase")
      //   .select()
      //   .eq("vehicle_type", `${searchFieldValue.value}`);
      const { data } = await supabase
        .from("allVehiclesDatabase")
        .select("vehicle_type, vehicle_color, vehicleOwners!inner(owner) ")
        .textSearch("combined_search", `${searchFieldValue.value}`);



        // const { data, error } = await supabase
        // .from('allVehiclesDatabase')
        // .select('*')
        // .textSearch('to_tsvector(vehicle_type || ', ' || vehicle_color)', 'search_term');

      // const { data, error} = await supabase.rpc('vehicle_type', { prefix: `${searchFieldValue.value}` })

      searchResultsPreview.value = data as any;
      console.log(data);
    }

    //   const { data: towingJobs } = await supabase
    //   .from('towingJobs')
    //   .select('id, created_at, type, vehicleTowed, towDate, jobstatus, vehicleOwners!inner(*)')

    // console.log(data)

    // return searchFieldValue.value

    const endTime = performance.now();
    const executionTime = endTime - startTime; // Time in milliseconds

    console.log(`Execution time: ${executionTime.toFixed(2)} milliseconds`);
  });

  // const a = superbaseLoader$?.[1].created_at as any

  // useVisibleTask$(   async () =>{

  //   const startTime = performance.now();

  //   const publicAnonkey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnZmpwbm5pZHhvZmVoaW1qd2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNjc4MzYsImV4cCI6MjA0MDg0MzgzNn0.5SErapK980ZQoXUxcCPHziJ_t2J63d9mAklZzB7A2E4"
  //   const projectURL = "https://ugfjpnnidxofehimjwfo.supabase.co";

  //   const supabase = createClient(projectURL, publicAnonkey);

  //   console.log( "towingJobs are",towingJobs)

  //   // supabase.from('towingJobs').select("*").textSearch("" ,{} )

  //   const endTime = performance.now();
  //   const executionTime = endTime - startTime; // Time in milliseconds

  //   console.log(`Execution time: ${executionTime.toFixed(2)} milliseconds`);

  // }

  // )

  // const resend = new Resend('re_aYkEWngc_33pZGCHXr7hybjYZuo9vJ4eU');

  // resend.domains.create({ name: 'tinotenda@kalaharitowing.co.za' });

  // resend.emails.

  // (async function () {
  //   const { data, error } = await resend.emails.send({
  //     from: 'Acme <tinotenda@kalaharitowing.co.za>',
  //     replyTo:"realwebsdigital@gmail.com",
  //     to: ['realwebsdigital@gmail.com'],
  //     subject: 'Hello World',
  //     html: '<strong>It works!</strong>',
  //   });

  //   if (error) {
  //     return console.error({ error });
  //   }

  //   console.log("dasasds ",{ data });
  // })();

  // console.log(resend.apiKeys.list())

  return (
    <>
      {<h1>Vehicle and towing database</h1>}
      <input
        type="text"
        name="searchBox"
        id="searchBoxID"
        bind:value={searchFieldValue}
      />

      {<h3>{searchFieldValue.value}</h3>}

      {searchResultsPreview.value.map((i) => (
        <ul key={i.id}>
          {" "}
          <li>job ID is {i.id}</li> 
          <li> the brand is {i.vehicle_type}</li> 
          <li> vehicle color {i.vehicle_color}</li>{" "}
          <li> vehicle number plate {i.vehicle_number_plate}</li>{" "}
          <li> owner is {i.owner_name}</li>{" "}
          <li>towed on {i.created_at}</li>{" "}
        </ul>
      ))}

      {/* {superbaseLoader$?.map((i) => <li key={i.id}>{i.type}</li>)}{" "} */}
    </>
    //     <>

    // <h1>{}</h1>

    //       New route works.
    //     </>
  );
});

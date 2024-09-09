import { component$, useStore } from "@builder.io/qwik";
import { Form, routeAction$ } from "@builder.io/qwik-city";
import { supabase } from "~/routes/email";
// import { truncate } from "fs/promises";
// import { supabase } from "~/routes/email";
// import { Database } from "~/utils/superbase";

// const x: Database ;
// x.public.Tables.allVehiclesDatabase.Row.vehicle_type
// const y : allvehi


export const useAddTowingJob = routeAction$(async (user) => {
  // console.log("Sadas");

  const startTime = performance.now();



const userFormData = user as {
  clientName: string;
  clientPhoneNumber: string;
  vehicleRegistrationNumber: string;
  vehicleType: string;
  vehicleColor: string;
  pickUpLocation: string;
  dropOffLocation: string;
}

  // console.log(userFormData.clientName);

  try {
    // const { data } = await supabase
    // .from('vehicleOwners')
    // .insert([
    //   { owner: 'qqqqq'},
    // ])
    // .select()

    // const { data ,error} = await supabase
    // .from('towingJobs')
    // .insert([
    //   { jobstatus: true, type: 'otherValue' },
    // ])
    // .select()

    const vehicleOwnersDataFunc = async () => {
      const { data } = await supabase
        .from("vehicleOwners")
        .insert([{ owner: userFormData.clientName }])
        .select();

      return data;
    };

    const vehicleOwnersData = await vehicleOwnersDataFunc() as any[];

    // console.log("dddddd", vehicleOwnersData[0].refID);

    // const hello = {
    //   id: 5,
    //   vehicle_number_plate: "MN 829 GP",
    //   vehicle_type: "Runx Toyota",
    //   vehicle_color: "Pink",
    //   created_at: "2024-09-04T13:45:13.840882+00:00",
    //   tow_jobs: null,
    //   owner_name: "43717fb2-d344-4d0e-a91c-df30293e910e",
    //   vehicle_ref: "b0529bcc-8e1b-4a17-b929-5400d5e41eb8",
    //   combined_search: "Runx Toyota Pink",
    // };

    const allVehiclesDataFunc = async () => {
      const { data } = await supabase
        .from("allVehiclesDatabase")
        .insert([
          {
            vehicle_type: userFormData.vehicleType,
            vehicle_color: userFormData.vehicleColor,
            owner_name: vehicleOwnersData[0].refID as any,
          },
        ])
        .select();

        // console.log("sadsadas ", data, " hhhh", error);
        return data;
      };
      
//  const i =   {
//   id: 21,
//   vehicle_number_plate: '',
//   vehicle_type: 'Runx Toyota',
//   vehicle_color: 'Pink',
//   created_at: '2024-09-09T13:25:56.113248+00:00',
//   tow_jobs: null,
//   owner_name: '1f8fca87-fc6d-4629-90ad-b7711a583075',
//   vehicle_ref: '95f9fc7c-6616-42d7-aa6e-3b3bc9cd37f9',
//   combined_search: 'Runx Toyota Pink'
// }

const allVehiclesData = await allVehiclesDataFunc() as  [{
  id: number;
  vehicle_number_plate: string;
  vehicle_type: string;
  vehicle_color: string;
  created_at: string;
  tow_jobs: null;
  owner_name: string;
  vehicle_ref: string;
  combined_search: string;
}] ;


      // console.log("qqqqqqqq ",await allVehiclesData[0].id)


const vehicleAndOwner = {
  refID :  allVehiclesData[0].owner_name,
vehicle_ref : allVehiclesData[0].vehicle_ref
}

// console.log(vehicleAndOwner)

    const { data, error } = await supabase
    .from('towingJobs')
    .insert([


{     
  //  created_at: '2024-09-03T13:22:44.883057+00:00',
      type: 'Accident Tow',
      vehicleTowed: vehicleAndOwner.vehicle_ref,
      vehicleOwner: vehicleAndOwner.refID,
      // towDate: '2024-09-03T13:22:44.883057+00:00',
      jobstatus: false
}
    ])
    .select()


    console.log("sadsadas ", data, " hhhh", error);

    const endTime = performance.now();
    const executionTime = endTime - startTime; // Time in milliseconds
  
    console.log(`Execution time: ${executionTime.toFixed(2)} milliseconds`);

    // {
    //   id: 2,
    //   created_at: '2024-09-03T13:22:44.883057+00:00',
    //   type: 'Accident Tow',
    //   vehicleTowed: '07d458c7-14d6-48b6-87d6-ced37426dd04',
    //   vehicleOwner: '73ec4e02-6e49-490b-9921-fe975de39d9f',
    //   towDate: '2024-09-03T13:22:44.883057+00:00',
    //   jobstatus: false
    // }


    return {
      success: true,
      data: "this is coming from the action",
    };
  } catch (error) {
    console.log(error);

    return {
      success: false,
      data: "this is coming from the action",
    };
  }

  // const userID = await db.users.add(user);
  // return {
  //   success: true,
  //   userID,
  // };
});

export default component$(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const checkListStoreSig = useStore({
    clientName: "",
    clientPhoneNumber: "",
    vehicleRegistrationNumber: "",
    vehicleType: "",
    vehicleColor: "",
    pickUpLocation: "",
    dropOffLocation: "",
  });
  const formAction = useAddTowingJob();

  return (
    <section>
      {/* New route works. */}

      <h1> Enter a new towing case </h1>

      <Form action={formAction}>
        <label for="clientName">Client Name</label>
        <input
          type="text"
          name="clientName"
          value="Tinotenda Muringami"
        />

        <label for="clientPhoneNumber">Client phone number</label>
        <input
          type="text"
          name="clientPhoneNumber"
          value="+27123456789"
        />

        <label for="vehicleRegistrationNumber">Number Plate</label>
        <input
          type="text"
          name="vehicleRegistrationNumber"
          value="GD 853 NC"
        />

        <label for="vehicleType">Vehicle Type</label>
        <input
          type="text"
          name="vehicleType"
          value="Mercedes Benz G Class"
        />

        <label for="vehicleColor">Vehicle Color</label>
        <input type="color" name="vehicleColor" placeholder="#FFFFFF" />

        <label for="pickUpLocation">Towed from</label>
        <input
          type="text"
          name="pickUpLocation"
          placeholder="4882 Suikebos, Kathu"
        />

        <label for="dropOffLocation">Towed from</label>
        <input
          type="text"
          name="dropOffLocation"
          placeholder="Topcar Panelbeaters, Kuruman"
        />

        <button type="submit">Submit</button>
      </Form>

      {formAction.value?.success && (
        // When the action is done successfully, the `action.value` property will contain the return value of the action
        <p>Job {formAction.value.data} added successfully</p>
      )}
    </section>
  );
});

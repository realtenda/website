import {
  component$,
  // useComputed$,
  useSignal,
  // useTask$,
  // useTask$,
  // useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Form, routeAction$, type DocumentHead } from "@builder.io/qwik-city";
// import QRCode from "qrcode";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

export const useAddUser = routeAction$(async (data) => {
  // This will only run on the server when the user submits the form (or when the action is called programmatically)
  // const userID = await db.users.add({
  //   firstName: data.firstName,
  //   lastName: data.lastName,
  // });
  const formData = { phone_number: data.phone_number, rides: data.rides };
  console.log(formData);

  await pb.collection("Customers").create(formData);

  return {
    success: true,
    formData: formData,
  };
});
``
export default component$(() => {
  const action = useAddUser();
  // const canvasSig = useSignal<any>();
  const QRdata = useSignal("2");

  // console.log("hi");

  // const capitalizedName = useComputed$(() => {
  //   // it will automatically reexecute when name.value changes

  //   // QRCode.toDataURL(canvasSig.value, QRdata.value, function (error) {
  //   //   if (error) console.error(error);
  //   //   console.log("success!");
  //   //   console.log(capitalizedName.value);
  //   //   // })
  //   // });
  //   return "2112";
  // });

  // useTask$(async () => {});
  //   // const pb = new PocketBase("http://127.0.0.1:8090");
  //   const record = await pb.collection("Customers").getOne("lr6sqey0orkncb8", {
  //     expand: "relField1,relField2.subRelField",
  //   });

  //   console.log(record);
  //   // QRCODE
  // });

  // ...

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // console.log(capitalizedName.value);

    // var canvas = document.getElementById('canvas')

    // QRCode.toCanvas(canvasSig.value, QRdata.value, function (error) {
    //   if (error) console.error(error);
    //   console.log("success!");
    //   // })
    // });
    console.log("record");

    const record = (await pb.collection("Customers").getOne("gfl5b9ssbor8c7b", {
      expand: "relField1,relField2.subRelField",
    })) as {
      name: string;
      rides: number;
      phoneNumber: number;
    };

    console.log(record.rides);
    // PocketBase = pb;
    console.log("record");
  });

  // QRCode.toDataURL

  return (
    <>
      {/* <h2>Status says: {!action.value?.formData.phone_number}</h2> */}
      {/* {<h2>Status says: {action.value?.formData.rides}</h2>} */}
      {/* {console.log("wdwdwed")} */}
      {/* <canvas ref={canvasSig}></canvas> */}
      <h1
        onClick$={async () => {
          // QRdata.value = "8171" + QRdata.value;
          // QRCode.toCanvas(canvasSig.value, QRdata.value, function (error) {
          //   if (error) console.error(error);
          //   console.log("success!");
          //   // })
          // });
          // example create data
          // const data = {
          //   phone_number: 123,
          //   rides: 123,
          // };
          // await pb.collection("Customers").create(data);
        }}
      >
        Qr code 👋 {QRdata.value}
      </h1>
      <Form action={action}>
        <label> Phone number</label>
        <input type="number" name="phone_number" id="phone_number_ID" />

        <label>Rides</label>
        <input type="number" name="rides" id="rides_ID" />

        <button type="submit">Submit</button>
      </Form>
      {/* <canvas ref={canvasSig}></canvas> */}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

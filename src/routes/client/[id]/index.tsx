/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import QRCode from "qrcode";
import { pb } from "~/utils/pb";

export const useRecordDetails = routeLoader$(async (requestEvent) => {
  const url = requestEvent.url.href;
  const splitURL = url.split("/")[4];
  console.log("yyyyyyyyyyyyyyyyyyy" + splitURL);

  // A task without `track` any state effectively behaves like a `on mount` hook.
  console.log("Runs once when the component mounts in the server OR client.");

  const record = await pb
    .collection("Clients")
    .getFirstListItem(`Phone_number="${splitURL}"`, {
      expand: "relField1,relField2.subRelField",
    });

  record.id;
  //   profilePicNameSig.value = record.profile_pic;
  //   console.log(recordIDSig.value);
  //   console.log(profilePicNameSig.value);
  console.log(record);

  return record as any;
});

export default component$(() => {
  const loc = useLocation();
  const canvasSig = useSignal<any>();
  const recordIDSig = useSignal("");
  const profilePicNameSig = useSignal("");
  const recordLoader = useRecordDetails();

  const profilePic = useSignal("");

  console.log(recordLoader.value.id);

  const clientID = loc.params.id;

  console.log("we are here now");
  const qrURL = "http://localhost:5173/update/" + clientID;

  console.log(clientID);
  console.log(recordLoader.value.profile_pic + "ewdbasjkdasjdbasjh");
  console.log(qrURL);
  // console.log(loc.params.id);

  // useTask$(async () => {
  //   // A task without `track` any state effectively behaves like a `on mount` hook.
  //   console.log("Runs once when the component mounts in the server OR client.");

  //   const record = await pb
  //     .collection("Clients")
  //     .getFirstListItem(`Phone_number="${clientID}"`, {
  //       expand: "relField1,relField2.subRelField",
  //     });

  //   console.log(record);
  //   recordIDSig.value = record.id;
  //   profilePicNameSig.value = record.profile_pic;
  //   console.log(recordIDSig.value);
  //   console.log(profilePicNameSig.value);
  // });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    // or fetch only the first record that matches the specified filter

    QRCode.toCanvas(
      canvasSig.value,
      "http://localhost:5173/update/" + clientID,
      function (error: any) {
        if (error) console.error(error);
        console.log("success!");
        // })
      }
    );
  });

  return (
    <section>
      <h1 class={css({ fontSize: 30 })}>
        Page for client with number {clientID}
      </h1>

      <img
        src={`http://127.0.0.1:8090/api/files/Clients/${recordLoader.value.id}/${recordLoader.value.profile_pic}`}
        alt=""
        height={100}
        width={100}
      />

      <canvas ref={canvasSig}></canvas>
    </section>
  );
});

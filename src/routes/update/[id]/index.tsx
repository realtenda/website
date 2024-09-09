// import type { HTMLInputTypeAttribute } from "@builder.io/qwik";
import {
  component$,
  useSignal,
  useTask$,
  // useVisibleTask$,
  // useVisibleTask$,
  // useSignal,
  // useVisibleTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { css } from "~/styled-system/css";
import { pb } from "~/utils/pb";

// export const useProductDetails = routeLoader$(async (requestEvent) => {
//   // This code runs only on the server, after every navigation
//   const res = await fetch(`https://.../products/${requestEvent.params.productId}`);
//   const product = await res.json();
//   return product as Product;
// });

export default component$(() => {
  const loc = useLocation();
  // const canvasSig = useSignal<any>();
  const recordIDSig = useSignal("");
  const ridesNumSig = useSignal("");
  const visibleWindowSig = useSignal(false);

  const passcodeREFsig = useSignal<HTMLInputElement>();

  const clientID = loc.params.id;

  console.log(clientID);
  // console.log(ridesNumSig.value);

  useTask$(
    async () => {
      // A task without `track` any state effectively behaves like a `on mount` hook.
      console.log(
        "Runs once when the component mounts in the server OR client."
      );

      // example update data

      // await pb.admins.authWithPassword("hoodzt7@gmail.com", "passwordpassword");

      const record = await pb
        .collection("Clients")
        .getFirstListItem(`Phone_number="${clientID}"`, {
          expand: "relField1,relField2.subRelField",
        });

      // const data = {
      //   rides: record.rides + 1,
      //   clientID: record.id,
      //   // "reco"
      // };
      // // console.log(record.id);
      // console.log(data.rides);
      // await pb.collection("Clients").update(data.clientID, data);
      recordIDSig.value = record.id;
      ridesNumSig.value = record.rides;
      // console.log(record);
      console.log(ridesNumSig.value);
      // console.log(profilePicNameSig.value);
    },
    { eagerness: "load" }
  );

  // useVisibleTask$(() => {
  //   // Subscribe to changes only in the specified record
  //   pb.collection("Clients").subscribe(
  //     recordIDSig.value,
  //     function (e) {
  //       console.log("asdsadasdasd ", e.action);
  //       console.log("asdsadasdasd ", e.record.rides);
  //     },
  //     {
  //       /* other options like expand, custom headers, etc. */
  //     }
  //   );
  // });

  // useVisibleTask$(async () => {
  //   try {
  //     await pb
  //       .collection("Users")
  //       .authWithPassword("hoodzt7@gmail.com", "passwordpassword");
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  //   const xx = pb.authStore.isValid;
  //   console.log(xx, "xxccc");
  // });

  // useVisibleTask$(async () => {
  //   try {
  //     await pb
  //       .collection("Clients")
  //       .authWithPassword("hoodzt7@gmail.com", "passwordpassword", {});
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // });
  return (
    <section class={css({})}>
      <h1 class={css({ fontSize: 30 })}>
        Page for client with number {recordIDSig.value}
      </h1>
      <h2 class={css({ fontSize: 25 })}>
        who currently has {ridesNumSig.value} rides
      </h2>

      {visibleWindowSig.value == true ? (
        <>
          {" "}
          <section
            class={css({
              zIndex: 999,
              backgroundColor: "orange",
              position: "absolute",
              height: "300px",
              width: "90vw",
              borderRadius: "50px",
              top: "0px",
              left: "0px",
            })}
          >
            <div>Enter Passcode</div>

            <input
              ref={passcodeREFsig}
              type="number"
              name="passcode"
              id="passcode_ID"
            />
            <div
              onClick$={async () => {
                const passcodeData = passcodeREFsig.value;
                console.log(passcodeData?.value + "  addadasdhasgdbjasbd ");

                // 12345678

                try {
                  await pb
                    .collection("Users")
                    .authWithPassword(
                      "hoodzt7@gmail.com",
                      passcodeData?.value as any
                    );

                  console.log("you are updating the record");
                  const data = {
                    rides: ridesNumSig.value + 1,
                    clientID: recordIDSig.value,
                    // "reco"
                  };

                  const xx = pb.authStore.isValid;

                  if (pb.authStore.isValid) {
                    console.log(xx, "xxccc");

                    const updatedRidesNum = data.rides;
                    ridesNumSig.value = updatedRidesNum;

                    console.log(updatedRidesNum);
                    // console.log(record.id);
                    console.log(data.rides);
                    await pb.collection("Clients").update(data.clientID, data);
                    // ridesNumSig.value = updatedRidesNum;
                  } else {
                    console.log("you are not logged in sir");
                  }
                } catch (error) {
                  console.log("error", error);
                }

                visibleWindowSig.value = false;
              }}
            >
              Confirm passcode
            </div>
          </section>
        </>
      ) : (
        <> empty</>
      )}

      {/* 
      <form>
        <label> Passcode </label>
        <input type="text" name="password" id="password_ID" />
      </form> */}

      <button
        class={css({
          backgroundColor: "green",
          paddingY: "20px",
          paddingX: "40px",
        })}
        onClick$={async () => {
          visibleWindowSig.value = true;
          try {
            pb.collection("Clients").subscribe(
              recordIDSig.value,
              function (e) {
                const ridesRecord = e.record.rides;
                console.log("asdsadasdasd ", e.action);
                console.log("asdsadasdasd ", ridesRecord);
              },
              {
                /* other options like expand, custom headers, etc. */
              }
            );
          } catch (error) {
            console.log("error happened ", error);
          }
        }}
      >
        Confirm
      </button>
    </section>
  );
});

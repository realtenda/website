import { component$, useSignal } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { read, utils } from "xlsx";

export const useXlsxLoader = routeLoader$(async () => {
  const startTime = performance.now(); // Capture start time

  // const a = await fetch("https://docs.sheetjs.com/pres.numbers");
  const a = await fetch("http://localhost:5173/big.xlsx");
  const ab = await a.arrayBuffer();
  const wb = read(ab);

  const b = wb.SheetNames.length;
  console.log(b);
  // utils.
  const ws = wb.Sheets[wb.SheetNames[0]];

  // const data = utils.sheet_to_html(ws); // generate objects
  // console.log(data);

  // utils.sheet_to_json(ws)

  const data = utils.sheet_to_html(ws, {
    editable: true,
    header: "<h1 style='color:red'>rrrrrrrrrrrrrrrrrrr</h1>",
  }); // generate objects

  // const data = utils.sheet_to_json(ws); // generate objects

  // {data.map((i: any) => {
  //   const a = i;

  //   console.log("kkkkkkkkkk",a);

  //   // return <>vvvvvv {a}</>;
  // })}

  const endTime = performance.now(); // Capture end time
  console.log(
    `useTask$ execution time: ${(endTime - startTime).toFixed(2)} ms`
  );

  return data;
});

export default component$(() => {
  const xlsxData = useXlsxLoader();
  // console.log(xlsxData.value);

  const xlsxSig = useSignal<string>();

  const h2Ref = useSignal<HTMLElement>();

  // const htmlSig = useSignal();

  return (
    <>
      <h1>outsurance insurance contact number 3408 extra 13.65</h1>

      <p>{xlsxSig.value}</p>
      <div>sadnjksandkjasnd</div>
      {/* {xlsxData.value.map((i: any) => {
        const a = i;

        // console.log(a);

        return <>vvvvvv {a}</>;
      })} */}
      <h3 dangerouslySetInnerHTML={xlsxData.value}></h3>

      <h2 ref={h2Ref}>mmmmmmmmmmmmmm</h2>
    </>
  );
});

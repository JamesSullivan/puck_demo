"use client";

import { Config  } from "../../measured/puck";
import { Data } from "../../measured/puck";
import { Puck } from "../../measured/puck/components/Puck";  // necessary for columns
import { Render } from "../../measured/puck/components/Render";
import { Framework } from "../Framework";
import { useEffect, useState } from "react";
import { Button } from "../../measured/puck/components/Button";

// import { Puck } from "../../measured/puck";
// import { Render } from "../../measured/puck";
import config from "../../puck.config";

// const isBrowser = typeof window !== "undefined";

// export function Client({
//   path,
//   isEdit,
//   framework,
// }: {
//   path: string;
//   isEdit: boolean;
//   framework: Framework;
// }) {
//   const config: Config = require(`../configs/custom/`).default;
//   const initialData: Data =
//     require(`../configs/custom/`).initialData || {};

//   // unique b64 key that updates each time we add / remove components
//   const componentKey = Buffer.from(
//     Object.keys(config.components).join("-")
//   ).toString("base64");

//   const key = `puck-demo:${framework}:${componentKey}:${path}`;

//   const [data] = useState<Data>(() => {
//     if (isBrowser) {
//       const dataStr = localStorage.getItem(key);

//       if (dataStr) {
//         return JSON.parse(dataStr);
//       }

//       return initialData[path] || undefined;
//     }
//   });

//   useEffect(() => {
//     if (!isEdit) {
//       document.title = data?.root?.title || "";
//     }
//   }, [data, isEdit]);

//   if (isEdit) {
//     return (
//       <Puck
//         config={config}
//         data={data}
//         onPublish={async (data: Data) => {
//           await fetch("/api/puck", {
//             method: "post",
//             body: JSON.stringify({ data, path }),
//           });
//         }}
//       />
//     );
//   }

//   if (data) {
//     return <Render config={config} data={data} />;
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         height: "100vh",
//         textAlign: "center",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div>
//         <h1>404</h1>
//         <p>Page does not exist in session storage</p>
//       </div>
//     </div>
//   );
// }

// export default Client;


export function Client({
  path,
  data,
  isEdit,
}: {
  path: string;
  data: Data;
  isEdit: boolean;
}) {
  if (isEdit) {
      return (
          <Puck
              config={config}
              data={data}
              onPublish={async (data: Data) => {
                  await fetch("/api/puck", {
                      method: "post",
                      body: JSON.stringify({ data, path }),
                  });
              }}
          />
      );
  }

  return <Render config={config} data={data} />;
}
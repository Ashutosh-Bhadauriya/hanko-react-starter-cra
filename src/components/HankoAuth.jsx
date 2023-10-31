// import { useEffect, useCallback, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { register } from "@teamhanko/hanko-elements";

// const hankoApi = process.env.REACT_APP_HANKO_API_URL;

// export default function HankoAuth() {
//   const navigate = useNavigate();
//   const [hanko, setHanko] = useState();
 
//   useEffect(() => {
//     import("@teamhanko/hanko-elements").then(({ Hanko }) =>
//       setHanko(new Hanko(hankoApi))
//     );
//   }, []);

//   const redirectAfterLogin = useCallback(() => {
//     navigate("/dashboard");
//   }, [navigate]);

//   useEffect(
//     () =>
//       hanko.onAuthFlowCompleted(() => {
//         redirectAfterLogin();
//       }),
//     [hanko, redirectAfterLogin]
//   );

//   useEffect(() => {
//     register(hankoApi).catch((error) => {
//       console.log(error)
//     });
//   }, []);

//   return <hanko-auth />;
// }


 
import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { register } from "@teamhanko/hanko-elements";
 
const hankoApi = process.env.REACT_APP_HANKO_API_URL;
 
export default function HankoAuth() {
  const navigate = useNavigate();

 
  const [hanko, setHanko] = useState();
 
  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi))
    );
  }, []);
 
  const redirectAfterLogin = useCallback(() => {
    // successfully logged in, redirect to a page in your application
    navigate("/dashboard");
  }, [navigate]);
 
  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );
 
  useEffect(() => {
    register(hankoApi).catch((error) => {
      // handle error
    });
  }, []);
 
  return <hanko-auth />;
}

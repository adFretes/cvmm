
import { Navigate } from "react-router";
import { PalabrasDesordenadas } from "./catequesis/confirmacion/juegos/01-desordenar-palabras/PalabrasDesordenadas";
import { createHashRouter } from "react-router";

/* export const appRouter = createBrowserRouter([ */
export const appRouter = createHashRouter([
    {
        path: "/",
        element: <PalabrasDesordenadas />
    },
    {
        path: "*",
        element: <Navigate to='/' />
    },
]);

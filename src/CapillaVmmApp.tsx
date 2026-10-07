import { RouterProvider } from "react-router"
import { appRouter } from "./app.router"

export const CapillaVMM_app = () => {
    return (
        <RouterProvider router={appRouter} />
    )
}

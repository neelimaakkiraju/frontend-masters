import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/past")({
    coomponent: ()=>{
        return(
            <div>
                <h2>Past orders page</h2>
            </div>
        )
    }
})
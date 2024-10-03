"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Page = () => {
    const tasks = useQuery(api.tasks.get)

  return (
    <div>
        {tasks?.map(({_id, text}) => (<div key={_id}>{text}</div>))}
    </div>
  )
}

export default Page;
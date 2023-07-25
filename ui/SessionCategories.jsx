"use client";

import React, { useContext, useEffect } from 'react'
import ToolCard from "@/ui/ToolCard";
import Link from "next/link";
import { SearchBarContext } from '@/app/context/searchBarContext';

const SessionCategories = () => {
    const {state} = useContext(SearchBarContext)
    
  return (
    <div
    style={{ height: "calc(100% - 80px" }}
    className="sessions_grid overflow-y-scroll py-5 grid grid-cols-2 gap-y-5 w-full"
      >
    {state?.data?.filteredItems?.map((x, i) => (
      <Link key={i} href={`/dashboard/sessions/${x.key}`}>
        <ToolCard
          src={x.thumbnail_image}
          headTitle="sessions"
          title={x.title}
        />
      </Link>
    ))}
  </div>
  )
}

export default SessionCategories
"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "./queryCliente";

export const QueryProvider = ({children}: {children: ReactNode}) => {
    return(
        <QueryClientProvider client={queryClient}>
           {children} 
        </QueryClientProvider>

    );
}
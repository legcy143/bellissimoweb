"use client"

import React, { useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useRouter } from "next/navigation"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"

export function Provider({ children, ...props }: ThemeProviderProps) {
    
    return (
        <NextThemesProvider {...props}>
            <ToastContainer />
            {children}
        </NextThemesProvider>
    )
}
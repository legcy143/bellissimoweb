"use client"
import { useAdmin } from '@/stores/useAdmin'
import React from 'react'

export default function Users() {
    const { allUsers }: any = useAdmin()
    return (
        <div>Users</div>
    )
}

"use client"
import { Button } from '@/components/ui/button'
import { useAdmin } from '@/stores/useAdmin'
import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import CreateCategories from './CreateCategories'
import { useSearchParams } from 'next/navigation'

export default function Categories() {
  const { fetchAllCategories, allCategories }: any = useAdmin();
  const [categoriesList, setcategoriesList] = useState(allCategories)
  // const pageNum = use pagination
  const searchParams = useSearchParams()
  let pageNum: any = searchParams.get("a") ?? 1
  const [page, setpage] = useState(1)
  const [pagination, setPagination] = useState<any>({ start: (page - 1) * 10, end: page * 10 })
  useEffect(() => {
    fetchAllCategories()
    console.log("Searc params ",)
  }, [])
  // update categories
  useEffect(() => {
    console.log("page", page)
    setPagination({ start: (page - 1) * 10, end: page * 10 })
    setcategoriesList(allCategories.slice(pagination.start, pagination.end))
  }, [allCategories, page])

  return (
    <main>
      <header className='flex items-center gap-5 justify-between my-5'>
        <div>
          <h1 className='d_heading'>All categories</h1>
          <h1 className='d_paragraph'>View and manage all categories</h1>
        </div>
        {/*  */}
        <Sheet>
          <SheetTrigger asChild>
            <Button>Add categories</Button>
          </SheetTrigger>
          <SheetContent side={"left"}>
            <CreateCategories />
          </SheetContent>
        </Sheet>
      </header>
      {/* categores  */}
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.No</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categoriesList.length == 0 ? <p>no products found</p> :
            <>
              {categoriesList.map((e: any, i: any) => (
                <TableRow key={e._id}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{new Date(e.createdAt).toDateString()}</TableCell>
                  <TableCell className="text-right">d , a</TableCell>
                </TableRow>
              ))}
            </>
          }
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Page</TableCell>
            <div>
              <Button onClick={() => {
                if (page > 1)
                  setpage((e) => e - 1)
              }}>prev</Button>
              <Button onClick={() => {
                if (page < allCategories?.length)
                  setpage((e) => e + 1)
              }}>next</Button>
            </div>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  )
}

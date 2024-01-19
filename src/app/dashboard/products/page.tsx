"use client"
import { Button } from '@/components/ui/button';
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

export default function Products() {
  const { allProducts, fetchAllProducts }: any = useAdmin();
  const [ProductList, setProductList] = useState(allProducts)
  useEffect(() => {
    fetchAllProducts()
    console.log("all products", allProducts)
  }, [])

  return (
    <main>
      <header className='flex items-center gap-5 justify-between my-5'>
        <div>
          <h1 className='d_heading'>All Products</h1>
          <h1 className='d_paragraph'>View and manage products</h1>
        </div>
        {/*  */}
        <Button>Add Product</Button>
      </header>
      {/* view product table */}
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ProductList.length == 0 ? <p>no products found</p> :
            <>
              {ProductList.map((e: any, i: any) => (
                <TableRow key={e._id}>
                  <TableCell className="font-medium">{e.invoice}</TableCell>
                  <TableCell>{e.paymentStatus}</TableCell>
                  <TableCell>{e.paymentMethod}</TableCell>
                  <TableCell className="text-right">{e.totalAmount}</TableCell>
                </TableRow>
              ))}
            </>
          }


        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">0</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </main>
  )
}

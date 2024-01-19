import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useAdmin } from '@/stores/useAdmin'

export default function CreateCategories() {
  const { addCategories, test }: any = useAdmin();
  const [category, setcategory] = useState("")
  return (
    <main>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you're done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-3 py-5">
        <Label htmlFor="newcategories" className="text-left">
          Name categories
        </Label>
        <Input
          id="newcategories"
          placeholder='e.g : medicines etc..'
          value={category}
          onChange={(e) => { setcategory(e.target.value) }} className="col-span-3"
          autoComplete={'off'}
        />
      </div>
      {test.map(e => <>{e}</>)}
      <SheetFooter>
        <SheetClose>
        <Button
          type="submit"
          onClick={() => addCategories({ name: category })}
        >
          Create Categories
        </Button>
        </SheetClose>
      </SheetFooter>
    </main>
  )
}

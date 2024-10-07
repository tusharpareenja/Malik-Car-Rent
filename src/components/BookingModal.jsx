'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom'

export default function BookingModal({ isOpen, carName }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [leavingFrom, setLeavingFrom] = useState('')
  const [goingTo, setGoingTo] = useState('')
  const [departureDate, setDepartureDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', { name, email, phone, leavingFrom, goingTo, departureDate, returnDate })
    setIsBookingConfirmed(true)
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setPhone('')
    setLeavingFrom('')
    setGoingTo('')
    setDepartureDate(null)
    setReturnDate(null)
    setIsBookingConfirmed(false)
  }

  const handleClose = () => {
    window.location.reload()
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) handleClose(); }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book {carName}</DialogTitle>
          <DialogDescription>
            Fill in your details to book this car. Click book when you're done.
          </DialogDescription>
        </DialogHeader>
        {!isBookingConfirmed ? (
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">Name</Label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">Email</Label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">Phone</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="leaving-from" className="text-right">Leaving from</Label>
                <Input id="leaving-from" value={leavingFrom} onChange={(e) => setLeavingFrom(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="going-to" className="text-right">Going to</Label>
                <Input id="going-to" value={goingTo} onChange={(e) => setGoingTo(e.target.value)} className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="departure-date" className="text-right">Departure</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className={`col-span-3 justify-start text-left font-normal ${!departureDate && "text-muted-foreground"}`}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="return-date" className="text-right">Return</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant={"outline"} className={`col-span-3 justify-start text-left font-normal ${!returnDate && "text-muted-foreground"}`}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Book</Button>
            </DialogFooter>
          </form>
        ) : (
          <div className="py-6 text-center">
            <h3 className="text-lg font-medium text-green-600 mb-2">Booking Confirmed!</h3>
            <p className="text-sm text-gray-500">
              Thank you for booking with us. We'll send you a confirmation email shortly.
            </p>
            <Button onClick={handleClose} className="mt-4">Close</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

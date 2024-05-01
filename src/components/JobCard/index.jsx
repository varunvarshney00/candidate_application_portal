import { Badge } from "@/components/ui/badge"
// import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function JobCard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">Posted 12 days ago</Badge>
          <BookmarkIcon className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center mb-4">
          <CloudLightningIcon className="h-6 w-6 text-orange-500 mr-2" />
          <div>
            <h3 className="font-semibold">Backend Engineer</h3>
            <p className="text-sm text-gray-500">Bangalore</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Estimated Salary: ₹18 - 35 LPA</p>
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">About Company:</h4>
          <p className="text-sm">
            FamPay is building India’s first neo-bank exclusively teens. FamPay helps teens make their own online and
            offline payments through UPI, FamPay App and FamCard. Our aim is to make banking cool for teens and to help
            them learn the value of money, savings and spending wisely. We are on a mission to raise a new, financially
            aware generation, and drive 250 Million+ Indian teenagers to kickstart their financial journey super early
            in their life.
          </p>
          <Link className="text-blue-600" href="#">
            View job
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Minimum Experience</p>
          <p className="font-semibold">2 years</p>
        </div>
        <Button className="w-full bg-green-500 text-white mt-4">Easy Apply</Button>
      </Card>
      <Card className="rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">Posted 12 days ago</Badge>
          <BookmarkIcon className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center mb-4">
          <CloudLightningIcon className="h-6 w-6 text-blue-600 mr-2" />
          <div>
            <h3 className="font-semibold">Founding Engineer</h3>
            <p className="text-sm text-gray-500">Delhi</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Estimated Salary: ₹20 - 25 LPA</p>
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">About Company:</h4>
          <p className="text-sm">
            Fitsok is a new startup (backed by marquee Angels and VCs) disrupting the used two-wheeler market in India.
            We offer a seamless and trustworthy platform for buying and selling used bikes, with our full-stack
            model.With our full-stack model, we offer a seamless and trustworthy platform for buying and selling used
            bikes.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm">Founder/Recruiter profiles:</p>
            <Link className="text-blue-600" href="#">
              Ronnie Ray
            </Link>
          </div>
          <Link className="text-blue-600" href="#">
            View job
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Minimum Experience</p>
          <p className="font-semibold">3 years</p>
        </div>
        <Button className="w-full bg-green-500 text-white mt-4">Easy Apply</Button>
      </Card>
      <Card className="rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="secondary">Posted 12 days ago</Badge>
          <BookmarkIcon className="h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center mb-4">
          <CloudLightningIcon className="h-6 w-6 text-blue-600 mr-2" />
          <div>
            <h3 className="font-semibold">Product Manager</h3>
            <p className="text-sm text-gray-500">India</p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Estimated Salary: ₹15 - 25 LPA</p>
          <CheckCircleIcon className="h-5 w-5 text-green-500" />
        </div>
        <div className="mb-4">
          <h4 className="font-semibold mb-2">About Company:</h4>
          <p className="text-sm">
            Trumio is the world’s first University Projects Ecosystem platform enabling global clients to harness
            students, professors, and institutional capabilities to speed priority project execution for their business.
            Next-generation talent organized as teams with diverse skills, find and deliver impactful outcomes working
            within a secure project environment on Trumio. With AI-assistance built into each process step - Trumio
            makes it easy for clients and teams to stay on track, collaborate, and achieve desired project outcomes.
            Beyond project goals...
          </p>
          <Link className="text-blue-600" href="#">
            View job
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">Minimum Experience</p>
          <p className="font-semibold">1 years</p>
        </div>
        <Button className="w-full bg-green-500 text-white mt-4">Easy Apply</Button>
      </Card>
    </div>
  )
}

function BookmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}


function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}
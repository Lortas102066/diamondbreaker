import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/shadcn/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar"
import { Button } from "@/components/ui/shadcn/button"
import { Instagram, Mail } from "lucide-react"

interface Person {
  name: string
  role: string
  email: string
  imageUrl: string
  instagramHandle: string
}

export default function Component({ people = [] }: { people?: Person[] }) {
  const defaultPeople: Person[] = [
    {
      name: "Amal Ai Kapadia",
      role: "President",
      email: "alice@example.com",
      imageUrl: "/placeholder.svg?height=200&width=200",
      instagramHandle: "alice_codes"
    },
    {
      name: "Oliver Hu",
      role: "Vice President",
      email: "bob@example.com",
      imageUrl: "/placeholder.svg?height=200&width=200",
      instagramHandle: "bob_designs"
    },
    {
      name: "Arun Barbar(AB)",
      role: "Senior Secretary",
      email: "carol@example.com",
      imageUrl: "/placeholder.svg?height=200&width=200",
      instagramHandle: "carol_product"
    },
    {
      name: "Chee Duu",
      role: "General Secretary",
      email: "david@example.com",
      imageUrl: "/placeholder.svg?height=200&width=200",
      instagramHandle: "david_data"
    }
  ]

  const displayPeople = people.length > 0 ? people : defaultPeople

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {displayPeople.map((person, index) => (
          <Card key={index} className="flex flex-col items-center bg-gray-800 border-gray-700">
            <CardHeader className="text-center w-full">
              <Avatar className="w-48 h-48 mx-auto">
                <AvatarImage src={person.imageUrl} alt={person.name} />
                <AvatarFallback className="text-4xl bg-gray-700 text-gray-200">{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4 text-2xl text-white">{person.name}</CardTitle>
              <p className="text-lg text-gray-400">{person.role}</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href={`mailto:${person.email}`} className="text-blue-400 hover:underline">
                  {person.email}
                </a>
              </div>
              <a
                href={`https://instagram.com/${person.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-400 hover:underline"
                aria-label={`${person.name}'s Instagram profile`}
              >
                <Instagram className="h-5 w-5" />
                <span>@{person.instagramHandle}</span>
              </a>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full text-black border-gray-600 hover:bg-gray-700">View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
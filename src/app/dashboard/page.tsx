import { Menu, BarChart2, List, Home, Search, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9fd] relative">
      {/* Header with hamburger menu */}
      <header className="sticky top-0 z-10 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Menu</span>
          </Button>
          <h1 className="text-xl font-bold text-center">MONO:ME</h1>
          <div className="w-10" /> {/* Spacer for alignment */}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto">
        <h2 className="text-lg font-semibold mb-4">お部屋</h2>

        <div className="grid grid-cols-2 gap-4">
          {/* Bedroom Card with Closet */}
          <Card className="overflow-hidden border-2 border-[#a8e6cf] hover:shadow-md transition-shadow h-[200px]">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="bg-[#a8e6cf] p-3">
                <h3 className="text-[#2a7d67] font-bold">寝室</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <Button className="w-full py-3 bg-[#ffefd5] hover:bg-[#ffe5bc] text-[#d4a76a] border border-[#d4a76a] font-medium">
                  クローゼット
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Living Room Card */}
          <Card className="overflow-hidden hover:shadow-md transition-shadow bg-gray-50 h-[200px]">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="bg-gray-200 p-3">
                <h3 className="text-gray-600 font-bold">リビング</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center">
                <p className="text-gray-500 font-medium">準備中</p>
              </div>
            </CardContent>
          </Card>

          {/* Kitchen Card */}
          <Card className="overflow-hidden hover:shadow-md transition-shadow bg-gray-50 h-[200px]">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="bg-gray-200 p-3">
                <h3 className="text-gray-600 font-bold">キッチン</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center">
                <p className="text-gray-500 font-medium">準備中</p>
              </div>
            </CardContent>
          </Card>

          {/* Bathroom Card */}
          <Card className="overflow-hidden hover:shadow-md transition-shadow bg-gray-50 h-[200px]">
            <CardContent className="p-0 h-full flex flex-col">
              <div className="bg-gray-200 p-3">
                <h3 className="text-gray-600 font-bold">バスルーム</h3>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-center items-center">
                <p className="text-gray-500 font-medium">準備中</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Cow illustration */}
      <div className="fixed bottom-16 left-4 z-10">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cow body */}
          <ellipse cx="50" cy="60" rx="30" ry="25" fill="#f9f3e5" stroke="#d4c9b9" strokeWidth="2" />

          {/* Cow head */}
          <circle cx="30" cy="40" r="18" fill="#f9f3e5" stroke="#d4c9b9" strokeWidth="2" />

          {/* Cow ears */}
          <path d="M15 30 L10 20 L20 25 Z" fill="#f9f3e5" stroke="#d4c9b9" strokeWidth="2" />
          <path d="M45 30 L50 20 L40 25 Z" fill="#f9f3e5" stroke="#d4c9b9" strokeWidth="2" />

          {/* Cow spots */}
          <ellipse cx="60" cy="50" rx="10" ry="8" fill="#d9c2f0" />
          <ellipse cx="40" cy="70" rx="8" ry="6" fill="#bae1ff" />
          <ellipse cx="65" cy="75" rx="7" ry="5" fill="#ffb3ba" />

          {/* Cow eyes */}
          <circle cx="25" cy="35" r="3" fill="#333" />
          <circle cx="35" cy="35" r="3" fill="#333" />

          {/* Cow nose */}
          <ellipse cx="30" cy="45" rx="5" ry="3" fill="#ffd3b6" />
          <line x1="30" y1="45" x2="30" y2="50" stroke="#333" strokeWidth="1" />

          {/* Cow legs */}
          <line x1="35" y1="85" x2="35" y2="95" stroke="#d4c9b9" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="85" x2="45" y2="95" stroke="#d4c9b9" strokeWidth="4" strokeLinecap="round" />
          <line x1="55" y1="85" x2="55" y2="95" stroke="#d4c9b9" strokeWidth="4" strokeLinecap="round" />
          <line x1="65" y1="85" x2="65" y2="95" stroke="#d4c9b9" strokeWidth="4" strokeLinecap="round" />

          {/* Cow horns */}
          <path d="M20 25 C15 20, 10 15, 15 10" stroke="#d4c9b9" strokeWidth="2" fill="none" />
          <path d="M40 25 C45 20, 50 15, 45 10" stroke="#d4c9b9" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Bottom navigation */}
      <nav className="sticky bottom-0 bg-white border-t border-gray-200 py-2 px-4">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-[#ffb3ba] p-1.5 rounded-full">
              <BarChart2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs mt-1 text-[#e57f87]"></span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-[#d9c2f0] p-1.5 rounded-full">
              <List className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs mt-1 text-[#a98bc7]"></span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-[#a8e6cf] p-2 rounded-full -mt-5 border-4 border-white">
              <Home className="h-6 w-6 text-white" />
            </div>
            <span className="text-xs mt-1 text-[#2a7d67] font-bold"></span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-[#bae1ff] p-1.5 rounded-full">
              <Search className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs mt-1 text-[#7aaddb]"></span>
          </Link>
          <Link href="#" className="flex flex-col items-center">
            <div className="bg-[#ffd3b6] p-1.5 rounded-full">
              <Phone className="h-5 w-5 text-white" />
            </div>
            <span className="text-xs mt-1 text-[#d9a988]">サポート</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}


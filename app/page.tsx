"use client"

import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {NavigationMenu,NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,NavigationMenuList,NavigationMenuTrigger,
 navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      {/* ✅ Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b">
        {/* Logo */}
        <div className="text-xl font-bold">MyApp</div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[250px] p-4">
                  <ListItem href="/" title="Overview">
                    Welcome to the homepage of MyApp.
                  </ListItem>
                  <ListItem href="/docs" title="Docs">
                    Learn how to use our app and components.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[300px] p-4">
                  <ListItem href="/alert" title="Alert Dialog">
                    A modal dialog that expects a response.
                  </ListItem>
                  <ListItem href="/tooltip" title="Tooltip">
                    Display extra info on hover or focus.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>With Icons</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[220px] p-4">
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex flex-row items-center gap-2">
                      <CircleHelpIcon size={16} />
                      Backlog
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex flex-row items-center gap-2">
                      <CircleIcon size={16} />
                      To Do
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href="#" className="flex flex-row items-center gap-2">
                      <CircleCheckIcon size={16} />
                      Done
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* CTA Button */}
        <Button>Sign in</Button>
      </header>

      {/* Page Content */}
      <main className="flex-1 flex items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-center">
       
      </main>

      
    </div>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-2 hover:bg-accent focus:bg-accent focus:outline-none"
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-muted-foreground text-sm leading-snug">{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

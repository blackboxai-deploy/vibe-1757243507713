"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { href: "/", label: "Home", urdu: "ہوم" },
  { href: "/categories", label: "Categories", urdu: "اقسام" },
  { href: "/quiz", label: "Quiz", urdu: "سوالات" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-sm border-b-2 border-green-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              🚦
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Pakistan Traffic Signs
              </h1>
              <p className="text-sm text-gray-600">پاکستان ٹریفک نشانات</p>
            </div>
          </Link>

          <div className="flex space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "default" : "ghost"}
                  className={cn(
                    "flex flex-col items-center px-4 py-2 h-auto",
                    pathname === item.href
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "hover:bg-green-100 text-gray-700"
                  )}
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  <span className="text-xs opacity-70">{item.urdu}</span>
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
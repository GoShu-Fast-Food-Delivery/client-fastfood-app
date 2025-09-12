'use client';
import { CartIcon } from './icons/CartIcon';
import { Bell, ChevronsUpDown, CircleOff, LogOut, Moon, Search, Sun } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
// Shadcn UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

// import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { UserIcon } from './icons/UserIcon';
import { TagIcon } from './icons/TagIcon';
import { UsersIcon } from './icons/UsersIcon';
import { ShoppingBagIcon } from './icons/ShoppingBagIcon';
import { MenuIcon } from './icons/MenuIcon';
import { SignOutIcon } from './icons/SignOutIcon';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { SidebarMenuButton, useSidebar } from './ui/sidebar';

const Header = () => {
  const [notifications, setNotifications] = useState<any[]>([]);
  //fake data until auth is done
  const fakedataname = usePathname();
  const [fullname, setFullname] = useState<string>('Admin');
  const [email, setEmail] = useState<string>('admin@example.com');
  const { isMobile } = useSidebar();

  //darklight
  const { resolvedTheme } = useTheme();
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState('#ffffff');
  useEffect(() => {
    setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000');
  }, [resolvedTheme]);

  return (
    <Navbar className="font-semibold bg-dark py-3" classNames={{ item: 'data-[active=true]:text-primary' }}>
      <NavbarBrand>
        <Link href="/" className="text-primary text-2xl font-josefin">
          Fast Food Delivery
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-8" justify="center">
        <NavbarItem isActive={fakedataname === '/'}>
          <Link href="/" aria-current="page" className="hover:text-primary">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={fakedataname === '/menu'}>
          <Link href="/menu" className="hover:text-primary">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem isActive={fakedataname === '/services'}>
          <Link href="/services" className="hover:text-primary">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem isActive={fakedataname === '/about'}>
          <Link href="/about" className="hover:text-primary">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive={fakedataname === '/contact'}>
          <Link href="/contact" className="hover:text-primary">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* {profileData ? ( */}
        <div className="flex items-center h-full">
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative bg-secondary text-black dark:text-white">
                  <Bell />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[400px] max-h-96 overflow-auto p-2" sideOffset={8}>
                <div className="flex items-center justify-between px-2 py-1">
                  <DropdownMenuLabel>Thông báo mới</DropdownMenuLabel>
                </div>
                <DropdownMenuSeparator />
                {notifications.length === 0 && (
                  <DropdownMenuItem disabled>
                    <div className="flex flex-col gap-2 items-center justify-center mx-auto">
                      <span>Không có thông báo</span>
                      <CircleOff />
                    </div>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="relative bg-secondary text-black dark:text-white">
                  <Bell />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[400px] max-h-96 overflow-auto p-2" sideOffset={8}>
                <div className="flex items-center justify-between px-2 py-1">
                  <DropdownMenuLabel>Thông báo mới</DropdownMenuLabel>
                </div>
                <DropdownMenuSeparator />
                {notifications.length === 0 && (
                  <DropdownMenuItem disabled>
                    <div className="flex flex-col gap-2 items-center justify-center mx-auto">
                      <span>Không có thông báo</span>
                      <CircleOff />
                    </div>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* User menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={''} alt={email} />
                  <AvatarFallback className="rounded-lg">
                    {fullname
                      ? fullname
                          .split(' ')
                          .map((word) => word[0]?.toUpperCase())
                          .join('')
                      : 'AR'}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">{fullname}</span>
                  <span className="truncate text-xs">{email}</span>
                </div>
                <ChevronsUpDown className="ml-auto size-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
              side={isMobile ? 'right' : 'bottom'}
              align="end"
              sideOffset={4}
            >
              <DropdownMenuLabel className="p-0 font-normal">
                <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={''} alt={email} />
                    <AvatarFallback className="rounded-lg">
                      {fullname
                        ? fullname
                            .split(' ')
                            .map((word) => word[0]?.toUpperCase())
                            .join('')
                        : 'AR'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{fullname}</span>
                    <span className="truncate text-xs">{email}</span>
                  </div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href={''}>Tài khoản</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={''}>Chính sách</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href={''}>Thông báo</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => console.log('logout')}>
                <LogOut />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* Toggle theme */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* ) : (
          <div className='flex gap-6 items-center'>
            {session === null &&
              <>
                <Link href={'/login'} className='hover:text-primary'>Login</Link>
                <Button as={Link} color="primary" href={'/register'} className='font-semibold rounded-full px-6 py-2 text-dark'>
                  Sign Up
                </Button>
              </>
            }
          </div>
        )} */}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;

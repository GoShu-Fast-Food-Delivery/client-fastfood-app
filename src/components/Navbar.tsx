'use client';

import { useEffect, useState } from 'react';
import { Bell, ChevronsUpDown, CircleOff, LogOut, Search } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Input } from './ui/input';
import { SidebarMenuButton, SidebarTrigger, useSidebar } from './ui/sidebar';

const Navbar = () => {
  const { isMobile } = useSidebar();

  // Fake state tạm (sau này bạn gắn API/Context lại)
  const [fullname, setFullname] = useState<string>('Admin');
  const [email, setEmail] = useState<string>('admin@example.com');
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    // call API setEmployee + setNotifications
  }, []);

  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* LEFT */}
      {/* <SidebarTrigger /> */}
      heello

      {/* RIGHT */}
      <div className="flex items-center gap-3">
        {/* Search box */}
        <div className="hidden md:block relative max-w-sm sm:w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input placeholder="Tìm kiếm" className="pl-10" />
        </div>

        {/* Notifications */}
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
      </div>
    </nav>
  );
};

export default Navbar;

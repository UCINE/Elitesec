'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

const navigation = [
  { name: 'Events', href: '/' },
  { name: 'Users', href: '/users' },
  { name: 'Teams', href: '/teams' },
  { name: 'Scoreboard', href: '/playground' },
  { name: 'Challenges', href: '/challenges' }

];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User} from "@nextui-org/react";

function Avatars() {
  return (
    <div className="flex items-center gap-4 scale-90 text-white">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
            isBordered: false,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
            }}
            className="transition-transform"
            description="@tonyreichert"
            name="Tony Reichert"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-bold">Signed in as</p>
            <p className="font-bold">@tonyreichert</p>
          </DropdownItem>
          <DropdownItem key="settings">
            My Settings
          </DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">
            Analytics
          </DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">
            Help & Feedback
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
    );
}

import {Badge, Button} from "@nextui-org/react";
//import {NotificationIcon} from "./NotificationIcon";

function Notifications() {
  return (
    <Badge content="99+" shape="circle" color="danger">
      <Button
        radius="full"
        isIconOnly
        aria-label="more than 99 notifications"
        variant="light"
        >
        {/*<NotificationIcon size={24} />*/}
      </Button>
    </Badge>
    );
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-black shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  {/*<svg*/}
                  {/*  width="32"*/}
                  {/*  height="32"*/}
                  {/*  viewBox="0 0 32 32"*/}
                  {/*  fill="none"*/}
                  {/*  className="text-gray-100"*/}
                  {/*  xmlns="http://www.w3.org/2000/svg"*/}
                  {/*>*/}
                  {/*  <rect*/}
                  {/*    width="100%"*/}
                  {/*    height="100%"*/}
                  {/*    rx="16"*/}
                  {/*    fill="currentColor"*/}
                  {/*  />*/}
                  {/*  <path*/}
                  {/*    fillRule="evenodd"*/}
                  {/*    clipRule="evenodd"*/}
                  {/*    d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"*/}
                  {/*    fill="black"*/}
                  {/*  />*/}
                  {/*</svg>*/}
                  <p className="text-white sm:-my-px sm:ml-6 sm:flex sm:space-x-8"><span className="font-bold ">SETH.</span> CTF</p>
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'border-slate-500 text-gray-400'
                          : 'border-transparent text-white hover:border-b hover:border-b-white',
                        'inline-flex items-center  text-sm font-medium'
                      )}
                      aria-current={pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden  sm:flex sm:items-center">
                <Avatars />
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

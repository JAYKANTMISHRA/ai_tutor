"use client";
import React from 'react';
import Image from 'next/image';
import { LayoutDashboard, Shield, UserCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SideBar = () => {
  const MenuList = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      name: 'Upgrade',
      icon: Shield,
      path: '/dashboard/upgrade'
    },
    {
      name: 'Profile',
      icon: UserCircle,
      path: '/dashboard/profile'
    }
  ];

  const path = usePathname();

  return (
    <div className='h-screen shadow-md'>
     
      

      <div className='mt-20'>
        <Link  className='w-full'  href={'/create'} >  <Button className='w-full' >+ Create New</Button> </Link>
       

        <div className='mt-5'>
          {MenuList.map((menu, index) => (
            <div
              key={index}
              className={`flex gap-5 items-center p-3 hover:bg-slate-200 rounded-lg cursor-pointer mt-3 ${
                path === menu.path ? 'bg-slate-200' : ''
              }`}
            >
              {menu.icon && <menu.icon size={20} />}
              <h2>{menu.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className='border p-3 bg-slate-200 rounded-xl absolute bottom-10 w-[87%]'>
        <h2 className='text-lg mb-2'>Available Tickets: 5</h2>
        <Progress value={30} />
        <h2 className='text-sm'>1 out of 5 Tickets Used</h2>

        <Link href={'/dashboard/upgrade'} className='text-primary text-xs mt-3'>
          Upgrade to create more
        </Link>
      </div>
    </div>
  );
};

export default SideBar;

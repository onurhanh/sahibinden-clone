import { Car, House } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='max-w-90 absolute left-1/9 top-1/8 space-y-3 text-[#00369C]'>
            <hr className="border-t border-gray-300" />
            <div className='space-y-3 flex gap-5'>
                <div className='rounded-4xl w-10 flex items-center justify-center text-white bg-amber-600 border'>

                    <House />
                </div>
                <div className=''>
                    <h1 className='font-bold'>Emlak</h1>
                    <Link href="/konut">Konut</Link>
                </div>
            </div>
            <hr className="border-t border-gray-300" />
            <div className='space-y-3 flex gap-5'>
                <div className='rounded-4xl w-10 flex items-center justify-center text-white bg-red-600 border'>
                    <Car />
                </div>
                <div className=''>
                    <h1 className='font-bold '>Vasita</h1>
                    <Link href="/otomobil" className=''>Otomobil</Link>
                </div>

            </div>

        </div>
    )
}

import React from 'react';
import { Inter } from 'next/font/google';
import Entries from '../../../logs.json'
import ChangeLogEntry from '../components/ChangeLogEntry.js'

const inter = Inter({ weight: '800', subsets: ['latin'] });
export default function ChangeLog() {
    return (
        <div className="flex justify-center">
            <div className="py-8">
                {
                    Object.values(Entries).map(e => {
                        return <ChangeLogEntry key={e.version} logData={e} />
                    })
                }
            </div>
        </div>
    )
}
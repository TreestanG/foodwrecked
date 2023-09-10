import React from 'react';
import Entries from '../../../logs.json'
import ChangeLogEntry from '../components/ChangeLogEntry.js'

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
import React from 'react';
import ChangeLogEntry from './components/ChangeLogEntry.js'
import Entries from '../../logs.json'
import OutsideLayout from './layout/Outside.js';

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

ChangeLog.getLayout = function getLayout(page) {
    return (
        <OutsideLayout>
            {page}
        </OutsideLayout>
    )
}
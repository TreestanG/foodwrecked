import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import moment from 'moment'

export default function RecipeCard({ logData }) {
    const fromNowDate = moment(logData.date).fromNow()

    return (
        <div className="border-2 p-6 w-[32rem] rounded-lg border-slate-200 hover:border-uni-green shadow-xl">
            <div className="flex-col sm:flex-row flex justify-between items-baseline pb-4">
            <h1 className="text-lg font-semibold">{logData.version} - {logData.title}</h1>
            <a className="font-light">{fromNowDate}</a>
            </div>
            {
                logData.changes.map(c => {
                    return (
                        <p className="pl-4">{c}</p>
                    )
                })
            }
        </div>
    )
}

import React from 'react';
import moment from 'moment'

export default function RecipeCard({ logData }) {
    const fromNowDate = moment(logData.date).fromNow()

    return (
        <div class="border-2 p-6 w-[32rem] rounded-lg border-slate-200 hover:border-green-500 shadow-xl">
            <div class="flex-col sm:flex-row flex justify-between items-baseline pb-4">
            <h1 class="text-lg font-semibold">{logData.version} - {logData.title}</h1>
            <a class="font-light">{fromNowDate}</a>
            </div>
            {
                logData.changes.map(c => {
                    return (
                        <p class="pl-4" key={c.version}>{c}</p>
                    )
                })
            }
        </div>
    )
}

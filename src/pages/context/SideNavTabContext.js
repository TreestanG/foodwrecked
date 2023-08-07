'use client';

import React, { createContext, useState } from 'react';

export const SideBarNavContext = createContext()
export const SideBarNavProvider = ({ children }) => {
    const [tab, setTab] = useState("Home")

    return (
        <SideBarNavContext.Provider value={[tab, setTab]}>
            {children}
        </SideBarNavContext.Provider>
    )
}


import { useState } from "react";
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

interface SidebarProps {
    isOpen: boolean;
    closeSidebar: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const navItens = [
    {name: "Dashboard", icon: "📊"},
    {name: "Projects", icon: "🗂️"},
    {name: "Calendar", icon: "🗓️"},
    {name: "Document", icon: "📝"},
    {name: "Reports", icon: "📈"}
]

export const Sidebar = ({ isOpen, closeSidebar, isDarkMode, toggleDarkMode }: SidebarProps) => {
    return(
        <div className={`
            fixed top-0 left-0 w-64 h-screen shadow-lg z-50 flex flex-col
            transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:static
            bg-white text-gray-900 dark:bg-gray-900 dark:text-white 
            border-r border-gray-200 dark:border-gray-700
        `}>

            

            <div className="h-20 px-4 flex items-center justify-between border-b dark:border-gray-700">

                <div className='md:block'>
                    <img src="/src/images/logoSidebar.png" alt="Logo" className="object-cover" />
                </div>

                <h1 className="text-2xl font-bold">Brian's MedicalCenter</h1>
                <button onClick={closeSidebar} className="text-xl font-bold lg:hidden">
                    ✕
                </button>
            </div>
            
            <div className="p-4 space-y-2 flex-1">
                {navItens.map( item => {
                    return(
                        <div key={item.name} className="flex p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded cursor-pointer">
                            <span className="text-xl mr-2">{item.icon}</span>
                            <span className="text-xl">{item.name}</span>
                        </div>
                    )
                })}
            </div>

            <div className="p-4 border-t dark:border-gray-700 gap-2">
                <button 
                    onClick={toggleDarkMode}
                    className="flex w-full items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                >
                    <span className="text-xl mr-2">{isDarkMode ? "🌙" : "☀️"}</span>
                    <span className="text-xl">{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
                </button>

                <button className="flex w-full items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="text-xl mr-2"><Cog6ToothIcon className="w-6 h-6" /></span>
                    <span className="text-xl">Configurações</span>
                </button>

                <button className="flex w-full items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <span className="text-xl mr-2"><ArrowRightOnRectangleIcon className="w-6 h-6" /></span>
                    <span className="text-xl">Sair</span>
                </button>

            </div>

        </div>
    );
};
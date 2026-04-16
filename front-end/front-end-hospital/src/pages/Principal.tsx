import { useState, useEffect } from 'react'; 
import { Navbar } from "../components/Navbar";
import { Dashboard } from "../components/Dashboard";
import { Sidebar } from '../components/Sidebar';

function Principal(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

   return (
        <div className="bg-gray-100 dark:bg-gray-900 transition-colors h-screen flex overflow-hidden">
            
            <Sidebar 
                isOpen={sidebarOpen} 
                closeSidebar={() => setSidebarOpen(false)} 
                isDarkMode={darkMode} 
                toggleDarkMode={() => setDarkMode(!darkMode)}
            />

            <div className="flex-1 flex flex-col overflow-y-auto">
                <Navbar onOpenSidebar={() => setSidebarOpen(true)} />
                <Dashboard />
            </div>
            
        </div>
    );
}

export default Principal;
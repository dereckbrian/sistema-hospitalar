interface NavbarProps {
    onOpenSidebar: () => void;
}

export const Navbar = ({ onOpenSidebar }: NavbarProps) => {
    return(
        <header className="h-20 px-4 bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex items-center justify-between shadow-sm dark:border-b dark:border-gray-700">
            <button 
                onClick={onOpenSidebar} 
                className="p-2 text-xl font-bold lg:hidden rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
                ☰
            </button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            
            <div className="bg-gray-300 dark:bg-gray-600 w-10 h-10 rounded-full"></div>
        </header>
    )
};
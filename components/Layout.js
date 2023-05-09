import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Blog</h1>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <footer className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    &copy; 2023 Blog
                </div>
            </footer>
        </div>
    )
}


export default Layout;

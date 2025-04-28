
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Translate, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Check if user is on dashboard or other authenticated pages
  const isAuthenticated = location.pathname.includes('/dashboard') || 
                          location.pathname.includes('/profile');
  
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full py-4 bg-background/80 backdrop-blur-lg border-b border-border fixed top-0 z-50">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Translate className="h-6 w-6 text-brand-600" />
          <span className="font-bold text-xl">SpeakEasy</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {!isAuthenticated && (
            <>
              <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
                Home
              </Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">
                Pricing
              </Link>
            </>
          )}
          
          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">
                Dashboard
              </Link>
              <Link to="/profile" className="text-foreground/80 hover:text-foreground transition-colors">
                Profile
              </Link>
            </>
          )}
          
          {!isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/login?signup=true">
                <Button>Start Free Trial</Button>
              </Link>
            </div>
          ) : (
            <Link to="/">
              <Button variant="outline">Log Out</Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background z-50 animate-fade-in">
          <div className="container-custom py-8 flex flex-col gap-6">
            {!isAuthenticated && (
              <>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Home
                </Link>
                <Link
                  to="/pricing"
                  onClick={closeMenu}
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Pricing
                </Link>
              </>
            )}
            
            {isAuthenticated && (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={closeMenu}
                  className="text-lg font-medium py-2 border-b border-border"
                >
                  Profile
                </Link>
              </>
            )}
            
            {!isAuthenticated ? (
              <div className="flex flex-col gap-4 mt-4">
                <Link to="/login" onClick={closeMenu}>
                  <Button variant="outline" className="w-full">
                    Log in
                  </Button>
                </Link>
                <Link to="/login?signup=true" onClick={closeMenu}>
                  <Button className="w-full">Start Free Trial</Button>
                </Link>
              </div>
            ) : (
              <Link to="/" onClick={closeMenu}>
                <Button variant="outline" className="w-full mt-4">
                  Log Out
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

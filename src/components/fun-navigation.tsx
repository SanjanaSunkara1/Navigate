import { useState } from 'react';
import { Button } from './ui/button';
import { GraduationCap, BookOpen, Calculator, Trophy, FileText, Home, Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface FunNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const navigationTabs = [
  { id: 'home', label: 'Home', icon: Home, color: 'bg-gradient-to-r from-blue-600 to-indigo-600' },
  { id: 'course-selection', label: 'Course Selection', icon: BookOpen, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
  { id: 'graduation', label: 'Graduation Requirements', icon: GraduationCap, color: 'bg-gradient-to-r from-green-500 to-emerald-500' },
  { id: 'gpa-calculator', label: 'GPA Calculator', icon: Calculator, color: 'bg-gradient-to-r from-orange-500 to-amber-500' },
  { id: 'college-prep', label: 'College Portfolio & Prep', icon: Trophy, color: 'bg-gradient-to-r from-indigo-500 to-purple-500' },
  { id: 'glossary', label: 'Glossary', icon: FileText, color: 'bg-gradient-to-r from-teal-500 to-green-500' },
];

export function FunNavigation({ currentTab, onTabChange }: FunNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                U.S. High School Guide
              </h1>
            </div>
            
            <div className="flex space-x-2">
              {navigationTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;
                
                return (
                  <Button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                      isActive 
                        ? `${tab.color} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    variant="ghost"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white"></div>
                    )}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              U.S. High School Guide
            </h1>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                {navigationTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = currentTab === tab.id;
                  
                  return (
                    <Button
                      key={tab.id}
                      onClick={() => handleTabChange(tab.id)}
                      className={`justify-start w-full py-3 px-4 text-left border-l-4 ${
                        isActive 
                          ? `${tab.color} text-white shadow-lg border-l-white` 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border-l-transparent'
                      }`}
                      variant="ghost"
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  );
}
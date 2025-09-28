import { useState } from 'react';
import { Button } from './ui/button';
import { GraduationCap, BookOpen, Calculator, Trophy, FileText, Home, Menu, Info } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { ThemeToggle } from './theme-toggle';

interface CleanNavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

const navigationTabs = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'course-selection', label: 'Course Selection', icon: BookOpen },
  { id: 'graduation', label: 'Graduation Requirements', icon: GraduationCap },
  { id: 'gpa-calculator', label: 'GPA Calculator', icon: Calculator },
  { id: 'college-prep', label: 'College Portfolio', icon: Trophy },
  { id: 'glossary', label: 'Glossary', icon: FileText },
  { id: 'about', label: 'About this app', icon: Info },
];

export function CleanNavigation({ currentTab, onTabChange }: CleanNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabChange = (tab: string) => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary text-primary-foreground flex items-center justify-center">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h1 className="text-xl font-bold text-primary whitespace-nowrap">
                U.S. High School Guide
              </h1>
            </div>
            
            <div className="flex items-center space-x-1">
              {navigationTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = currentTab === tab.id;
                
                return (
                  <Button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    }`}
                    variant="ghost"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {tab.label}
                  </Button>
                );
              })}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden bg-background border-b border-border sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h1 className="text-base font-bold text-primary whitespace-nowrap">
              U.S. High School Guide
            </h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <ThemeToggle />
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
                        className={`justify-start w-full py-3 px-4 text-left ${
                          isActive 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground'
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
        </div>
      </nav>
    </>
  );
}
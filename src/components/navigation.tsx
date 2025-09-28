import { useState } from 'react';
import { Menu, X, GraduationCap, BookOpen, Calculator, Users, CheckSquare, FileText, Home, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'graduation', label: 'Graduation Requirements', icon: GraduationCap },
  { id: 'testing', label: 'Testing Requirements', icon: FileText },
  { id: 'college-prep', label: 'College Prep', icon: BookOpen },
  { id: 'courses', label: 'Course Selection', icon: BookOpen },
  { id: 'gpa-calculator', label: 'GPA Calculator', icon: Calculator },
  { id: 'student-support', label: 'Student Support', icon: Users },
  { id: 'progress', label: 'Progress Tracker', icon: CheckSquare },
  { id: 'glossary', label: 'Glossary', icon: FileText },
];

export function Navigation({ currentSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    setIsOpen(false);
  };

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8" />
          <span className="text-xl font-semibold">Student Guide USA</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-1">
          {navigationItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentSection === item.id ? "secondary" : "ghost"}
                onClick={() => handleSectionChange(item.id)}
                className="text-sm"
              >
                <Icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            );
          })}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-6">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6" />
                <span className="text-lg font-semibold">Student Guide USA</span>
              </div>
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentSection === item.id ? "default" : "ghost"}
                    onClick={() => handleSectionChange(item.id)}
                    className="justify-start w-full"
                  >
                    <Icon className="h-4 w-4 mr-3" />
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
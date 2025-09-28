import { useState } from 'react';
import { CleanNavigation } from './components/clean-navigation';
import { Homepage } from './components/homepage';
import { CourseSelection } from './components/course-selection';
import { GraduationRequirements } from './components/graduation-requirements';
import { GPACalculator } from './components/gpa-calculator';
import { CollegePrep } from './components/college-prep';
import { Glossary } from './components/glossary';
import { About } from './components/about';
import { FunFooter } from './components/fun-footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    // Scroll to top when changing tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentTab) {
      case 'home':
        return <Homepage onTabChange={handleTabChange} />;
      case 'course-selection':
        return <CourseSelection />;
      case 'graduation':
        return <GraduationRequirements />;
      case 'gpa-calculator':
        return <GPACalculator />;
      case 'college-prep':
        return <CollegePrep />;
      case 'glossary':
        return <Glossary />;
      case 'about':
        return <About />;
      default:
        return <Homepage onTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CleanNavigation currentTab={currentTab} onTabChange={handleTabChange} />
      
      <main>
        {renderContent()}
      </main>
      
      <FunFooter onTabChange={handleTabChange} />
    </div>
  );
}
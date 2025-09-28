import { Button } from './ui/button';
import { ArrowRight, Calculator, BookOpen, Star, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomepageProps {
  onTabChange: (tab: string) => void;
}

const essentialTerms = [
  { term: 'GPA', definition: 'Grade Point Average - A numerical calculation that represents your overall academic performance. It\'s calculated by averaging all your final grades across all courses. In the US, GPA is crucial for college admissions, scholarships, and graduation requirements.' },
  { term: 'AP (Advanced Placement)', definition: 'College-level courses offered in high school. Students can earn college credit by scoring well on AP exams. These courses are more rigorous than regular classes and show colleges you can handle advanced coursework.' },
  { term: 'Credits', definition: 'Units earned for completing courses successfully. Most high school courses are worth 1 credit (full year) or 0.5 credits (semester). You need at least 22 credits to graduate in Texas, with specific requirements for each subject area.' },
  { term: 'Transcript', definition: 'Your official academic record showing all courses taken, grades received, GPA, and credits earned. This document is essential for college applications and proves you\'ve met graduation requirements.' },
  { term: 'STAAR', definition: 'State of Texas Assessments of Academic Readiness - standardized tests required for graduation. You must pass specific STAAR tests (like English I & II, Algebra I, Biology, U.S. History) to receive your diploma.' },
];

const statsData = [
  { number: '22+', label: 'Credits Required', sublabel: 'For Graduation' },
  { number: '24', label: 'Core Classes', sublabel: 'Explained' },
  { number: '5', label: 'Endorsement Areas', sublabel: 'Available' },
  { number: '100%', label: 'Success Rate', sublabel: 'With Our Guide' },
];

export function Homepage({ onTabChange }: HomepageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 text-white text-sm font-medium">
              <span className="mr-2">📍</span>
              Starting with Texas
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Your Guide to
              <br />
              <span className="text-blue-200">U.S. High School Success</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Navigate graduation requirements, calculate your GPA, and access the 
              resources you need to succeed in the American education system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => onTabChange('course-selection')}
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 text-lg font-medium"
                size="lg"
              >
                <Star className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
              <Button 
                onClick={() => onTabChange('graduation')}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-medium bg-transparent"
                size="lg"
              >
                View Requirements
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                  <div className="text-blue-300 text-sm">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need to Succeed */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Everything You Need to{' '}
              <span className="text-blue-600">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              New to the United States and unsure about how the education system works? 
              We're here to help you understand graduation requirements, testing, college prep, 
              and everything you need to succeed in high school.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GPA Calculator */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => onTabChange('gpa-calculator')}>
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">GPA Calculator</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Calculate both weighted and unweighted GPA instantly. Understand how different 
                course types (Regular, Honors, AP, IB) affect your academic standing and college admissions.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Calculate Now <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Course Selection */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => onTabChange('course-selection')}>
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center mb-6">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Course Selection</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Learn about core classes vs electives, understand the differences between Regular, 
                Honors, AP, and IB courses, and discover how to choose classes that align with your goals.
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Explore Courses <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Graduation Requirements */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => onTabChange('graduation')}>
              <div className="w-12 h-12 bg-yellow-600 text-white flex items-center justify-center mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Graduation Requirements</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Track your progress with credit requirements, STAAR testing, and graduation program options. 
                Stay on top of what you need to graduate successfully.
              </p>
              <div className="flex items-center text-yellow-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Track Progress <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* College Portfolio */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => onTabChange('college-prep')}>
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">College Portfolio & Prep</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Build your college application with extracurriculars, volunteering, internships, 
                and test prep. Learn about SAT/ACT and create a standout resume.
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Essential Terms */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => onTabChange('glossary')}>
              <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Essential Terms</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Master the vocabulary of U.S. high school education. From GPA to AP courses, 
                understand all the terms you'll encounter throughout your high school journey.
              </p>
              <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Learn Terms <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Get Support */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                 onClick={() => window.open('https://tea.texas.gov/academics/special-student-populations', '_blank')}>
              <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-card-foreground">Get Support</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Access resources and help from school counselors, teachers, ESL/ELL programs, 
                and special education accommodations when needed.
              </p>
              <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-200">
                Find Help <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Terms Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Essential Terms to Know</h2>
            <p className="text-xl text-muted-foreground">
              Master these key terms to navigate the U.S. education system with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {essentialTerms.map((term, index) => (
              <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-bold text-lg mb-3 text-blue-600">{term.term}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{term.definition}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onTabChange('glossary')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium"
            >
              View Complete Glossary
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
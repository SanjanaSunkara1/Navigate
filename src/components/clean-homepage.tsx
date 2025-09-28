import { Button } from './ui/button';
import { ArrowRight, Calculator, BookOpen, Star, Users, Target, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CleanHomepageProps {
  onTabChange: (tab: string) => void;
}

const essentialTerms = [
  { term: 'GPA', definition: 'Grade Point Average - your academic performance score' },
  { term: 'AP', definition: 'Advanced Placement - college-level courses in high school' },
  { term: 'Credits', definition: 'Units earned for completing courses (need 22+ to graduate)' },
  { term: 'Transcript', definition: 'Official record of all your courses and grades' },
  { term: 'STAAR', definition: 'State tests required for graduation in Texas' },
];

export function CleanHomepage({ onTabChange }: CleanHomepageProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                  Your Guide to U.S. High School Success
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Navigate High School with{' '}
                  <span className="text-primary">
                    Confidence
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  New to the United States and unsure about how the education system works? 
                  We're here to help you understand graduation requirements, testing, college prep, 
                  and everything you need to succeed in high school.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onTabChange('course-selection')}
                  className="px-8 py-4 text-lg font-medium"
                  size="lg"
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => onTabChange('glossary')}
                  variant="outline"
                  className="px-8 py-4 text-lg font-medium"
                  size="lg"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Essential Terms
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc1ODk0NTU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy diverse students at graduation"
                className="w-full h-96 object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="text-primary">Succeed</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From understanding course selection to calculating your GPA, we've got you covered with 
              interactive tools and comprehensive guides.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GPA Calculator */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
                 onClick={() => onTabChange('gpa-calculator')}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">GPA Calculator</h3>
              <p className="text-muted-foreground mb-4">
                Calculate both weighted and unweighted GPA instantly. Understand how different course types affect your academic standing.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                Calculate Now <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Course Selection */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
                 onClick={() => onTabChange('course-selection')}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Course Selection</h3>
              <p className="text-muted-foreground mb-4">
                Learn about core classes, electives, and different course types to make informed decisions.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                Explore <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Graduation Requirements */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
                 onClick={() => onTabChange('graduation')}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Graduation Requirements</h3>
              <p className="text-muted-foreground mb-4">
                Track your progress with credits, tests, and graduation programs.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                Track Progress <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* College Portfolio */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
                 onClick={() => onTabChange('college-prep')}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">College Portfolio</h3>
              <p className="text-muted-foreground mb-4">
                Build your college application with extracurriculars, volunteering, and test prep.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Essential Terms */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group cursor-pointer"
                 onClick={() => onTabChange('glossary')}>
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Essential Terms</h3>
              <p className="text-muted-foreground mb-4">
                Master the vocabulary of U.S. high school education.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-200">
                Learn Terms <ArrowRight className="h-4 w-4 ml-2" />
              </div>
            </div>

            {/* Get Support */}
            <div className="bg-card border border-border p-8 hover:shadow-lg transition-shadow duration-200 group">
              <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">Get Support</h3>
              <p className="text-muted-foreground mb-4">
                Access resources and help from counselors, teachers, and support services.
              </p>
              <div className="flex items-center text-primary font-medium">
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
            <h2 className="text-3xl font-bold mb-4">Essential Terms to Know</h2>
            <p className="text-muted-foreground">Quick definitions of the most important high school terms</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {essentialTerms.map((term, index) => (
              <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-shadow duration-200">
                <h4 className="font-bold text-lg mb-2 text-primary">{term.term}</h4>
                <p className="text-muted-foreground text-sm">{term.definition}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onTabChange('glossary')}
              className="px-8 py-3 font-medium"
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
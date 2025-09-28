import { Button } from './ui/button';
import { ArrowRight, Calculator, BookOpen, Star, Sparkles, Target, Users, Trophy, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FunHomepageProps {
  onTabChange: (tab: string) => void;
}

const essentialTerms = [
  { term: 'GPA', definition: 'Grade Point Average - your academic performance score' },
  { term: 'AP', definition: 'Advanced Placement - college-level courses in high school' },
  { term: 'Credits', definition: 'Units earned for completing courses (need 22+ to graduate)' },
  { term: 'Transcript', definition: 'Official record of all your courses and grades' },
  { term: 'STAAR', definition: 'State tests required for graduation in Texas' },
];

export function FunHomepage({ onTabChange }: FunHomepageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium transform -skew-x-12">
                  <Sparkles className="h-4 w-4" />
                  <span>Your Guide to U.S. High School Success</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Navigate High School with{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Confidence
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  New to the United States and unsure about how the education system works? 
                  We're here to help you understand graduation requirements, testing, college prep, 
                  and everything you need to succeed in high school.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => onTabChange('course-selection')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-medium transform hover:scale-105 transition-all duration-200 shadow-lg clip-path-button"
                >
                  Start Your Journey
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => onTabChange('glossary')}
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium transform -skew-x-6"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Essential Terms
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl opacity-30 animate-pulse transform -skew-y-6"></div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758270703662-b7d58bf0a8a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGRpdmVyc2UlMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBzdWNjZXNzfGVufDF8fHx8MTc1ODk0NTU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Happy diverse students at graduation"
                className="relative z-10 w-full h-96 object-cover shadow-2xl clip-path-polygon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Everything You Need Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Succeed
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From understanding course selection to calculating your GPA, we've got you covered with 
              interactive tools and comprehensive guides.
            </p>
          </div>

          {/* Interactive Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* GPA Calculator Highlight */}
            <div className="md:col-span-2">
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-8 text-white relative overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300 clip-path-diagonal"
                   onClick={() => onTabChange('gpa-calculator')}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -translate-y-8 translate-x-8 transform rotate-45"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 translate-y-8 -translate-x-8 transform -rotate-45"></div>
                
                <div className="relative z-10">
                  <Calculator className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">GPA Calculator</h3>
                  <p className="text-orange-100 mb-6">
                    Input your courses and calculate both weighted and unweighted GPA instantly. 
                    Understand how different course types affect your academic standing.
                  </p>
                  <div className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-200">
                    Calculate Now <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>

            {/* Course Selection */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 p-8 text-white relative overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-all duration-300 clip-path-corner"
                 onClick={() => onTabChange('course-selection')}>
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 -translate-y-4 translate-x-4 transform rotate-12"></div>
              
              <div className="relative z-10">
                <BookOpen className="h-10 w-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">Course Selection</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Learn about core classes, electives, and different course types.
                </p>
                <div className="inline-flex items-center text-white font-medium group-hover:translate-x-2 transition-transform duration-200 text-sm">
                  Explore <ArrowRight className="h-3 w-3 ml-2" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Access Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                title: 'Graduation Requirements', 
                desc: 'Credits, tests, and programs', 
                color: 'from-green-500 to-emerald-600',
                icon: Star,
                tab: 'graduation'
              },
              { 
                title: 'College Portfolio', 
                desc: 'Build your college application', 
                color: 'from-indigo-500 to-purple-600',
                icon: Trophy,
                tab: 'college-prep'
              },
              { 
                title: 'Essential Terms', 
                desc: 'Understand key vocabulary', 
                color: 'from-teal-500 to-green-600',
                icon: Target,
                tab: 'glossary'
              },
              { 
                title: 'Get Support', 
                desc: 'Resources and help', 
                color: 'from-blue-500 to-teal-600',
                icon: Users,
                tab: 'glossary'
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} 
                     className={`bg-gradient-to-br ${item.color} p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-200 hover:shadow-xl clip-path-hexagon`}
                     onClick={() => onTabChange(item.tab)}>
                  <Icon className="h-8 w-8 mb-3" />
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Essential Terms Preview */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Essential Terms to Know</h2>
            <p className="text-gray-600">Quick definitions of the most important high school terms</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {essentialTerms.map((term, index) => (
              <div key={index} className="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border-l-4 border-l-blue-500 transform hover:-translate-y-1">
                <h4 className="font-bold text-lg mb-2 text-blue-600">{term.term}</h4>
                <p className="text-gray-600 text-sm">{term.definition}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              onClick={() => onTabChange('glossary')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 font-medium transform -skew-x-12"
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
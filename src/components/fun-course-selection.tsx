import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BookOpen, Star, Trophy, Users, Lightbulb, ChevronRight, GraduationCap, Calculator, Zap } from 'lucide-react';

export function FunCourseSelection() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const courseTypes = [
    {
      type: 'Regular',
      description: 'Standard high school courses covering essential content at grade level',
      gpaWeight: '+0.0',
      color: 'from-blue-400 to-blue-600',
      examples: ['English I', 'Algebra I', 'World Geography']
    },
    {
      type: 'Pre-AP/Honors',
      description: 'More rigorous courses that prepare you for AP classes',
      gpaWeight: '+0.5',
      color: 'from-green-400 to-green-600',
      examples: ['Pre-AP English', 'Pre-AP Biology', 'Honors Chemistry']
    },
    {
      type: 'AP (Advanced Placement)',
      description: 'College-level courses that can earn you college credit',
      gpaWeight: '+1.0',
      color: 'from-purple-400 to-purple-600',
      examples: ['AP Calculus', 'AP English Literature', 'AP U.S. History']
    },
    {
      type: 'Dual Credit',
      description: 'Courses that earn both high school and college credit',
      gpaWeight: '+1.0',
      color: 'from-orange-400 to-orange-600',
      examples: ['College Algebra', 'English Composition', 'Government']
    }
  ];

  const coreClasses = [
    {
      subject: 'English',
      required: '4 years',
      description: 'Reading, writing, speaking, and literature',
      icon: BookOpen,
      color: 'bg-red-100 text-red-700',
      courses: ['English I', 'English II', 'English III', 'English IV']
    },
    {
      subject: 'Math',
      required: '4 years',
      description: 'Algebra through advanced mathematics',
      icon: Calculator,
      color: 'bg-blue-100 text-blue-700',
      courses: ['Algebra I', 'Geometry', 'Algebra II', 'Pre-Calculus']
    },
    {
      subject: 'Science',
      required: '4 years',
      description: 'Biology, chemistry, physics, and more',
      icon: Zap,
      color: 'bg-green-100 text-green-700',
      courses: ['Biology', 'Chemistry', 'Physics', 'Environmental Science']
    },
    {
      subject: 'Social Studies',
      required: '3 years',
      description: 'History, geography, government, and economics',
      icon: GraduationCap,
      color: 'bg-purple-100 text-purple-700',
      courses: ['World Geography', 'World History', 'U.S. History', 'Government']
    }
  ];

  const electiveCategories = [
    {
      category: 'Fine Arts',
      description: 'Express your creativity',
      icon: Star,
      color: 'from-purple-500 to-violet-600',
      examples: ['Art', 'Music', 'Theatre', 'Dance', 'Photography']
    },
    {
      category: 'World Languages',
      description: 'Connect with other cultures',
      icon: Users,
      color: 'from-indigo-400 to-purple-500',
      examples: ['Spanish', 'French', 'German', 'Mandarin', 'ASL']
    },
    {
      category: 'CTE (Career & Technical)',
      description: 'Prepare for your future career',
      icon: Trophy,
      color: 'from-emerald-400 to-green-500',
      examples: ['Computer Science', 'Engineering', 'Health Sciences', 'Business']
    },
    {
      category: 'Physical Education',
      description: 'Stay healthy and active',
      icon: Lightbulb,
      color: 'from-orange-500 to-amber-600',
      examples: ['PE', 'Athletics', 'Health', 'Lifetime Sports']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Course Selection Guide
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about core classes, electives, and how to choose the right courses for your goals
          </p>
        </div>

        <Tabs defaultValue="core-classes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card border border-border p-2 shadow-lg">
            <TabsTrigger value="core-classes">Core Classes</TabsTrigger>
            <TabsTrigger value="electives">Electives</TabsTrigger>
            <TabsTrigger value="course-types">Course Types</TabsTrigger>
            <TabsTrigger value="selection-tips">Selection Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="core-classes" className="space-y-8">
            {/* What are Core Classes */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Core Classes?</h2>
              <p className="text-xl text-blue-100 mb-6">
                Core classes are the essential subjects every student must take to graduate. These build the 
                foundation for your education and prepare you for college and careers.
              </p>
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-blue-100">
                  <strong>Fun Fact:</strong> You'll need at least 22 credits to graduate, and most of these 
                  come from core classes!
                </p>
              </div>
            </div>

            {/* Core Subject Cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {coreClasses.map((subject, index) => {
                const Icon = subject.icon;
                return (
                  <div key={index} className="bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-8 border-l-blue-500">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${subject.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{subject.subject}</h3>
                        <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          {subject.required}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">{subject.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">Typical Course Sequence:</h4>
                      <div className="flex flex-wrap gap-2">
                        {subject.courses.map((course, idx) => (
                          <span key={idx} className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Credits Info */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">What are Credits?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">1 Credit =</h4>
                  <p className="text-green-100">One full year of a subject (like English I)</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">0.5 Credit =</h4>
                  <p className="text-green-100">One semester (like Health class)</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">To Graduate:</h4>
                  <p className="text-green-100">Need 22+ total credits</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="electives" className="space-y-8">
            {/* What are Electives */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Electives?</h2>
              <p className="text-xl text-pink-100 mb-6">
                Electives are courses you choose based on your interests and goals. They let you explore 
                your passions and discover new talents while meeting graduation requirements.
              </p>
              <div className="bg-white/20 rounded-2xl p-4">
                <p className="text-pink-100">
                  <strong>Pro Tip:</strong> Choose electives that align with your future college major or career goals!
                </p>
              </div>
            </div>

            {/* Elective Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {electiveCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="group cursor-pointer">
                    <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-xl`}>
                      <Icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{category.category}</h3>
                      <p className="text-white/80 mb-6">{category.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Popular Options:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.examples.map((example, idx) => (
                            <span key={idx} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="course-types" className="space-y-8">
            {/* GPA Explanation */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Understanding GPA & Course Types</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Weighted vs Unweighted GPA</h3>
                  <div className="space-y-2 text-indigo-100">
                    <p><strong>Unweighted:</strong> Standard 4.0 scale (A=4.0, B=3.0, etc.)</p>
                    <p><strong>Weighted:</strong> Adds extra points for advanced courses</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">Why It Matters:</h4>
                  <p className="text-indigo-100 text-sm">
                    Advanced courses show colleges you challenge yourself and can handle college-level work!
                  </p>
                </div>
              </div>
            </div>

            {/* Course Types Grid */}
            <div className="grid gap-6">
              {courseTypes.map((course, index) => (
                <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  <div className={`bg-gradient-to-r ${course.color} p-6 text-white`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold">{course.type}</h3>
                      <Badge className="bg-white/20 text-white text-lg px-4 py-2">
                        GPA {course.gpaWeight}
                      </Badge>
                    </div>
                    <p className="text-white/90 mt-2 text-lg">{course.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">Example Courses:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.examples.map((example, idx) => (
                        <span key={idx} className="bg-gray-100 px-3 py-2 rounded-full text-sm text-gray-700">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* AP vs IB */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-400 to-pink-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">AP (Advanced Placement)</h3>
                <ul className="space-y-2 text-red-100">
                  <li>• College-level courses with exams in May</li>
                  <li>• Score 3+ can earn college credit</li>
                  <li>• Available in many subjects</li>
                  <li>• Most common in Texas schools</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">IB (International Baccalaureate)</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• Comprehensive international program</li>
                  <li>• Two-year curriculum (grades 11-12)</li>
                  <li>• Less common in Texas</li>
                  <li>• Very rigorous and holistic</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="selection-tips" className="space-y-8">
            {/* Main Tips */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">How to Choose Your Classes</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-6">
                  <Lightbulb className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Follow Your Interests</h3>
                  <p className="text-emerald-100">Choose courses that excite you and align with your career goals</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-6">
                  <Trophy className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Challenge Yourself</h3>
                  <p className="text-emerald-100">Take advanced courses in subjects where you excel</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-6">
                  <Users className="h-10 w-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Get Advice</h3>
                  <p className="text-emerald-100">Talk to counselors, teachers, and older students</p>
                </div>
              </div>
            </div>

            {/* Different Programs */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-purple-600">ACC (Austin Community College)</h3>
                <p className="text-gray-600 mb-4">Take college courses while in high school</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Earn college credit</li>
                  <li>• Often free for high school students</li>
                  <li>• Great for getting ahead</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Dual Enrollment</h3>
                <p className="text-gray-600 mb-4">High school AND college credit simultaneously</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Best of both worlds</li>
                  <li>• Faster path to college degree</li>
                  <li>• Save money on college tuition</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-orange-600">OnRamps</h3>
                <p className="text-gray-600 mb-4">UT Austin's dual enrollment program</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• University of Texas credit</li>
                  <li>• Taught by certified teachers</li>
                  <li>• Rigorous college preparation</li>
                </ul>
              </div>
            </div>

            {/* Final Advice */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Remember: It's Your Journey!</h3>
              <p className="text-xl text-yellow-100 mb-6">
                Don't feel pressured to take the hardest courses if you're not ready. 
                It's better to do well in courses that match your current level than to struggle in classes that are too advanced.
              </p>
              <div className="inline-flex items-center bg-white/20 px-6 py-3 rounded-full">
                <span className="font-medium">Talk to your counselor for personalized advice!</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { BookOpen, GraduationCap, Target, Search, Star, Award, Globe } from 'lucide-react';

const coreSubjects = [
  {
    subject: 'English Language Arts',
    icon: BookOpen,
    credits: 4,
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
    courses: ['English I', 'English II', 'English III', 'English IV'],
    description: 'Essential for communication, critical thinking, and college readiness. Covers reading, writing, speaking, and listening skills.'
  },
  {
    subject: 'Mathematics',
    icon: Target,
    credits: 4,
    color: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
    courses: ['Algebra I', 'Geometry', 'Algebra II', 'Pre-Calculus or Statistics'],
    description: 'Builds logical reasoning and problem-solving skills needed for many careers and college programs.'
  },
  {
    subject: 'Science',
    icon: Star,
    credits: 4,
    color: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    courses: ['Biology', 'Chemistry', 'Physics', 'Environmental Science or IPC'],
    description: 'Develops scientific literacy and understanding of the natural world through hands-on experimentation.'
  },
  {
    subject: 'Social Studies',
    icon: Globe,
    credits: 3,
    color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    courses: ['World Geography', 'World History', 'U.S. History', 'Government/Economics'],
    description: 'Builds understanding of cultures, history, government, and your role as a citizen.'
  }
];

const electiveCategories = [
  {
    category: 'Fine Arts',
    description: 'Express your creativity and develop artistic skills',
    icon: Star,
    color: 'from-blue-500 to-blue-600',
    examples: ['Art', 'Music', 'Theatre', 'Dance', 'Photography', 'Digital Media'],
    why: 'Fine arts develop creativity, self-expression, and cultural awareness. They also show colleges you\'re well-rounded.'
  },
  {
    category: 'World Languages',
    description: 'Connect with other cultures and boost college applications',
    icon: Globe,
    color: 'from-green-500 to-green-600',
    examples: ['Spanish', 'French', 'German', 'Chinese', 'ASL (American Sign Language)'],
    why: 'Learning a second language improves cognitive function and is highly valued by colleges and employers.'
  },
  {
    category: 'Career & Technical Education (CTE)',
    description: 'Gain real-world skills for immediate career readiness',
    icon: Award,
    color: 'from-red-500 to-red-600',
    examples: ['Computer Science', 'Engineering', 'Health Science', 'Business', 'Agriculture', 'Culinary Arts'],
    why: 'CTE courses provide practical skills and certifications that can lead directly to careers or enhance college applications.'
  },
  {
    category: 'Physical Education & Health',
    description: 'Maintain physical fitness and learn healthy habits',
    icon: Target,
    color: 'from-yellow-500 to-yellow-600',
    examples: ['PE', 'Health', 'Athletics', 'Dance', 'Individual Sports'],
    why: 'PE promotes physical fitness, teamwork, and stress management - important for overall well-being.'
  },
];

const courseTypes = [
  {
    type: 'Regular Courses',
    gpaScale: '5.0',
    difficulty: 'Standard',
    description: 'Standard high school courses that cover essential curriculum at grade level.',
    details: [
      'Cover fundamental concepts and skills',
      'Taught at grade-appropriate pace',
      'Good foundation for college prep',
      'Extra 1.0 GPA point when calculating weighted GPA'
    ],
    examples: ['English I', 'Algebra I', 'Biology', 'World History']
  },
  {
    type: 'Honors/Pre-AP',
    gpaScale: '6.0',
    difficulty: 'Accelerated',
    description: 'More rigorous courses that move faster and go deeper into subject matter.',
    details: [
      'Faster pace and increased depth',
      'Prepares for AP courses',
      'Extra 2.0 GPA points when calculating weighted GPA',
      'Shows academic rigor to colleges'
    ],
    examples: ['Pre-AP English', 'Honors Chemistry', 'Pre-AP World History']
  },
  {
    type: 'AP (Advanced Placement)',
    gpaScale: '6.0',
    difficulty: 'College Level',
    description: 'College-level courses that can earn college credit with a qualifying exam score.',
    details: [
      'College-level curriculum and expectations',
      'AP exam in May (scored 1-5)',
      'Score of 3+ may earn college credit',
      'Extra 2.0 GPA points for weighted GPA',
      'Highly valued by college admissions'
    ],
    examples: ['AP English Literature', 'AP Calculus', 'AP Biology', 'AP U.S. History']
  },
  {
    type: 'IB (International Baccalaureate)',
    gpaScale: '6.0',
    difficulty: 'College Level',
    description: 'Internationally recognized program focusing on critical thinking and global perspective.',
    details: [
      'Comprehensive two-year program',
      'Emphasis on international mindedness',
      'Extended essay and community service required',
      'Recognized worldwide by universities',
      'Extra 2.0 GPA points for weighted GPA'
    ],
    examples: ['IB English HL', 'IB Mathematics', 'IB Chemistry', 'IB History']
  }
];

const dualEnrollmentOptions = [
  {
    name: 'Dual Credit/Dual Enrollment',
    description: 'Take actual college courses while in high school, earning both high school and college credit.',
    benefits: [
      'Earn college credit that transfers to most universities',
      'Experience college-level coursework',
      'Often less expensive than taking courses after graduation',
      'Can accelerate college degree completion'
    ],
    howItWorks: 'Students take courses at local community colleges or universities, either on campus or sometimes at their high school.'
  },
  {
    name: 'OnRamps',
    description: 'University of Texas program offering college courses taught at your high school by specially trained teachers.',
    benefits: [
      'College credit from University of Texas',
      'Familiar high school environment',
      'Support from high school teachers',
      'Preparation for college-level work'
    ],
    howItWorks: 'Your high school teacher becomes certified to teach a UT course. You earn both high school and UT college credit.'
  },
  {
    name: 'Concurrent Enrollment',
    description: 'Similar to dual enrollment but specifically refers to high school students taking college courses.',
    benefits: [
      'Early college experience',
      'Potential cost savings',
      'Academic challenge and growth',
      'Head start on college degree'
    ],
    howItWorks: 'Students enroll in college courses alongside regular college students, usually at a local community college.'
  }
];

export function CourseSelection() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Course Selection Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Understanding how to choose the right courses is crucial for your success in high school and beyond. 
            Learn about core classes, electives, and how different course types can impact your future.
          </p>
        </div>

        <Tabs defaultValue="core-classes" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-card border border-border p-2 shadow-lg relative z-10">
            <TabsTrigger value="core-classes">Core Classes</TabsTrigger>
            <TabsTrigger value="electives">Electives</TabsTrigger>
            <TabsTrigger value="course-types">Course Types</TabsTrigger>
            <TabsTrigger value="gpa-info">Understanding GPA</TabsTrigger>
            <TabsTrigger value="selection-tips">Selection Tips</TabsTrigger>
          </TabsList>

          {/* Core Classes Tab */}
          <TabsContent value="core-classes" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Core Classes?</h2>
              <p className="text-xl leading-relaxed">
                Core classes are the fundamental subjects that all students must take to graduate. 
                These courses provide the essential knowledge and skills needed for college and career success. 
                In Texas, you need specific credits in each core subject area to earn your diploma.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreSubjects.map((subject, index) => {
                const Icon = subject.icon;
                return (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 ${subject.color} flex items-center justify-center mr-3`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-card-foreground">{subject.subject}</h3>
                        <Badge variant="outline">{subject.credits} Credits Required</Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{subject.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-medium text-card-foreground">Required Courses:</h4>
                      {subject.courses.map((course, courseIndex) => (
                        <div key={courseIndex} className="text-sm text-muted-foreground">• {course}</div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">💡 Important for New Students:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Core classes form the foundation of your education and are required for graduation. 
                You'll typically take these courses in a specific sequence over four years. 
                Most colleges expect you to have completed all core requirements and may require additional years beyond the minimum. 
                For example, many universities prefer 4 years of the same world language or additional math/science courses.
              </p>
            </div>
          </TabsContent>

          {/* Electives Tab */}
          <TabsContent value="electives" className="space-y-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Electives?</h2>
              <p className="text-xl leading-relaxed">
                Electives are courses you choose based on your interests, career goals, and college plans. 
                While core classes are required, electives allow you to explore passions, develop new skills, 
                and show colleges what makes you unique. You'll need several elective credits to graduate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {electiveCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${category.color} text-white flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Popular Options:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="outline" className="text-xs">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-muted/50 p-4 border-l-4 border-l-green-500">
                      <h4 className="font-medium text-card-foreground mb-2">Why Choose This?</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{category.why}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">🎯 Choosing Your Electives Strategically:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">For College-Bound Students:</h4>
                  <ul className="space-y-1">
                    <li>• Take 2-4 years of the same world language</li>
                    <li>• Consider AP courses in subjects you enjoy</li>
                    <li>• Add fine arts for well-rounded application</li>
                    <li>• Include courses related to intended major</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">For Career-Ready Students:</h4>
                  <ul className="space-y-1">
                    <li>• Focus on CTE pathways in your field of interest</li>
                    <li>• Earn industry certifications when possible</li>
                    <li>• Take courses that build practical skills</li>
                    <li>• Consider dual credit for cost savings</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Course Types Tab */}
          <TabsContent value="course-types" className="space-y-8">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Different Types of Classes</h2>
              <p className="text-xl leading-relaxed">
                Understanding the differences between course types is crucial for making informed decisions. 
                Each type offers different challenges, benefits, and impacts on your GPA and college applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {courseTypes.map((courseType, index) => (
                <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-card-foreground">{courseType.type}</h3>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">GPA Scale</div>
                      <div className="text-lg font-bold text-blue-600">{courseType.gpaScale}</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge className={
                      courseType.difficulty === 'Standard' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      courseType.difficulty === 'Accelerated' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }>
                      {courseType.difficulty}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{courseType.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-card-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {courseType.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>• {detail}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Examples:</h4>
                    <div className="flex flex-wrap gap-2">
                      {courseType.examples.map((example, exampleIndex) => (
                        <Badge key={exampleIndex} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dual Enrollment Section */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-foreground">College Credit While in High School</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {dualEnrollmentOptions.map((option, index) => (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <h3 className="text-xl font-bold mb-3 text-card-foreground">{option.name}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{option.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {option.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 dark:bg-blue-950 p-3 border-l-4 border-l-blue-500">
                      <h4 className="font-medium text-card-foreground mb-1">How it works:</h4>
                      <p className="text-sm text-muted-foreground">{option.howItWorks}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">⚠️ Important Note About Grading Scales:</h3>
              <p className="text-muted-foreground leading-relaxed">
                The GPA scales mentioned above are typical for most high schools, but you should always check with your specific school for their grading policies. 
                Different schools and districts may have different grading scales and weighting systems. Some schools may use different point values or have additional course categories. 
                Always consult your school counselor or student handbook for your school's specific GPA calculation methods.
              </p>
            </div>
          </TabsContent>

          {/* GPA Info Tab */}
          <TabsContent value="gpa-info" className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Understanding GPA</h2>
              <p className="text-xl leading-relaxed">
                GPA (Grade Point Average) is one of the most important numbers in your academic career. 
                Understanding how it's calculated and what the different types mean is crucial for your success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">Unweighted GPA</h3>
                <div className="text-4xl font-bold mb-4 text-blue-600">4.0 Scale</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Your unweighted GPA treats all courses equally, regardless of difficulty. 
                  An A in regular English counts the same as an A in AP English.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>A (90-100)</span>
                    <span className="font-medium">4.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>B (80-89)</span>
                    <span className="font-medium">3.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>C (70-79)</span>
                    <span className="font-medium">2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>D (60-69)</span>
                    <span className="font-medium">1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>F (Below 60)</span>
                    <span className="font-medium">0.0</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-600">Weighted GPA</h3>
                <div className="text-4xl font-bold mb-4 text-green-600">5.0-6.0 Scale</div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Your weighted GPA gives extra points for challenging courses, 
                  rewarding you for taking harder classes and better reflecting academic rigor.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500">
                    <div className="font-medium">Regular Courses</div>
                    <div className="text-sm text-muted-foreground">Max: 5.0 (+1.0 bonus)</div>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500">
                    <div className="font-medium">Honors/Pre-AP</div>
                    <div className="text-sm text-muted-foreground">Max: 6.0 (+2.0 bonus)</div>
                  </div>
                  <div className="p-3 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500">
                    <div className="font-medium">AP/IB/Dual Credit</div>
                    <div className="text-sm text-muted-foreground">Max: 6.0 (+2.0 bonus)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">Which GPA Do Colleges Use?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Most colleges recalculate your GPA using their own system. They typically look at:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Core academic courses only</strong> (no PE, health, etc.)</li>
                  <li>• <strong>Unweighted GPA</strong> for standardized comparison</li>
                  <li>• <strong>Course rigor</strong> (how many challenging courses you took)</li>
                  <li>• <strong>Grade trends</strong> (improvement over time)</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">Class Rank in Texas</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Texas uses weighted GPA for class rank, which affects college admissions:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• <strong>Top 6%</strong> guaranteed admission to UT Austin</li>
                  <li>• <strong>Top 10%</strong> guaranteed admission to most Texas public universities</li>
                  <li>• <strong>Top 25%</strong> automatic academic scholarships at many schools</li>
                  <li>• <strong>Higher rank</strong> = better scholarship opportunities</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Selection Tips Tab */}
          <TabsContent value="selection-tips" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">How to Choose Your Classes</h2>
              <p className="text-xl leading-relaxed">
                Making smart course choices requires balancing your interests, abilities, future goals, 
                and graduation requirements. Here's how to create a strategic four-year plan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-card border border-border p-6">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Start with Requirements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Meet minimum graduation requirements</li>
                  <li>• Consider college entrance requirements</li>
                  <li>• Plan for STAAR testing schedule</li>
                  <li>• Balance core subjects each year</li>
                </ul>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center mb-4">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Consider Your Goals</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• College-bound: focus on rigor and prerequisites</li>
                  <li>• Career-ready: emphasize CTE pathways</li>
                  <li>• Military: maintain good GPA and fitness</li>
                  <li>• Gap year: keep options open</li>
                </ul>
              </div>

              <div className="bg-card border border-border p-6">
                <div className="w-12 h-12 bg-red-600 text-white flex items-center justify-center mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-card-foreground">Balance Challenge & Success</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't overload with too many hard classes</li>
                  <li>• Take challenging courses in your strengths</li>
                  <li>• Include courses you genuinely enjoy</li>
                  <li>• Leave time for extracurriculars</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500 p-6">
              <h3 className="font-bold text-xl mb-4 text-card-foreground">💡 Four-Year Planning Strategy</h3>
              <div className="grid md:grid-cols-4 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">9th Grade (Freshman)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Focus on strong foundation</li>
                    <li>• Take English I, Algebra I</li>
                    <li>• Explore different electives</li>
                    <li>• Get used to high school pace</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">10th Grade (Sophomore)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Consider first Pre-AP courses</li>
                    <li>• Continue core progression</li>
                    <li>• Start thinking about interests</li>
                    <li>• Maintain good study habits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">11th Grade (Junior)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Take most challenging courses</li>
                    <li>• First AP classes</li>
                    <li>• Focus on college prep</li>
                    <li>• Plan for standardized tests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">12th Grade (Senior)</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Complete graduation requirements</li>
                    <li>• Continue rigor for colleges</li>
                    <li>• Take courses for your intended major</li>
                    <li>• Enjoy some interesting electives</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-l-red-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">⚠️ Common Mistakes to Avoid</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <ul className="space-y-2">
                  <li>• <strong>Overloading with too many AP courses</strong> - Quality over quantity</li>
                  <li>• <strong>Ignoring prerequisites</strong> - Plan ahead for advanced courses</li>
                  <li>• <strong>Not considering teacher recommendations</strong> - They know what you can handle</li>
                  <li>• <strong>Choosing courses just for friends</strong> - Focus on your goals</li>
                </ul>
                <ul className="space-y-2">
                  <li>• <strong>Avoiding all challenging courses</strong> - Colleges want to see rigor</li>
                  <li>• <strong>Not checking graduation requirements</strong> - You might miss something important</li>
                  <li>• <strong>Ignoring your interests</strong> - Passion leads to better performance</li>
                  <li>• <strong>Not asking for help</strong> - Counselors are there to guide you</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
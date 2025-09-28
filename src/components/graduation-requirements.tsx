import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { CheckCircle, Circle, GraduationCap, FileText, Award, AlertTriangle, BookOpen } from 'lucide-react';

const creditRequirements = [
  {
    subject: 'English Language Arts',
    required: 4,
    description: 'Reading, writing, speaking, and listening skills',
    courses: ['English I', 'English II', 'English III', 'English IV'],
    color: 'bg-blue-500'
  },
  {
    subject: 'Mathematics',
    required: 4,
    description: 'Including Algebra II or its equivalent',
    courses: ['Algebra I', 'Geometry', 'Algebra II', 'Advanced Math (Pre-Cal, Statistics, etc.)'],
    color: 'bg-green-500'
  },
  {
    subject: 'Science',
    required: 4,
    description: 'Including Biology, Chemistry, and Physics',
    courses: ['Biology', 'Chemistry', 'Physics', 'Advanced Study in Biology, Chemistry, Physics, or other physical science, astronomy, or earth and space science'],
    color: 'bg-red-500'
  },
  {
    subject: 'Social Studies',
    required: 3,
    description: 'World Geography, World History, U.S. History, Government, Economics',
    courses: ['World Geography or World History', 'World History Studies', 'United States History Studies', 'Government (0.5) + Economics (0.5)'],
    color: 'bg-yellow-500'
  },
  {
    subject: 'Languages Other Than English',
    required: 2,
    description: 'Two credits in the same language',
    courses: ['Any world language (Spanish, French, German, etc.) or American Sign Language'],
    color: 'bg-purple-500'
  },
  {
    subject: 'Fine Arts',
    required: 1,
    description: 'Art, music, dance, theatre, or other creative expression',
    courses: ['Art', 'Music', 'Theatre Arts', 'Dance', 'Photography', 'Digital Media'],
    color: 'bg-indigo-500'
  },
  {
    subject: 'Physical Education',
    required: 1,
    description: 'PE or Athletics (exemptions available)',
    courses: ['Physical Education', 'Athletics', 'Marching Band (may substitute)', 'Drill Team (may substitute)'],
    color: 'bg-orange-500'
  },
  {
    subject: 'Electives',
    required: 3,
    description: 'Additional courses to reach 22 total credits',
    courses: ['Any approved high school courses', 'CTE courses', 'Additional core academic courses', 'Fine Arts', 'Languages Other Than English'],
    color: 'bg-blue-300'
  }
];

const staarTests = [
  {
    test: 'English I',
    subject: 'English Language Arts',
    required: true,
    description: 'Tests reading comprehension and written expression skills',
    whenTaken: 'Usually taken in 9th grade after completing English I course',
    passingScore: 'Approaches Grade Level or higher',
    retakes: 'Up to 5 retakes available if needed'
  },
  {
    test: 'English II',
    subject: 'English Language Arts',
    required: true,
    description: 'Advanced reading, writing, and language skills assessment',
    whenTaken: 'Usually taken in 10th grade after completing English II course',
    passingScore: 'Approaches Grade Level or higher',
    retakes: 'Up to 5 retakes available if needed'
  },
  {
    test: 'Algebra I',
    subject: 'Mathematics',
    required: true,
    description: 'Tests algebraic concepts, equations, and problem-solving',
    whenTaken: 'Taken when you complete Algebra I (could be 8th, 9th, or 10th grade)',
    passingScore: 'Approaches Grade Level or higher',
    retakes: 'Up to 5 retakes available if needed'
  },
  {
    test: 'Biology',
    subject: 'Science',
    required: true,
    description: 'Tests understanding of biological concepts and scientific inquiry',
    whenTaken: 'Usually taken in 9th or 10th grade after completing Biology course',
    passingScore: 'Approaches Grade Level or higher',
    retakes: 'Up to 5 retakes available if needed'
  },
  {
    test: 'U.S. History',
    subject: 'Social Studies',
    required: true,
    description: 'Tests knowledge of American history and historical thinking skills',
    whenTaken: 'Usually taken in 11th grade after completing U.S. History course',
    passingScore: 'Approaches Grade Level or higher',
    retakes: 'Up to 5 retakes available if needed'
  }
];

const graduationPrograms = [
  {
    name: 'Foundation High School Program',
    description: 'The basic graduation plan for all Texas students',
    requirements: '22 credits minimum',
    details: [
      'Minimum requirements for graduation',
      'Includes basic core subjects',
      'Prepares students for entry-level college courses or workforce',
      'May require additional preparation for competitive colleges'
    ],
    recommended: 'Students planning to enter workforce immediately or community college'
  },
  {
    name: 'Foundation + Endorsement',
    description: 'Foundation program plus specialized area of study',
    requirements: '26 credits minimum',
    details: [
      'All Foundation requirements PLUS',
      'Specialized endorsement area (STEM, Business, Arts, etc.)',
      'More rigorous preparation',
      'Better preparation for 4-year universities'
    ],
    recommended: 'Students planning to attend 4-year universities'
  },
  {
    name: 'Distinguished Level of Achievement',
    description: 'Highest level of graduation recognition',
    requirements: '26 credits + Algebra II + additional requirements',
    details: [
      'Foundation + Endorsement requirements',
      'Must include Algebra II or higher math',
      'Often includes AP, IB, or dual credit courses',
      'Highest level of academic recognition'
    ],
    recommended: 'Students planning competitive college admissions'
  }
];

const endorsementAreas = [
  {
    name: 'STEM',
    description: 'Science, Technology, Engineering, and Mathematics',
    requirements: 'Additional math, science, computer science, or engineering courses',
    careers: ['Engineer', 'Doctor', 'Scientist', 'Computer Programmer', 'Architect'],
    courses: ['Pre-Calculus', 'Physics', 'Chemistry', 'Computer Science', 'Engineering Design']
  },
  {
    name: 'Business and Industry',
    description: 'Preparation for business and industrial careers',
    requirements: 'CTE courses in business, finance, marketing, or manufacturing',
    careers: ['Business Manager', 'Entrepreneur', 'Accountant', 'Marketing Specialist', 'Manufacturer'],
    courses: ['Business Management', 'Accounting', 'Marketing', 'Economics', 'Manufacturing']
  },
  {
    name: 'Public Services',
    description: 'Careers in government, education, and community service',
    requirements: 'Courses in education, government, law enforcement, or social services',
    careers: ['Teacher', 'Police Officer', 'Social Worker', 'Government Official', 'Counselor'],
    courses: ['Education Training', 'Government', 'Psychology', 'Law Enforcement', 'Public Speaking']
  },
  {
    name: 'Arts and Humanities',
    description: 'Creative and cultural studies',
    requirements: 'Additional fine arts, languages, or humanities courses',
    careers: ['Artist', 'Musician', 'Writer', 'Translator', 'Museum Curator'],
    courses: ['Advanced Art', 'Music Theory', 'Creative Writing', 'Advanced Language', 'Theatre Arts']
  },
  {
    name: 'Multidisciplinary Studies',
    description: 'Combination of multiple endorsement areas',
    requirements: 'Courses from at least two endorsement areas',
    careers: ['Varies based on course selection', 'Flexibility for undecided students'],
    courses: ['Mix of courses from different endorsement areas']
  }
];

export function GraduationRequirements() {
  const [completedCredits, setCompletedCredits] = useState({
    'English Language Arts': 2,
    'Mathematics': 2,
    'Science': 1,
    'Social Studies': 1,
    'Languages Other Than English': 0,
    'Fine Arts': 0,
    'Physical Education': 0,
    'Electives': 1
  });

  const [completedTests, setCompletedTests] = useState({
    'English I': false,
    'English II': false,
    'Algebra I': true,
    'Biology': false,
    'U.S. History': false
  });

  const toggleTest = (testName: string) => {
    setCompletedTests(prev => ({
      ...prev,
      [testName]: !prev[testName]
    }));
  };

  const totalCreditsCompleted = Object.values(completedCredits).reduce((sum, credits) => sum + credits, 0);
  const totalCreditsRequired = 22; // Foundation program minimum

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Graduation Requirements
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Stay on track for graduation by understanding credit requirements, STAAR testing, 
            and graduation program options. Success requires careful planning and consistent effort.
          </p>
        </div>

        <Tabs defaultValue="credits" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card border border-border p-2 shadow-lg">
            <TabsTrigger value="credits">Credit Requirements</TabsTrigger>
            <TabsTrigger value="staar">STAAR Tests</TabsTrigger>
            <TabsTrigger value="programs">Graduation Programs</TabsTrigger>
            <TabsTrigger value="tracking">Track Progress</TabsTrigger>
          </TabsList>

          {/* Credit Requirements Tab */}
          <TabsContent value="credits" className="space-y-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Total Credits Required</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">22</div>
                  <div className="text-green-100">Foundation Program</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">26</div>
                  <div className="text-green-100">Foundation + Endorsement</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">26+</div>
                  <div className="text-green-100">Distinguished Achievement</div>
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {creditRequirements.map((subject, index) => (
                <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-4 h-4 ${subject.color} mr-3`}></div>
                      <h3 className="text-xl font-bold text-card-foreground">{subject.subject}</h3>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      {subject.required} Credit{subject.required !== 1 ? 's' : ''}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{subject.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Typical Course Sequence:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {subject.courses.map((course, courseIndex) => (
                        <li key={courseIndex}>• {course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">💡 Important Notes for New Students:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Credit Basics:</h4>
                  <ul className="space-y-1">
                    <li>• 1 credit = 1 full year course (2 semesters)</li>
                    <li>• 0.5 credit = 1 semester course</li>
                    <li>• You typically take 6-8 courses per year</li>
                    <li>• Most students graduate with 24-28 credits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Planning Tips:</h4>
                  <ul className="space-y-1">
                    <li>• Start strong - early grades matter for GPA</li>
                    <li>• Take required courses in proper sequence</li>
                    <li>• Don't wait until senior year for requirements</li>
                    <li>• Consider summer school for flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* STAAR Tests Tab */}
          <TabsContent value="staar" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">STAAR Tests Required for Graduation</h2>
              <p className="text-xl leading-relaxed">
                You must pass 5 STAAR (State of Texas Assessments of Academic Readiness) tests to graduate. 
                These tests ensure you've mastered essential knowledge and skills in core subjects.
              </p>
            </div>

            <div className="grid gap-6">
              {staarTests.map((test, index) => (
                <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground">STAAR {test.test}</h3>
                        <Badge variant="outline">{test.subject}</Badge>
                      </div>
                    </div>
                    <Badge className={test.required ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'}>
                      {test.required ? 'Required' : 'Optional'}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{test.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">When Taken:</h4>
                      <p className="text-muted-foreground">{test.whenTaken}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Passing Score:</h4>
                      <p className="text-muted-foreground">{test.passingScore}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-medium text-card-foreground mb-1">Retake Policy:</h4>
                      <p className="text-muted-foreground">{test.retakes}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">📅 STAAR Testing Schedule</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <strong className="text-card-foreground">Spring (April-May):</strong> Primary testing window for all STAAR tests
                  </div>
                  <div>
                    <strong className="text-card-foreground">Summer (June-July):</strong> Retake opportunities for students who didn't pass
                  </div>
                  <div>
                    <strong className="text-card-foreground">Fall (October-November):</strong> Additional retake opportunities
                  </div>
                  <div>
                    <strong className="text-card-foreground">December:</strong> Final retake opportunity for seniors
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">💡 STAAR Success Tips</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Study throughout the year, not just before the test</li>
                  <li>• Take practice tests to familiarize yourself with format</li>
                  <li>• Use released test questions from TEA website</li>
                  <li>• Attend tutoring sessions if offered by your school</li>
                  <li>• Get plenty of sleep and eat well during testing week</li>
                  <li>• Don't panic if you don't pass the first time - retakes are available</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          {/* Graduation Programs Tab */}
          <TabsContent value="programs" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">High School Graduation Programs</h2>
              <p className="text-xl leading-relaxed">
                Texas offers different graduation programs to meet various student goals. 
                Choose the program that best prepares you for your post-graduation plans.
              </p>
            </div>

            <div className="grid gap-8">
              {graduationPrograms.map((program, index) => (
                <div key={index} className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mr-4">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{program.name}</h3>
                      <p className="text-muted-foreground">{program.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Requirements:</h4>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {program.requirements}
                      </Badge>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-medium text-card-foreground mb-2">Program Details:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500">
                    <h4 className="font-medium text-card-foreground mb-1">Recommended For:</h4>
                    <p className="text-sm text-muted-foreground">{program.recommended}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Endorsement Areas */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-foreground">Endorsement Areas</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                Endorsements allow you to focus on an area of interest while earning additional recognition. 
                Available with Foundation + Endorsement and Distinguished Achievement programs.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {endorsementAreas.map((area, index) => (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-3">
                        <Award className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-card-foreground">{area.name}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{area.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Requirements:</h4>
                      <p className="text-sm text-muted-foreground">{area.requirements}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Example Courses:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.courses.map((course, courseIndex) => (
                          <Badge key={courseIndex} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Career Paths:</h4>
                      <div className="flex flex-wrap gap-1">
                        {area.careers.map((career, careerIndex) => (
                          <span key={careerIndex} className="text-xs text-muted-foreground">
                            {career}{careerIndex < area.careers.length - 1 ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Academies */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-foreground">Campus Academies</h2>
              <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                Many high schools offer specialized academies that provide focused, career-oriented education within specific fields. 
                These academies combine rigorous academics with hands-on, real-world experiences.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">STEM Academy</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Science, Technology, Engineering, and Mathematics focused education with advanced coursework and research opportunities.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Advanced math and science courses</div>
                    <div>• Engineering design and robotics</div>
                    <div>• Research projects and competitions</div>
                    <div>• Industry partnerships and internships</div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">Health Science Academy</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Prepare for careers in healthcare through specialized courses, clinical experiences, and medical certifications.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Medical terminology and anatomy</div>
                    <div>• Clinical skills and patient care</div>
                    <div>• Healthcare certifications (CNA, EKG, etc.)</div>
                    <div>• Hospital and clinic rotations</div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">Visual & Performing Arts</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Develop artistic talents through intensive study in visual arts, music, theatre, dance, and digital media.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Advanced art and design courses</div>
                    <div>• Music performance and theory</div>
                    <div>• Theatre production and acting</div>
                    <div>• Digital media and film</div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">Business & Industry</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Learn entrepreneurship, business management, finance, and marketing through real-world business experiences.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Business management and marketing</div>
                    <div>• Accounting and finance</div>
                    <div>• Entrepreneurship projects</div>
                    <div>• Industry internships</div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold text-card-foreground">Public Services</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    Prepare for careers in education, government, law enforcement, and community service through specialized training.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Education and training courses</div>
                    <div>• Government and civics</div>
                    <div>• Law enforcement and criminal justice</div>
                    <div>• Community service projects</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">🔗 Learn More About Academies:</h3>
                <p className="text-muted-foreground mb-3 leading-relaxed">
                  For detailed information about academy programs, application processes, and specific course offerings, 
                  visit your school district's academy information page:
                </p>
                <a 
                  href="https://www.roundrockisd.org/page/campus-academies" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  Round Rock ISD Campus Academies →
                </a>
              </div>
            </div>

            {/* Endorsements vs Stoles */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-foreground">Endorsements vs. Graduation Stoles</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">Endorsements</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong>Official state recognition</strong> that appears on your transcript and diploma. 
                    Endorsements require specific coursework and demonstrate mastery in a particular area.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div><strong>Requirements:</strong> Complete 4+ credits in endorsement area</div>
                    <div><strong>Recognition:</strong> Appears on official transcript</div>
                    <div><strong>Value:</strong> Shows colleges your academic focus</div>
                    <div><strong>Examples:</strong> STEM, Arts & Humanities, Business & Industry</div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center mr-3">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground">Graduation Stoles</h3>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    <strong>Ceremonial recognition</strong> worn at graduation to honor achievements, 
                    participation, or membership in specific programs or organizations.
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div><strong>Requirements:</strong> Varies by organization or achievement</div>
                    <div><strong>Recognition:</strong> Visual honor at graduation ceremony</div>
                    <div><strong>Value:</strong> Celebrates participation and achievement</div>
                    <div><strong>Examples:</strong> Honor Society, Academy programs, Clubs</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500 p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">💡 Key Difference:</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Endorsements</strong> are academic achievements that enhance your transcript and college applications, 
                  while <strong>graduation stoles</strong> are ceremonial honors that recognize participation and accomplishments. 
                  You can earn both endorsements and stoles - they serve different but complementary purposes in recognizing your high school achievements.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Track Progress Tab */}
          <TabsContent value="tracking" className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Track Your Progress</h2>
              <p className="text-xl leading-relaxed">
                Stay on top of your graduation requirements by tracking your completed credits and STAAR tests. 
                Regular monitoring helps ensure you're on track to graduate on time.
              </p>
            </div>

            {/* Overall Progress */}
            <div className="bg-card border border-border p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-card-foreground">Overall Progress</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600">{totalCreditsCompleted}</div>
                  <div className="text-sm text-muted-foreground">of {totalCreditsRequired} credits</div>
                </div>
              </div>
              
              <Progress value={(totalCreditsCompleted / totalCreditsRequired) * 100} className="h-4 mb-4" />
              
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Credits Completed: {totalCreditsCompleted}</span>
                <span>Remaining: {Math.max(0, totalCreditsRequired - totalCreditsCompleted)}</span>
              </div>
            </div>

            {/* Credit Progress */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">Credit Requirements Progress</h3>
              <div className="space-y-4">
                {creditRequirements.map((subject, index) => {
                  const completed = completedCredits[subject.subject as keyof typeof completedCredits] || 0;
                  const progress = Math.min((completed / subject.required) * 100, 100);
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-card-foreground">{subject.subject}</span>
                        <span className="text-sm text-muted-foreground">
                          {completed} / {subject.required} credits
                        </span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STAAR Progress */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-xl font-bold mb-6 text-card-foreground">STAAR Tests Progress</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {staarTests.map((test, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 border border-border">
                    <div className="flex items-center">
                      <button
                        onClick={() => toggleTest(test.test)}
                        className="mr-3"
                      >
                        {completedTests[test.test as keyof typeof completedTests] ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                      </button>
                      <div>
                        <div className="font-medium text-card-foreground">STAAR {test.test}</div>
                        <div className="text-sm text-muted-foreground">{test.subject}</div>
                      </div>
                    </div>
                    <Badge className={
                      completedTests[test.test as keyof typeof completedTests] 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                    }>
                      {completedTests[test.test as keyof typeof completedTests] ? 'Passed' : 'Pending'}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="font-medium text-card-foreground">
                    Remember: Maintain a GPA of 2.0 or higher throughout high school
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  A 2.0 GPA is the minimum to stay enrolled and graduate. However, aim higher for better college 
                  and scholarship opportunities. Most universities prefer a 3.0+ GPA for admission.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
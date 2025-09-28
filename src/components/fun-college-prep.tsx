import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Users, Heart, Briefcase, FileText, Award, BookOpen, ExternalLink, Star, Target, Trophy, Lightbulb } from 'lucide-react';

export function FunCollegePrep() {
  const clubCategories = [
    {
      category: 'Academic Clubs',
      icon: BookOpen,
      color: 'from-blue-400 to-cyan-500',
      examples: ['National Honor Society', 'Debate Team', 'Math Club', 'Science Olympiad'],
      major: 'Great for STEM, Liberal Arts, and Pre-Law majors'
    },
    {
      category: 'Leadership & Service',
      icon: Users,
      color: 'from-green-400 to-emerald-500',
      examples: ['Student Council', 'Key Club', 'Volunteer Organizations', 'Peer Tutoring'],
      major: 'Perfect for Business, Education, and Social Work majors'
    },
    {
      category: 'Creative Arts',
      icon: Star,
      color: 'from-purple-400 to-pink-500',
      examples: ['Drama Club', 'Art Club', 'Photography', 'Creative Writing'],
      major: 'Ideal for Fine Arts, Media, and Design majors'
    },
    {
      category: 'STEM & Technology',
      icon: Lightbulb,
      color: 'from-orange-400 to-red-500',
      examples: ['Robotics Team', 'Computer Science Club', 'Engineering Club', 'Coding Club'],
      major: 'Essential for Engineering, Computer Science, and Tech majors'
    }
  ];

  const volunteerOpportunities = [
    {
      type: 'Tutoring Younger Students',
      description: 'Help elementary or middle school students with homework',
      skills: 'Teaching, patience, communication',
      time: '2-4 hours/week',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      type: 'Community Service',
      description: 'Food banks, animal shelters, environmental cleanups',
      skills: 'Teamwork, responsibility, empathy',
      time: 'Flexible',
      color: 'bg-green-100 text-green-800'
    },
    {
      type: 'Hospital/Healthcare',
      description: 'Assist in hospitals, nursing homes, or clinics',
      skills: 'Compassion, reliability, professionalism',
      time: '4+ hours/week',
      color: 'bg-purple-100 text-purple-800'
    },
    {
      type: 'Religious Organizations',
      description: 'Help with youth programs, community outreach',
      skills: 'Leadership, organization, dedication',
      time: 'Varies',
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  const testScores = [
    {
      test: 'SAT',
      description: 'Most widely accepted college entrance exam',
      sections: ['Reading & Writing', 'Math'],
      scoreRange: '400-1600',
      color: 'from-blue-400 to-blue-600',
      tips: ['Free prep on Khan Academy', 'Take practice tests', 'Consider taking multiple times']
    },
    {
      test: 'ACT',
      description: 'Alternative college entrance exam',
      sections: ['English', 'Math', 'Reading', 'Science'],
      scoreRange: '1-36',
      color: 'from-green-400 to-green-600',
      tips: ['Good for students strong in science', 'Slightly faster paced', 'No penalty for wrong answers']
    }
  ];

  const resumeItems = [
    { item: 'Contact Information', description: 'Name, email, phone number' },
    { item: 'Education', description: 'High school name, graduation year, GPA' },
    { item: 'Clubs & Activities', description: 'Leadership roles, participation years' },
    { item: 'Volunteer Work', description: 'Organizations, hours, impact' },
    { item: 'Work Experience', description: 'Jobs, internships, responsibilities' },
    { item: 'Skills', description: 'Languages, computer programs, certifications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              College Portfolio & Prep
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build a strong college application with extracurriculars, volunteer work, and test preparation
          </p>
        </div>

        <Tabs defaultValue="extracurriculars" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-white/80 backdrop-blur-sm p-2 rounded-2xl shadow-lg">
            <TabsTrigger value="extracurriculars" className="rounded-xl">Clubs</TabsTrigger>
            <TabsTrigger value="volunteer" className="rounded-xl">Volunteer</TabsTrigger>
            <TabsTrigger value="internships" className="rounded-xl">Internships</TabsTrigger>
            <TabsTrigger value="resume" className="rounded-xl">Resume</TabsTrigger>
            <TabsTrigger value="testing" className="rounded-xl">Testing</TabsTrigger>
          </TabsList>

          <TabsContent value="extracurriculars" className="space-y-8">
            {/* What are Clubs */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Extracurricular Activities?</h2>
              <p className="text-xl text-purple-100 mb-6">
                Clubs and activities are student-run groups where you can explore interests, develop leadership skills, 
                and show colleges what you're passionate about outside of class.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Make Friends</h3>
                  <p className="text-purple-100 text-sm">Connect with students who share your interests</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Trophy className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Build Skills</h3>
                  <p className="text-purple-100 text-sm">Develop leadership, teamwork, and communication</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Target className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">College Appeal</h3>
                  <p className="text-purple-100 text-sm">Show colleges your passions and commitment</p>
                </div>
              </div>
            </div>

            {/* Club Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {clubCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="group">
                    <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-8 text-white transform group-hover:scale-105 transition-all duration-300 shadow-xl`}>
                      <Icon className="h-12 w-12 mb-4" />
                      <h3 className="text-2xl font-bold mb-3">{category.category}</h3>
                      <p className="text-white/80 mb-6 text-sm">{category.major}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Popular Clubs:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.examples.map((example, idx) => (
                            <div key={idx} className="bg-white/20 px-3 py-2 rounded-lg text-sm">
                              {example}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTE Organizations */}
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">CTE Organizations</h3>
              <p className="text-emerald-100 mb-6">
                Career and Technical Education organizations provide hands-on experience and industry connections.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {['DECA (Business)', 'HOSA (Health)', 'TSA (Technology)', 'FFA (Agriculture)'].map((org, idx) => (
                  <div key={idx} className="bg-white/20 rounded-2xl p-4 text-center">
                    <div className="font-semibold text-sm">{org}</div>
                  </div>
                ))}
              </div>
              <Button className="mt-6 bg-white/20 hover:bg-white/30 text-white">
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn More About CTE
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="volunteer" className="space-y-8">
            {/* What is Volunteering */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What is Volunteer Work?</h2>
              <p className="text-xl text-green-100 mb-6">
                Volunteering means helping your school or community without pay. It's a great way to give back 
                while building valuable skills and experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <Heart className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Show You Care</h3>
                  <p className="text-green-100 text-sm">Demonstrate commitment to your community</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Build Skills</h3>
                  <p className="text-green-100 text-sm">Develop communication and problem-solving abilities</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Award className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Stand Out</h3>
                  <p className="text-green-100 text-sm">Impress colleges and future employers</p>
                </div>
              </div>
            </div>

            {/* Volunteer Opportunities */}
            <div className="grid md:grid-cols-2 gap-6">
              {volunteerOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{opportunity.type}</h3>
                  <p className="text-gray-600 mb-4">{opportunity.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">Skills Developed:</h4>
                      <p className="text-sm text-gray-600">{opportunity.skills}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Time Commitment:</h4>
                      <Badge className={opportunity.color}>{opportunity.time}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Featured: Tutoring */}
            <div className="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">⭐ Featured Opportunity: Tutoring Younger Students</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">Where to Start</h4>
                  <ul className="text-blue-100 text-sm space-y-1">
                    <li>• Contact elementary schools</li>
                    <li>• Ask your teachers for referrals</li>
                    <li>• Check with local libraries</li>
                  </ul>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">What You'll Do</h4>
                  <ul className="text-blue-100 text-sm space-y-1">
                    <li>• Help with homework</li>
                    <li>• Explain difficult concepts</li>
                    <li>• Build confidence in students</li>
                  </ul>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <h4 className="font-bold mb-2">Perfect For</h4>
                  <ul className="text-blue-100 text-sm space-y-1">
                    <li>• Future teachers</li>
                    <li>• Strong academic students</li>
                    <li>• Patient, caring personalities</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="internships" className="space-y-8">
            {/* What are Internships */}
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">What are Internships?</h2>
              <p className="text-xl text-orange-100 mb-6">
                Internships give you short-term work experience in a job or career field. They're like a "test drive" 
                for different careers before you commit to a college major.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <Briefcase className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Real Experience</h3>
                  <p className="text-orange-100 text-sm">Work in actual professional environments</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Target className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Career Discovery</h3>
                  <p className="text-orange-100 text-sm">Find out what careers actually involve</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Users className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Professional Network</h3>
                  <p className="text-orange-100 text-sm">Connect with mentors and future references</p>
                </div>
              </div>
            </div>

            {/* Types of Internships */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Healthcare</h3>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Hospitals and clinics</li>
                  <li>• Veterinary offices</li>
                  <li>• Physical therapy centers</li>
                  <li>• Medical research labs</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Business</h3>
                <ul className="space-y-2 text-green-100 text-sm">
                  <li>• Local businesses</li>
                  <li>• Banks and credit unions</li>
                  <li>• Marketing agencies</li>
                  <li>• Non-profit organizations</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">STEM</h3>
                <ul className="space-y-2 text-purple-100 text-sm">
                  <li>• Technology companies</li>
                  <li>• Engineering firms</li>
                  <li>• Research institutions</li>
                  <li>• Environmental organizations</li>
                </ul>
              </div>
            </div>

            {/* How to Find Internships */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Find Internships</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Where to Look:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ask your school counselor</li>
                    <li>• Contact local businesses directly</li>
                    <li>• Check with family friends</li>
                    <li>• Look at hospital volunteer programs</li>
                    <li>• Search online internship databases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">What to Expect:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Usually unpaid for high school students</li>
                    <li>• 10-20 hours per week</li>
                    <li>• Mix of observation and hands-on work</li>
                    <li>• Professional dress code</li>
                    <li>• May require application and interview</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resume" className="space-y-8">
            {/* What is a Resume */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Building Your Resume</h2>
              <p className="text-xl text-indigo-100 mb-6">
                A resume is a one-page document that shows your education, activities, skills, and experiences. 
                It's your professional "highlight reel"!
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/20 rounded-2xl p-4">
                  <FileText className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">College Applications</h3>
                  <p className="text-indigo-100 text-sm">Required for many college and scholarship applications</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Briefcase className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Job Applications</h3>
                  <p className="text-indigo-100 text-sm">Essential for internships and part-time jobs</p>
                </div>
                <div className="bg-white/20 rounded-2xl p-4">
                  <Award className="h-8 w-8 mb-2" />
                  <h3 className="font-bold mb-1">Professional Image</h3>
                  <p className="text-indigo-100 text-sm">Shows you're organized and serious</p>
                </div>
              </div>
            </div>

            {/* Resume Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {resumeItems.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.item}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Resume Tips */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Resume Success Tips</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold mb-3">Do:</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    <li>• Keep it to one page</li>
                    <li>• Use a clean, professional format</li>
                    <li>• Include specific achievements</li>
                    <li>• Proofread carefully for errors</li>
                    <li>• Update it regularly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Don't:</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    <li>• Include personal information (age, etc.)</li>
                    <li>• Use fancy fonts or colors</li>
                    <li>• List every single activity</li>
                    <li>• Forget contact information</li>
                    <li>• Make it longer than one page</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4">
                <Button className="bg-white/20 hover:bg-white/30 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Sample High School Resume
                </Button>
                <Button className="bg-white/20 hover:bg-white/30 text-white">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Free Resume Builder
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="testing" className="space-y-8">
            {/* Test Overview */}
            <div className="grid md:grid-cols-2 gap-8">
              {testScores.map((test, index) => (
                <div key={index} className={`bg-gradient-to-br ${test.color} rounded-3xl p-8 text-white shadow-xl`}>
                  <h2 className="text-3xl font-bold mb-4">{test.test}</h2>
                  <p className="text-white/90 mb-6">{test.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold mb-2">Sections:</h3>
                      <div className="flex flex-wrap gap-2">
                        {test.sections.map((section, idx) => (
                          <Badge key={idx} className="bg-white/20 text-white">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Score Range:</h3>
                      <div className="text-2xl font-bold">{test.scoreRange}</div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold mb-2">Success Tips:</h3>
                      <ul className="space-y-1 text-white/90 text-sm">
                        {test.tips.map((tip, idx) => (
                          <li key={idx}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Test Prep Resources */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Test Prep Resources</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <h4 className="font-bold text-blue-800 mb-3">Free Resources</h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Khan Academy SAT prep</li>
                    <li>• Official practice tests</li>
                    <li>• School counselor guidance</li>
                    <li>• Test prep books from library</li>
                  </ul>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <h4 className="font-bold text-green-800 mb-3">Study Strategies</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li>• Take timed practice tests</li>
                    <li>• Focus on weak areas</li>
                    <li>• Learn test-taking strategies</li>
                    <li>• Start preparing junior year</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <h4 className="font-bold text-purple-800 mb-3">Test Day Tips</h4>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Get plenty of sleep</li>
                    <li>• Eat a good breakfast</li>
                    <li>• Bring required materials</li>
                    <li>• Stay calm and confident</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Helpful Links</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Test Prep</h4>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full mb-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Khan Academy
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    College Board
                  </Button>
                </div>
                <div>
                  <h4 className="font-bold mb-3">College Search</h4>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full mb-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    BigFuture
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Naviance
                  </Button>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Scholarships</h4>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full mb-2">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Scholarships.com
                  </Button>
                  <Button className="bg-white/20 hover:bg-white/30 text-white w-full">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Fastweb
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
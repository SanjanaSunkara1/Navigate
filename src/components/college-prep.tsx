import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ExternalLink, Users, Heart, Briefcase, FileText, Award, BookOpen } from 'lucide-react';

const extracurricularCategories = [
  {
    category: 'Academic Clubs',
    description: 'Clubs focused on specific subjects or academic interests',
    icon: BookOpen,
    examples: [
      'National Honor Society', 'Debate Team', 'Math Club', 'Science Olympiad', 
      'Academic Decathlon', 'Quiz Bowl', 'Model UN', 'Foreign Language Clubs'
    ],
    benefits: [
      'Demonstrate academic interests to colleges',
      'Develop leadership and teamwork skills',
      'Participate in competitions and events',
      'Connect with like-minded students'
    ]
  },
  {
    category: 'Leadership & Service',
    description: 'Organizations that develop leadership skills and serve the community',
    icon: Award,
    examples: [
      'Student Government', 'Key Club', 'Interact Club', 'Student Council',
      'Peer Tutoring', 'Ambassadors Program', 'Class Officers'
    ],
    benefits: [
      'Build leadership experience',
      'Serve your school and community',
      'Develop communication skills',
      'Show commitment to helping others'
    ]
  },
  {
    category: 'Arts & Creative',
    description: 'Express creativity through various artistic mediums',
    icon: Users,
    examples: [
      'Drama Club', 'Art Club', 'Photography Club', 'Creative Writing',
      'Band', 'Orchestra', 'Choir', 'Dance Team'
    ],
    benefits: [
      'Showcase creative talents',
      'Develop artistic skills',
      'Build portfolio for arts programs',
      'Express yourself creatively'
    ]
  },
  {
    category: 'Career & Technical (CTE)',
    description: 'Organizations related to specific career fields',
    icon: Briefcase,
    examples: [
      'HOSA (Health Science)', 'FBLA (Business)', 'FFA (Agriculture)',
      'FCCLA (Family & Consumer Sciences)', 'SkillsUSA', 'TSA (Technology)',
      'DECA (Marketing)', 'BPA (Business Professionals)'
    ],
    benefits: [
      'Gain real-world career experience',
      'Earn industry certifications',
      'Network with professionals',
      'Compete in career-related events'
    ]
  }
];

const volunteerOpportunities = [
  {
    organization: 'Central Texas Food Bank',
    description: 'Fight hunger and food insecurity across Central Texas',
    website: 'https://www.centraltexasfoodbank.org/volunteer',
    opportunities: ['Food sorting', 'Distribution events', 'Community gardens', 'Nutrition education']
  },
  {
    organization: 'Austin Pets Alive!',
    description: 'Animal rescue and care opportunities in the Austin area',
    website: 'https://www.austinpetsalive.org/volunteer',
    opportunities: ['Animal care', 'Adoption events', 'Fundraising', 'Community outreach']
  },
  {
    organization: 'Volunteer Match Texas',
    description: 'Connects volunteers with organizations throughout Texas',
    website: 'https://www.volunteermatch.org/search?l=Texas',
    opportunities: ['Education', 'Environment', 'Health', 'Community development']
  }
];

const internshipPrograms = [
  {
    program: 'Texas State University Summer Research Program',
    description: 'High school research internships in STEM fields',
    website: 'https://www.txst.edu/research/ors.html',
    details: ['STEM research projects', 'Mentorship from university faculty', 'Summer program', 'Stipend provided']
  },
  {
    program: 'InternshipTexas.com',
    description: 'Comprehensive database of internship opportunities across Texas',
    website: 'https://www.internships.com/texas',
    details: ['Multiple industry options', 'Paid and unpaid positions', 'Various time commitments', 'Search by location and field']
  },
  {
    program: 'Dell Technologies Student Programs',
    description: 'Technology-focused internships and mentorship programs in Austin',
    website: 'https://jobs.dell.com/students',
    details: ['Technology experience', 'Mentorship opportunities', 'Professional development', 'Networking events']
  }
];

const testInfo = [
  {
    test: 'SAT',
    description: 'Standardized test widely accepted by colleges nationwide',
    sections: ['Evidence-Based Reading and Writing', 'Math'],
    score: 'Total: 400-1600 (200-800 per section)',
    when: 'Offered 7 times per year',
    prep: 'Khan Academy (free), College Board practice tests',
    website: 'https://www.collegeboard.org/sat'
  },
  {
    test: 'ACT',
    description: 'Alternative standardized test accepted by all U.S. colleges',
    sections: ['English', 'Math', 'Reading', 'Science', 'Optional Writing'],
    score: 'Composite: 1-36 (average of four sections)',
    when: 'Offered 7 times per year',
    prep: 'ACT Academy (free), official practice tests',
    website: 'https://www.act.org'
  }
];

const essentialTerms = [
  {
    term: 'Extracurriculars',
    definition: 'Activities outside of regular classroom instruction that help develop skills, interests, and leadership abilities.'
  },
  {
    term: 'Community Service',
    definition: 'Voluntary work performed by individuals or groups to benefit their community, often required for graduation or college applications.'
  },
  {
    term: 'Internship',
    definition: 'Temporary work experience that provides hands-on learning in a specific career field or industry.'
  },
  {
    term: 'Portfolio',
    definition: 'Collection of your best work, achievements, and experiences that showcases your skills and accomplishments.'
  },
  {
    term: 'Resume',
    definition: 'A one-page document summarizing your education, activities, work experience, and skills.'
  }
];

export function CollegePrep() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            College Portfolio & Prep
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Build a strong college application by participating in extracurriculars, volunteering, 
            gaining work experience, and preparing for standardized tests. Start early and stay consistent!
          </p>
        </div>

        <Tabs defaultValue="extracurriculars" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-card border border-border p-2 shadow-lg">
            <TabsTrigger value="extracurriculars">Extracurriculars</TabsTrigger>
            <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="resume">Resume Building</TabsTrigger>
            <TabsTrigger value="tests">SAT & ACT</TabsTrigger>
          </TabsList>

          {/* Extracurriculars Tab */}
          <TabsContent value="extracurriculars" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Extracurricular Activities</h2>
              <p className="text-xl leading-relaxed">
                Clubs and activities outside of class help you explore interests, develop leadership skills, 
                and show colleges what you're passionate about. Choose activities that align with your interests 
                and intended college major.
              </p>
            </div>

            {/* What are they? */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">What are Extracurricular Activities?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Extracurricular activities are clubs, sports, organizations, and programs that happen outside of your regular classes. 
                These activities are voluntary but play a crucial role in your personal development and college applications. 
                They include academic clubs, sports teams, volunteer organizations, arts programs, and career-focused groups.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Why Join Clubs and Activities?</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Make Friends:</strong> Meet students who share your interests and passions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Practice Teamwork:</strong> Learn to collaborate and work effectively with others</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Show Colleges Your Interests:</strong> Demonstrate passion and commitment outside academics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Discover Your Path:</strong> Explore potential college majors and career interests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Develop Leadership:</strong> Take on leadership roles and build valuable skills</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">CTE Organization Benefits</h4>
                  <p className="text-muted-foreground mb-3">
                    Career and Technical Education (CTE) organizations offer unique advantages:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Real-World Skills:</strong> Learn practical skills used in actual careers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Industry Connections:</strong> Network with professionals in your field of interest</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Competitions:</strong> Participate in state and national career skill competitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Certifications:</strong> Earn industry-recognized certifications and credentials</span>
                    </li>
                  </ul>
                  <div className="mt-4">
                    <a 
                      href="https://www.skillsusa.org/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                    >
                      Learn more about CTE organizations <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Club Categories */}
            <div className="grid md:grid-cols-2 gap-8">
              {extracurricularCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mr-4">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground">{category.category}</h3>
                        <p className="text-muted-foreground text-sm">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-card-foreground mb-2">Examples:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {category.examples.map((example, exampleIndex) => (
                          <Badge key={exampleIndex} variant="outline" className="text-xs justify-start">
                            {example}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Benefits:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {category.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex}>• {benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">💡 Strategic Club Selection:</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose clubs based on your interests and intended college major. For example, if you want to study engineering, 
                join STEM clubs, robotics teams, or Math Olympiad. If you're interested in business, consider FBLA, DECA, or entrepreneurship clubs. 
                Quality and commitment matter more than quantity - it's better to be deeply involved in 2-3 clubs than superficially involved in many.
              </p>
            </div>
          </TabsContent>

          {/* Volunteer Tab */}
          <TabsContent value="volunteer" className="space-y-8">
            <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Volunteer Work</h2>
              <p className="text-xl leading-relaxed">
                Volunteering demonstrates your commitment to helping others and making a positive impact in your community. 
                It's also a great way to explore career interests and develop important life skills.
              </p>
            </div>

            {/* What is volunteering? */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">What is Volunteering?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Volunteering means helping your school, community, or organizations without expecting payment in return. 
                It's about giving your time and skills to make a positive difference in the lives of others. 
                Volunteer work can range from tutoring younger students to helping at local nonprofits, 
                participating in community clean-up projects, or assisting at local events.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Why Volunteer Work Matters</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Shows Character:</strong> Demonstrates to colleges and employers that you care about your community and can take initiative</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Develops Responsibility:</strong> Builds reliability, time management, and commitment skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Communication Skills:</strong> Practice talking with people of all ages and backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Problem-Solving:</strong> Learn to adapt and find solutions in different situations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Personal Fulfillment:</strong> Feel good about making a positive difference in your community</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Types of Volunteer Opportunities</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 border-l-4 border-l-blue-500">
                      <h5 className="font-medium text-card-foreground">Education & Tutoring</h5>
                      <p className="text-sm text-muted-foreground">Help younger students, library programs, literacy initiatives</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-green-500">
                      <h5 className="font-medium text-card-foreground">Community Service</h5>
                      <p className="text-sm text-muted-foreground">Food banks, homeless shelters, community clean-up, senior centers</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-red-500">
                      <h5 className="font-medium text-card-foreground">Healthcare & Social Services</h5>
                      <p className="text-sm text-muted-foreground">Hospitals, animal shelters, disability services, mental health support</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-yellow-500">
                      <h5 className="font-medium text-card-foreground">Environmental & Conservation</h5>
                      <p className="text-sm text-muted-foreground">Park maintenance, tree planting, recycling programs, wildlife conservation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texas Volunteer Resources */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground">Volunteer Opportunities in Texas</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {volunteerOpportunities.map((org, index) => (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-3">
                        <Heart className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-card-foreground">{org.organization}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{org.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-card-foreground mb-2">Opportunities:</h5>
                      <div className="flex flex-wrap gap-1">
                        {org.opportunities.map((opp, oppIndex) => (
                          <Badge key={oppIndex} variant="outline" className="text-xs">
                            {opp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <a 
                      href={org.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center text-sm"
                    >
                      Visit Website <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">🎯 Getting Started with Volunteering:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Step 1: Choose Your Focus</h4>
                  <ul className="space-y-1">
                    <li>• Pick causes you're passionate about</li>
                    <li>• Consider your skills and interests</li>
                    <li>• Think about your career goals</li>
                    <li>• Consider your schedule and transportation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Step 2: Start Small & Build</h4>
                  <ul className="space-y-1">
                    <li>• Begin with 2-4 hours per month</li>
                    <li>• Be consistent and reliable</li>
                    <li>• Ask for letters of recommendation</li>
                    <li>• Document your hours and impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships" className="space-y-8">
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Internships & Work Experience</h2>
              <p className="text-xl leading-relaxed">
                Internships provide hands-on experience in real workplace environments, helping you explore careers 
                and build professional skills before choosing a college major.
              </p>
            </div>

            {/* What are internships? */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">What are Internships?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Internships are temporary work experiences that give you a chance to explore different career fields while you're still in high school. 
                They can be paid or unpaid, and typically last anywhere from a few weeks to a few months. 
                Internships provide real-world work experience and help you understand what different careers are actually like day-to-day.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Why Internships Matter</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Career Exploration:</strong> Try out real-world jobs before college to see what interests you</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Professional Skills:</strong> Learn workplace communication, time management, and professional behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Network Building:</strong> Connect with mentors and professionals who can guide your career</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>College Applications:</strong> Stand out with real work experience and professional references</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span><strong>Confidence Building:</strong> Gain confidence in professional settings and adult interactions</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Types of Opportunities</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 border-l-4 border-l-blue-500">
                      <h5 className="font-medium text-card-foreground">Summer Internships</h5>
                      <p className="text-sm text-muted-foreground">Full-time programs during summer break, often 6-8 weeks</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-green-500">
                      <h5 className="font-medium text-card-foreground">Job Shadowing</h5>
                      <p className="text-sm text-muted-foreground">Follow professionals for a day or week to observe their work</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-yellow-500">
                      <h5 className="font-medium text-card-foreground">Part-time Internships</h5>
                      <p className="text-sm text-muted-foreground">Work a few hours per week during the school year</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-red-500">
                      <h5 className="font-medium text-card-foreground">Research Programs</h5>
                      <p className="text-sm text-muted-foreground">Work with university researchers on scientific projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Texas Internship Programs */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground">Internship & Summer Programs in Texas</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {internshipPrograms.map((program, index) => (
                  <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center mr-3">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <h4 className="text-lg font-bold text-card-foreground">{program.program}</h4>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{program.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-medium text-card-foreground mb-2">Program Features:</h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {program.details.map((detail, detailIndex) => (
                          <li key={detailIndex}>• {detail}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <a 
                      href={program.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center text-sm"
                    >
                      Learn More <ExternalLink className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-l-red-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">🚀 Finding Internship Opportunities:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Where to Look:</h4>
                  <ul className="space-y-1">
                    <li>• Ask your school counselor about local programs</li>
                    <li>• Contact local businesses and organizations directly</li>
                    <li>• Check with family friends and community connections</li>
                    <li>• Look for programs at local universities and colleges</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Application Tips:</h4>
                  <ul className="space-y-1">
                    <li>• Apply early - popular programs fill up quickly</li>
                    <li>• Have a resume ready (even if it's your first one)</li>
                    <li>• Ask teachers for recommendation letters</li>
                    <li>• Be prepared to explain why you're interested</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Resume Building Tab */}
          <TabsContent value="resume" className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Building Your Resume</h2>
              <p className="text-xl leading-relaxed">
                A resume is your professional introduction - a one-page summary that highlights your 
                education, activities, skills, and experiences for college applications and job opportunities.
              </p>
            </div>

            {/* What is a resume? */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">What is a Resume?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                A resume is a one-page document that summarizes your education, activities, skills, and experiences in a professional format. 
                Think of it as your personal marketing document that shows potential colleges, scholarship committees, or employers 
                what you've accomplished and what skills you bring. Even if you're just starting high school, you can create a resume 
                that highlights your strengths and potential.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">Why You Need a Resume</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>College Applications:</strong> Many colleges and scholarship applications require or recommend a resume</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Internship Applications:</strong> Employers want to see your background and qualifications</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Scholarship Opportunities:</strong> Stand out from other applicants with a professional presentation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Job Applications:</strong> Part-time jobs and summer work often require resumes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-600 mr-2">•</span>
                      <span><strong>Professional Appearance:</strong> Shows maturity and organization skills</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-3 text-card-foreground">What to Include in Your Resume</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 border-l-4 border-l-blue-500">
                      <h5 className="font-medium text-card-foreground">Contact Information</h5>
                      <p className="text-sm text-muted-foreground">Your name, email, phone number, and city/state (never include full address)</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-green-500">
                      <h5 className="font-medium text-card-foreground">Education</h5>
                      <p className="text-sm text-muted-foreground">High school name, graduation year, GPA (if 3.0+), relevant coursework</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-red-500">
                      <h5 className="font-medium text-card-foreground">Activities & Leadership</h5>
                      <p className="text-sm text-muted-foreground">Clubs, sports, student government, volunteer work, leadership positions</p>
                    </div>
                    <div className="p-3 bg-muted/50 border-l-4 border-l-yellow-500">
                      <h5 className="font-medium text-card-foreground">Skills & Experience</h5>
                      <p className="text-sm text-muted-foreground">Computer skills, languages, work experience, special talents</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Example */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">High School Resume Example</h3>
              
              <div className="bg-white dark:bg-gray-900 border-2 border-gray-300 p-6 font-mono text-sm">
                <div className="text-center mb-4">
                  <h4 className="text-lg font-bold">Maria Rodriguez</h4>
                  <p className="text-gray-600">maria.rodriguez@email.com | (512) 555-0123 | Austin, TX</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-bold mb-2 border-b border-gray-300">EDUCATION</h5>
                  <p><strong>Westwood High School</strong> - Round Rock, TX</p>
                  <p>Expected Graduation: May 2025 | GPA: 3.7/4.0</p>
                  <p>Relevant Coursework: AP Biology, Pre-AP Chemistry, Statistics</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-bold mb-2 border-b border-gray-300">ACTIVITIES & LEADERSHIP</h5>
                  <p><strong>HOSA (Health Occupations Students of America)</strong> - Member (2023-Present)</p>
                  <p>• Competed in Medical Math competition at state level</p>
                  <p><strong>National Honor Society</strong> - Member (2024-Present)</p>
                  <p><strong>Peer Tutoring Program</strong> - Volunteer Tutor (2023-Present)</p>
                  <p>• Tutor underclassmen in biology and chemistry</p>
                </div>
                
                <div className="mb-4">
                  <h5 className="font-bold mb-2 border-b border-gray-300">VOLUNTEER EXPERIENCE</h5>
                  <p><strong>Austin Animal Center</strong> - Volunteer (Summer 2024)</p>
                  <p>• Assisted with animal care and adoption events (40+ hours)</p>
                </div>
                
                <div>
                  <h5 className="font-bold mb-2 border-b border-gray-300">SKILLS</h5>
                  <p>• Bilingual: Fluent in English and Spanish</p>
                  <p>• Computer Skills: Microsoft Office, Google Workspace</p>
                  <p>• Laboratory Skills: Basic chemistry and biology lab techniques</p>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center mr-3">
                    <FileText className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground">Sample Resume Templates</h4>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Use these professional templates designed specifically for high school students.
                </p>
                <a 
                  href="https://www.indeed.com/career-advice/resumes-cover-letters/high-school-resume-template" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                >
                  View High School Resume Templates <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-card border border-border p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-3">
                    <Award className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-card-foreground">Google Docs Resume Builder</h4>
                </div>
                <p className="text-muted-foreground mb-4 text-sm">
                  Create a professional resume using Google Docs templates that are free and easy to use.
                </p>
                <a 
                  href="https://docs.google.com/document/u/0/?category=resumes&ftv=1&tgif=c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                >
                  Use Google Docs Templates <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500 p-6">
              <h3 className="font-bold text-lg mb-3 text-card-foreground">✨ Resume Writing Tips:</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Do:</h4>
                  <ul className="space-y-1">
                    <li>• Keep it to one page</li>
                    <li>• Use action verbs (led, organized, achieved)</li>
                    <li>• Include specific numbers and achievements</li>
                    <li>• Proofread carefully for spelling and grammar</li>
                    <li>• Use a clean, professional format</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Don't:</h4>
                  <ul className="space-y-1">
                    <li>• Include personal information (age, photo, etc.)</li>
                    <li>• Use fancy fonts or colors</li>
                    <li>• List every single activity you've ever done</li>
                    <li>• Include references (say "available upon request")</li>
                    <li>• Forget to update it regularly</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* SAT & ACT Tab */}
          <TabsContent value="tests" className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">SAT & ACT Test Preparation</h2>
              <p className="text-xl leading-relaxed">
                Standardized tests are important for college admissions and scholarships. Understanding these tests 
                and preparing effectively can significantly improve your scores and opportunities.
              </p>
            </div>

            {/* Test Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              {testInfo.map((test, index) => (
                <div key={index} className="bg-card border border-border p-8 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-card-foreground">{test.test}</h3>
                      <p className="text-muted-foreground">{test.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-card-foreground mb-2">Test Sections:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {test.sections.map((section, sectionIndex) => (
                          <li key={sectionIndex}>• {section}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Scoring:</h4>
                      <p className="text-sm text-muted-foreground">{test.score}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Testing Schedule:</h4>
                      <p className="text-sm text-muted-foreground">{test.when}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-card-foreground mb-1">Free Prep Resources:</h4>
                      <p className="text-sm text-muted-foreground">{test.prep}</p>
                    </div>
                    
                    <div className="pt-4">
                      <a 
                        href={test.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium flex items-center"
                      >
                        Official {test.test} Website <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Helpful Links */}
            <div className="bg-card border border-border p-8">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Additional College Prep Resources</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-muted/50 border-l-4 border-l-blue-500">
                  <h4 className="font-medium text-card-foreground mb-3">Test Prep Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.khanacademy.org/sat" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        Khan Academy SAT Prep <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://academy.act.org/" target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        ACT Academy <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-muted/50 border-l-4 border-l-green-500">
                  <h4 className="font-medium text-card-foreground mb-3">College Search</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://bigfuture.collegeboard.org/" target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        College Board BigFuture <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.collegenavigator.gov/" target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        College Navigator <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-muted/50 border-l-4 border-l-yellow-500">
                  <h4 className="font-medium text-card-foreground mb-3">Scholarship Search</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="https://www.scholarships.com/" target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        Scholarships.com <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.fastweb.com/" target="_blank" rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center">
                        Fastweb <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Essential Terms */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-foreground">Essential Terms to Know</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {essentialTerms.map((term, index) => (
                  <div key={index} className="bg-card border border-border p-4 hover:shadow-lg transition-shadow duration-200">
                    <h4 className="font-bold text-blue-600 mb-2">{term.term}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{term.definition}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => window.location.hash = '#glossary'}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-medium"
                >
                  View Complete Glossary
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
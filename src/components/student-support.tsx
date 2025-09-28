import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Globe, Heart, Accessibility, Phone, Users, BookOpen, ExternalLink } from 'lucide-react';

export function StudentSupport() {
  const eslServices = [
    {
      service: 'ESL Classes',
      description: 'Dedicated English language development courses',
      availability: 'Available at all grade levels'
    },
    {
      service: 'Bilingual Education',
      description: 'Instruction in both English and native language',
      availability: 'Varies by district and language'
    },
    {
      service: 'Content Support',
      description: 'Extra help in core subjects while learning English',
      availability: 'Provided by trained teachers'
    },
    {
      service: 'Translation Services',
      description: 'Document translation and interpreter services',
      availability: 'For parent meetings and important documents'
    }
  ];

  const counselingServices = [
    {
      type: 'Academic Counseling',
      description: 'Course planning, graduation requirements, college prep',
      when: 'Regular meetings throughout the year'
    },
    {
      type: 'Personal Counseling',
      description: 'Support for personal issues, stress, and adjustment',
      when: 'As needed, confidential sessions'
    },
    {
      type: 'Crisis Intervention',
      description: 'Immediate support for mental health emergencies',
      when: '24/7 through school or community resources'
    },
    {
      type: 'College & Career Guidance',
      description: 'Help with applications, scholarships, and planning',
      when: 'Junior and senior years, ongoing support'
    }
  ];

  const specialEdServices = [
    {
      service: 'Individualized Education Program (IEP)',
      description: 'Customized education plan for students with disabilities',
      process: 'Evaluation → Meeting → Plan Development → Implementation'
    },
    {
      service: '504 Plan',
      description: 'Accommodations for students with disabilities affecting learning',
      process: 'Referral → Evaluation → Plan Development → Implementation'
    },
    {
      service: 'Response to Intervention (RTI)',
      description: 'Tiered support system for academic and behavioral needs',
      process: 'Universal screening → Targeted intervention → Intensive support'
    }
  ];

  const mentalHealthResources = [
    {
      resource: 'School Counselor',
      description: 'First point of contact for mental health support',
      availability: 'During school hours',
      contact: 'Available at your school'
    },
    {
      resource: 'School Psychologist',
      description: 'Specialized mental health professional',
      availability: 'By appointment',
      contact: 'Through school counselor'
    },
    {
      resource: 'Crisis Text Line',
      description: '24/7 crisis support via text message',
      availability: '24/7',
      contact: 'Text HOME to 741741'
    },
    {
      resource: 'National Suicide Prevention Lifeline',
      description: 'Free, confidential crisis support',
      availability: '24/7',
      contact: '988'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Student Support Services</h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive support resources for ESL/ELL students, counseling services, and special education accommodations.
        </p>
      </div>

      <Tabs defaultValue="esl" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="esl">ESL/ELL Support</TabsTrigger>
          <TabsTrigger value="counseling">Counseling</TabsTrigger>
          <TabsTrigger value="special-ed">Special Education</TabsTrigger>
          <TabsTrigger value="mental-health">Mental Health</TabsTrigger>
        </TabsList>

        <TabsContent value="esl" className="space-y-6">
          <Alert>
            <Globe className="h-4 w-4" />
            <AlertDescription>
              <strong>ESL (English as a Second Language)</strong> and <strong>ELL (English Language Learner)</strong> 
              programs help students develop English proficiency while succeeding in their academic courses.
            </AlertDescription>
          </Alert>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Available ESL/ELL Services</CardTitle>
                <CardDescription>Support services for English language learners</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {eslServices.map((service, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold">{service.service}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {service.availability}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>ELPS Standards</CardTitle>
                  <CardDescription>English Language Proficiency Standards</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Listening</h4>
                      <p className="text-sm text-muted-foreground">Understanding spoken English in academic settings</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Speaking</h4>
                      <p className="text-sm text-muted-foreground">Communicating orally in English for academic purposes</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Reading</h4>
                      <p className="text-sm text-muted-foreground">Comprehending written English texts across subjects</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Writing</h4>
                      <p className="text-sm text-muted-foreground">Producing written English for academic tasks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Assessment & Placement</CardTitle>
                  <CardDescription>How ESL services are determined</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Initial Assessment</h4>
                      <p className="text-sm text-muted-foreground">TELPAS screening for new students</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Annual Testing</h4>
                      <p className="text-sm text-muted-foreground">TELPAS testing each spring to measure progress</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Program Exit</h4>
                      <p className="text-sm text-muted-foreground">Students exit when reaching proficient level</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Monitoring</h4>
                      <p className="text-sm text-muted-foreground">2-year monitoring period after exit</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Your Rights as an ESL/ELL Student</CardTitle>
              </CardHeader>
              <CardContent className="text-blue-700 space-y-2">
                <p>• Access to all educational programs and services</p>
                <p>• Appropriate language support services</p>
                <p>• Native language support when necessary</p>
                <p>• Fair and valid assessment accommodations</p>
                <p>• Parent communication in your home language</p>
                <p>• Protection from discrimination based on English proficiency</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="counseling" className="space-y-6">
          <Alert>
            <Users className="h-4 w-4" />
            <AlertDescription>
              School counselors provide academic, personal, and college/career guidance to help students 
              succeed in high school and prepare for their future goals.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            {counselingServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.type}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{service.when}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>What Your Counselor Can Help With</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Course selection and scheduling</div>
                  <div>• Graduation requirement tracking</div>
                  <div>• College and career planning</div>
                  <div>• Scholarship and financial aid guidance</div>
                  <div>• Personal and social concerns</div>
                  <div>• Family and peer relationship issues</div>
                  <div>• Academic stress and motivation</div>
                  <div>• Transition and adjustment support</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Access Counseling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Make an Appointment</h4>
                    <p className="text-sm text-muted-foreground">Visit or call the counseling office</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Drop-in Hours</h4>
                    <p className="text-sm text-muted-foreground">Many schools have walk-in times</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Teacher Referral</h4>
                    <p className="text-sm text-muted-foreground">Teachers can request counselor support</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Parent Request</h4>
                    <p className="text-sm text-muted-foreground">Parents can ask for counseling services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Confidentiality</CardTitle>
            </CardHeader>
            <CardContent className="text-green-700">
              <p className="mb-2">
                <strong>What you share with your counselor is generally confidential.</strong> 
                This means they won't share your personal information without your permission.
              </p>
              <p className="text-sm">
                <strong>Exception:</strong> Counselors must report if they believe you or someone else 
                is in immediate danger of harm.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="special-ed" className="space-y-6">
          <Alert>
            <Accessibility className="h-4 w-4" />
            <AlertDescription>
              Special education services ensure students with disabilities receive appropriate 
              accommodations and support to access their education successfully.
            </AlertDescription>
          </Alert>

          <div className="grid gap-6">
            {specialEdServices.map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.service}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted p-3 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Process:</h4>
                    <p className="text-sm">{service.process}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Common Accommodations</CardTitle>
                <CardDescription>Examples of support provided</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Testing Accommodations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Extended time</li>
                      <li>• Separate testing room</li>
                      <li>• Large print materials</li>
                      <li>• Read-aloud accommodations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Classroom Accommodations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Preferential seating</li>
                      <li>• Modified assignments</li>
                      <li>• Assistive technology</li>
                      <li>• Note-taking support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
                <CardDescription>Important protections under federal law</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Free and appropriate public education (FAPE)</div>
                  <div>• Least restrictive environment (LRE)</div>
                  <div>• Individualized education planning</div>
                  <div>• Parent participation in decisions</div>
                  <div>• Procedural safeguards</div>
                  <div>• Annual review of services</div>
                  <div>• Transition planning (age 16+)</div>
                  <div>• Due process protections</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-purple-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Getting Started</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-700 space-y-2">
              <p>• <strong>If you think you need support:</strong> Talk to your teacher, counselor, or parent</p>
              <p>• <strong>Referral process:</strong> Anyone can request an evaluation for special education</p>
              <p>• <strong>Evaluation:</strong> Comprehensive assessment to determine eligibility</p>
              <p>• <strong>Meeting:</strong> Team meeting to discuss results and plan services</p>
              <p>• <strong>Services begin:</strong> Support starts within 30 school days of the meeting</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mental-health" className="space-y-6">
          <Alert>
            <Heart className="h-4 w-4" />
            <AlertDescription>
              Mental health is just as important as physical health. Don't hesitate to seek help 
              if you're struggling with stress, anxiety, depression, or other mental health concerns.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            {mentalHealthResources.map((resource, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{resource.resource}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{resource.availability}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{resource.contact}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Warning Signs to Watch For</CardTitle>
                <CardDescription>When to seek help</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Persistent sadness or hopelessness</div>
                  <div>• Loss of interest in activities</div>
                  <div>• Significant changes in sleep or appetite</div>
                  <div>• Difficulty concentrating</div>
                  <div>• Withdrawal from friends and family</div>
                  <div>• Increased irritability or anger</div>
                  <div>• Thoughts of self-harm</div>
                  <div>• Substance use</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Self-Care Strategies</CardTitle>
                <CardDescription>Ways to support your mental health</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div>• Maintain regular sleep schedule</div>
                  <div>• Exercise regularly</div>
                  <div>• Eat nutritious meals</div>
                  <div>• Practice mindfulness or meditation</div>
                  <div>• Stay connected with friends and family</div>
                  <div>• Engage in hobbies you enjoy</div>
                  <div>• Limit social media and screen time</div>
                  <div>• Talk to trusted adults</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                Crisis Resources - Get Help Now
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-700 space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold">National Suicide Prevention Lifeline</h4>
                  <p className="text-lg font-bold">988</p>
                  <p className="text-sm">24/7 free and confidential support</p>
                </div>
                <div>
                  <h4 className="font-semibold">Crisis Text Line</h4>
                  <p className="text-lg font-bold">Text HOME to 741741</p>
                  <p className="text-sm">24/7 crisis support via text</p>
                </div>
              </div>
              <p className="text-sm">
                <strong>If you're in immediate danger, call 911 or go to your nearest emergency room.</strong>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    National Alliance on Mental Illness (NAMI)
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Mental Health America
                  </Button>
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Teen Mental Health
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Crisis Text Line
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
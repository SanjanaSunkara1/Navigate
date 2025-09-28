import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { Button } from './ui/button';
import { FileText, Calendar, Award, ExternalLink, AlertTriangle } from 'lucide-react';

export function TestingRequirements() {
  const staarTests = [
    {
      subject: 'English I & II',
      description: 'Reading and writing assessments',
      timing: 'End of course',
      retakes: 'Available if needed',
      graduation: 'Required'
    },
    {
      subject: 'Algebra I',
      description: 'Mathematics assessment',
      timing: 'End of course',
      retakes: 'Available if needed', 
      graduation: 'Required'
    },
    {
      subject: 'Biology',
      description: 'Science assessment',
      timing: 'End of course',
      retakes: 'Available if needed',
      graduation: 'Required'
    },
    {
      subject: 'U.S. History',
      description: 'Social studies assessment',
      timing: 'End of course',
      retakes: 'Available if needed',
      graduation: 'Required'
    }
  ];

  const collegeTests = [
    {
      name: 'SAT',
      description: 'Standardized college admission test',
      sections: ['Reading/Writing', 'Math'],
      score: '400-1600',
      timing: 'Multiple dates per year',
      cost: '$60 (fee waivers available)'
    },
    {
      name: 'ACT',
      description: 'Alternative college admission test',
      sections: ['English', 'Math', 'Reading', 'Science'],
      score: '1-36',
      timing: 'Multiple dates per year',
      cost: '$63 (fee waivers available)'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Testing Requirements</h1>
        <p className="text-lg text-muted-foreground">
          Understanding STAAR, SAT, ACT, and AP testing requirements for Texas high school students.
        </p>
      </div>

      <Tabs defaultValue="staar" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="staar">STAAR Tests</TabsTrigger>
          <TabsTrigger value="college">SAT & ACT</TabsTrigger>
          <TabsTrigger value="ap">AP Exams</TabsTrigger>
          <TabsTrigger value="timeline">Test Timeline</TabsTrigger>
        </TabsList>

        <TabsContent value="staar" className="space-y-6">
          <Alert>
            <FileText className="h-4 w-4" />
            <AlertDescription>
              <strong>STAAR (State of Texas Assessments of Academic Readiness)</strong> tests are required 
              for graduation. You must pass all required STAAR tests to receive your high school diploma.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            {staarTests.map((test, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{test.subject}</CardTitle>
                    <Badge variant="destructive">Required for Graduation</Badge>
                  </div>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Timing:</span> {test.timing}
                    </div>
                    <div>
                      <span className="font-medium">Retakes:</span> {test.retakes}
                    </div>
                    <div>
                      <span className="font-medium">Status:</span> {test.graduation}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                <CardTitle className="text-yellow-800">Important Notes</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="text-yellow-700 space-y-2">
              <p>• You can retake STAAR tests multiple times if you don't pass initially</p>
              <p>• Alternative assessments may be available for students with disabilities</p>
              <p>• STAAR results also affect school accountability ratings</p>
              <p>• Accommodations are available for English Language Learners</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="college" className="space-y-6">
          <Alert>
            <Award className="h-4 w-4" />
            <AlertDescription>
              SAT and ACT are <strong>optional</strong> for graduation but <strong>required</strong> for most 
              college applications. Many Texas colleges are test-optional, but competitive schools still expect scores.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            {collegeTests.map((test, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{test.name}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Test Sections:</h4>
                    <div className="flex flex-wrap gap-2">
                      {test.sections.map((section, idx) => (
                        <Badge key={idx} variant="outline">{section}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Score Range:</span><br />
                      {test.score}
                    </div>
                    <div>
                      <span className="font-medium">Cost:</span><br />
                      {test.cost}
                    </div>
                  </div>
                  <div>
                    <span className="font-medium text-sm">Testing Schedule:</span>
                    <p className="text-sm text-muted-foreground">{test.timing}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Test Preparation Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Free Resources:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Khan Academy (free SAT prep)</li>
                    <li>• Official practice tests</li>
                    <li>• School counselor guidance</li>
                    <li>• College Board resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Test Tips:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Take practice tests under timed conditions</li>
                    <li>• Start preparing junior year</li>
                    <li>• Consider taking both SAT and ACT</li>
                    <li>• Use fee waivers if eligible</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  College Board
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Khan Academy
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  ACT.org
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ap" className="space-y-6">
          <Alert>
            <Award className="h-4 w-4" />
            <AlertDescription>
              <strong>Advanced Placement (AP)</strong> exams are optional but can earn college credit and 
              strengthen college applications. Texas students can take AP exams even without taking AP courses.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular AP Subjects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• AP English Language</div>
                  <div>• AP English Literature</div>
                  <div>• AP Calculus AB/BC</div>
                  <div>• AP Statistics</div>
                  <div>• AP Biology</div>
                  <div>• AP Chemistry</div>
                  <div>• AP Physics</div>
                  <div>• AP U.S. History</div>
                  <div>• AP World History</div>
                  <div>• AP Psychology</div>
                  <div>• AP Spanish</div>
                  <div>• AP Computer Science</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AP Exam Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <span className="font-medium">Score Range:</span> 1-5<br />
                  <span className="text-sm text-muted-foreground">3+ typically considered passing</span>
                </div>
                <div>
                  <span className="font-medium">Cost:</span> $97 per exam<br />
                  <span className="text-sm text-muted-foreground">Fee reductions available</span>
                </div>
                <div>
                  <span className="font-medium">Timing:</span> May each year<br />
                  <span className="text-sm text-muted-foreground">2-3 hour exams</span>
                </div>
                <div>
                  <span className="font-medium">Benefits:</span><br />
                  <span className="text-sm text-muted-foreground">College credit, advanced placement, stronger applications</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">AP Success Strategies</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700 space-y-2">
              <p>• Take AP courses when possible for better preparation</p>
              <p>• Use AP Classroom and College Board resources</p>
              <p>• Form study groups with classmates</p>
              <p>• Take practice exams to familiarize with format</p>
              <p>• Understand each exam's specific structure and timing</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-6">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Testing Timeline by Grade</h3>
            
            {[
              {
                grade: '9th Grade',
                tests: ['STAAR English I (if taking course)', 'STAAR Algebra I (if taking course)'],
                prep: 'Focus on course success, begin college awareness'
              },
              {
                grade: '10th Grade', 
                tests: ['STAAR English II', 'STAAR Biology', 'Additional STAAR as needed'],
                prep: 'Consider PSAT, start thinking about SAT/ACT prep'
              },
              {
                grade: '11th Grade',
                tests: ['STAAR U.S. History', 'PSAT/NMSQT', 'SAT/ACT (spring)', 'AP Exams (May)'],
                prep: 'Intensive SAT/ACT prep, register for exams, retake if needed'
              },
              {
                grade: '12th Grade',
                tests: ['Final SAT/ACT attempts', 'AP Exams', 'Any STAAR retakes'],
                prep: 'Final test attempts before college deadlines'
              }
            ].map((year, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{year.grade}</CardTitle>
                  <CardDescription>{year.prep}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-medium mb-2">Expected Tests:</h4>
                  <ul className="space-y-1">
                    {year.tests.map((test, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-2" />
                        {test}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Alert>
            <Calendar className="h-4 w-4" />
            <AlertDescription>
              <strong>Pro Tip:</strong> Start test preparation early and don't wait until senior year. 
              Many students benefit from taking the SAT/ACT multiple times to improve their scores.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}
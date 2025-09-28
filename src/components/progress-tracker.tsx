import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Checkbox } from './ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Alert, AlertDescription } from './ui/alert';
import { CheckCircle, Circle, Trophy, BookOpen, Target, Calendar } from 'lucide-react';

interface Requirement {
  id: string;
  subject: string;
  required: number;
  completed: number;
  courses: string[];
}

interface Milestone {
  id: string;
  title: string;
  description: string;
  grade: string;
  completed: boolean;
  category: 'academic' | 'testing' | 'college' | 'personal';
}

export function ProgressTracker() {
  const [requirements, setRequirements] = useState<Requirement[]>([
    { id: '1', subject: 'English', required: 4, completed: 2, courses: ['English I', 'English II'] },
    { id: '2', subject: 'Mathematics', required: 4, completed: 2, courses: ['Algebra I', 'Geometry'] },
    { id: '3', subject: 'Science', required: 4, completed: 1, courses: ['Biology'] },
    { id: '4', subject: 'Social Studies', required: 3, completed: 1, courses: ['World Geography'] },
    { id: '5', subject: 'Health', required: 0.5, completed: 0, courses: [] },
    { id: '6', subject: 'PE', required: 1, completed: 0.5, courses: ['PE I'] },
    { id: '7', subject: 'Fine Arts', required: 1, completed: 0, courses: [] },
    { id: '8', subject: 'CTE/Foreign Language', required: 1, completed: 0, courses: [] },
    { id: '9', subject: 'Electives', required: 7, completed: 2, courses: ['Spanish I', 'Computer Science'] },
  ]);

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: '1',
      title: 'Complete STAAR English I',
      description: 'Pass the required STAAR English I exam',
      grade: '9th',
      completed: true,
      category: 'testing'
    },
    {
      id: '2',
      title: 'Choose Endorsement Area',
      description: 'Select focus area for Foundation + Endorsement plan',
      grade: '10th',
      completed: false,
      category: 'academic'
    },
    {
      id: '3',
      title: 'Take PSAT/NMSQT',
      description: 'Practice test for SAT and potential National Merit qualification',
      grade: '10th',
      completed: false,
      category: 'testing'
    },
    {
      id: '4',
      title: 'Meet with Counselor',
      description: 'Review 4-year plan and course selections',
      grade: '10th',
      completed: true,
      category: 'academic'
    },
    {
      id: '5',
      title: 'Take SAT/ACT',
      description: 'Take college entrance exam',
      grade: '11th',
      completed: false,
      category: 'testing'
    },
    {
      id: '6',
      title: 'Complete FAFSA',
      description: 'Apply for federal financial aid',
      grade: '12th',
      completed: false,
      category: 'college'
    },
    {
      id: '7',
      title: 'Join Extracurricular Activity',
      description: 'Participate in clubs, sports, or volunteer work',
      grade: '9th-12th',
      completed: true,
      category: 'personal'
    }
  ]);

  const totalCreditsRequired = 26; // Foundation + Endorsement
  const totalCreditsCompleted = requirements.reduce((sum, req) => sum + req.completed, 0);
  const overallProgress = Math.round((totalCreditsCompleted / totalCreditsRequired) * 100);

  const toggleMilestone = (id: string) => {
    setMilestones(milestones.map(milestone =>
      milestone.id === id ? { ...milestone, completed: !milestone.completed } : milestone
    ));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'academic': return BookOpen;
      case 'testing': return Target;
      case 'college': return Trophy;
      case 'personal': return Circle;
      default: return Circle;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'testing': return 'bg-green-100 text-green-800';
      case 'college': return 'bg-purple-100 text-purple-800';
      case 'personal': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const completedMilestones = milestones.filter(m => m.completed).length;
  const milestoneProgress = Math.round((completedMilestones / milestones.length) * 100);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Progress Tracker</h1>
        <p className="text-lg text-muted-foreground">
          Track your progress toward graduation requirements and important milestones.
        </p>
      </div>

      {/* Overall Progress Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Graduation Progress</CardTitle>
            <CardDescription>Credits toward Foundation + Endorsement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">{totalCreditsCompleted}</span>
              <span className="text-sm text-muted-foreground">of {totalCreditsRequired} credits</span>
            </div>
            <Progress value={overallProgress} className="mb-2" />
            <p className="text-sm text-muted-foreground">{overallProgress}% complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Milestones</CardTitle>
            <CardDescription>Key achievements and tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl font-bold">{completedMilestones}</span>
              <span className="text-sm text-muted-foreground">of {milestones.length} completed</span>
            </div>
            <Progress value={milestoneProgress} className="mb-2" />
            <p className="text-sm text-muted-foreground">{milestoneProgress}% complete</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Current Status</CardTitle>
            <CardDescription>Based on typical progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">On Track</div>
              <p className="text-sm text-muted-foreground">
                You're making good progress toward graduation
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="requirements" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="requirements">Credit Requirements</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="requirements" className="space-y-6">
          <Alert>
            <BookOpen className="h-4 w-4" />
            <AlertDescription>
              Track your progress toward the 26 credits required for the Foundation + Endorsement program.
              This is the recommended graduation plan for college-bound students.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            {requirements.map((req) => {
              const progress = Math.round((req.completed / req.required) * 100);
              const isComplete = req.completed >= req.required;
              
              return (
                <Card key={req.id} className={isComplete ? 'border-green-200 bg-green-50' : ''}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {isComplete ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground" />
                        )}
                        <CardTitle className="text-lg">{req.subject}</CardTitle>
                      </div>
                      <Badge variant={isComplete ? 'default' : 'secondary'}>
                        {req.completed} / {req.required} credits
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={progress} className="mb-3" />
                    {req.courses.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Completed Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {req.courses.map((course, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-700 space-y-2">
              <p>• Complete Health and PE requirements (1.5 credits needed)</p>
              <p>• Choose and complete Fine Arts course (1 credit needed)</p>
              <p>• Select CTE or Foreign Language course (1 credit needed)</p>
              <p>• Continue with core subject sequences</p>
              <p>• Add electives to reach 26 total credits</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-6">
          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              These milestones help ensure you're prepared for graduation and college. 
              Check off items as you complete them to track your progress.
            </AlertDescription>
          </Alert>

          <div className="grid gap-4">
            {milestones.map((milestone) => {
              const Icon = getCategoryIcon(milestone.category);
              
              return (
                <Card key={milestone.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={milestone.completed}
                        onCheckedChange={() => toggleMilestone(milestone.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className={`text-lg ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                            {milestone.title}
                          </CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge className={getCategoryColor(milestone.category)}>
                              <Icon className="h-3 w-3 mr-1" />
                              {milestone.category}
                            </Badge>
                            <Badge variant="outline">{milestone.grade}</Badge>
                          </div>
                        </div>
                        <CardDescription className={milestone.completed ? 'line-through' : ''}>
                          {milestone.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add Custom Milestone</CardTitle>
              <CardDescription>Track personal goals and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                + Add Personal Milestone
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Immediate Next Steps
                </CardTitle>
                <CardDescription>Actions to take this semester</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Enroll in Health/PE course</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Select Fine Arts elective</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Meet with counselor for course planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Research endorsement areas</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  Long-term Goals
                </CardTitle>
                <CardDescription>Planning for junior and senior years</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Take AP courses in strong subjects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Prepare for SAT/ACT testing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Build college application profile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Circle className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Research scholarship opportunities</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-yellow-50 border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800">Recommendations Based on Your Progress</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-700 space-y-2">
              <p><strong>Academic:</strong> You're on track with core subjects. Consider adding Pre-AP courses in your stronger areas.</p>
              <p><strong>Extracurriculars:</strong> Great job participating in activities! Consider leadership roles or community service.</p>
              <p><strong>Testing:</strong> Start SAT/ACT prep early. Consider taking the PSAT in 10th grade for practice.</p>
              <p><strong>College Prep:</strong> Begin researching colleges and their admission requirements.</p>
            </CardContent>
          </Card>

          <Alert>
            <Target className="h-4 w-4" />
            <AlertDescription>
              <strong>Remember:</strong> This tracker is a guide. Always verify your specific requirements 
              with your school counselor, as policies may vary by district or change over time.
            </AlertDescription>
          </Alert>
        </TabsContent>
      </Tabs>
    </div>
  );
}
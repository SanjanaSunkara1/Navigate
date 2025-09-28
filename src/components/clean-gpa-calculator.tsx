import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Plus, Trash2, Calculator, Info, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
  type: 'regular' | 'honors' | 'ap';
}

export function CleanGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'English I', grade: 'A', credits: 1, type: 'regular' },
    { id: '2', name: 'Algebra I', grade: 'B', credits: 1, type: 'regular' },
    { id: '3', name: 'Pre-AP Biology', grade: 'A', credits: 1, type: 'honors' },
  ]);

  const [unweightedGPA, setUnweightedGPA] = useState(0);
  const [weightedGPA, setWeightedGPA] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);

  const gradePoints = {
    'A+': 4.0, 'A': 4.0, 'A-': 3.7,
    'B+': 3.3, 'B': 3.0, 'B-': 2.7,
    'C+': 2.3, 'C': 2.0, 'C-': 1.7,
    'D+': 1.3, 'D': 1.0, 'D-': 0.7,
    'F': 0.0
  };

  const getWeightBonus = (type: string) => {
    switch (type) {
      case 'honors': return 0.5;
      case 'ap': return 1.0;
      default: return 0.0;
    }
  };

  useEffect(() => {
    calculateGPA();
  }, [courses]);

  const calculateGPA = () => {
    if (courses.length === 0) {
      setUnweightedGPA(0);
      setWeightedGPA(0);
      setTotalCredits(0);
      return;
    }

    let totalUnweightedPoints = 0;
    let totalWeightedPoints = 0;
    let credits = 0;

    courses.forEach(course => {
      const basePoints = gradePoints[course.grade as keyof typeof gradePoints] || 0;
      const courseCredits = course.credits;
      
      totalUnweightedPoints += basePoints * courseCredits;
      totalWeightedPoints += (basePoints + getWeightBonus(course.type)) * courseCredits;
      credits += courseCredits;
    });

    setUnweightedGPA(credits > 0 ? totalUnweightedPoints / credits : 0);
    setWeightedGPA(credits > 0 ? totalWeightedPoints / credits : 0);
    setTotalCredits(credits);
  };

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      grade: 'A',
      credits: 1,
      type: 'regular'
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string | number) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const clearAll = () => {
    setCourses([]);
  };

  const getGPAStatus = (gpa: number) => {
    if (gpa >= 3.7) return { label: 'Excellent', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' };
    if (gpa >= 3.3) return { label: 'Good', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' };
    if (gpa >= 3.0) return { label: 'Satisfactory', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' };
    if (gpa >= 2.0) return { label: 'Needs Improvement', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300' };
    return { label: 'At Risk', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' };
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            GPA Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your weighted and unweighted GPA to track your academic progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Results Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Unweighted GPA */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-xl font-bold text-card-foreground">Unweighted GPA</h2>
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">{unweightedGPA.toFixed(3)}</div>
              <div className="text-sm text-muted-foreground mb-3">Out of 4.000</div>
              <Badge className={getGPAStatus(unweightedGPA).color}>
                {getGPAStatus(unweightedGPA).label}
              </Badge>
            </div>

            {/* Weighted GPA */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 mr-3 text-primary" />
                <h2 className="text-xl font-bold text-card-foreground">Weighted GPA</h2>
              </div>
              <div className="text-4xl font-bold mb-2 text-primary">{weightedGPA.toFixed(3)}</div>
              <div className="text-sm text-muted-foreground mb-3">With Course Bonuses</div>
              <Badge className={getGPAStatus(weightedGPA).color}>
                {getGPAStatus(weightedGPA).label}
              </Badge>
            </div>

            {/* Credits */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-bold mb-2 text-card-foreground">Total Credits</h3>
              <div className="text-2xl font-bold text-primary">{totalCredits}</div>
              <div className="text-sm text-muted-foreground">
                {totalCredits >= 22 ? 'Graduation requirement met!' : `${22 - totalCredits} more needed to graduate`}
              </div>
            </div>

            {/* Grade Scale */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-bold mb-4 text-card-foreground">Grade Scale</h3>
              <div className="space-y-2 text-sm">
                {Object.entries(gradePoints).map(([grade, points]) => (
                  <div key={grade} className="flex justify-between">
                    <span className="text-muted-foreground">{grade}</span>
                    <span className="text-card-foreground font-medium">{points.toFixed(1)}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-muted border-l-4 border-l-primary">
                <h4 className="font-medium text-card-foreground mb-1">Weight Bonuses:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Honors/Pre-AP: +0.5</div>
                  <div>AP/Dual Credit: +1.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Input Panel */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">Your Courses</h2>
                  <p className="text-muted-foreground">Add your courses to calculate your GPA</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={addCourse} className="flex items-center gap-2">
                    <Plus className="h-4 w-4" />
                    Add Course
                  </Button>
                  {courses.length > 0 && (
                    <Button onClick={clearAll} variant="outline">
                      Clear All
                    </Button>
                  )}
                </div>
              </div>

              {courses.length === 0 ? (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg mb-4">No courses added yet</p>
                  <Button onClick={addCourse}>Add Your First Course</Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Headers */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border">
                    <div className="col-span-4">Course Name</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-2">Credits</div>
                    <div className="col-span-3">Type</div>
                    <div className="col-span-1">Remove</div>
                  </div>

                  {/* Course Rows */}
                  {courses.map((course) => (
                    <div key={course.id} className="grid md:grid-cols-12 gap-4 items-center p-4 bg-muted/30 border border-border">
                      <div className="md:col-span-4">
                        <Input
                          placeholder="Enter course name"
                          value={course.name}
                          onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                          className="w-full"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <Select 
                          value={course.grade} 
                          onValueChange={(value) => updateCourse(course.id, 'grade', value)}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.keys(gradePoints).map(grade => (
                              <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-2">
                        <Select 
                          value={course.credits.toString()} 
                          onValueChange={(value) => updateCourse(course.id, 'credits', parseFloat(value))}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0.5">0.5</SelectItem>
                            <SelectItem value="1">1.0</SelectItem>
                            <SelectItem value="1.5">1.5</SelectItem>
                            <SelectItem value="2">2.0</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-3">
                        <Select 
                          value={course.type} 
                          onValueChange={(value) => updateCourse(course.id, 'type', value as 'regular' | 'honors' | 'ap')}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Regular</SelectItem>
                            <SelectItem value="honors">Honors/Pre-AP</SelectItem>
                            <SelectItem value="ap">AP/Dual Credit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCourse(course.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info Section */}
            <div className="mt-8 bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <Info className="h-5 w-5 mr-2 text-primary" />
                <h3 className="text-lg font-bold text-card-foreground">Important Notes</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">For College Admissions:</h4>
                  <ul className="space-y-1">
                    <li>• Most colleges prefer 3.0+ GPA</li>
                    <li>• Competitive schools want 3.5+</li>
                    <li>• Top universities expect 3.8+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-2">Texas Requirements:</h4>
                  <ul className="space-y-1">
                    <li>• 22+ credits needed to graduate</li>
                    <li>• Maintain 2.0+ GPA</li>
                    <li>• Weighted GPA affects class rank</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
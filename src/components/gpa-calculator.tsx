import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Plus, Trash2, Calculator, Info, BookOpen, GraduationCap } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  grade: string;
  credits: number;
  type: 'regular' | 'honors' | 'ap' | 'ib';
}

export function GPACalculator() {
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

  const getWeightedPoints = (grade: string, type: string) => {
    const basePoints = gradePoints[grade as keyof typeof gradePoints] || 0;
    
    switch (type) {
      case 'honors':
        // Honors/Pre-AP: 6.0 scale (add 2.0 to base)
        return Math.min(basePoints + 2.0, 6.0);
      case 'ap':
      case 'ib':
        // AP/IB: 6.0 scale (add 2.0 to base)
        return Math.min(basePoints + 2.0, 6.0);
      default:
        // Regular: 5.0 scale (add 1.0 to base)
        return Math.min(basePoints + 1.0, 5.0);
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
      const unweightedPoints = gradePoints[course.grade as keyof typeof gradePoints] || 0;
      const weightedPoints = getWeightedPoints(course.grade, course.type);
      const courseCredits = course.credits;
      
      totalUnweightedPoints += unweightedPoints * courseCredits;
      totalWeightedPoints += weightedPoints * courseCredits;
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

  const getGPAStatus = (gpa: number, isWeighted: boolean) => {
    const scale = isWeighted ? 6.0 : 4.0;
    const percentage = (gpa / scale) * 100;
    
    if (percentage >= 92) return { label: 'Excellent', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' };
    if (percentage >= 83) return { label: 'Good', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' };
    if (percentage >= 75) return { label: 'Satisfactory', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' };
    if (percentage >= 50) return { label: 'Needs Improvement', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' };
    return { label: 'At Risk', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' };
  };

  const getMaxScale = (type: string) => {
    switch (type) {
      case 'honors': return '6.0';
      case 'ap':
      case 'ib': return '6.0';
      default: return '5.0';
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            GPA Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Calculate your weighted and unweighted GPA to track your academic progress. 
            Understanding your GPA is crucial for college admissions and scholarship opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Results Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Unweighted GPA */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                <h2 className="text-xl font-bold text-card-foreground">Unweighted GPA</h2>
              </div>
              <div className="text-4xl font-bold mb-2 text-blue-600">{unweightedGPA.toFixed(3)}</div>
              <div className="text-sm text-muted-foreground mb-3">Out of 4.000</div>
              <Badge className={getGPAStatus(unweightedGPA, false).color}>
                {getGPAStatus(unweightedGPA, false).label}
              </Badge>
            </div>

            {/* Weighted GPA */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <Calculator className="h-6 w-6 mr-3 text-green-600" />
                <h2 className="text-xl font-bold text-card-foreground">Weighted GPA</h2>
              </div>
              <div className="text-4xl font-bold mb-2 text-green-600">{weightedGPA.toFixed(3)}</div>
              <div className="text-sm text-muted-foreground mb-3">Max possible varies by courses</div>
              <Badge className={getGPAStatus(weightedGPA, true).color}>
                {getGPAStatus(weightedGPA, true).label}
              </Badge>
            </div>

            {/* Credits */}
            <div className="bg-card border border-border p-6">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 mr-3 text-yellow-600" />
                <h3 className="text-lg font-bold text-card-foreground">Total Credits</h3>
              </div>
              <div className="text-2xl font-bold text-yellow-600 mb-2">{totalCredits}</div>
              <div className="text-sm text-muted-foreground">
                {totalCredits >= 22 ? (
                  <span className="text-green-600 font-medium">✓ Graduation requirement met!</span>
                ) : (
                  <span>{22 - totalCredits} more needed to graduate</span>
                )}
              </div>
            </div>

            {/* Grade Scale */}
            <div className="bg-card border border-border p-6">
              <h3 className="text-lg font-bold mb-4 text-card-foreground">Grade Scale</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">A+ (97-100)</span>
                  <span className="text-card-foreground font-medium">5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">A (93-96)</span>
                  <span className="text-card-foreground font-medium">5.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">A- (90-92)</span>
                  <span className="text-card-foreground font-medium">4.7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">B+ (87-89)</span>
                  <span className="text-card-foreground font-medium">4.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">B (83-86)</span>
                  <span className="text-card-foreground font-medium">4.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">B- (80-82)</span>
                  <span className="text-card-foreground font-medium">3.7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">C+ (77-79)</span>
                  <span className="text-card-foreground font-medium">3.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">C (73-76)</span>
                  <span className="text-card-foreground font-medium">3.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">C- (70-72)</span>
                  <span className="text-card-foreground font-medium">2.7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">D+ (67-69)</span>
                  <span className="text-card-foreground font-medium">2.3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">D (65-66)</span>
                  <span className="text-card-foreground font-medium">2.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">D- (60-64)</span>
                  <span className="text-card-foreground font-medium">1.7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">F (Below 60)</span>
                  <span className="text-card-foreground font-medium">1.0</span>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500">
                  <h4 className="font-medium text-card-foreground mb-1">Regular Courses:</h4>
                  <div className="text-sm text-muted-foreground">Max GPA: 5.0 (+1 point)</div>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-950 border-l-4 border-l-green-500">
                  <h4 className="font-medium text-card-foreground mb-1">Honors/Pre-AP:</h4>
                  <div className="text-sm text-muted-foreground">Max GPA: 6.0 (+2 points)</div>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500">
                  <h4 className="font-medium text-card-foreground mb-1">AP/IB/Dual Credit:</h4>
                  <div className="text-sm text-muted-foreground">Max GPA: 6.0 (+2 points)</div>
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
                  <p className="text-muted-foreground">Add your courses to calculate your GPA accurately</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={addCourse} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
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
                  <p className="text-muted-foreground mb-6">
                    Start by adding your current courses to see your GPA calculation
                  </p>
                  <Button onClick={addCourse} className="bg-blue-600 hover:bg-blue-700">
                    Add Your First Course
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Headers */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b border-border">
                    <div className="col-span-4">Course Name</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-2">Credits</div>
                    <div className="col-span-3">Type (Max Scale)</div>
                    <div className="col-span-1">Remove</div>
                  </div>

                  {/* Course Rows */}
                  {courses.map((course) => (
                    <div key={course.id} className="grid md:grid-cols-12 gap-4 items-center p-4 bg-muted/30 border border-border">
                      <div className="md:col-span-4">
                        <Input
                          placeholder="Enter course name (e.g., AP Biology)"
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
                            <SelectItem value="0.5">0.5 (Semester)</SelectItem>
                            <SelectItem value="1">1.0 (Full Year)</SelectItem>
                            <SelectItem value="1.5">1.5</SelectItem>
                            <SelectItem value="2">2.0</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-3">
                        <Select 
                          value={course.type} 
                          onValueChange={(value) => updateCourse(course.id, 'type', value as 'regular' | 'honors' | 'ap' | 'ib')}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Regular (5.0)</SelectItem>
                            <SelectItem value="honors">Honors/Pre-AP (6.0)</SelectItem>
                            <SelectItem value="ap">AP (6.0)</SelectItem>
                            <SelectItem value="ib">IB (6.0)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="md:col-span-1">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeCourse(course.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
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
                <Info className="h-5 w-5 mr-2 text-blue-600" />
                <h3 className="text-lg font-bold text-card-foreground">Understanding GPA in the U.S.</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <h4 className="font-medium text-card-foreground mb-3">For College Admissions:</h4>
                  <ul className="space-y-2">
                    <li>• <span className="font-medium">Community Colleges:</span> Usually accept 2.0+ GPA</li>
                    <li>• <span className="font-medium">State Universities:</span> Typically require 3.0+ GPA</li>
                    <li>• <span className="font-medium">Competitive Schools:</span> Prefer 3.5+ GPA</li>
                    <li>• <span className="font-medium">Top Universities:</span> Expect 3.8+ unweighted GPA</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-card-foreground mb-3">Texas Requirements:</h4>
                  <ul className="space-y-2">
                    <li>• <span className="font-medium">Graduation:</span> 22+ credits total</li>
                    <li>• <span className="font-medium">Minimum GPA:</span> Maintain 2.0+ to stay enrolled</li>
                    <li>• <span className="font-medium">Class Rank:</span> Determined by weighted GPA</li>
                    <li>• <span className="font-medium">Scholarships:</span> Many require 3.0+ GPA</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500">
                <h4 className="font-medium text-card-foreground mb-2">💡 Pro Tip for New Students:</h4>
                <p className="text-sm text-muted-foreground">
                  In the U.S., GPA is cumulative across all four years of high school. 
                  Colleges will see your entire academic record, so consistency matters more than perfection. 
                  Taking challenging courses (Honors, AP, IB) can boost your weighted GPA and show academic rigor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
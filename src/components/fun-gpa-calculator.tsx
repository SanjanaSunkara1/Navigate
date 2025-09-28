import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Plus, Trash2, Calculator, TrendingUp, Award, BookOpen } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  grade: string;
  type: 'unweighted' | 'weighted';
}

export function FunGPACalculator() {
  const [courses, setCourses] = useState<Course[]>([
    { id: '1', name: 'English I', grade: 'A', type: 'unweighted' },
    { id: '2', name: 'Algebra I', grade: 'B', type: 'unweighted' },
    { id: '3', name: 'Pre-AP Biology', grade: 'A', type: 'weighted' },
  ]);

  const [unweightedGPA, setUnweightedGPA] = useState(0);
  const [weightedGPA, setWeightedGPA] = useState(0);

  const gradePoints = {
    'A': 4.0,
    'B': 3.0,
    'C': 2.0,
    'D': 1.0,
    'F': 0.0
  };

  useEffect(() => {
    calculateGPA();
  }, [courses]);

  const calculateGPA = () => {
    if (courses.length === 0) {
      setUnweightedGPA(0);
      setWeightedGPA(0);
      return;
    }

    let totalUnweighted = 0;
    let totalWeighted = 0;

    courses.forEach(course => {
      const basePoints = gradePoints[course.grade as keyof typeof gradePoints] || 0;
      totalUnweighted += basePoints;
      
      if (course.type === 'weighted') {
        totalWeighted += basePoints + 0.5; // Adding 0.5 for weighted courses
      } else {
        totalWeighted += basePoints;
      }
    });

    setUnweightedGPA(totalUnweighted / courses.length);
    setWeightedGPA(totalWeighted / courses.length);
  };

  const addCourse = () => {
    const newCourse: Course = {
      id: Date.now().toString(),
      name: '',
      grade: 'A',
      type: 'unweighted'
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (id: string) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  const updateCourse = (id: string, field: keyof Course, value: string) => {
    setCourses(courses.map(course =>
      course.id === id ? { ...course, [field]: value } : course
    ));
  };

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.5) return 'from-green-400 to-emerald-500';
    if (gpa >= 3.0) return 'from-blue-400 to-cyan-500';
    if (gpa >= 2.5) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  const getGPALevel = (gpa: number) => {
    if (gpa >= 3.7) return 'Excellent';
    if (gpa >= 3.3) return 'Good';
    if (gpa >= 3.0) return 'Satisfactory';
    if (gpa >= 2.0) return 'Needs Improvement';
    return 'At Risk';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              GPA Calculator
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate your weighted and unweighted GPA to track your academic progress
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* GPA Results */}
          <div className="lg:col-span-1 space-y-6">
            {/* Unweighted GPA */}
            <div className={`bg-gradient-to-br ${getGPAColor(unweightedGPA)} rounded-3xl p-8 text-white shadow-2xl`}>
              <div className="flex items-center mb-4">
                <BookOpen className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Unweighted GPA</h2>
              </div>
              <div className="text-5xl font-bold mb-2">{unweightedGPA.toFixed(2)}</div>
              <div className="text-lg opacity-90">Standard 4.0 Scale</div>
              <Badge className="bg-white/20 text-white mt-4">
                {getGPALevel(unweightedGPA)}
              </Badge>
            </div>

            {/* Weighted GPA */}
            <div className={`bg-gradient-to-br ${getGPAColor(weightedGPA)} rounded-3xl p-8 text-white shadow-2xl`}>
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Weighted GPA</h2>
              </div>
              <div className="text-5xl font-bold mb-2">{weightedGPA.toFixed(2)}</div>
              <div className="text-lg opacity-90">With Course Bonuses</div>
              <Badge className="bg-white/20 text-white mt-4">
                {getGPALevel(weightedGPA)}
              </Badge>
            </div>

            {/* GPA Guide */}
            <div className="bg-white rounded-3xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-gray-900">GPA Guide</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">A (90-100)</span>
                  <Badge className="bg-green-100 text-green-800">4.0 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">B (80-89)</span>
                  <Badge className="bg-blue-100 text-blue-800">3.0 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">C (70-79)</span>
                  <Badge className="bg-yellow-100 text-yellow-800">2.0 points</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">D (60-69)</span>
                  <Badge className="bg-orange-100 text-orange-800">1.0 point</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">F (Below 60)</span>
                  <Badge className="bg-red-100 text-red-800">0.0 points</Badge>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-purple-50 rounded-2xl">
                <h4 className="font-bold text-purple-800 mb-2">Weighted Bonus:</h4>
                <p className="text-sm text-purple-700">
                  Pre-AP/Honors courses add +0.5 points to your GPA!
                </p>
              </div>
            </div>
          </div>

          {/* Course Input */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Courses</h2>
                  <p className="text-gray-600">Add your courses to calculate your GPA</p>
                </div>
                <Button 
                  onClick={addCourse}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-2xl font-medium"
                >
                  <Plus className="h-5 w-5 mr-2" />
                  Add Course
                </Button>
              </div>

              {courses.length === 0 ? (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500 text-lg">No courses added yet</p>
                  <Button onClick={addCourse} className="mt-4">
                    Add Your First Course
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Course Headers */}
                  <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-medium text-gray-500 pb-2 border-b">
                    <div className="col-span-5">Course Name</div>
                    <div className="col-span-2">Grade</div>
                    <div className="col-span-3">Course Type</div>
                    <div className="col-span-1">Points</div>
                    <div className="col-span-1">Remove</div>
                  </div>

                  {/* Course Rows */}
                  {courses.map((course) => {
                    const basePoints = gradePoints[course.grade as keyof typeof gradePoints] || 0;
                    const totalPoints = course.type === 'weighted' ? basePoints + 0.5 : basePoints;
                    
                    return (
                      <div key={course.id} className="grid md:grid-cols-12 gap-4 items-center p-4 bg-gray-50 rounded-2xl">
                        <div className="md:col-span-5">
                          <Input
                            placeholder="Enter course name"
                            value={course.name}
                            onChange={(e) => updateCourse(course.id, 'name', e.target.value)}
                            className="border-0 bg-white"
                          />
                        </div>
                        
                        <div className="md:col-span-2">
                          <Select 
                            value={course.grade} 
                            onValueChange={(value) => updateCourse(course.id, 'grade', value)}
                          >
                            <SelectTrigger className="border-0 bg-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="A">A</SelectItem>
                              <SelectItem value="B">B</SelectItem>
                              <SelectItem value="C">C</SelectItem>
                              <SelectItem value="D">D</SelectItem>
                              <SelectItem value="F">F</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="md:col-span-3">
                          <Select 
                            value={course.type} 
                            onValueChange={(value) => updateCourse(course.id, 'type', value as 'unweighted' | 'weighted')}
                          >
                            <SelectTrigger className="border-0 bg-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="unweighted">Regular</SelectItem>
                              <SelectItem value="weighted">Pre-AP/Honors</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="md:col-span-1">
                          <Badge className={`${course.type === 'weighted' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                            {totalPoints.toFixed(1)}
                          </Badge>
                        </div>

                        <div className="md:col-span-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeCourse(course.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* GPA Insights */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl p-6 text-white">
            <Award className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">College Ready</h3>
            <p className="text-blue-100 text-sm">
              Most colleges prefer a 3.0+ GPA. Your weighted GPA of {weightedGPA.toFixed(2)} 
              {weightedGPA >= 3.0 ? ' meets this standard!' : ' needs improvement.'}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-6 text-white">
            <TrendingUp className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Class Rank Impact</h3>
            <p className="text-green-100 text-sm">
              Texas colleges use weighted GPA for class rank. Taking advanced courses can significantly boost your ranking!
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl p-6 text-white">
            <Calculator className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-bold mb-2">Keep Improving</h3>
            <p className="text-purple-100 text-sm">
              Your GPA can change! Focus on strong grades in challenging courses to see the biggest improvement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { CheckCircle, Circle, Star, AlertTriangle, Trophy, BookOpen, FileText } from 'lucide-react';

interface Subject {
  name: string;
  required: number;
  completed: number;
  color: string;
  icon: any;
}

export function FunGraduationRequirements() {
  const [subjects, setSubjects] = useState<Subject[]>([
    { name: 'English', required: 4, completed: 2, color: 'from-red-400 to-red-600', icon: BookOpen },
    { name: 'Math', required: 4, completed: 2, color: 'from-blue-400 to-blue-600', icon: BookOpen },
    { name: 'Science', required: 4, completed: 1, color: 'from-green-400 to-green-600', icon: BookOpen },
    { name: 'Social Studies', required: 3, completed: 1, color: 'from-purple-400 to-purple-600', icon: BookOpen },
    { name: 'PE', required: 1, completed: 0.5, color: 'from-orange-400 to-orange-600', icon: BookOpen },
    { name: 'Health', required: 0.5, completed: 0, color: 'from-pink-400 to-pink-600', icon: BookOpen },
    { name: 'Fine Arts', required: 1, completed: 0, color: 'from-indigo-400 to-indigo-600', icon: BookOpen },
    { name: 'Electives', required: 7, completed: 3, color: 'from-teal-400 to-teal-600', icon: BookOpen },
  ]);

  const staarTests = [
    { test: 'English I EOC', completed: true, required: true },
    { test: 'English II EOC', completed: true, required: true },
    { test: 'Algebra I EOC', completed: true, required: true },
    { test: 'Biology EOC', completed: false, required: true },
    { test: 'U.S. History EOC', completed: false, required: true },
  ];

  const totalRequired = subjects.reduce((sum, subject) => sum + subject.required, 0);
  const totalCompleted = subjects.reduce((sum, subject) => sum + subject.completed, 0);
  const overallProgress = Math.round((totalCompleted / totalRequired) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Graduation Requirements
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Track your progress toward graduation and understand what you need to succeed
          </p>
          
          {/* Overall Progress Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Your Progress</h2>
                <p className="text-gray-600">Foundation + Endorsement Program</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-600">{totalCompleted}</div>
                <div className="text-sm text-gray-500">of {totalRequired} credits</div>
              </div>
            </div>
            
            <Progress value={overallProgress} className="h-4 mb-4" />
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">{overallProgress}% Complete</span>
              <span className="text-gray-500">{totalRequired - totalCompleted} credits remaining</span>
            </div>
          </div>
        </div>

        {/* Credit Requirements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Subject Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const progress = Math.round((subject.completed / subject.required) * 100);
              const isComplete = subject.completed >= subject.required;
              const Icon = subject.icon;
              
              return (
                <div key={index} className="group">
                  <div className={`bg-gradient-to-br ${subject.color} rounded-3xl p-6 text-white transform group-hover:scale-105 transition-all duration-300 shadow-xl`}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8" />
                      {isComplete ? (
                        <CheckCircle className="h-6 w-6 text-green-300" />
                      ) : (
                        <Circle className="h-6 w-6 text-white/50" />
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{subject.name}</h3>
                    <div className="text-2xl font-bold mb-2">
                      {subject.completed} / {subject.required}
                    </div>
                    <div className="text-sm opacity-90">credits</div>
                    
                    <div className="mt-4">
                      <div className="bg-white/20 rounded-full h-2 mb-2">
                        <div 
                          className="bg-white rounded-full h-2 transition-all duration-500"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                      <div className="text-sm opacity-90">{progress}% complete</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* STAAR Tests */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8">
            <h2 className="text-3xl font-bold mb-4">STAAR Tests Required</h2>
            <p className="text-xl text-blue-100">
              You must pass these state tests to graduate. Don't worry - you can retake them if needed!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {staarTests.map((test, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 shadow-lg ${test.completed ? 'ring-2 ring-green-400' : ''}`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-900">{test.test}</h3>
                  {test.completed ? (
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  ) : (
                    <Circle className="h-8 w-8 text-gray-300" />
                  )}
                </div>
                
                <Badge className={test.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                  {test.completed ? 'Passed' : 'Not Taken'}
                </Badge>
                
                {test.required && (
                  <div className="mt-3 text-sm text-gray-600">
                    <AlertTriangle className="h-4 w-4 inline mr-1" />
                    Required for graduation
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* High School Programs */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">High School Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foundation Program */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center mr-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Foundation Program</h3>
                  <Badge className="bg-gray-100 text-gray-700">22 Credits</Badge>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                The basic graduation plan. Meets minimum requirements but may limit college options.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Minimum for graduation</span>
                  <span className="font-medium">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>College preparation</span>
                  <span className="text-yellow-600">Limited</span>
                </div>
                <div className="flex justify-between">
                  <span>Scholarship eligibility</span>
                  <span className="text-red-600">Reduced</span>
                </div>
              </div>
            </div>

            {/* Foundation + Endorsement */}
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-3xl p-8 text-white shadow-xl ring-4 ring-green-200">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Foundation + Endorsement</h3>
                  <Badge className="bg-white/20 text-white">26 Credits</Badge>
                </div>
              </div>
              
              <p className="text-green-100 mb-6">
                The RECOMMENDED plan! Better college preparation and more opportunities.
              </p>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Graduation requirement</span>
                  <span className="font-medium">✓</span>
                </div>
                <div className="flex justify-between">
                  <span>College preparation</span>
                  <span className="text-green-200">Excellent</span>
                </div>
                <div className="flex justify-between">
                  <span>Scholarship eligibility</span>
                  <span className="text-green-200">Maximum</span>
                </div>
              </div>
              
              <div className="mt-6 bg-white/20 rounded-2xl p-4">
                <h4 className="font-bold mb-2">Endorsement Areas:</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>• STEM</div>
                  <div>• Business</div>
                  <div>• Arts & Humanities</div>
                  <div>• Public Services</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GPA Recommendation */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 text-white text-center">
          <Star className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Important GPA Note</h2>
          <p className="text-xl text-yellow-100 mb-6">
            Maintain a GPA of 2.0 or higher to stay on track for graduation. 
            For college admission, aim for 3.0 or higher!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold mb-1">2.0+</div>
              <div className="text-yellow-100">Graduation Eligible</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold mb-1">3.0+</div>
              <div className="text-yellow-100">College Ready</div>
            </div>
            <div className="bg-white/20 rounded-2xl p-4">
              <div className="text-2xl font-bold mb-1">3.5+</div>
              <div className="text-yellow-100">Scholarship Competitive</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
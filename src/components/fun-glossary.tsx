import { useState } from 'react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Search, BookOpen, Star, Lightbulb, GraduationCap } from 'lucide-react';

interface Term {
  term: string;
  definition: string;
  category: 'academic' | 'testing' | 'college' | 'general';
  featured?: boolean;
}

export function FunGlossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const glossaryTerms: Term[] = [
    {
      term: 'GPA',
      definition: 'Grade Point Average - A numerical representation of your academic performance calculated by averaging the points earned in all courses (typically on a 4.0 scale).',
      category: 'academic',
      featured: true
    },
    {
      term: 'Weighted GPA',
      definition: 'A GPA calculation that gives additional points for advanced courses. Pre-AP/Honors courses add 0.5 points, while AP/Dual Credit courses add 1.0 point.',
      category: 'academic',
      featured: true
    },
    {
      term: 'AP (Advanced Placement)',
      definition: 'College-level courses offered in high school. Students can earn college credit by scoring 3 or higher on AP exams taken in May.',
      category: 'academic',
      featured: true
    },
    {
      term: 'Credits',
      definition: 'Units of measurement for completed coursework. Most courses are worth 1 credit. You need 22+ credits to graduate in Texas.',
      category: 'academic',
      featured: true
    },
    {
      term: 'STAAR',
      definition: 'State of Texas Assessments of Academic Readiness. Required state tests in English I & II, Algebra I, Biology, and U.S. History for graduation.',
      category: 'testing',
      featured: true
    },
    {
      term: 'Transcript',
      definition: 'Official record of all courses taken, grades earned, GPA, and credits completed during high school.',
      category: 'academic'
    },
    {
      term: 'Class Rank',
      definition: 'Your academic standing compared to other students in your graduating class, based on weighted GPA.',
      category: 'academic'
    },
    {
      term: 'Pre-AP',
      definition: 'Pre-Advanced Placement courses that prepare students for AP classes. More rigorous than regular courses and add 0.5 points to GPA.',
      category: 'academic'
    },
    {
      term: 'Dual Credit',
      definition: 'Courses that earn both high school and college credit simultaneously, usually taught at colleges or by college-certified teachers.',
      category: 'academic'
    },
    {
      term: 'SAT',
      definition: 'Standardized college entrance exam with Reading/Writing and Math sections. Scored 400-1600. Optional for graduation but required for most colleges.',
      category: 'testing'
    },
    {
      term: 'ACT',
      definition: 'Alternative college entrance exam with English, Math, Reading, and Science sections. Scored 1-36.',
      category: 'testing'
    },
    {
      term: 'PSAT',
      definition: 'Practice SAT taken in 10th or 11th grade. Also qualifies students for National Merit Scholarship competition.',
      category: 'testing'
    },
    {
      term: 'FAFSA',
      definition: 'Free Application for Federal Student Aid. Required form for most college financial aid, including grants, loans, and work-study programs.',
      category: 'college'
    },
    {
      term: 'Foundation High School Program',
      definition: 'Basic graduation plan in Texas requiring 22 credits. Foundation + Endorsement (26 credits) is recommended for college-bound students.',
      category: 'academic'
    },
    {
      term: 'Endorsement',
      definition: 'Specialized area of focus within the Foundation + Endorsement graduation plan, such as STEM, Business, Arts, or Public Services.',
      category: 'academic'
    },
    {
      term: 'CTE',
      definition: 'Career and Technical Education - courses that provide job skills and career preparation in areas like technology, health sciences, and business.',
      category: 'academic'
    },
    {
      term: 'Common Application',
      definition: 'Standardized college application accepted by many private colleges and universities nationwide.',
      category: 'college'
    },
    {
      term: 'ApplyTexas',
      definition: 'Common application system for Texas public universities and many private colleges in Texas.',
      category: 'college'
    },
    {
      term: 'Naviance',
      definition: 'Online platform used by schools for college and career planning, including course planning, college research, and application tracking.',
      category: 'college'
    },
    {
      term: 'EFC',
      definition: 'Expected Family Contribution - the amount your family is expected to contribute toward college costs, calculated from FAFSA information.',
      category: 'college'
    },
    {
      term: 'Top 10%',
      definition: 'Students ranked in the top 10% of their graduating class by weighted GPA. Guarantees admission to most Texas public universities.',
      category: 'general'
    },
    {
      term: 'Valedictorian',
      definition: 'Student with the highest weighted GPA in the graduating class, typically gives a speech at graduation.',
      category: 'general'
    },
    {
      term: 'Electives',
      definition: 'Courses students choose based on interests and goals, including fine arts, foreign languages, and additional core courses.',
      category: 'academic'
    },
    {
      term: 'EOC',
      definition: 'End of Course exams - another name for STAAR tests taken at the completion of specific courses.',
      category: 'testing'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Terms', color: 'bg-gray-100 text-gray-800' },
    { id: 'academic', label: 'Academic', color: 'bg-blue-100 text-blue-800' },
    { id: 'testing', label: 'Testing', color: 'bg-green-100 text-green-800' },
    { id: 'college', label: 'College', color: 'bg-purple-100 text-purple-800' },
    { id: 'general', label: 'General', color: 'bg-orange-100 text-orange-800' }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredTerms = glossaryTerms.filter(term => term.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'testing': return 'bg-green-100 text-green-800';
      case 'college': return 'bg-purple-100 text-purple-800';
      case 'general': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-green-50 to-blue-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
              Essential Terms Glossary
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the vocabulary of U.S. high school education with clear, simple definitions
          </p>
        </div>

        {/* Featured Terms */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Must-Know Terms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTerms.map((term, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-yellow-200">
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">{term.term}</h3>
                  <Badge className={`ml-auto ${getCategoryColor(term.category)}`}>
                    {term.category}
                  </Badge>
                </div>
                <p className="text-gray-600 leading-relaxed">{term.definition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
          <div className="flex items-center mb-6">
            <Search className="h-8 w-8 text-teal-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Search All Terms</h2>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search terms and definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-teal-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-teal-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  variant="ghost"
                >
                  {category.label}
                </Button>
              ))}
            </div>
            
            <div className="text-center text-gray-600">
              Showing {filteredTerms.length} of {glossaryTerms.length} terms
            </div>
          </div>
        </div>

        {/* Terms List */}
        <div className="space-y-6">
          {filteredTerms.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center shadow-xl">
              <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No terms found</h3>
              <p className="text-gray-500">Try adjusting your search or selecting a different category</p>
            </div>
          ) : (
            <div className="grid gap-6">
              {filteredTerms.map((term, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{term.term}</h3>
                    <Badge className={getCategoryColor(term.category)}>
                      {term.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{term.definition}</p>
                  {term.featured && (
                    <div className="mt-4 flex items-center text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">Essential Term</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Study Tips */}
        <div className="mt-16 bg-gradient-to-r from-teal-500 to-green-600 rounded-3xl p-8 text-white">
          <div className="text-center">
            <Lightbulb className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Study Tips</h2>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Understanding these terms will help you navigate high school more confidently and communicate 
              effectively with teachers, counselors, and college admissions officers.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-2xl p-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Review Regularly</h3>
                <p className="text-teal-100 text-sm">Go through these terms periodically to keep them fresh in your memory</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Use in Context</h3>
                <p className="text-teal-100 text-sm">Try using these terms when talking to your counselor or parents</p>
              </div>
              <div className="bg-white/20 rounded-2xl p-6">
                <Star className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Ask Questions</h3>
                <p className="text-teal-100 text-sm">Don't be afraid to ask if you hear a term you don't understand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
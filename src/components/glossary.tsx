import { useState } from 'react';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Search, BookOpen, ExternalLink } from 'lucide-react';

const glossaryTerms = [
  {
    term: 'AP (Advanced Placement)',
    category: 'Courses',
    definition: 'College-level courses offered in high school. Students can earn college credit by scoring well (typically 3 or higher on a 5-point scale) on AP exams taken in May. These courses are more rigorous than regular classes and demonstrate to colleges that students can handle challenging coursework.',
    relatedTerms: ['Dual Credit', 'IB', 'Honors', 'Pre-AP']
  },
  {
    term: 'ACT',
    category: 'Testing',
    definition: 'A standardized test used for college admissions. The ACT consists of four sections: English, Mathematics, Reading, and Science, with an optional Writing section. Scores range from 1-36, with the composite score being the average of all four sections.',
    relatedTerms: ['SAT', 'PSAT', 'Standardized Tests']
  },
  {
    term: 'Class Rank',
    category: 'Academic',
    definition: 'Your academic standing compared to other students in your graduating class, usually based on weighted GPA. In Texas, students in the top 6% of their class are guaranteed admission to UT Austin, and top 10% students are guaranteed admission to most Texas public universities.',
    relatedTerms: ['Weighted GPA', 'Top 10%', 'Valedictorian', 'Salutatorian']
  },
  {
    term: 'Credit',
    category: 'Academic',
    definition: 'A unit that represents the successful completion of a course. Most high school courses are worth 1 credit (full year) or 0.5 credits (semester). Texas requires 22 credits minimum for graduation, with specific requirements for each subject area.',
    relatedTerms: ['Graduation Requirements', 'Carnegie Unit', 'Semester', 'Course Load']
  },
  {
    term: 'CTE (Career and Technical Education)',
    category: 'Courses',
    definition: 'Educational programs that prepare students for careers through hands-on learning and real-world experience. CTE courses include fields like healthcare, business, agriculture, engineering, and technology. Many CTE programs offer industry certifications.',
    relatedTerms: ['Certification', 'Internship', 'Apprenticeship', 'Workforce Ready']
  },
  {
    term: 'Dual Credit/Dual Enrollment',
    category: 'Courses',
    definition: 'Courses that allow high school students to earn both high school and college credit simultaneously. These are actual college courses taught by college-qualified instructors, either at the high school or college campus.',
    relatedTerms: ['AP', 'OnRamps', 'Concurrent Enrollment', 'College Credit']
  },
  {
    term: 'Endorsement',
    category: 'Graduation',
    definition: 'A specialized area of study that appears on your transcript and diploma, requiring 4+ credits in a specific field. Texas endorsement areas include STEM, Business & Industry, Public Services, Arts & Humanities, and Multidisciplinary Studies.',
    relatedTerms: ['Distinguished Achievement', 'Foundation Program', 'Academy', 'Specialization']
  },
  {
    term: 'Extracurricular Activities',
    category: 'Activities',
    definition: 'Clubs, sports, organizations, and activities that take place outside of regular classroom instruction. These help develop leadership skills, explore interests, and enhance college applications. Examples include student government, debate team, athletics, and volunteer work.',
    relatedTerms: ['Leadership', 'Clubs', 'Volunteer Work', 'Community Service']
  },
  {
    term: 'FAFSA',
    category: 'Financial Aid',
    definition: 'Free Application for Federal Student Aid - the form students must complete to be eligible for federal financial aid for college, including grants, loans, and work-study programs. It becomes available October 1st each year.',
    relatedTerms: ['Financial Aid', 'Pell Grant', 'Student Loans', 'EFC']
  },
  {
    term: 'GPA (Grade Point Average)',
    category: 'Academic',
    definition: 'A numerical calculation that represents your overall academic performance. Unweighted GPA uses a 4.0 scale regardless of course difficulty. Weighted GPA gives extra points for challenging courses: regular courses (5.0 scale), Honors/Pre-AP (6.0 scale), AP/IB/Dual Credit (6.0 scale).',
    relatedTerms: ['Weighted GPA', 'Unweighted GPA', 'Class Rank', 'Transcript']
  },
  {
    term: 'Graduation Stole',
    category: 'Recognition',
    definition: 'A ceremonial sash worn at graduation to honor achievements, participation, or membership in specific programs or organizations. Unlike endorsements, stoles are visual recognition at the ceremony but don\'t appear on transcripts.',
    relatedTerms: ['Endorsement', 'Graduation', 'Honor Society', 'Academy']
  },
  {
    term: 'Honors Course',
    category: 'Courses',
    definition: 'Advanced courses that cover material at a faster pace and greater depth than regular courses. Honors courses typically carry extra weight in GPA calculations and help prepare students for AP or IB courses.',
    relatedTerms: ['Pre-AP', 'AP', 'Weighted GPA', 'Academic Rigor']
  },
  {
    term: 'IB (International Baccalaureate)',
    category: 'Courses',
    definition: 'An internationally recognized program that focuses on critical thinking, global perspective, and community service. IB programs are comprehensive two-year courses that often provide college credit and are highly regarded by universities worldwide.',
    relatedTerms: ['AP', 'Dual Credit', 'College Credit', 'International']
  },
  {
    term: 'Internship',
    category: 'Experience',
    definition: 'A temporary work experience that provides hands-on learning in a specific career field. Internships can be paid or unpaid and help students explore careers, build professional skills, and make industry connections.',
    relatedTerms: ['Job Shadowing', 'Work Experience', 'Career Exploration', 'Professional Skills']
  },
  {
    term: 'OnRamps',
    category: 'Courses',
    definition: 'A University of Texas program that offers college courses taught at high schools by specially trained teachers. Students earn both high school and UT college credit while staying in their familiar school environment.',
    relatedTerms: ['Dual Credit', 'UT Austin', 'College Credit', 'University Partnership']
  },
  {
    term: 'Pre-AP',
    category: 'Courses',
    definition: 'Preparatory courses designed to build skills and knowledge needed for success in AP courses. Pre-AP courses are more rigorous than regular courses and typically receive weighted GPA points.',
    relatedTerms: ['AP', 'Honors', 'Weighted GPA', 'College Prep']
  },
  {
    term: 'Resume',
    category: 'Professional',
    definition: 'A one-page document that summarizes your education, activities, skills, and experiences in a professional format. Resumes are used for college applications, scholarship applications, internships, and job applications.',
    relatedTerms: ['Portfolio', 'College Application', 'Professional Skills', 'Work Experience']
  },
  {
    term: 'SAT',
    category: 'Testing',
    definition: 'A standardized test widely used for college admissions. The SAT consists of Evidence-Based Reading and Writing and Math sections, with scores ranging from 200-800 per section (total 400-1600). Many colleges also consider SAT Subject Tests.',
    relatedTerms: ['ACT', 'PSAT', 'College Board', 'Standardized Tests']
  },
  {
    term: 'STAAR (State of Texas Assessments of Academic Readiness)',
    category: 'Testing',
    definition: 'State-required standardized tests that students must pass to graduate. Required STAAR tests include English I & II, Algebra I, Biology, and U.S. History. Students have multiple opportunities to retake tests if needed.',
    relatedTerms: ['Graduation Requirements', 'State Testing', 'EOC (End of Course)', 'Texas Education']
  },
  {
    term: 'Transcript',
    category: 'Academic',
    definition: 'Your official academic record that shows all courses taken, grades received, credits earned, GPA, and graduation information. Transcripts are required for college applications and job applications.',
    relatedTerms: ['GPA', 'Credits', 'Graduation', 'Academic Record']
  },
  {
    term: 'Valedictorian',
    category: 'Recognition',
    definition: 'The student with the highest academic rank in the graduating class, typically based on weighted GPA. The valedictorian usually gives a speech at graduation and receives special recognition.',
    relatedTerms: ['Salutatorian', 'Class Rank', 'Weighted GPA', 'Academic Achievement']
  },
  {
    term: 'Volunteer Work/Community Service',
    category: 'Activities',
    definition: 'Unpaid work performed to benefit the community or specific organizations. Volunteer work demonstrates civic responsibility, develops life skills, and enhances college applications. Many schools require community service hours for graduation.',
    relatedTerms: ['Extracurricular Activities', 'Leadership', 'Character Development', 'College Applications']
  },
  {
    term: 'Weighted GPA',
    category: 'Academic',
    definition: 'A GPA calculation that gives extra points for challenging courses. In Texas, regular courses count on a 5.0 scale, while Honors/Pre-AP, AP, IB, and Dual Credit courses count on a 6.0 scale. Used for class rank and some college admissions.',
    relatedTerms: ['Unweighted GPA', 'Class Rank', 'AP', 'Honors', 'Academic Rigor']
  },
  {
    term: 'Work-Study',
    category: 'Financial Aid',
    definition: 'A federal financial aid program that provides part-time employment for students with financial need, allowing them to earn money to help pay for college expenses while attending school.',
    relatedTerms: ['FAFSA', 'Financial Aid', 'Part-time Employment', 'College Funding']
  }
];

const categories = ['All', 'Academic', 'Courses', 'Testing', 'Activities', 'Graduation', 'Financial Aid', 'Recognition', 'Experience', 'Professional'];

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Essential Terms Glossary
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master the vocabulary of U.S. high school education. Understanding these terms will help you 
            navigate conversations with counselors, teachers, and college admissions officers confidently.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-card border border-border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search terms or definitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white' 
                    : 'hover:bg-blue-50 dark:hover:bg-blue-950'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredTerms.length} of {glossaryTerms.length} terms
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground text-lg mb-4">No terms found</p>
              <p className="text-muted-foreground">Try adjusting your search or selecting a different category</p>
            </div>
          ) : (
            filteredTerms.map((term, index) => (
              <div key={index} className="bg-card border border-border p-6 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-blue-600 mr-3">{term.term}</h3>
                    <Badge variant="outline" className="text-xs">
                      {term.category}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {term.definition}
                </p>
                
                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <div>
                    <h4 className="font-medium text-card-foreground mb-2">Related Terms:</h4>
                    <div className="flex flex-wrap gap-2">
                      {term.relatedTerms.map((relatedTerm, relatedIndex) => (
                        <Badge 
                          key={relatedIndex} 
                          variant="secondary" 
                          className="text-xs cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900"
                          onClick={() => setSearchTerm(relatedTerm)}
                        >
                          {relatedTerm}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-6">
          <h3 className="font-bold text-lg mb-3 text-card-foreground">Additional Resources:</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <h4 className="font-medium text-card-foreground mb-2">Texas Education Resources:</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://tea.texas.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    Texas Education Agency <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.thecb.state.tx.us/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    Texas Higher Education Coordinating Board <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-card-foreground mb-2">College Preparation:</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.collegeboard.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    College Board <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://studentaid.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    Federal Student Aid <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 border-l-4 border-l-yellow-500">
            <h4 className="font-medium text-card-foreground mb-2">💡 Pro Tip for New Students:</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Don't feel overwhelmed by all these terms! Start with the basics (GPA, credits, STAAR) and gradually 
              learn others as they become relevant to your situation. Your school counselor is always available 
              to explain any terms you don't understand and help you navigate your high school journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
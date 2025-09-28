import { Button } from './ui/button';
import { ExternalLink, GraduationCap, BookOpen, Users, FileText, Phone, Mail } from 'lucide-react';

interface FunFooterProps {
  onTabChange: (tab: string) => void;
}

const quickTerms = [
  { term: 'GPA', definition: 'Grade Point Average' },
  { term: 'AP', definition: 'Advanced Placement' },
  { term: 'STAAR', definition: 'State Tests' },
  { term: 'Credits', definition: 'Course Units' },
  { term: 'Transcript', definition: 'Academic Record' },
  { term: 'FAFSA', definition: 'Financial Aid Form' }
];

const externalLinks = [
  { name: 'Texas Education Agency', url: '#', description: 'Official state education website' },
  { name: 'College Board', url: '#', description: 'SAT and AP information' },
  { name: 'Khan Academy', url: '#', description: 'Free test prep and learning' },
  { name: 'Federal Student Aid', url: '#', description: 'FAFSA and financial aid info' },
  { name: 'ApplyTexas', url: '#', description: 'Texas college applications' },
  { name: 'BigFuture', url: '#', description: 'College and career planning' }
];

export function FunFooter({ onTabChange }: FunFooterProps) {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">U.S. High School Guide</h3>
                <p className="text-purple-200 text-sm">Navigate with Confidence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering international students to succeed in the U.S. education system with 
              comprehensive guides, tools, and resources.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">support@ushighschoolguide.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm">1-800-EDU-HELP</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Quick Navigation
            </h4>
            <div className="space-y-3">
              {[
                { id: 'home', label: 'Home' },
                { id: 'course-selection', label: 'Course Selection' },
                { id: 'graduation', label: 'Graduation Requirements' },
                { id: 'gpa-calculator', label: 'GPA Calculator' },
                { id: 'college-prep', label: 'College Portfolio' },
                { id: 'glossary', label: 'Glossary' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => onTabChange(link.id)}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Essential Terms */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Essential Terms
            </h4>
            <div className="space-y-3">
              {quickTerms.map((term, index) => (
                <div key={index} className="group cursor-pointer" onClick={() => onTabChange('glossary')}>
                  <div className="text-blue-300 font-semibold group-hover:text-white transition-colors duration-200">
                    {term.term}
                  </div>
                  <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                    {term.definition}
                  </div>
                </div>
              ))}
            </div>
            <Button 
              onClick={() => onTabChange('glossary')}
              className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-full text-sm"
            >
              View All Terms
            </Button>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Student Support & Resources
            </h4>
            <div className="space-y-3">
              {externalLinks.map((link, index) => (
                <div key={index} className="group">
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-left hover:bg-transparent"
                  >
                    <div>
                      <div className="text-blue-300 font-semibold group-hover:text-white transition-colors duration-200 flex items-center">
                        {link.name}
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </div>
                      <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200">
                        {link.description}
                      </div>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Message */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Additional Help?</h3>
            <p className="text-blue-200 mb-6 max-w-3xl mx-auto">
              Remember that your school counselor is your best resource for personalized guidance. 
              Don't hesitate to schedule regular meetings to discuss your academic progress and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-2xl p-6">
                <Users className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">School Counselor</h4>
                <p className="text-blue-200 text-sm">Your primary support for academic planning</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <BookOpen className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">Teachers</h4>
                <p className="text-blue-200 text-sm">Subject-specific guidance and support</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-6">
                <GraduationCap className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-bold mb-2">College Counselors</h4>
                <p className="text-blue-200 text-sm">Specialized help with college applications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 U.S. High School Guide. Made with ❤️ for international students.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors duration-200">Privacy Policy</button>
              <button className="hover:text-white transition-colors duration-200">Terms of Service</button>
              <button className="hover:text-white transition-colors duration-200">Contact Us</button>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-blue-300 text-sm italic">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
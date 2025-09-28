import { Heart, Users, GraduationCap, Globe, BookOpen, Target } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            About This App
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built by a student, for students - a comprehensive guide to navigating 
            the U.S. high school system with confidence.
          </p>
        </div>

        {/* Creator Section */}
        <div className="bg-card border border-border p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center mr-6">
              <GraduationCap className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">Hi, I'm Sanjana Sunkara</h2>
              <p className="text-muted-foreground">Senior at Westwood High School, Round Rock, Texas</p>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed mb-6">
            As a high school senior who has navigated the complexities of the American education system, 
            I understand firsthand how overwhelming it can be - especially for students who are new to this country. 
            The U.S. high school system is unique, with its own terminology, requirements, and pathways that 
            can be confusing even for students who have lived here their entire lives.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            I created this app because I believe every student deserves to understand their educational journey 
            and have access to the tools they need to succeed. Whether you're transitioning from middle school 
            or moving to the United States from another country, this guide is here to help you navigate 
            with confidence.
          </p>
        </div>

        {/* Why This App Exists */}
        <div className="bg-card border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-card-foreground">Why I Built This App</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 text-white flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">For New Americans</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Moving to a new country is already overwhelming. Students and families shouldn't have to 
                struggle to understand how the education system works on top of everything else they're adapting to. 
                This app provides clear, comprehensive explanations in one place.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">For All Students</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Even students who have grown up in the U.S. often find the transition from middle school to high school 
                confusing. The requirements, course options, and college preparation process can be complex. 
                This guide helps everyone understand their options.
              </p>
            </div>
          </div>
        </div>

        {/* What Makes This Different */}
        <div className="bg-card border border-border p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-card-foreground">What Makes This Guide Different</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-red-600 text-white flex items-center justify-center mr-4 mt-1">
                <Heart className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Student Perspective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This isn't written by adults looking back at their high school experience. It's created by someone 
                  currently living it, who understands the real challenges students face today.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-yellow-600 text-white flex items-center justify-center mr-4 mt-1">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Comprehensive Coverage</h3>
                <p className="text-muted-foreground leading-relaxed">
                  From understanding what credits are to calculating your GPA, from choosing courses to preparing 
                  for college - everything you need is in one place, explained in plain language.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white flex items-center justify-center mr-4 mt-1">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">Texas-Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  While the principles apply nationwide, this guide specifically addresses Texas requirements, 
                  STAAR testing, and state-specific programs like OnRamps and Texas academies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Message */}
        <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-l-blue-500 p-8">
          <h2 className="text-2xl font-bold mb-4 text-card-foreground">A Personal Message</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            High school can feel overwhelming, but you don't have to navigate it alone. Whether you're just starting 
            your freshman year or you're a senior preparing for college, remember that every successful student 
            started exactly where you are now.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mb-4">
            The American education system has its complexities, but it also offers incredible opportunities. 
            Take advantage of the resources available to you, don't be afraid to ask questions, and remember 
            that your school counselor is there to help you succeed.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            I hope this guide helps you feel more confident about your high school journey. You've got this! 🌟
          </p>
          
          <div className="mt-6 pt-6 border-t border-blue-200 dark:border-blue-800">
            <p className="text-muted-foreground italic">
              "The beautiful thing about learning is that no one can take it away from you." - B.B. King
            </p>
          </div>
        </div>

        {/* Technical Note */}
        <div className="mt-8 bg-muted/30 p-6 text-center">
          <p className="text-muted-foreground text-sm">
            This app is continuously updated based on student feedback and changes in Texas education policy. 
            If you notice any information that needs updating, please don't hesitate to reach out through your school counselor.
          </p>
        </div>
      </div>
    </div>
  );
}
import School from "../assets/School.jpg";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/WhyCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs";
import {
  Music,
  Tv,
  UserRound,
  Octagon,
  GraduationCap,
  ClipboardCheck,
  Heart,
} from "lucide-react";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const features = [
    {
      title: "Holistic Development",
      description:
        "Focus on academic excellence along with physical, emotional, and social development.",
      icon: <UserRound className="h-5 w-5" />,
    },
    {
      title: "Modern Infrastructure",
      description:
        "State-of-the-art facilities including smart classrooms, labs, and sports amenities.",
      icon: <Tv className="h-5 w-5" />,
    },
    {
      title: "Skilled Faculty",
      description:
        "Highly qualified and trained teachers committed to excellence in education.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      title: "Innovative Curriculum",
      description:
        "Curriculum designed to foster critical thinking, creativity, and problem-solving skills.",
      icon: <Octagon className="h-5 w-5" />,
    },
    {
      title: "Parent Partnership",
      description:
        "Strong parent-teacher collaboration for the overall development of children.",
      icon: <ClipboardCheck className="h-5 w-5" />,
    },
    {
      title: "Value-Based Education",
      description:
        "Emphasis on instilling moral values and ethics for character building.",
      icon: <Heart className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#191f5d] to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Why Choose SHREE PADMAKSHI GLOBAL SCHOOL,BILASPUR
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                At SHREE PADMAKSHI GLOBAL SCHOOL,BILASPUR we focus on all-round
                development of students. Our emerging student profile (ESP) puts
                equal emphasis on knowledge, life skills and values.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={School}
                  alt="Mount  PADMAKSHI  Zee School"
                  fill
                  className="object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

   {/* Programs Section */}
<section className="py-10 md:py-16 px-4 md:px-6">
  <div className="container mx-auto">
    <div className="flex items-center justify-center mb-8 md:mb-10">
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-3 md:px-6 text-center">
        Our Program
      </h2>
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
    </div>
    <Tabs defaultValue="skills" className="w-full">
      <div className="overflow-x-auto pb-2">
        <TabsList className="flex md:grid md:grid-cols-4 lg:grid-cols-7 mb-6 md:mb-8 min-w-max">
          <TabsTrigger
            isActive={activeTab === "tab1"}
            onClick={() => setActiveTab("tab1")}
            value="skills"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            Skills
          </TabsTrigger>

          <TabsTrigger
            isActive={activeTab === "tab2"}
            onClick={() => setActiveTab("tab2")}
            value="technology"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            Technology
          </TabsTrigger>

          <TabsTrigger
            isActive={activeTab === "tab3"}
            onClick={() => setActiveTab("tab3")}
            value="esp"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            ESP
          </TabsTrigger>
          
          <TabsTrigger
            isActive={activeTab === "tab4"}
            onClick={() => setActiveTab("tab4")}
            value="octave"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            PADMAKSHI Octave
          </TabsTrigger>
          
          <TabsTrigger
            isActive={activeTab === "tab5"}
            onClick={() => setActiveTab("tab5")}
            value="teachers"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            Teachers
          </TabsTrigger>

          <TabsTrigger
            isActive={activeTab === "tab6"}
            onClick={() => setActiveTab("tab6")}
            value="assessment"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            Assessment
          </TabsTrigger>
          
          <TabsTrigger
            isActive={activeTab === "tab7"}
            onClick={() => setActiveTab("tab7")}
            value="community"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer whitespace-nowrap px-3 py-2"
          >
            Community
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent
        isActive={activeTab === "tab1"}
        value="skills"
        className="space-y-4"
      >
        <Card>
          <CardHeader className="bg-blue-50 px-4 py-4 md:px-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-blue-600 p-2 md:p-3 rounded-full text-white">
                <Music className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <CardTitle className="text-lg md:text-xl">Unique Skills Programme</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-gray-700 text-sm md:text-base">
                  Our students engage in music, dance, theatre and arts
                  activities through our performing arts school
                  programmes. These provide an opportunity to explore,
                  engage and excel in activities of their choice.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  Students may choose from a range of performing pursuits.
                  In this, they are carefully guided by professional
                  instructors who train our students to achieve high
                  standards in their chosen fields.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  SPGS Bilaspur works with the instructors to identify and
                  set specific learning outcomes in each of the
                  activities.
                </p>
              </div>
              <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden mt-4 md:mt-0">
                <img
                  src={School}
                  alt="Trained Teachers"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Other TabsContent sections should follow similar pattern */}
      <TabsContent
        isActive={activeTab === "tab2"}
        value="technology"
        className="space-y-4"
      >
        <Card>
          <CardHeader className="bg-blue-50 px-4 py-4 md:px-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-blue-600 p-2 md:p-3 rounded-full text-white">
                <Tv className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <CardTitle className="text-lg md:text-xl">Technology Enabled Learning</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-gray-700 text-sm md:text-base">
                  Interactive white boards with AV content and WiFi
                  internet enabled digital smart class rooms to provide
                  students best of knowledge regarding technical subjects
                  as they view them in 3D videos.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  Smart class provide an interactive & visually attractive
                  method of teaching. The audio-visual senses of students
                  are targeted and it helps the students store the
                  information fast and effectively.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  Digital Classroom club provides the best way to
                  understand & see different objects & projects live
                  working.
                </p>
              </div>
              <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden mt-4 md:mt-0">
                <img
                  src={School}
                  alt="Technology Enabled Learning"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      {/* Continue with other TabsContent sections in the same pattern */}
      {/* ESP Tab Content */}
      <TabsContent
        isActive={activeTab === "tab3"}
        value="esp"
        className="space-y-4"
      >
        <Card>
          <CardHeader className="bg-blue-50 px-4 py-4 md:px-6">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="bg-blue-600 p-2 md:p-3 rounded-full text-white">
                <UserRound className="h-4 w-4 md:h-6 md:w-6" />
              </div>
              <CardTitle className="text-lg md:text-xl">ESP-Emerging Student Profile</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4 md:pt-6 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-gray-700 text-sm md:text-base">
                  We have a vision of the child we aim to graduate and
                  everything in our schools is designed around that
                  vision. Emerging Student Profile (ESP) is the vision
                  that SHREE PADMAKSHI GLOBAL SCHOOL promises.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  Everything we do in the school strives to achieve this
                  profile for each child. While each child will take a
                  different path to this profile, we run the schools with
                  the firm belief that this profile will enable our
                  children to be leaders of the 21st century.
                </p>
                <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base">
                  The ESP comprises three essential faculties: life
                  skills, knowledge and core values.
                </p>
              </div>
              <div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden mt-4 md:mt-0">
                <img
                  src={School}
                  alt="Emerging Student Profile"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</section>

{/* Features Grid */}
<section className="py-10 md:py-16 px-4 md:px-6 bg-gray-50">
  <div className="container mx-auto">
    <div className="flex items-center justify-center mb-8 md:mb-10">
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-orange-700 px-3 md:px-6 text-center">
        Our Key Features
      </h2>
      <div className="w-1/5 md:w-1/4 h-px bg-gray-300"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {features.map((feature, index) => (
        <Card key={index} className="border-t-4 border-orange-600">
          <CardHeader className="px-4 py-4 md:px-6">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                {feature.icon}
              </div>
              <CardTitle className="text-base md:text-lg">{feature.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-4 md:px-6 pb-4 md:pb-6">
            <CardDescription className="text-gray-700 text-sm md:text-base">
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 bg-[#191f5d] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join the SPGS Bilaspur Family
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Experience holistic education that focuses on knowledge, life
            skills, and values. Give your child the advantage of a future-ready
            education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white hover:text-white text-black hover:bg-orange-500 px-6 py-3 rounded-md font-medium cursor-pointer">
              Schedule a Visit
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-md font-medium cursor-pointer">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

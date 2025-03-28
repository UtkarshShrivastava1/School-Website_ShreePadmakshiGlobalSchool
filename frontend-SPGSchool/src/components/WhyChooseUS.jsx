import Logo from "../assets/c-3.png";
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
                Why Choose SHREE PADMAKSHI GLOBAL SCHOOL, Bilaspur
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl">
                At SHREE PADMAKSHI GLOBAL SCHOOL, Bilaspur we focus on all-round
                development of students. Our emerging student profile (ESP) puts
                equal emphasis on knowledge, life skills and values.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative h-[400px] w-[300px] md:h-[400px] md:w-[400px] rounded-full overflow-hidden border-4 border-white/20">
                <img
                  src={Logo}
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
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
              {" "}
              Our Program
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
              <TabsTrigger
                isActive={activeTab === "tab1"}
                onClick={() => setActiveTab("tab1")}
                value="skills"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Skills
              </TabsTrigger>

              <TabsTrigger
                isActive={activeTab === "tab2"}
                onClick={() => setActiveTab("tab2")}
                value="technology"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Technology
              </TabsTrigger>

              <TabsTrigger
                isActive={activeTab === "tab3"}
                onClick={() => setActiveTab("tab3")}
                value="esp"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                ESP
              </TabsTrigger>
              <TabsTrigger
                isActive={activeTab === "tab4"}
                onClick={() => setActiveTab("tab4")}
                value="octave"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                PADMAKSHI Octave
              </TabsTrigger>
              <TabsTrigger
                isActive={activeTab === "tab5"}
                onClick={() => setActiveTab("tab5")}
                value="teachers"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Teachers
              </TabsTrigger>

              <TabsTrigger
                isActive={activeTab === "tab6"}
                onClick={() => setActiveTab("tab6")}
                value="assessment"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Assessment
              </TabsTrigger>
              <TabsTrigger
                isActive={activeTab === "tab7"}
                onClick={() => setActiveTab("tab7")}
                value="community"
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white cursor-pointer"
              >
                Community
              </TabsTrigger>
            </TabsList>

            <TabsContent
              isActive={activeTab === "tab1"}
              value="skills"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Music className="h-6 w-6" />
                    </div>
                    <CardTitle>Unique Skills Programme</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        Our students engage in music, dance, theatre and arts
                        activities through our performing arts school
                        programmes. These provide an opportunity to explore,
                        engage and excel in activities of their choice.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Students may choose from a range of performing pursuits.
                        In this, they are carefully guided by professional
                        instructors who train our students to achieve high
                        standards in their chosen fields.
                      </p>
                      <p className="mt-4 text-gray-700">
                        SPGS Bilaspur works with the instructors to identify and
                        set specific learning outcomes in each of the
                        activities.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Trained Teachers"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent
              isActive={activeTab === "tab2"}
              value="technology"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Tv className="h-6 w-6" />
                    </div>
                    <CardTitle>Technology Enabled Learning</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        Interactive white boards with AV content and WiFi
                        internet enabled digital smart class rooms to provide
                        students best of knowledge regarding technical subjects
                        as they view them in 3D videos.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Smart class provide an interactive & visually attractive
                        method of teaching. The audio-visual senses of students
                        are targeted and it helps the students store the
                        information fast and effectively.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Digital Classroom club provides the best way to
                        understand & see different objects & projects live
                        working.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Trained Teachers"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              isActive={activeTab === "tab3"}
              value="esp"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <UserRound className="h-6 w-6" />
                    </div>
                    <CardTitle>ESP-Emerging Student Profile</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        We have a vision of the child we aim to graduate and
                        everything in our schools is designed around that
                        vision. Emerging Student Profile (ESP) is the vision
                        that SHREE PADMAKSHI GLOBAL SCHOOL promises.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Everything we do in the school strives to achieve this
                        profile for each child. While each child will take a
                        different path to this profile, we run the schools with
                        the firm belief that this profile will enable our
                        children to be leaders of the 21st century.
                      </p>
                      <p className="mt-4 text-gray-700">
                        The ESP comprises three essential faculties: life
                        skills, knowledge and core values.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Emerging Student Profile"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              isActive={activeTab === "tab4"}
              value="octave"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Octagon className="h-6 w-6" />
                    </div>
                    <CardTitle> PADMAKSHI Octave</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        PADMAKSHI Octave is the core belief of every Zee school.
                        It is a proprietary pedagogical model that has been
                        honed over years of research and development. It
                        integrates the various pillars that impact the children
                        during their learning and development in school.
                      </p>
                      <p className="mt-4 text-gray-700">
                        It comprises EIGHT Critical interlinked elements of
                        school engagement with parents and child.
                      </p>
                      <p className="mt-4 text-gray-700">
                        These are: PADMAKSHI Infra, PADMAKSHI Content, PADMAKSHI
                        Network, PADMAKSHI Lifeskills, PADMAKSHI teacher,
                        PADMAKSHI Assessment, PADMAKSHI Parents and PADMAKSHI
                        Enrichment
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt=" PADMAKSHI  Octave"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              isActive={activeTab === "tab5"}
              value="teachers"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <CardTitle>Well Trained Teachers</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        Highly qualified teachers with continuous training
                        programs and workshops on academic methodology.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Our rigorous hiring and comprehensive training of
                        teachers keep them abreast with the best-in-class
                        learning methodologies. Teachers get assessed to ensure
                        that students get the best learning environment.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Trained Teachers"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              isActive={activeTab === "tab6"}
              value="assessment"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <ClipboardCheck className="h-6 w-6" />
                    </div>
                    <CardTitle>Assessments, Evaluations & Parents</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        Our assessments focus on identifying what students are
                        good at instead of whether they are good or not. SPGS
                        Bilaspur assessments and parent teachers meetings take
                        place on a continuous basis and at the child's pace
                        rather than through only stressful periodic exams.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Assessment patterns are based on feedback from various
                        stakeholders including parents.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Parents are a critical stakeholder in the entire
                        learning process. We orient parents through various
                        workshops and inculcate awareness of important parenting
                        issues like understanding the child's learning style,
                        multiple intelligences, and child abuse prevention etc.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Trained Teachers"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent
              isActive={activeTab === "tab7"}
              value="community"
              className="space-y-4"
            >
              <Card>
                <CardHeader className="bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-full text-white">
                      <Heart className="h-6 w-6" />
                    </div>
                    <CardTitle>Community Connect & Social Awareness</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-700">
                        Education is all about giving back to the society. At
                        SPGS Bilaspur, we prepare our students to work towards
                        creating a sustainable environment on an ongoing basis.
                      </p>
                      <p className="mt-4 text-gray-700">
                        We encourage our students and parent community to
                        support organizations that help the old, the
                        underprivileged.
                      </p>
                      <p className="mt-4 text-gray-700">
                        Our students and parent community will participate and
                        organize projects that aim to achieve a purpose in
                        preserving and conserving the environment and its
                        inhabitants.
                      </p>
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden">
                      <img
                        src={Logo}
                        alt="Trained Teachers"
                        fill
                        className="object-cover"
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
      <section className="py-16 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex items-center justify-center mb-10">
            <div className="w-1/4 h-px bg-gray-300"></div>
            <h2 className="text-3xl md:text-4xl font-serif text-orange-700 px-6">
              {" "}
              Our Key Features
            </h2>
            <div className="w-1/4 h-px bg-gray-300"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-t-4 border-orange-600">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">
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

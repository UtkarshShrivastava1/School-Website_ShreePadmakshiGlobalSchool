"use client"

import React, { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../WhyCards"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Mail, 
  Send, 
  Upload,
  Users
} from "lucide-react"

export default function CareersPage() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with file:", file);
    // Add file upload logic here
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Join Our Team at <span className="text-orange-600">Shree Padmakshi Global School</span></h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Discover rewarding career opportunities for dedicated education professionals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                <Briefcase className="h-5 w-5 mr-2" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50">
                Learn More
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-900">Our Commitment to Education</h2>
            <div className="space-y-4 text-slate-600">
              <p>
              Shree Padmakshi Global School is committed to enhance the educational opportunities for dedicated professionals like you
                who have a requisite degree in Early Childhood Care & Education and are keen to be a part of unique
                 culture.
              </p>
              <p>Shree Padmakshi Global School professionals enjoy careers that are both challenging and rewarding.</p>
              <p>
                Everything does is intentional, deeply rooted in the foundation of its Mission, Values,
                Purpose, and Service culture.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border-t-4 border-t-orange-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-indigo-900">
                    <Heart className="h-5 w-5 text-orange-600" />
                    Values
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    Our commitment to lifetime learning extends to our employees through supporting staff in their
                    individual and professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-t-4 border-t-orange-600">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2 text-indigo-900">
                    <GraduationCap className="h-5 w-5 text-orange-600" />
                    Growth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    We offer education assistance programs, professional development programs, and ongoing career
                    development opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-indigo-900">How to Apply</h3>

            <Tabs defaultValue="email">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-100">
                <TabsTrigger value="email" className="data-[state=active]:bg-white data-[state=active]:text-orange-600">Email Application</TabsTrigger>
                <TabsTrigger value="online" className="data-[state=active]:bg-white data-[state=active]:text-orange-600">Online Application</TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                <p className="text-slate-600">
                  Send us your CV / Biodata to the email address below. If your skills match our requirements, get ready
                  for a rewarding career that can transform your life.
                </p>
                <div className="flex items-center gap-2 p-3 bg-slate-100 rounded-md">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <a href="mailto:Mlzs.bilaspur@mountlitera.com" className="text-orange-600 font-medium">
                    Mlzs.bilaspur@mountlitera.com
                  </a>
                </div>
              </TabsContent>

              <TabsContent value="online">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-slate-700">Full Name</Label>
                      <Input id="fullName" placeholder="John Doe" required className="border-slate-300 focus:border-orange-600 focus:ring-orange-600" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="border-slate-300 focus:border-orange-600 focus:ring-orange-600" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                      <Input id="phone" placeholder="+91 98765 43210" required className="border-slate-300 focus:border-orange-600 focus:ring-orange-600" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="position" className="text-slate-700">Position</Label>
                      <Select>
                        <SelectTrigger className="border-slate-300 focus:ring-orange-600 w-full">
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent className="z-50">
                          <SelectItem value="teacher">Early Childhood Teacher</SelectItem>
                          <SelectItem value="coordinator">Education Coordinator</SelectItem>
                          <SelectItem value="counselor">School Counselor</SelectItem>
                          <SelectItem value="administrator">Administrator</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience" className="text-slate-700">Experience & Qualifications</Label>
                    <Textarea
                      id="experience"
                      placeholder="Tell us about your education, experience, and qualifications..."
                      className="min-h-[100px] border-slate-300 focus:border-orange-600 focus:ring-orange-600 w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume" className="text-slate-700">Upload Resume/CV</Label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                      <input
                        type="file"
                        id="resume"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="resume" className="cursor-pointer flex flex-col items-center gap-2">
                        <Upload className="h-8 w-8 text-orange-600" />
                        <span className="text-sm font-medium break-all">
                          {file ? file.name : "Click to upload or drag and drop"}
                        </span>
                        <span className="text-xs text-slate-500">PDF, DOC, DOCX (Max 5MB)</span>
                      </label>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                    <Send className="h-4 w-4 mr-2" />
                    Submit Application
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-50 py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-indigo-900">Why Join Shree Padmakshi Global School?</h2>
            <p className="text-slate-600">
              If you share our vision of child centric education, we would like to invite you to work with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-900">Professional Development</CardTitle>
                <CardDescription>Continuous learning opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Regular faculty training programs and numerous ongoing career development opportunities to help you
                  grow professionally.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-900">Supportive Environment</CardTitle>
                <CardDescription>Collaborative work culture</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Join a team of dedicated educators who are passionate about making a difference in children's lives.
                </p>
              </CardContent>
            </Card>

            <Card className="border border-slate-200 hover:shadow-md transition-all">
              <CardHeader>
                <CardTitle className="text-indigo-900">Rewarding Career</CardTitle>
                <CardDescription>Make a meaningful impact</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Be part of an institution that values innovation, excellence, and the holistic development of every
                  child.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Lives?</h2>
            <p className="text-lg text-slate-200 mb-8">
            Shree Padmakshi Global School and be part of our mission to provide child-centric education that shapes the future.
            </p>
            {/* <Button size="lg" className="bg-orange-600 hover:bg-orange-600 text-white">
              <Briefcase className="h-5 w-5 mr-2" />
              Apply Today
            </Button> */}
          </div>
        </div>
      </section>
    </div>
  )
}
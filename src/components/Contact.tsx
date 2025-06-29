
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishb17@uw.edu",
      href: "mailto:krishb17@uw.edu"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9820414513",
      href: "tel:+919820414513"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Seattle, WA",
      href: null
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's connect and discuss opportunities in AI, Data Science and Product Management
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <info.icon className="text-gray-700" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-white font-medium hover:text-blue-400 transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 mb-6">
                I am always interested in discussing new opportunities, collaborations, 
                and innovative projects in AI and Data Science. Whether you're looking 
                for a researcher, product engineer or a consultant, I would love to hear from you.
              </p>
              <div className="space-y-3 text-gray-400">
                <p>• Open to full-time and internship opportunities</p>
                <p>• Available for research collaborations</p>
                <p>• Interested in AI Product Management </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gray-800 border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-gray-700 border-gray-600 text-white focus:border-blue-500 resize-none"
                  placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-200 to-blue-200 hover:from-cyan-300 hover:to-blue-300 text-gray-800 font-medium py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

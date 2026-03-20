import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      {/* 
        ScrollyCanvas sets the 500vh container and scrubs through image frames 
        We pass the Overlay inside so it correctly overlays the sticky canvas
      */}
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      {/* Summary and Skills */}
      <About />

      {/* Education section inserted logically between hero and projects */}
      <Education />
      
      {/* Projects Grid renders normally below the scrollytelling section */}
      <Projects />

      {/* Certifications showcase */}
      <Certificates />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Simple footer */}
      <footer className="border-t border-white/10 py-12 bg-[#121212] text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Kshitij Kamble. Data Science Enthusiast.
        </p>
      </footer>
    </main>
  );
}

import Navigation from "@/components/Navigation";
import { Calculator, Shield, Zap, Palette } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <Navigation />
        
        <div className="glass-effect border border-card-border rounded-3xl p-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-button-primary rounded-3xl mb-6">
              <Calculator size={40} className="text-button-primary-foreground" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">Modern Calculator</h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              A beautiful, modern calculator built with React, featuring glassmorphism design and smooth animations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-effect border border-card-border rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-button-operator rounded-2xl mb-4">
                <Zap size={24} className="text-button-operator-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Fast & Responsive</h3>
              <p className="text-sm text-foreground/70">
                Lightning-fast calculations with smooth animations and instant feedback.
              </p>
            </div>

            <div className="glass-effect border border-card-border rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-button-operator rounded-2xl mb-4">
                <Shield size={24} className="text-button-operator-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Error Handling</h3>
              <p className="text-sm text-foreground/70">
                Smart error detection for division by zero and invalid operations.
              </p>
            </div>

            <div className="glass-effect border border-card-border rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-button-operator rounded-2xl mb-4">
                <Palette size={24} className="text-button-operator-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Modern Design</h3>
              <p className="text-sm text-foreground/70">
                Beautiful glassmorphism UI with gradient backgrounds and smooth transitions.
              </p>
            </div>

            <div className="glass-effect border border-card-border rounded-2xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-button-operator rounded-2xl mb-4">
                <Calculator size={24} className="text-button-operator-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Full Featured</h3>
              <p className="text-sm text-foreground/70">
                Complete arithmetic operations with decimal support and memory functions.
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-card-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Basic Operations</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Addition (+)</li>
                  <li>• Subtraction (−)</li>
                  <li>• Multiplication (×)</li>
                  <li>• Division (÷)</li>
                  <li>• Decimal point support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Advanced Features</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Clear all function</li>
                  <li>• Delete last digit</li>
                  <li>• Error handling</li>
                  <li>• Continuous calculations</li>
                  <li>• Large number display</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-foreground/60">
              Built with ❤️ using React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
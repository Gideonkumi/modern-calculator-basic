import Navigation from "@/components/Navigation";
import Calculator from "@/components/Calculator";

const Index = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <Navigation />
        
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-foreground mb-4">
            Modern Calculator
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A beautiful, feature-rich calculator with glassmorphism design and smooth animations.
          </p>
        </div>

        <div className="flex justify-center">
          <Calculator />
        </div>
      </div>
    </div>
  );
};

export default Index;

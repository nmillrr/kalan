import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function OurMission() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header subtitle="Our Mission" />
      
      <main className="flex flex-col items-center flex-1">
        <div className="w-full max-w-[680px] px-10 py-20 flex flex-col gap-10 max-[999px]:max-w-[680px] max-[999px]:px-10 max-[999px]:py-20 max-[809px]:max-w-full max-[809px]:px-5 max-[809px]:py-10 max-[809px]:gap-[30px]">
          
          {/* Header Section */}
          <div className="flex flex-col gap-5">
            <h1 className="h1">⭐</h1>
            <h1 className="h1">Our Mission</h1>
          </div>

          {/* First Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
            <Image
              src="/images/kalan-big.png"
              alt="Kalan logo"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Body Text */}
          <p className="body-text">
          Thanks for checking out Kalan! We help small businesses, nonprofits, and low-budget founders bootstrap, launch, and grow.
          Our business consulting and solutions cover everything from building web platforms to growth campaigns, from branding to automations, and much more.
          Kalan is made up of ex-agency partners that bring enterprise-level expertise to scrappy projects.
          </p>

          {/* H2 Heading */}
          <h2 className="h2">Our Process</h2>

          {/* Second Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/kalan-process.png"
              alt="Kalan process"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Body Text */}
          <p className="body-text">
          All the right tools already exist on the internet to help you build and scale.
          We work with you to translate and incubate your work into something scalable and sustainable.
          Send us an email, and we will schedule a consultation call to learn more about what we can achieve together.
          </p>

          {/* H3 Heading */}
          <h2 className="h2">Our Ethos</h2>

          {/* Third Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/kalan-loves.png"
              alt="Kalan loves"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final Body Text */}
          <p className="body-text">
          Accessibility is everything to us.
          If you’re an impact-driven nonprofit, we’re happy to work at a discounted rate in order to help you deliver to your customers.
          We specialize in building on low-cost budgets, bootstrapping, and getting creative with our solutions to save you money.
          Most of the tools our customers use have a robust free tier, and they’re able to subscribe as they scale and their needs evolve.
            <br></br>
            <br></br>
            Come say hi!
            <br></br>
            <br></br>
            <a href="mailto:hello@kalan.ventures" className="link-blue">hello@kalan.ventures</a>
            </p>

        </div>
      </main>

      <Footer />
    </div>
  )
}
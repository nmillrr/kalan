import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function WeHaWashes() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header subtitle="WeHa Washes" />
      
      <main className="flex flex-col items-center flex-1">
        <div className="w-full max-w-[680px] px-10 py-20 flex flex-col gap-10 max-[999px]:max-w-[680px] max-[999px]:px-10 max-[999px]:py-20 max-[809px]:max-w-full max-[809px]:px-5 max-[809px]:py-10 max-[809px]:gap-[30px]">
          
          {/* Header Section */}
          <div className="flex flex-col gap-5">
            <h1 className="h1">🧼</h1>
            <h1 className="h1">WeHa Washes</h1>
          </div>

          {/* First Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg overflow-hidden">
            <Image
              src="/images/weha-hero.png"
              alt="WeHa Washes website"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* First Body Text */}
          <p className="body-text">
          WeHa Washes is an established small business specializing in mobile car washes and detailing. 
          As they began scaling over the years, they needed a digital platform to centralize their business information and streamline customer intake.
          <br></br>
          <br></br>
          We built an efficient, user-friendly website that followed an intuitive hierarchy of information. 
          Both prospects and customers were able to better understand the scope of services, 
          see before/after detailing photos, and most importantly, schedule appointments online.
          </p>

          {/* H2 Heading */}
          <h2 className="h2">Implementation</h2>

          {/* Second Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/weha-calendly.png"
              alt="Calendly"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Second Body Text */}
          <p className="body-text">
          Previously, WeHa Washes had used back-and-forth emailing to coordinate appointments with customers.
          We were able to set up tools and automation for them to efficiently manage customer intake via Calendly.
          </p>

          {/* H3 Heading */}
          <h2 className="h2">Tech Stack</h2>

          {/* Third Image Block */}
          <div className="w-full aspect-video bg-gradient-to-r from-purple-500 to-orange-500 rounded-lg overflow-hidden">
            <Image
              src="/images/weha-flow.png"
              alt="Tech stack"
              width={680}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Final Body Text */}
          <p className="body-text">
          When the customers were directed to Calendly from the website, our Zapier automation collected the Calendly form data and populated a Google sheet with relevant information: customer details, addresses, service types, and any specialized needs. 
          This information was translated into an internal dashboard that helped the managers better understand billing, customer preferences, and other metrics.
          <br></br>
          <br></br>
          You can view the completed project  <a href="https://wehawashes.com" className="link-blue">here</a>.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  )
}
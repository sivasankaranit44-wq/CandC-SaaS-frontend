import Casestudycard from "./Casestudycard";
function Casestudy() {
  const casestudies = [
    {
          title: "Building an Online store for startup and local business",
          challenge: "A Small local business wants to expand their reach by creating an online storefront. Their Existing setup made it difficult to reach new customers and accepting secure payment",
          solution: "We desgined and developed a responsive e-commerce website using MERN stack and Tailwind Css is integrated for modern UI and Razorpay or Stripe for secure payment processing",
          outcome:"The Business successfully launched online reaching new customers and increasing sales. The Streamlined checkout process improved user experience and boosted customer trust" 
    },
    {
        title: "UI/UX Improvement case study",
        challenge: "A mid‑sized company had a legacy website with outdated design and confusing navigation. Users struggled to find information, and conversion rates were low.",
        solution:"We conducted a UX audit and redesigned the interface using Tailwind CSS for a modern, responsive layout. Forms were simplified, navigation was streamlined, and accessibility standards were applied.",
        outcome:"The redesign improved user retention by 40% and boosted conversions. Customers reported a smoother experience, and the business gained a more professional online presence."
    },
    {
        title:"Freelancer SaaS Tool",
        challenge:"Freelancers often faced difficulties managing projects, invoices, and client communication in one place. They relied on multiple tools, which caused inefficiency",
        solution:"We developed a SaaS dashboard using the MERN stack, integrating project tracking, invoice generation, and secure payment gateways (Stripe/Razorpay). Tailwind CSS was used for a clean, intuitive UI.",
        outcome:"Freelancers reduced admin time by 30%, improved client communication, and had a centralized platform to manage their workflow. The tool became a productivity booster for independent professionals."
    },
    {
        title: "Performance Optimization for your platform",
        challenge: "An e‑commerce site suffered from slow load times and frequent deployment errors. Customers abandoned carts due to poor performance.",
        solution: "We optimized the backend by cleaning up dependencies, aligning package versions, and implementing caching strategies. The frontend was streamlined with Tailwind CSS, and deployment pipelines were restructured for reliability.",
        outcome:"Page load speed improved by 50%, bounce rates dropped significantly, and the site achieved stable production deployment. The business saw higher customer satisfaction and increased sales."
    },
    {
        title:"Performance Marketing",
        challenge:"A SaaS startup struggled to acquire qualified leads. Their ad spend was high, but conversions were low due to poor targeting and lack of data‑driven optimization.",
        solution:"We implemented a performance marketing strategy using Google Ads and Meta Ads. Campaigns were segmented by audience personas, A/B tested creatives, and tracked with conversion pixels. Automated reporting dashboards were set up to monitor ROI in real time.",
        outcome:"Cost per lead dropped by 35%, qualified leads increased by 50%, and the startup achieved a predictable pipeline of new customers while keeping ad spend efficie"
    },
     {
        title:"E-mail Marketing and Automations",
        challenge:"An e‑commerce brand had a large subscriber base but low engagement. Manual newsletters were inconsistent, and abandoned cart recovery was missing.",
        solution:"We designed automated email workflows using tools like Mailchimp/SendGrid. Journeys included welcome sequences, abandoned cart recovery, product recommendations, and seasonal promotions. Subject lines and CTAs were A/B tested for maximum impact.",
        outcome:"Open rates improved by 45%, click‑through rates doubled, and abandoned cart recovery generated an additional 20% in monthly revenue. Customers reported a more personalized brand experience."
    },
     {
        title:"Mobile Application Development",
        challenge:"An online store noticed high cart abandonment on mobile browsers. Customers wanted a smoother, app‑like experience with faster checkout and push notifications",
        solution:"We developed a cross‑platform mobile application using React Native. The app integrated with the existing MERN backend, included secure payment gateways (Razorpay/Stripe), and offered personalized push notifications for offers and order updates",
        outcome:"Mobile checkout completion rates increased by 60%, repeat purchases grew by 25%, and the brand strengthened customer loyalty through app‑based engagement."
    },
    {
        title:"Content Marketing",
        challenge:"A B2B SaaS company struggled with low inbound traffic and limited brand awareness. Their website had minimal blog content, no SEO strategy, and prospects relied heavily on paid ads to discover the product.",
        solution:"We developed a content marketing strategy focused on high‑intent keywords and customer pain points. A content calendar was created with blogs, case studies, and whitepapers. SEO optimization was applied to every piece, and distribution was amplified through LinkedIn, email newsletters, and guest posts",
        outcome:"The company saw a 70% increase in organic traffic, a 40% boost in lead generation, and improved brand visibility across industry channels.Organic traffic grew by 120% within six months, inbound leads doubled, and the company reduced dependency on paid ads. The content positioned the brand as an industry thought leader, improving trust and long‑term customer acquisition."
    }
]

  return (
    <section className="bg-gray-50 py-16"> 
        <div className="max-w-6xl mx-auto px-6"> 
            <div className="bg-[#222B40] px-6 py-12">
                <h2 className="text-4xl font-bold text-center mb-12 text-white"> Case Studies </h2>
            </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-5"> 
           {casestudies.map((caseStudy, index) => (
            <Casestudycard key={index} 
            title={caseStudy.title}
            challenge={caseStudy.challenge}
            solution={caseStudy.solution}
            outcome={caseStudy.outcome}
            />
           ))}
        </div>
            
        </div>
    </section>
  )
}
export default Casestudy;

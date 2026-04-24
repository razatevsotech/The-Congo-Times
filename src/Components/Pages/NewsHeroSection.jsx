// import React from "react";

// export default function NewsHeroSection() {
//   const healthArticles = [
//     {
//       id: 1,
//       category: "HEALTH",
//       title: "The Mental Health Benefits Backed by Science",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 2,
//       category: "HEALTH",
//       title: "How Climate Change is Impacting Global Health",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 3,
//       category: "HEALTH",
//       title: "Breaking Down the Latest Nutritional Guidelines",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
//     },
//     {
//       id: 4,
//       category: "HEALTH",
//       title: "The Role of Sleep in Immune System Support",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
//     },
//   ];

//   const worldPosts = [
//     {
//       id: 1,
//       category: "WORLD",
//       title: "How Climate Change is Reshaping Global Landscapes",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       id: 2,
//       category: "WORLD",
//       title: "The Role of International Organizations in Crisis Management",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
//     },
//     {
//       id: 3,
//       category: "WORLD",
//       title: "Understanding the Dynamics of Global Trade Agreements",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&w=1200&q=80",
//     },
//   ];

//   const sectionData = [
//     {
//       id: 1,
//       heading: "Science",
//       title: "The Challenges of Space Exploration in the 21st Century",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas...",
//     },
//     {
//       id: 2,
//       heading: "Politics",
//       title: "Understanding Voter Turnout Trends in Democratic Elections",
//       date: "February 24, 2025",
//       image:
//         "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas...",
//     },
//   ];

//   const newsData = [
//   {
//     id: 1,
//     section: "Science",
//     category: "SCIENCE",
//     title: "The Challenges of Space Exploration in the 21st Century",
//     date: "February 24, 2025",
//     image:
//       "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...",
//   },
//   {
//     id: 2,
//     section: "Politics",
//     category: "POLITICS",
//     title: "Understanding Voter Turnout Trends in Democratic Elections",
//     date: "February 24, 2025",
//     image:
//       "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...",
//   },
// ];


// const artsPosts = [
//   {
//     id: 1,
//     category: "ARTS",
//     title: "Understanding the Evolution of Digital Art Marketplaces",
//     date: "February 24, 2025",
//     image:
//       "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 2,
//     category: "ARTS",
//     title: "How Virtual Reality is Revolutionizing the Art World",
//     date: "February 24, 2025",
//     image:
//       "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
//   },
//   {
//     id: 3,
//     category: "ARTS",
//     title: "The Top Film Festivals Showcasing Emerging Talent",
//     date: "February 24, 2025",
//     image:
//       "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
//   },
// ];


//   const NewsCard = ({ item }) => {
//     return (
//       <div className="w-full">
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex items-center flex-1">
//             <span className="text-[#d9482f] text-[16px] leading-none mr-2">
//               |
//             </span>
//             <h2 className="text-[12px] text-[#111] font-medium mr-3">
//               {item.heading}
//             </h2>
//             <div className="h-[1px] bg-[#7c7c7c] flex-1"></div>
//           </div>

//           <a
//             href="#"
//             className="text-[#d9482f] text-[11px] ml-4 whitespace-nowrap flex items-center gap-1"
//           >
//             View All <span>→</span>
//           </a>
//         </div>

//         <div className="w-full h-[190px] overflow-hidden mb-4">
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         <p className="text-[9px] uppercase text-[#d9482f] font-semibold mb-2">
//           {item.heading}
//         </p>

//         <h3 className="text-[16px] leading-[1.25] text-black font-medium mb-2 max-w-[95%]">
//           {item.title}
//         </h3>

//         <p className="text-[10px] text-[#b0b0b0] mb-3">{item.date}</p>

//         <p className="text-[11px] leading-6 text-[#7e7e7e]">
//           {item.description}
//         </p>
//       </div>
//     );
//   };

//   return (
//     <>
//       <section className="relative bg-[#f3f2ef] py-10">
//         <div className="mx-auto flex max-w-[1200px] gap-6 px-6">
//           <div className="relative w-[60%] overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80"
//               alt="Health"
//               className="h-[420px] w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-black/40" />

//             <div className="absolute bottom-6 left-6 text-white">
//               <span className="bg-[#d45534] px-2 py-[2px] text-[10px] font-semibold uppercase">
//                 Health
//               </span>

//               <h2 className="mt-3 max-w-[420px] text-[22px] font-bold leading-snug">
//                 Exploring the Connection Between Gut Health and Mental Well-being
//               </h2>

//               <p className="mt-2 text-[11px] text-white/80">
//                 February 24, 2025
//               </p>
//             </div>
//           </div>

//           <div className="flex w-[40%] flex-col gap-6">
//             <div className="flex gap-4">
//               <img
//                 src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80"
//                 alt="Sports"
//                 className="h-[120px] w-[180px] object-cover"
//               />

//               <div>
//                 <span className="bg-[#d45534] px-2 py-[2px] text-[9px] font-semibold text-white">
//                   SPORTS
//                 </span>

//                 <h3 className="mt-2 text-[16px] font-semibold leading-snug text-[#111]">
//                   Olympics 2025: The Athletes to Watch
//                 </h3>

//                 <p className="mt-2 text-[10px] text-[#777]">
//                   February 24, 2025
//                 </p>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <img
//                 src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80"
//                 alt="Politics"
//                 className="h-[120px] w-[180px] object-cover"
//               />

//               <div>
//                 <span className="bg-[#d45534] px-2 py-[2px] text-[9px] font-semibold text-white">
//                   POLITICS
//                 </span>

//                 <h3 className="mt-2 text-[16px] font-semibold leading-snug text-[#111]">
//                   Election 2025: Key Issues Shaping the Campaign Trail
//                 </h3>

//                 <p className="mt-2 text-[10px] text-[#777]">
//                   February 24, 2025
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-[#f7f5f2] px-4 py-4 md:px-6">
//         <div className="mx-auto max-w-[1100px]">
//           <div className="mb-6 flex items-center justify-between">
//             <div className="flex flex-1 items-center gap-3">
//               <h2 className="text-[15px] font-medium text-[#1d1d1d]">
//                 Health
//               </h2>
//               <div className="h-px flex-1 bg-[#8f8f8f]" />
//             </div>

//             <button className="ml-6 flex items-center gap-2 text-[14px] font-medium text-[#d54b38] hover:opacity-80">
//               View All
//               <span className="text-[16px]">→</span>
//             </button>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//             {healthArticles.map((article) => (
//               <div key={article.id} className="group">
//                 <div className="overflow-hidden">
//                   <img
//                     src={article.image}
//                     alt={article.title}
//                     className="h-[215px] w-full object-cover"
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.3px] text-[#d54b38]">
//                     {article.category}
//                   </p>

//                   <h3 className="mb-3 text-[17px] font-medium leading-[1.1] text-[#111111]">
//                     {article.title}
//                   </h3>

//                   <p className="text-[13px] text-[#8a8a8a]">{article.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="bg-[#f3f2ef] py-8">
//         <div className="max-w-[900px] mx-auto px-4">
//           <div className="flex items-center gap-2 mb-4">
//             <span className="text-[11px] text-[#d94b2b] font-medium">|</span>
//             <h2 className="text-[11px] text-black font-medium">Top Stories</h2>
//             <div className="flex-1 h-[1px] bg-[#8f8f8f]"></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
//             <div className="md:col-span-2 relative h-[245px] overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
//                 alt="Neuroscience"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/35"></div>

//               <div className="absolute bottom-6 left-4 text-white max-w-[85%]">
//                 <p className="text-[9px] uppercase font-semibold mb-2">
//                   Science
//                 </p>
//                 <h3 className="text-[16px] md:text-[18px] font-semibold leading-tight">
//                   Understanding the Human Brain: New Insights from Neuroscience
//                 </h3>
//                 <p className="text-[10px] mt-2 opacity-90">February 24, 2025</p>
//               </div>
//             </div>

//             <div className="bg-[#d9462b] text-white p-5 h-[245px] flex flex-col justify-start">
//               <p className="text-[9px] uppercase font-bold mb-6">
//                 Never Miss A Headline!
//               </p>

//               <h3 className="text-[18px] md:text-[20px] font-bold leading-tight mb-5">
//                 Subscribe to our newsletter for daily updates.
//               </h3>

//               <p className="text-[11px] leading-5 max-w-[180px]">
//                 Get the latest stories delivered straight to your inbox.
//               </p>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             <div>
//               <div className="h-[155px] overflow-hidden mb-3">
//                 <img
//                   src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
//                   alt="Migration"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <p className="text-[9px] uppercase text-[#d94b2b] font-semibold mb-2">
//                 World
//               </p>
//               <h3 className="text-[15px] md:text-[16px] text-black font-medium leading-snug max-w-[320px]">
//                 Global Migration Trends: Causes and Consequences
//               </h3>
//               <p className="text-[10px] text-[#9a9a9a] mt-2">
//                 February 24, 2025
//               </p>
//             </div>

//             <div>
//               <div className="h-[155px] overflow-hidden mb-3">
//                 <img
//                   src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80"
//                   alt="AI Art"
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <p className="text-[9px] uppercase text-[#d94b2b] font-semibold mb-2">
//                 Arts
//               </p>
//               <h3 className="text-[15px] md:text-[16px] text-black font-medium leading-snug max-w-[320px]">
//                 Exploring the Impact of AI on Creative Industries
//               </h3>
//               <p className="text-[10px] text-[#9a9a9a] mt-2">
//                 February 24, 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-[#f5f3ef] py-4">
//         <div className="max-w-[1040px] mx-auto px-4">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center w-full">
//               <span className="text-[#d94b2b] text-[18px] leading-none mr-2">
//                 |
//               </span>
//               <h2 className="text-[14px] text-black font-medium mr-4">
//                 Business
//               </h2>
//               <div className="h-[1px] bg-[#8f8f8f] flex-1"></div>
//             </div>

//             <a
//               href="#"
//               className="text-[#d94b2b] text-[13px] ml-6 whitespace-nowrap flex items-center gap-1"
//             >
//               View All <span>→</span>
//             </a>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
//             <div className="relative h-[260px] md:h-[260px] overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80"
//                 alt="Cryptocurrency"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/45"></div>

//               <div className="absolute bottom-6 left-5 text-white max-w-[80%]">
//                 <p className="text-[10px] font-semibold uppercase mb-3">
//                   Business
//                 </p>
//                 <h3 className="text-[20px] md:text-[18px] font-semibold leading-[1.15] mb-3">
//                   Understanding Cryptocurrency:
//                   <br />
//                   Risks and Opportunities
//                 </h3>
//                 <p className="text-[11px] text-white/90">February 24, 2025</p>
//               </div>
//             </div>

//             <div className="relative h-[260px] md:h-[260px] overflow-hidden">
//               <img
//                 src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
//                 alt="Global Trade"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-black/45"></div>

//               <div className="absolute bottom-6 left-5 text-white max-w-[80%]">
//                 <p className="text-[10px] font-semibold uppercase mb-3">
//                   Business
//                 </p>
//                 <h3 className="text-[20px] md:text-[18px] font-semibold leading-[1.15] mb-3">
//                   Analyzing the Latest Trends in
//                   <br />
//                   Global Trade
//                 </h3>
//                 <p className="text-[11px] text-white/90">February 24, 2025</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-[#f5f3ef] py-6">
//         <div className="max-w-[980px] mx-auto px-4">
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center flex-1">
//               <span className="text-[#d94b2b] text-[18px] leading-none mr-2">
//                 |
//               </span>
//               <h2 className="text-[13px] text-black font-medium mr-4">
//                 World
//               </h2>
//               <div className="h-[1px] bg-[#8f8f8f] flex-1"></div>
//             </div>

//             <a
//               href="#"
//               className="text-[#d94b2b] text-[12px] ml-5 whitespace-nowrap flex items-center gap-1"
//             >
//               View All <span>→</span>
//             </a>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
//             {worldPosts.map((post) => (
//               <div key={post.id}>
//                 <div className="w-full h-[145px] overflow-hidden mb-3">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 <p className="text-[9px] uppercase text-[#d94b2b] font-semibold mb-2">
//                   {post.category}
//                 </p>

//                 <h3 className="text-[15px] leading-[1.2] text-black font-medium max-w-[280px]">
//                   {post.title}
//                 </h3>

//                 <p className="text-[10px] text-[#b0b0b0] mt-2">{post.date}</p>
//               </div>
//             ))}
//           </div>

//           <div className="relative max-w-[820px] mx-auto bg-[#d9462b] min-h-[226px] flex items-center">
//             <div className="absolute left-[-105px] top-1/2 -translate-y-1/2 w-[295px] h-[185px] shadow-sm">
//               <img
//                 src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
//                 alt="Contributor"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="ml-[240px] px-10 py-10 text-white max-w-[420px]">
//               <h3 className="text-[22px] md:text-[24px] font-semibold leading-[1.15] mb-4">
//                 Join Our Community of
//                 <br />
//                 Innovators
//               </h3>

//               <p className="text-[12px] leading-6 text-white/95 mb-5 max-w-[320px]">
//                 Share your insights and expertise on various topics with our
//                 global audience.
//               </p>

//               <button className="bg-white text-black text-[11px] px-6 py-3 font-medium hover:bg-gray-100 transition">
//                 Contribute Your Story
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>


     
//     <section className="w-full bg-[#f7f4ef] py-10">
//       <div className="mx-auto max-w-[1150px] px-4">
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//           {newsData.map((item) => (
//             <div key={item.id}>
//               {/* Top heading line */}
//               <div className="mb-4 flex items-center justify-between gap-4">
//                 <div className="flex flex-1 items-center gap-3">
//                   <span className="text-[12px] font-medium text-[#1f1f1f]">
//                     {item.section}
//                   </span>
//                   <div className="h-[1px] flex-1 bg-[#8b8b8b]" />
//                 </div>

//                 <a
//                   href="#"
//                   className="shrink-0 text-[11px] font-medium text-[#c24d2c] transition hover:opacity-80"
//                 >
//                   View All <span className="ml-1">→</span>
//                 </a>
//               </div>

//               {/* Card */}
//               <div className="group">
//                 <div className="overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="h-[220px] w-full object-cover transition duration-300 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="pt-4">
//                   <p className="mb-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#c24d2c]">
//                     {item.category}
//                   </p>

//                   <h2 className="max-w-[95%] text-[31px] leading-[1.15] font-medium tracking-[-0.3px] text-[#1f1f1f] sm:text-[34px] md:text-[22px]">
//                     {item.title}
//                   </h2>

//                   <p className="mt-2 text-[11px] text-[#9a9a9a]">{item.date}</p>

//                   <p className="mt-3 max-w-[95%] text-[13px] leading-[1.8] text-[#6f6f6f]">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>


//     <section className="w-full bg-[#f7f4ef] py-10">
//       <div className="mx-auto max-w-[1120px] px-4">
//         {/* top heading */}
//         <div className="mb-5 flex items-center justify-between gap-4">
//           <div className="flex flex-1 items-center gap-3">
//             <span className="text-[12px] font-medium text-[#222]">Arts</span>
//             <div className="h-[1px] flex-1 bg-[#8f8f8f]" />
//           </div>

//           <a
//             href="#"
//             className="text-[11px] font-medium text-[#c24d2c] hover:opacity-80"
//           >
//             View All <span className="ml-1">→</span>
//           </a>
//         </div>

//         {/* cards */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
//           {artsPosts.map((item) => (
//             <div key={item.id} className="group">
//               <div className="overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="h-[100px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[110px] lg:h-[100px]"
//                 />
//               </div>

//               <div className="pt-3">
//                 <p className="mb-1 text-[9px] font-semibold uppercase tracking-[1px] text-[#c24d2c]">
//                   {item.category}
//                 </p>

//                 <h3 className="max-w-[95%] text-[16px] leading-[1.25] font-medium text-[#1f1f1f]">
//                   {item.title}
//                 </h3>

//                 <p className="mt-2 text-[10px] text-[#9b9b9b]">{item.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }

import React from "react";

export default function NewsHeroSection() {
  const healthArticles = [
    {
      id: 1,
      category: "HEALTH",
      title: "The Mental Health Benefits Backed by Science",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      category: "HEALTH",
      title: "How Climate Change is Impacting Global Health",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      category: "HEALTH",
      title: "Breaking Down the Latest Nutritional Guidelines",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      category: "HEALTH",
      title: "The Role of Sleep in Immune System Support",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const worldPosts = [
    {
      id: 1,
      category: "WORLD",
      title: "How Climate Change is Reshaping Global Landscapes",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "WORLD",
      title: "The Role of International Organizations in Crisis Management",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "WORLD",
      title: "Understanding the Dynamics of Global Trade Agreements",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const newsData = [
    {
      id: 1,
      section: "Science",
      category: "SCIENCE",
      title: "The Challenges of Space Exploration in the 21st Century",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...",
    },
    {
      id: 2,
      section: "Politics",
      category: "POLITICS",
      title: "Understanding Voter Turnout Trends in Democratic Elections",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis orci consectetur, blandit justo ut, tempor turpis. Vestibulum facilisis condimentum hendrerit. Maecenas ac turpis egestas ...",
    },
  ];

  const artsPosts = [
    {
      id: 1,
      category: "ARTS",
      title: "Understanding the Evolution of Digital Art Marketplaces",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      category: "ARTS",
      title: "How Virtual Reality is Revolutionizing the Art World",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      category: "ARTS",
      title: "The Top Film Festivals Showcasing Emerging Talent",
      date: "February 24, 2025",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <>
      <section className="relative bg-[#f3f2ef] py-8 sm:py-10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 sm:px-6 lg:flex-row">
          <div className="relative w-full overflow-hidden lg:w-[60%]">
            <img
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=1200&q=80"
              alt="Health"
              className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[420px]"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute bottom-5 left-5 text-white sm:bottom-6 sm:left-6">
              <span className="bg-[#d45534] px-2 py-[2px] text-[10px] font-semibold uppercase">
                Health
              </span>

              <h2 className="mt-3 max-w-[420px] text-[18px] font-bold leading-snug sm:text-[22px]">
                Exploring the Connection Between Gut Health and Mental Well-being
              </h2>

              <p className="mt-2 text-[11px] text-white/80">
                February 24, 2025
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col gap-6 lg:w-[40%]">
            {[
              {
                tag: "SPORTS",
                title: "Olympics 2025: The Athletes to Watch",
                img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80",
              },
              {
                tag: "POLITICS",
                title: "Election 2025: Key Issues Shaping the Campaign Trail",
                img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80",
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={item.img}
                  alt={item.tag}
                  className="h-[105px] w-[135px] shrink-0 object-cover sm:h-[120px] sm:w-[180px]"
                />

                <div>
                  <span className="bg-[#d45534] px-2 py-[2px] text-[9px] font-semibold text-white">
                    {item.tag}
                  </span>

                  <h3 className="mt-2 text-[14px] font-semibold leading-snug text-[#111] sm:text-[16px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#777]">
                    February 24, 2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f5f2] px-4 py-4 md:px-6">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex flex-1 items-center gap-3">
              <h2 className="text-[15px] font-medium text-[#1d1d1d]">
                Health
              </h2>
              <div className="h-px flex-1 bg-[#8f8f8f]" />
            </div>

            <button className="ml-6 flex items-center gap-2 text-[14px] font-medium text-[#d54b38] hover:opacity-80">
              View All
              <span className="text-[16px]">→</span>
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {healthArticles.map((article) => (
              <div key={article.id} className="group">
                <div className="overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-[215px] w-full object-cover"
                  />
                </div>

                <div className="pt-4">
                  <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.3px] text-[#d54b38]">
                    {article.category}
                  </p>

                  <h3 className="mb-3 text-[17px] font-medium leading-[1.1] text-[#111111]">
                    {article.title}
                  </h3>

                  <p className="text-[13px] text-[#8a8a8a]">{article.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f2ef] py-8">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="mb-4 flex items-center gap-2">
            <span className="text-[11px] font-medium text-[#d94b2b]">|</span>
            <h2 className="text-[11px] font-medium text-black">Top Stories</h2>
            <div className="h-[1px] flex-1 bg-[#8f8f8f]"></div>
          </div>

          <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="relative h-[245px] overflow-hidden md:col-span-2">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
                alt="Neuroscience"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35"></div>

              <div className="absolute bottom-6 left-4 max-w-[85%] text-white">
                <p className="mb-2 text-[9px] font-semibold uppercase">
                  Science
                </p>
                <h3 className="text-[16px] font-semibold leading-tight md:text-[18px]">
                  Understanding the Human Brain: New Insights from Neuroscience
                </h3>
                <p className="mt-2 text-[10px] opacity-90">
                  February 24, 2025
                </p>
              </div>
            </div>

            <div className="flex h-auto min-h-[210px] flex-col justify-start bg-[#d9462b] p-5 text-white md:h-[245px]">
              <p className="mb-6 text-[9px] font-bold uppercase">
                Never Miss A Headline!
              </p>

              <h3 className="mb-5 text-[18px] font-bold leading-tight md:text-[20px]">
                Subscribe to our newsletter for daily updates.
              </h3>

              <p className="max-w-[180px] text-[11px] leading-5">
                Get the latest stories delivered straight to your inbox.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              {
                tag: "World",
                title: "Global Migration Trends: Causes and Consequences",
                img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
              },
              {
                tag: "Arts",
                title: "Exploring the Impact of AI on Creative Industries",
                img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <div key={index}>
                <div className="mb-3 h-[155px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.tag}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mb-2 text-[9px] font-semibold uppercase text-[#d94b2b]">
                  {item.tag}
                </p>
                <h3 className="max-w-[320px] text-[15px] font-medium leading-snug text-black md:text-[16px]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[10px] text-[#9a9a9a]">
                  February 24, 2025
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f3ef] py-4">
        <div className="mx-auto max-w-[1040px] px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex w-full items-center">
              <span className="mr-2 text-[18px] leading-none text-[#d94b2b]">
                |
              </span>
              <h2 className="mr-4 text-[14px] font-medium text-black">
                Business
              </h2>
              <div className="h-[1px] flex-1 bg-[#8f8f8f]"></div>
            </div>

            <a
              href="#"
              className="ml-6 flex items-center gap-1 whitespace-nowrap text-[13px] text-[#d94b2b]"
            >
              View All <span>→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-0">
            {[
              {
                title: "Understanding Cryptocurrency: Risks and Opportunities",
                img: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1200&q=80",
              },
              {
                title: "Analyzing the Latest Trends in Global Trade",
                img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
              },
            ].map((item, index) => (
              <div key={index} className="relative h-[240px] overflow-hidden sm:h-[260px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/45"></div>

                <div className="absolute bottom-6 left-5 max-w-[85%] text-white">
                  <p className="mb-3 text-[10px] font-semibold uppercase">
                    Business
                  </p>
                  <h3 className="mb-3 text-[18px] font-semibold leading-[1.15] sm:text-[20px] md:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-white/90">
                    February 24, 2025
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f3ef] py-6">
        <div className="mx-auto max-w-[980px] px-4">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex flex-1 items-center">
              <span className="mr-2 text-[18px] leading-none text-[#d94b2b]">
                |
              </span>
              <h2 className="mr-4 text-[13px] font-medium text-black">
                World
              </h2>
              <div className="h-[1px] flex-1 bg-[#8f8f8f]"></div>
            </div>

            <a
              href="#"
              className="ml-5 flex items-center gap-1 whitespace-nowrap text-[12px] text-[#d94b2b]"
            >
              View All <span>→</span>
            </a>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-3">
            {worldPosts.map((post) => (
              <div key={post.id}>
                <div className="mb-3 h-[160px] w-full overflow-hidden md:h-[145px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mb-2 text-[9px] font-semibold uppercase text-[#d94b2b]">
                  {post.category}
                </p>

                <h3 className="max-w-[280px] text-[15px] font-medium leading-[1.2] text-black">
                  {post.title}
                </h3>

                <p className="mt-2 text-[10px] text-[#b0b0b0]">{post.date}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto flex min-h-[226px] max-w-[820px] flex-col bg-[#d9462b] sm:flex-row sm:items-center">
            <div className="h-[190px] w-full shadow-sm sm:absolute sm:left-[-40px] sm:top-1/2 sm:h-[185px] sm:w-[260px] sm:-translate-y-1/2 lg:left-[-105px] lg:w-[295px]">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80"
                alt="Contributor"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="px-6 py-8 text-white sm:ml-[235px] sm:px-8 sm:py-10 lg:ml-[240px] lg:px-10">
              <h3 className="mb-4 text-[22px] font-semibold leading-[1.15] md:text-[24px]">
                Join Our Community of
                <br />
                Innovators
              </h3>

              <p className="mb-5 max-w-[320px] text-[12px] leading-6 text-white/95">
                Share your insights and expertise on various topics with our
                global audience.
              </p>

              <button className="bg-white px-6 py-3 text-[11px] font-medium text-black transition hover:bg-gray-100">
                Contribute Your Story
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f4ef] py-10">
        <div className="mx-auto max-w-[1150px] px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {newsData.map((item) => (
              <div key={item.id}>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex flex-1 items-center gap-3">
                    <span className="text-[12px] font-medium text-[#1f1f1f]">
                      {item.section}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#8b8b8b]" />
                  </div>

                  <a
                    href="#"
                    className="shrink-0 text-[11px] font-medium text-[#c24d2c] transition hover:opacity-80"
                  >
                    View All <span className="ml-1">→</span>
                  </a>
                </div>

                <div className="group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-[220px] w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#c24d2c]">
                      {item.category}
                    </p>

                    <h2 className="max-w-[95%] text-[24px] font-medium leading-[1.15] tracking-[-0.3px] text-[#1f1f1f] sm:text-[31px] md:text-[22px]">
                      {item.title}
                    </h2>

                    <p className="mt-2 text-[11px] text-[#9a9a9a]">
                      {item.date}
                    </p>

                    <p className="mt-3 max-w-[95%] text-[13px] leading-[1.8] text-[#6f6f6f]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f4ef] py-10">
        <div className="mx-auto max-w-[1120px] px-4">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex flex-1 items-center gap-3">
              <span className="text-[12px] font-medium text-[#222]">Arts</span>
              <div className="h-[1px] flex-1 bg-[#8f8f8f]" />
            </div>

            <a
              href="#"
              className="text-[11px] font-medium text-[#c24d2c] hover:opacity-80"
            >
              View All <span className="ml-1">→</span>
            </a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artsPosts.map((item) => (
              <div key={item.id} className="group">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[150px] w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[110px] lg:h-[100px]"
                  />
                </div>

                <div className="pt-3">
                  <p className="mb-1 text-[9px] font-semibold uppercase tracking-[1px] text-[#c24d2c]">
                    {item.category}
                  </p>

                  <h3 className="max-w-[95%] text-[16px] font-medium leading-[1.25] text-[#1f1f1f]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[10px] text-[#9b9b9b]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
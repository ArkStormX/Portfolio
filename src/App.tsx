import { useState } from 'react'

export default function AryanVikasPortfolio() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null)
  const [activeSemester, setActiveSemester] = useState(0)

  const designProjects = [
    {
      title: '505 Run Club Event Card Design & Supply',
      desc: 'Designed collectible run cards handed out after every community run, helping 505 build a recognizable visual identity for their events.',
      accent: '#b1442f',
      behance: 'https://www.behance.net/ary3een_arkX'
    },
    {
      title: 'Club615 Member Poster Series',
      desc: 'Created a poster series for Club615 members built around inside jokes, personalities, memories and hostel culture aesthetics.',
      accent: '#7c5cff',
      behance: 'https://www.behance.net/ary3een_arkX'
    },
    {
      title: '04 Run Club Social Media Post Design',
      desc: 'Came up with the event concept, naming, copywriting and full visual design for a four slide Instagram carousel campaign.',
      accent: '#5f8f96',
      behance: 'https://www.behance.net/ary3een_arkX'
    },
    {
      title: 'Lazy Legs Recruitment Campaign',
      desc: 'Designed the recruitment campaign visuals for Lazy Legs while experimenting with startup inspired visuals and UI focused design language.',
      accent: '#d2a45c',
      behance: 'https://www.behance.net/ary3een_arkX'
    },
    {
      title: 'SPOT App Logo Design',
      desc: 'Designed the logo for SPOT, an app focused on listing events and happenings happening across Manipal.',
      accent: '#4da3ff',
      behance: 'https://www.behance.net/ary3een_arkX'
    }
  ]

  const semesterTimeline = [
    {
      sem: 'SEM 1',
      title: 'The Beginning of Club615',
      desc:
        'Club615 began as an attempt to make hostel life feel less temporary and emotionally distant. Since my room was the largest in the hostel, I slowly transformed it into a warmer and more welcoming space using ambient lights, posters, rugs, pillows and extra mattresses. Friends pooled money together for a projector and the room slowly became home to film nights, birthday celebrations and conversations that stretched late into the night. Around my desk sat glowing fish tanks and even a hamster that somehow became the hostel’s favourite little resident. Over time, Club615 stopped feeling like just a hostel room and became something people associated with comfort, warmth, friendship and belonging.'
    },
    {
      sem: 'SEM 2',
      title: 'The Club615 Night Canteen',
      desc:
        'During second semester I noticed how difficult it was for hostellers to afford late night food regularly since most campus canteens had prices starting around ₹100. Using the already growing popularity of Club615, I decided to start a student friendly night canteen after running polls in the Block 17 hostel groups asking whether people would support affordable late night food. What began with a single kettle and my friend Kandi Pardheev, fondly remembered by hostelers as KP, slowly turned into a lively late night community space. While KP handled the cooking, I managed the branding, menu planning, pricing, announcements and overall atmosphere. I moved benches from the TV rooms into the corridor outside my room, added warm golden strip lights and used the projector for football screenings, movie weekends and late night gatherings. Running from 10:30 PM to 2:30 AM with affordable prices like ₹26 Maggi, the canteen became both a source of income and a genuine community space built around good food, films and company.'
    },
    {
      sem: 'SEM 3',
      title: 'Rebuilding Club615',
      desc:
        'Semester 3 was about change. Since first year hostel blocks could only house freshers, all of us had to leave behind the place where Club615 was born. Some of us shifted into Block 20 while many people who made first year feel alive got scattered across different hostels. With that, the original Club615 Night Canteen and its legendary hangout space slowly came to an end. But I did not want Club615 to disappear with first year memories. Instead of recreating the same gathering space, I decided to help people express themselves through the spaces they lived in. Club615 was rebuilt into a décor and poster brand focused around hostel culture. I connected with suppliers and stores across Udupi, Manipal and Hyderabad to bring in strip lights, LED neon lights, custom posters and sticker prints. The idea was simple. If people missed home, maybe helping them shape their own space could make hostel rooms feel less emotionally empty. Even after the original room disappeared, Club615 remained a constant topic around campus. My Block 20 room slowly became known for its glowing fish tanks, massive poster walls and plants filling every corner, feeling less like a hostel room and more like a strange cinematic jungle built from lights, colours and chaos. That sense of curiosity, comfort and warmth was what kept Club615 alive even after everything changed.'
    },
    {
      sem: 'SEM 4',
      title: 'Beyond The Hostel Room',
      desc:
        'Semester 4 was when Club615 finally started becoming bigger than the room it came from. By then the name already had its own presence around campus, so instead of keeping it limited to hostel culture, I started taking it outside through collaborations, creative work and events around Manipal. Club615 began working with different clubs and communities across campus, supplying event cards for 505 Run Club, collaborating on their final run and later also creating print material for the Founders Run attended by the MIT Director. Slowly people began approaching Club615 for posters, advertisements and promotional material for their own events and ideas. This also led to collaborations with startups like Kult Productions where Club615 worked on visual material for party events around Manipal. What made this phase special was how approachable Club615 became to newer students. Earlier it felt like some legendary hostel room people only heard stories about, but now it existed openly through posters, collaborations, events and campus culture itself. The idea of Club615 was no longer tied to one room anymore, it had become something people across Manipal could experience in their own way.'
    },
    {
      sem: 'SEM 5',
      title: 'Club615 Expansion',
      desc:
        'With more still to come, Semester 5 is planned to be Club615 at its biggest stage yet. Multiple events, workshops, gatherings and parties are currently being planned directly under Club615 itself, making Club615 feel less like something people only hear about and more like something they can actually be part of.'
    }
  ]

  const experiences = [
    {
      title: 'MIC Check Podcast',
      desc: 'Guest speaker on MIC Check for the episode Far From Home during my first year of college.',
      details:
        'The episode was mainly about the overall experience of moving away from home for college, adapting to hostel life, dealing with homesickness, friendships and eventually finding comfort in people around you.'
    },
    {
      title: 'WAVES, BITS Goa & UTSAV',
      desc: 'Fashion shows, runway participation and cultural events.',
      details:
        'Won second place at WAVES BITS Goa inter college fashion show competition and also participated in the UTSAV Cultural Parade, one of the biggest inter MAHE events.'
    },
    {
      title: 'Vishwasa NGO',
      desc: 'Voiceovers, translation and mental health awareness media.',
      details:
        'Vishwasa is a mental health awareness NGO focused on helping children. I worked on multiple videos as a voiceover artist in both English and Telugu while also translating scripts from English to Telugu and Telugu to English.'
    },
    {
      title: 'AM Plus Newspaper',
      desc: 'Editing, layout design and publication work for MIC’s weekly newspaper.',
      details:
        'I was the editor of AM PLUS, MIC’s weekly newspaper, for one issue and also helped with other issues throughout the semester as a page layout designer, article writer and with the overall aesthetic and timeliness of the papers for other teams aside from my own purely due to interest.'
    },
    {
      title: 'BOAT Advertisement',
      desc: 'Created a BOAT advertisement project for an end semester practical while handling the creative execution and production process.'
    },
    {
      title: 'Remixes & Sound Design',
      desc: 'Music remixing, sound experimentation and audio production projects.',
      details:
        'I did a passion project trying to mix the track Kompa Pasion with renditions of it from various artists while also experimenting with remixing different tracks over time. I also worked with sound for various college assignments and projects including radio productions and vocal story sound design.'
    },
    {
      title: 'Short Films',
      desc: 'Acting, editing and production work for short film projects.',
      details:
        'Acted in two short films, one being a joint passion project between juniors and seniors and another for a college assignment. I also worked on editing for short films and interview based projects.'
    },
    {
      title: 'Writings & Poems',
      desc: 'Worked on personal writings, reflective pieces and poetry exploring memory, emotions, identity and experiences through cinematic and descriptive writing styles.'
    }
  ]

  return (
    <div className="bg-[#090909] text-[#f5f1e8] min-h-screen overflow-x-hidden font-sans relative">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-[#b1442f]/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-400/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-[#ff9f43]/10 blur-[180px]" />
      </div>

      <div className="relative z-10">
        <section className="relative min-h-screen flex items-end px-6 md:px-12 pb-20 pt-32 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="mb-8 uppercase tracking-[0.45em] text-[11px] text-[#b1442f]">
              Creative Archive
            </div>

            <h1 className="leading-none uppercase font-black tracking-[-0.06em] text-[5rem] md:text-[10rem] lg:text-[13rem]">
              Aryan
              <br />
              <span className="text-transparent stroke-text">Vikas</span>
            </h1>
          </div>
        </section>

        <section id="work" className="px-6 md:px-12 py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#b1442f] mb-4">
                01 Selected Work
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] max-w-4xl leading-none">
                Design Work & Visual Projects
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {designProjects.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="group border border-white/10 rounded-[2.3rem] overflow-hidden bg-black/[0.45] hover:bg-white/[0.03] transition-all duration-700 hover:-translate-y-2 text-left relative"
                  style={{ boxShadow: `0 0 55px ${item.accent}25` }}
                >
                  <div
                    className="absolute inset-0 opacity-20 blur-3xl transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: `radial-gradient(circle at center, ${item.accent}, transparent 65%)` }}
                  />

                  <div className="relative z-10 p-7 min-h-[320px] flex flex-col justify-between">
                    <div>
                      <div className="uppercase tracking-[0.32em] text-[11px] mb-8" style={{ color: item.accent }}>
                        Graphic Design
                      </div>

                      <h3 className="text-[2.4rem] uppercase font-black leading-[0.92] tracking-[-0.04em] h-[190px] flex items-start mb-6">
                        {item.title}
                      </h3>

                      <div className="w-16 h-[2px] mb-8" style={{ backgroundColor: item.accent }} />

                      <p className="text-[#c2c2c2] leading-8 text-[1rem] mb-8">
                        {item.desc}
                      </p>

                      {expandedProject === index && (
                        <div className="pt-6 border-t border-white/10 mt-6">
                          <a
                          href={item.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-500 text-sm uppercase tracking-[0.2em] font-medium mb-6"
                          style={{ borderColor: `${item.accent}60`, color: item.accent }}
                        >
                          View Project
                        </a>
                        </div>
                      )}

                      
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#b1442f] mb-4">
                02 Experience & Presence
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-4xl">
                Media, Stage & Creative Work
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((item, index) => {
                const glowClass =
                  item.title === 'MIC Check Podcast'
                    ? 'hover:border-[#1DB954]/70 hover:bg-[#1DB954]/[0.04] hover:shadow-[0_0_40px_rgba(29,185,84,0.22)]'
                    : item.title === 'BOAT Advertisement'
                    ? 'hover:border-red-500/70 hover:bg-red-500/[0.05] hover:shadow-[0_0_40px_rgba(239,68,68,0.22)]'
                    : 'hover:border-orange-400/70 hover:bg-orange-500/[0.04] hover:shadow-[0_0_40px_rgba(251,146,60,0.18)]'

                return (
                  <button
                    key={index}
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                    className={`text-left p-7 rounded-3xl border border-white/10 bg-white/[0.02] transition-all duration-500 ${glowClass}`}
                  >
                    <div className="flex items-start justify-between gap-6 mb-5">
                      <h3 className="text-3xl uppercase font-bold leading-none">
                        {item.title}
                      </h3>

                      <span className="text-2xl text-[#8d8d8d]">
                        {expandedExperience === index ? '−' : '+'}
                      </span>
                    </div>

                    <p className="text-[#b8b8b8] leading-7 text-[1.02rem] mb-4">
                      {item.desc}
                    </p>

                    {expandedExperience === index && item.details && (
                      <div className="pt-4 border-t border-white/10 text-[#9f9f9f] leading-8 text-[0.98rem]">
                        {item.details}
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        <section id="club615" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#080808] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(177,68,47,0.08),transparent_35%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#7c5cff] mb-4">
                03 Club615
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl mb-10">
                Posters, Community & Hostel Culture
              </h2>

              <div className="grid lg:grid-cols-[320px_1fr] gap-12 items-start">
                <div className="relative">
                  <div className="absolute left-[18px] top-2 bottom-2 w-px bg-white/10" />

                  <div className="space-y-5 relative z-10">
                    {semesterTimeline.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSemester(index)}
                        className={`w-full text-left pl-12 pr-6 py-6 rounded-[1.8rem] border transition-all duration-500 relative overflow-hidden ${
                          activeSemester === index
                            ? 'border-[#7c5cff]/70 bg-[#7c5cff]/[0.08] shadow-[0_0_40px_rgba(124,92,255,0.16)]'
                            : 'border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div
                          className={`absolute left-[13px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-500 ${
                            activeSemester === index ? 'bg-[#7c5cff] shadow-[0_0_18px_rgba(124,92,255,0.8)]' : 'bg-white/30'
                          }`}
                        />

                        <div className="uppercase tracking-[0.3em] text-[11px] text-[#7c5cff] mb-3">
                          Timeline
                        </div>

                        <h3 className="text-3xl font-black uppercase tracking-[-0.04em] leading-none">
                          {item.sem}
                        </h3>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border border-white/10 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl p-10 min-h-[420px] relative overflow-hidden shadow-[0_0_60px_rgba(124,92,255,0.08)]">
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.2),transparent_35%)]" />

                  <div className="relative z-10">
                    <div className="uppercase tracking-[0.35em] text-[11px] text-[#7c5cff] mb-5">
                      Club615 Timeline
                    </div>

                    <h3 className="text-4xl md:text-5xl uppercase font-black tracking-[-0.05em] leading-none mb-8">
                      {semesterTimeline[activeSemester].title}
                    </h3>

                    <p className="text-[#c8c8c8] text-lg md:text-xl leading-10 max-w-3xl">
                      {semesterTimeline[activeSemester].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 border-t border-white/10 overflow-hidden bg-[#070707] relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(177,68,47,0.15),transparent_45%)]" />

          <div className="mb-10 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
              <div className="uppercase tracking-[0.35em] text-[11px] text-[#b1442f] mb-3">
                Club615 Archive
              </div>

              <h3 className="text-3xl md:text-5xl uppercase font-black tracking-[-0.05em] leading-none">
                Moments, Posters & Hostel Memories
              </h3>
            </div>
          </div>

          <div className="flex gap-6 marquee-track w-max animate-[marquee_32s_linear_infinite] px-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="w-[320px] h-[220px] rounded-[1.5rem] overflow-hidden border border-white/10 flex-shrink-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop"
                  alt="Club615"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>

        <section id="volunteering" className="px-6 md:px-12 py-28 border-t border-white/10 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#5f8f96] mb-4">
                04 Volunteer Archive
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl">
                Volunteering, Logistics & On Ground Work
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Article 19
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Worked in creatives and logistics helping with coordination, support work and overall on ground execution during the event.
                </p>
              </div>

              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Namma Sante
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Handled logistics and problem solving during Namma Sante where even seniors often relied on me during chaotic on ground situations.
                </p>
              </div>

              <div className="border border-white/10 rounded-[2rem] p-8 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500">
                <div className="uppercase tracking-[0.3em] text-[11px] text-[#b1442f] mb-6">
                  Volunteer Work
                </div>

                <h3 className="text-3xl uppercase font-black leading-none mb-5">
                  Rockathon
                </h3>

                <p className="text-[#bdbdbd] leading-8 text-lg">
                  Part of a two person volunteer team at Rockathon in Hyderabad helping participants during the rope assisted ledge descent section.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ecology" className="px-6 md:px-12 py-28 border-t border-cyan-500/10 bg-[#070b12] relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(177,68,47,0.08),transparent_36%)]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20">
              <p className="uppercase tracking-[0.4em] text-[11px] text-[#5f8f96] mb-4">
                05 Exploration & Ecology
              </p>

              <h2 className="text-5xl md:text-7xl uppercase font-black tracking-[-0.05em] leading-none max-w-5xl">
                Biotopes, Fishkeeping & Exploration
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xl md:text-2xl leading-10 text-[#dad4c7] font-light mb-10">
                  I build biotopes inspired by the actual habitats fish come from, mixing aquascaping, research and species compatibility to recreate pieces of those ecosystems inside aquariums. Over the years this slowly turned from just a hobby into something much bigger involving exploration, ecosystem observation, photography and understanding how aquatic environments actually function in nature.
                </p>

                <div className="space-y-5 text-[#bcbcbc] text-lg leading-8 mb-10">
                  <p>
                    I have been in the aquarium hobby for 13+ years now, starting around the age of 7. A lot of weekends were spent travelling around looking for rivers, ponds and random water bodies searching for fish species and studying aquatic habitats.
                  </p>

                  <p>
                    Later on I participated in the India Biotope Championship 2025, a competition focused on native species, ecosystem awareness and biotope style aquascaping.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">180+</div>
                    <div className="uppercase tracking-[0.25em] text-xs text-[#8e8e8e]">
                      Fish Species Kept
                    </div>
                  </div>

                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">IBC</div>
                    <div className="uppercase tracking-[0.25em] text-xs text-[#8e8e8e] leading-5">
                      India Biotope Championship
                    </div>
                  </div>

                  <div className="border border-white/10 rounded-[1.75rem] p-6 bg-white/[0.04] backdrop-blur-[22px] shadow-[0_10px_35px_rgba(0,0,0,0.35)] hover:border-cyan-400/40 hover:bg-cyan-400/[0.04] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]">
                    <div className="text-4xl font-black mb-2">13+</div>
                    <div className="uppercase tracking-[0.18em] text-xs text-[#8e8e8e] leading-5">
                      Years In Aquarium Hobby
                    </div>
                  </div>
                </div>

                <div className="mt-10 border border-white/10 rounded-[2rem] p-8 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500">
                  <div className="text-[#5f8f96] uppercase tracking-[0.3em] text-xs mb-4">
                    Side Venture
                  </div>

                  <h3 className="text-3xl uppercase font-black leading-none mb-5">
                    Icthyra
                  </h3>

                  <p className="text-[#bdbdbd] text-lg leading-8 max-w-3xl">
                    Co founded Icthyra with a friend as a side venture focused on exotic aquatics, rare fish and breeding projects. I currently handle the branding, visual identity and marketing side while we continue building the systems behind it.
                  </p>
                </div>
              </div>

              <div className="h-full min-h-[500px] rounded-[2rem] overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1600&auto=format&fit=crop"
                  alt="Exploration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: #090909;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .stroke-text {
          -webkit-text-stroke: 1px #f5f1e8;
        }
      `}</style>
    </div>
  )
}

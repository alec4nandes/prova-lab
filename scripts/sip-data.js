/* FOR PARSING KAT'S DATA:

function createObject() {
    return sipData.map(([eventName, date, description, url]) => {
        const [start, end] = parseDate(date);
        return {
            name: { text: eventName.replaceAll("SIP:", "").trim() },
            start: { utc: start.toString() },
            end: { utc: end.toString() },
            description: { text: description },
            url,
            status: "completed",
        };
    });
}

function parseDate(str) {
    const [month, day, year] = str
            .split(" ")
            .map((part, i) =>
                i ? +part : months.indexOf(part.slice(0, 3).toUpperCase())
            ),
        date = new Date(year, month, day);
    return [date, date];
}

*/

const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
];

// PARSED DATA (MATCHES EVENTBRITE API):

const sipEvents = [
    {
        name: {
            text: "WHY AN INCLUSIVE OUTDOORS MATTERS",
        },
        start: {
            utc: "Tue Sep 14 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Tue Sep 14 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Carter McBride joins us to talk about the outdoors, access to leisure, safety, and inclusion.",
        },
        url: "https://www.eventbrite.com/e/sip-why-an-inclusive-outdoors-matters-tickets-170502748310",
        status: "completed",
    },
    {
        name: {
            text: 'THE "JUSTICE" IN CLIMATE JUSTICE',
        },
        start: {
            utc: "Tue Aug 10 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Tue Aug 10 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: 'Professor Alice Kaswan will chat with us about what "justice" means in the context of climate justice.',
        },
        url: "https://www.eventbrite.com/e/sip-a-social-purpose-happy-hour-tickets-166082526307",
        status: "completed",
    },
    {
        name: {
            text: "OUR 50TH. LIVE AT MANNY'S",
        },
        start: {
            utc: "Tue Jul 13 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Tue Jul 13 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "We are delighted to team up with Sejal Choksi-Chugh, Executive Director of San Francisco Baykeeper, to discuss climate justice.",
        },
        url: "https://www.eventbrite.com/e/sip-a-spoke-happy-hour-tickets-161956053917",
        status: "completed",
    },
    {
        name: {
            text: "THE LIVE SHOW. A PICNIC WITH KAT & HELKE",
        },
        start: {
            utc: "Tue Jun 15 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Tue Jun 15 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "SIP began as a series of informal online happy hours to raise awareness and connect on issues in our community. As shelter-in-place restrictions lift in California, we want to take the opportunity to meet in person.",
        },
        status: "completed",
    },
    {
        name: {
            text: "THE CALIFORNIA ENVIRONMENTAL QUALITY ACT 101",
        },
        start: {
            utc: "Thu Apr 29 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 29 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Kelly Young is an environmental planner with the City of San Francisco. Kelly will talk us through the California Environmental Quality Act and what it means for impact reporting in government.",
        },
        status: "completed",
    },
    {
        name: {
            text: "CANNABIS MARKETING. WHY WORDS MATTER",
        },
        start: {
            utc: "Thu Apr 22 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 22 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Amy Watkins, a content specialist for the Canadian government, will lead a chat examining the origins of Cannabis slang, and the racist context in which many policies and language have been developed in North America.",
        },
        status: "completed",
    },
    {
        name: {
            text: "THE CONSEQUENCES OF FAKE MEDICINE",
        },
        start: {
            utc: "Thu Apr 08 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 08 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Rick Roberts (Advisory Board Member, Partnership for Safe Medicines) and co-presenter Shabbir Safdar (ED, Partnership for Safe Medicines) will discuss policies surrounding medicine safety and the consequences of fake medicine on people and the economy.",
        },
        status: "completed",
    },
    {
        name: {
            text: "WHY WE NEED A BETTER INTERNET",
        },
        start: {
            utc: "Thu Apr 01 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 01 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "This week, join Meg Trowbridge for a chat about online privacy. Meg is a Senior Copywriter at Mozilla, the maker of the Firefox browser and non-profit organization working with tech creators and policymakers to build a better internet.",
        },
        status: "completed",
    },
    {
        name: {
            text: "UNPACKING PERSONAL SOCIAL CHALLENGES",
        },
        start: {
            utc: "Thu Mar 25 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Mar 25 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "In 2018 Andrew Patterson climbed Table Mountain in South Africa every day to raise funds for three nonprofits. He will be talking about committing to small changes that lead to big impact.",
        },
        status: "completed",
    },
    {
        name: {
            text: "DISASTER RISK & CULTURAL HERITAGE",
        },
        start: {
            utc: "Thu Mar 18 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Mar 18 2021 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "An Architectural Preservation Architect at Fundação Casa de Rui Barbosa (Brazil), Márcia Furriel will lead this discussion on disaster risk management of cultural heritage, with a focus on the consequences of climate change.",
        },
        status: "completed",
    },
    {
        name: {
            text: "REPRODUCTIVE JUSTICE",
        },
        start: {
            utc: "Thu Mar 11 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Mar 11 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Darby Morris, a trained birth and postpartum doula, will be speaking about reproductive justice, with a focus on pregnancy and birth.",
        },
        status: "completed",
    },
    {
        name: {
            text: "WILL TRAVEL BE THE SAME AFTER COVID-19?",
        },
        start: {
            utc: "Thu Mar 04 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Mar 04 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "There is a growing momentum to address tourism's carbon footprint, but what kind of impact or small adjustments can we make to our travel habits on the planet? We dive deeper into this topic with Nicole Cocolas this week. In her final year as a PhD candidate at the University of Queensland, Nicole's research focuses on changing attitudes toward air travel to better reflect climate concern.",
        },
        status: "completed",
    },
    {
        name: {
            text: "CORPORATE SUSTAINABILITY REPORTING",
        },
        start: {
            utc: "Thu Feb 25 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Feb 25 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Charles Orgbon III is a sustainability and social impact consultant. This chat will focus on how we compare companies' sustainability performance, common frameworks, and why these standards should matter to you as a consumer, employee, or potential investor.",
        },
        status: "completed",
    },
    {
        name: {
            text: "VOTER CAMPAIGNING 2020. WHERE IT MATTERED.",
        },
        start: {
            utc: "Thu Feb 18 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Feb 18 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Mark Mullen is back to discuss important changes in the voter turnout process post-election. We'll look at the effects of online/ app methods, geographic and demographic targeting in places like Georgia, and talk about what the future holds.",
        },
        status: "completed",
    },
    {
        name: {
            text: "PARTICIPATORY RESEARCH. COMMUNITIES IN CHARGE.",
        },
        start: {
            utc: "Thu Feb 11 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Feb 11 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "As the Research and Evaluation Director at ITVS, Grace Anglin is helping documentary filmmakers within the public media system measure and understand ways to amplify the impact of their films. In this week's SIP, Grace is going to guide us through a discussion on participatory research.",
        },
        status: "completed",
    },
    {
        name: {
            text: "REPRESENTATION IN ENTREPRENEURSHIP",
        },
        start: {
            utc: "Thu Feb 04 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Feb 04 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Anna Consani is the VP of Community and Strategic Partnerships at Springboard Enterprises. Join us this week for a chat about the importance of female entrepreneurs, incubators and visibility.",
        },
        status: "completed",
    },
    {
        name: {
            text: "FOOD WASTE & CLIMATE CHANGE",
        },
        start: {
            utc: "Thu Jan 28 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Jan 28 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Rose Hartley is the Sustainability Manager at Imperfect Foods, a nationwide e-commerce grocer reimagining grocery delivery for a kinder, less wasteful world. We will talk to Rose about the social changes required to eliminate food waste and build a better food system.",
        },
        status: "completed",
    },
    {
        name: {
            text: "IS M&E A NECESSITY, OR JUST A BURDEN?",
        },
        start: {
            utc: "Thu Jan 21 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Jan 21 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Robyn Hoogendam is a PhD candidate in the School of Public Policy and Administration at Carleton University. Her thesis is concerned with Canadian federal funding accountability requirements and the impact on nonprofit organizations. She will lead the discussion on this week's theme.",
        },
        status: "completed",
    },
    {
        name: {
            text: "HAPPY 2021! NOW WHAT?",
        },
        start: {
            utc: "Thu Jan 14 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Jan 14 2021 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "As we tiptoe into 2021, we want to hear how you all are doing, share some SIP updates, and get community feedback as we roll into the new year.",
        },
        status: "completed",
    },
    {
        name: {
            text: "END OF YEAR CELEBRATION WITH KAT & HELKE",
        },
        start: {
            utc: "Thu Dec 10 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Dec 10 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "What started as a way to build community during COVID has become a reliably joyful weekly learning experience. Please join us for our last SIP of the year. We'll remind you of what we've all created, and give you a sneak peak into where we are going.",
        },
        status: "completed",
    },
    {
        name: {
            text: "PERSONAL SAFETY & BOUNDARY SETTING",
        },
        start: {
            utc: "Thu Dec 03 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Dec 03 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Linda Leu is the Executive Director and instructor at IMPACT Bay Area, an organization that empowers individuals to resist violence by teaching healthy boundary setting and full-force self-defense. Tune in this week to learn more about Linda's work in the community.",
        },
        status: "completed",
    },
    {
        name: {
            text: "HOW TO HATE (BUT TAKE ACTION ON) PLASTICS",
        },
        start: {
            utc: "Thu Nov 19 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Nov 19 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Co-founder Helke Ramos has a deep-seated hatred of plastic. As we collectively head into high consumption season, Helke will lead the group through a chat about what we can do as consumers to decrease our usage and make more informed choices. Plus, we will look at a few cool ways businesses are affecting change.",
        },
        status: "completed",
    },
    {
        name: {
            text: "NLP MACHINE LEARNING",
        },
        start: {
            utc: "Thu Nov 12 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Nov 12 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Stephen Godfrey, a data science practitioner, will provide a practical, non-technical demonstration of how a class of machine learning tools known as Natural Language Processing (NLP) can be used to extract insights from unstructured text.",
        },
        status: "completed",
    },
    {
        name: {
            text: "EXPLORING COMMUNITY ENGAGEMENT",
        },
        start: {
            utc: "Thu Nov 05 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        end: {
            utc: "Thu Nov 05 2020 00:00:00 GMT-0800 (Pacific Standard Time)",
        },
        description: {
            text: "Katie Zeisl specializes in inclusive, accessible, and meaningful events and programs that make a difference in society. Join us this week as Katie discusses her experiences, focusing on the ways she's successfully managed virtual engagement.",
        },
        status: "completed",
    },
    {
        name: {
            text: "WHAT ARE SUSTAINABILITY METRICS",
        },
        start: {
            utc: "Thu Oct 29 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Oct 29 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Cassandra Telenkois assesses the environmental impacts of new businesses, and she is also a researcher in sustainable design. She will be talking with us about the importance of metrics and analytics in sustainability.",
        },
        status: "completed",
    },
    {
        name: {
            text: "ADVOCATING FOR THE AMAZON",
        },
        start: {
            utc: "Thu Oct 22 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Oct 22 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Sign in this week to hear from Sophia Pfeifer, a Brazilian lawyer dedicated to the environment. She is especially enthusiastic about researching the relationship between climate justice and the Amazon Forest.",
        },
        status: "completed",
    },
    {
        name: {
            text: "DESTIGMATIZING PERIODS THROUGH COMEDY",
        },
        start: {
            utc: "Thu Oct 15 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Oct 15 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Meg Trowbridge, Kate Elston and Meg Hayes run the podcast Vicious Cycle. As three Bay Area comedians and bleeders, they decided it was time to demystify, bitch about, and laugh at periods. During this happy hour, we're going to chat about sitting through discomfort: discussing menstruation isn't always easy, but it can be funny.",
        },
        status: "completed",
    },
    {
        name: {
            text: "CLIMATE CRISIS DOOM & BLOOM",
        },
        start: {
            utc: "Thu Oct 08 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Oct 08 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Marc O'Brien is the co-founder of The Determined and co-founder of Climate Designers, a hub for designers and creative professionals committed to using their skills to take climate action. Marc will present his perspective on the climate crisis through a design lens.",
        },
        status: "completed",
    },
    {
        name: {
            text: "WILL VOTER TURNOUT DECIDE THE ELECTION",
        },
        start: {
            utc: "Thu Oct 01 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Oct 01 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Mark Mullen is the Founder of Turnout Nation. Their mission is to help raise voter turnout in the U.S. so the government better represents the people. Mark will be leading a discussion on voter turnout, and challenge us to inspire others to make their voices heard.",
        },
        status: "completed",
    },
    {
        name: {
            text: "INCLUSIVITY AT WORK",
        },
        start: {
            utc: "Thu Sep 24 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Sep 24 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Founder of NINON, Andie Washington, is committed to cultivating a sustainable, thriving culture within the workplace. She will be talking this week about how to foster an engaging, inclusive work environment.",
        },
        status: "completed",
    },
    {
        name: {
            text: "DOCUMENTING UNTOLD SOCIAL ISSUE STORIES",
        },
        start: {
            utc: "Thu Sep 17 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Sep 17 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Lisa Tawil is the VP of Marketing and Communications at ITVS, one of the largest co-producers and distributors of independent documentaries. ITVS's mission is to diversify the media landscape by uplifting voices of historically under-represented communities. Lisa will be talking with us about the documentary field, and the opportunities & challenges around impact work in media.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON EDUCATION DURING COVID",
        },
        start: {
            utc: "Thu Sep 10 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Sep 10 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: 'Terry Godfrey is the Chief Financial and Administrative Officer at the Learning Policy Institute, which has published a new report called, "Restarting and Reinventing School: Learning in the Time of COVID and Beyond." Terry will use this research to highlight education challenges during COVID-19.',
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON HEALING THROUGH REVELING",
        },
        start: {
            utc: "Thu Sep 03 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Sep 03 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Joelle Dussek is a former NYC TV/ film/ podcast producer turned SF somatic psychologist. Through the lens of Carnival, she's going to give us a glimpse this week into how to combine the old and new to reveal and heal through reveling.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON CIRCULAR ECONOMIES",
        },
        start: {
            utc: "Thu Aug 27 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Aug 27 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Dr. Julio Campos, ecological economist, will steer a conversation on doughnut economics, including the relationship between circular economies and economic development, the role of consumers, and challenges to measuring and implementing environmental initiatives.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON IMPACT INVESTING",
        },
        start: {
            utc: "Thu Aug 20 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Aug 20 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Senior Development Officer at the East Bay Community Foundation (and one of our Advisory Committee members) Christine Lim gives us the scoop this week on impact investing.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON POLITICS",
        },
        start: {
            utc: "Thu Aug 13 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Aug 13 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "This week, Marc Goldstein will talk us through online political campaigns.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON SUSTAINABLE FASHION",
        },
        start: {
            utc: "Thu Aug 06 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Aug 06 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Aguida Zanol is a multi-disciplinary designer and sustainable product manager from Brazil. She is passionate about the development of sustainable projects and products that combine aspects of the social, environmental and economic. During this SIP, Aguida will discuss regeneration in the fashion industry.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON ARTIFICIAL INTELLIGENCE",
        },
        start: {
            utc: "Thu Jul 30 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jul 30 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Our resident community AI specialist, Chidam Raji is going to lead a chat on AI. We will specifically look at applications in healthcare with a focus on medical diagnostics, prognostics, and treatment as well as implications for bias.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON PROCUREMENT & SOCIAL IMPACT",
        },
        start: {
            utc: "Thu Jul 16 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jul 16 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Adriana Rita has over 25 years of experience in procurement. Coming to us from Brazil, she will be leading the discussion this week on B2B support, transparency/ ethics, and purpose-driven sourcing.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON COUNTERFEIT MEDICINE",
        },
        start: {
            utc: "Thu Jul 09 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jul 09 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Rick Roberts is on the Board of the Partnership for Medicine. A personal experience with counterfeits led to Rick's advocacy journey. Most recently, he testified before Congress on the opioid epidemic. Join Rick this week to talk about black market medicine and COVID scams.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON DISABILITY RIGHTS",
        },
        start: {
            utc: "Thu Jul 02 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jul 02 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Darby Morris leads our chat this week on Disability Rights, with a focus on the deaf community. We will also explore how we conceptualize disability, privilege and identity.",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON SUSTAINABILITY",
        },
        start: {
            utc: "Thu Jun 25 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jun 25 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Sustainability lives at the intersection of economic development, social safety and environmental preservation with a focus on policy and industry change. How can we become more empowered consumers? Is sustainability enough — what about regeneration? And how has COVID-19 catalyzed movement in this area?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON LABOR EXPLOITATION",
        },
        start: {
            utc: "Thu Jun 18 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jun 18 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Labor exploitation is often difficult to identify, overlooked or ignored. How can we become more aware of common exploitative practices? What can we expect from businesses, and the government? And where can we find resources to learn more?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON CORPORATE ACTIVISM",
        },
        start: {
            utc: "Thu Jun 11 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jun 11 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "What should corporate activism look like? How involved do we want or expect a business to be in social change? As a consumer: do you monitor what companies are doing, or prioritize issue areas? How important is brand activism and industry leadership?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON INDIVIDUAL ACTIVISM",
        },
        start: {
            utc: "Thu Jun 04 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Jun 04 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "We are living in the midst of profound social change. Activism comes in many forms. What is your version of activism? What are the barriers to activism? How does personal risk or safety play a part? How do we negotiate becoming activists during a health crisis?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON THE ARTS",
        },
        start: {
            utc: "Thu May 28 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu May 28 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "The arts are an essential component of culture. What are you doing to stay entertained during lockdown? What measures would need to be in place for you to attend an event? How can we preserve cultural spaces and creativity? What can we do to support our local artists and venues?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON HEALTH & SAFETY",
        },
        start: {
            utc: "Thu May 21 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu May 21 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Many of our health or safety habits have changed since the lockdown. Has being at home shifted your behaviors or altered your physical or mental health? Have shifting healthcare policies affected your perception of care or treatment? Are there ways we can better ensure the health & safety of those in the community?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON COMMS & ENGAGEMENT",
        },
        start: {
            utc: "Thu May 14 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu May 14 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "Limited in-person contact is having a profound effect on what it means to socialize. While online communities and virtual programming are opening access to people and places that may not have been accessible before, not everyone is able to tap into these resources. What are some ways to ensure inclusion and equity?",
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON THE FUTURE OF WORK",
        },
        start: {
            utc: "Thu May 07 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu May 07 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: 'COVID-19 has altered the where, what and how of work. Remote working has shifted recruiting, training, productivity, and communication — arguably, forever. Those who continue to work face health consequences, as the debate over what we mean by "essential" and people are struggling to pay their bills. How have our relationships to work (and technology) changed?',
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON FEELING STUCK",
        },
        start: {
            utc: "Thu Apr 30 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 30 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: 'Most of us are currently re-negotiating our daily routines and mental health, to varying degrees of success. Even for those of us who are accustomed to freelancing and unconventional workweeks, the current version of normal seems a bit surreal. Are you feeling mentally "stuck"? And how do we get... unstuck?',
        },
        status: "completed",
    },
    {
        name: {
            text: "A HAPPY HOUR ON FOOD",
        },
        start: {
            utc: "Thu Apr 23 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        end: {
            utc: "Thu Apr 23 2020 00:00:00 GMT-0700 (Pacific Daylight Time)",
        },
        description: {
            text: "COVID-19 has affected the production, distribution and access of our entire food supply chain. People are hungry, and food banks are stretched thin while food dumping (or culling) practices grow in an effort to stay in business. What is to be done about all this waste?",
        },
        status: "completed",
    },
];

// function updateSIPs() {
//     const options = { year: "numeric", month: "long", day: "numeric" };
//     sipEvents.forEach((event) => {
//         event.start.utc = new Date(event.start.utc).toLocaleDateString(
//             "en-US",
//             options
//         );
//         event.end.utc = new Date(event.end.utc).toLocaleDateString(
//             "en-US",
//             options
//         );
//     });
// }

// updateSIPs();

// console.log(JSON.stringify(sipEvents));

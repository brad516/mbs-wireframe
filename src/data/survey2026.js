// Figures from the 2026 citizen feedback survey, taken at the end of the
// session. 711 of 862 citizens answered. Percentages count "strongly agree",
// "agree" and "somewhat agree" together unless the label says otherwise, and
// each is rounded from the citizens who answered that question.
export const surveySource = 'Source: 2026 Missouri Boys State citizen survey.'

export const surveyBase = { respondents: 711, citizens: 862, responseRate: '82%' }

export const survey = {
  students: {
    lead: {
      number: '57%',
      headline: 'of 2026 citizens arrived without a sibling or close friend who had been before.',
      detail: 'Most guys walk in knowing nobody. By the end of the week, 9 in 10 said they had formed close friendships.',
    },
    stats: [
      { number: '90%', label: 'formed close friendships' },
      { number: '91%', label: 'felt socially included' },
      { number: '92%', label: 'felt they belonged in their city' },
      { number: '84%', label: 'would recommend it to students like them' },
    ],
  },
  parents: {
    lead: {
      number: '55%',
      headline: 'of 2026 citizens named a parent as a top influence on their decision to attend.',
      detail: 'More than a counselor, a teacher or a friend. If your son has been nominated and is on the fence, the most persuasive voice in his life is probably yours.',
    },
    stats: [
      { number: '95%', label: 'said staff cared about them' },
      { number: '93%', label: 'said staff were there when they needed help' },
      { number: '91%', label: 'felt socially included' },
      { number: '85%', label: 'said the week was worth their time' },
    ],
  },
  educators: {
    lead: {
      number: '56%',
      headline: 'of 2026 citizens named a school counselor or teacher as a top influence on their decision to attend.',
      detail: 'For more than half, the week began with one adult at school saying “you should do this.” Most students will not put themselves forward. They are waiting to be asked.',
    },
    stats: [
      { number: '87%', label: 'learned new information in their School of Instruction' },
      { number: '91%', label: 'said instructors explained things clearly' },
      { number: '87%', label: 'left more confident engaging in civic processes' },
      { number: '47%', label: 'had never toured the Missouri Capitol' },
    ],
  },
  donors: {
    lead: {
      number: '89%',
      headline: 'of 2026 citizens built meaningful relationships with citizens whose backgrounds or views differ from their own.',
      detail: 'They came as 33% Independent, 32% Republican, 25% Democrat and 10% something else, and at least 88% of each group left satisfied with the week.',
    },
    stats: [
      { number: '87%', label: 'left more confident engaging in civic processes' },
      { number: '84%', label: 'left more committed to democracy' },
      { number: '90%', label: 'were satisfied with the week' },
      { number: '82%', label: 'of citizens answered the survey', plain: true },
    ],
    bus: {
      number: '3 in 10',
      headline: 'citizens reached campus on a Boys State bus.',
      detail: 'Among those who rode it, 79% said the bus was important to their being able to attend. More than a third of rural citizens came that way.',
    },
  },
  corporate: {
    lead: {
      number: '97%',
      headline: 'of 2026 citizens would be interested in a Boys State internship in at least one field.',
      detail: 'Eight in ten plan to go straight to a four-year college. They are looking for a way into a career, and they will remember who offered one.',
    },
    internshipFields: [
      { number: '59%', label: 'Business and entrepreneurship' },
      { number: '56%', label: 'Engineering, technology and computer science' },
      { number: '47%', label: 'Finance, accounting and economics' },
      { number: '46%', label: 'Government and public service' },
      { number: '43%', label: 'Law and justice' },
    ],
  },
  alumni: {
    lead: {
      number: '41%',
      headline: 'of 2026 citizens came because a friend who had been to Boys State told them to.',
      detail: 'Another 12% said the same of a sibling. Alumni are the reason four in ten citizens apply, and 80% of this year’s class expect to stay in touch with the friends they made.',
    },
  },
  home: { number: '87%', label: 'leave more confident engaging in civic processes' },
}

// Written answers from the same survey. They are anonymous, so there are no
// names; spelling and punctuation are tidied and nothing else.
const byline = { name: '2026 Citizen', detail: 'Citizen feedback survey' }

export const surveyQuotes = {
  students: [
    'I was able to get out of my comfort zone in a way that wasn’t overwhelming. I also felt that though there were hundreds of citizens, I still felt seen and valued.',
    'Not being around anyone I knew. It helped me make many friends and taught me how to put myself out in a crowd and show myself to others.',
    'The atmosphere. I’ve never been involved with such an energetic crowd that was also so personal. It’s genuinely like I found another family, a brotherhood if you will, with people that are all completely unique and yet still fit together.',
    'I realized that I wasn’t much different from the people around me, and I was wrong about the idea that I wouldn’t fit in because I thought I wasn’t smart or popular enough to have any kind of impact on the program.',
    'Being able to meet new people from all over the state and befriend people I never would have met otherwise.',
    'It may be chaotic, but I would love to go back to the first day and do it all over again. Cherish each day.',
  ].map((quote) => ({ quote, ...byline })),
  educators: [
    'Learning firsthand how government works and operates. I knew up to an extent how, but participating in a government setting taught me more in a week than textbooks would in a couple of months.',
  ].map((quote) => ({ quote, ...byline })),
  donors: [
    'Getting to make connections with people who think differently than me and work together to create a successful society.',
    'I got to learn how to work with people I wasn’t close with and who had different views, opinions and backgrounds than I did.',
  ].map((quote) => ({ quote, ...byline })),
  advice: [
    'Get involved on the first day. Even if you don’t get a position, you can keep trying. The earlier you start involving yourself, the better of a time you will have.',
    'Aim high. Run for a position you think is out of your reach. You may not get it, but what you learn in the process is worth it.',
    'Don’t be afraid to participate. Everyone is new here, not just you.',
    'Don’t sit back in the crowd. Find what you have a passion for and seize the moment. There’s no time like the present, and one minute of fear beats a whole lifetime of regret.',
  ],
}

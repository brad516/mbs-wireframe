// Content for the Casino Night event page, taken from mbscasinonight.com.
// Ticket prices are placeholders: the live site had closed sales, so no
// prices were available to copy.
const img = (name) => `/events/casino-night/${name}.webp`

export const casinoNight = {
  slug: 'casino-night',
  edition: '5th Annual MBS Casino Night',
  title: 'Betting on Democracy',
  tagline: 'Tables, drinks, and a toast to the next class of Boys State.',
  date: 'Friday, October 9, 2026',
  time: '6:30–10:30 PM',
  venue: 'UMKC Bloch School Atrium',
  city: 'Kansas City, Missouri',
  address: '5108 Cherry Street, Kansas City, MO 64110',
  directions: 'https://www.google.com/maps/search/?api=1&query=UMKC+Bloch+School+of+Management+Kansas+City',
  heroImage: img('hero'),
  venueImage: img('venue'),

  includes: [
    { suit: '♠', text: 'Drinks from the open bar' },
    { suit: '♥', text: 'A spread of hors d’oeuvres', red: true },
    { suit: '♦', text: 'A starting stack of chips for the tables', red: true },
    { suit: '♣', text: 'Parking in the Cherry Street Garage' },
  ],
  includesNote:
    'Cash in your chips for raffle tickets through the night. The bigger your stack, the better your odds. Drawings run until the last game.',

  // Placeholder pricing
  tickets: [
    { id: 'single', name: 'Individual ticket', price: 125, note: 'One guest, one starting stack' },
    { id: 'pair', name: 'Pair of tickets', price: 225, note: 'Two guests, two starting stacks' },
    { id: 'chips', name: 'Extra chips', price: 20, note: 'Suggested donation per stack' },
  ],

  venueCopy:
    'This year we’re in the glass atrium of UMKC’s Henry W. Bloch School of Management, an award-winning building on the University of Missouri–Kansas City campus, and a tall, light-filled room that makes a good backdrop for a night out.',
  dressTitle: 'Celebrating 250 years of America and 87 of Missouri Boys State',
  dressCopy:
    'This year’s casino night lands on a pair of milestones. To mark the occasion, we invite you to come in red, white, or blue business casual: a nod to the flag, and to Boys State’s own colors.',

  quote: {
    text: 'It is not the critic who counts… The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly… and who at the worst, if he fails, at least fails while daring greatly.',
    source: 'Theodore Roosevelt, “Citizenship in a Republic,” 1910',
    after: 'Boys State is where a lot of Missouri students first step into the arena. A seat at the table helps put them there.',
  },

  causeCopy: [
    'Every summer, Missouri Boys State brings together high school students from across the state for a week where they build a working government from scratch: electing officials, passing laws, and running their own cities and counties.',
    'They learn it by doing. Proceeds from Casino Night go straight to the program so cost is never the reason a student misses out.',
  ],
  causeStats: [
    { number: '5th', label: 'annual casino night' },
    { number: '1 week', label: 'of self-government' },
    { number: '501(c)(3)', label: 'tax-exempt nonprofit' },
  ],

  gallery: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'].map(img),

  sponsorIntro:
    'Sponsorships cover the tables, the food, and the room, so more of every ticket goes to the students. Here’s what each level includes.',
  sponsorBenefits: [
    'Website recognition',
    'Extra gaming chips',
    'Extra prize & raffle tickets',
    'Event signage',
    'Gaming table sponsorship',
    'Premium gift for all guests',
    'Exclusive signage & recognition',
  ],
  sponsorLevels: [
    { name: 'All-In', amount: '$5,000', tickets: 8, benefits: 7, top: true },
    { name: 'High Roller', amount: '$2,500', tickets: 6, benefits: 6 },
    { name: 'Royal Flush', amount: '$1,000', tickets: 4, benefits: 4 },
    { name: 'Ace in the Hole', amount: '$500', tickets: 2, benefits: 3 },
    { name: 'Snake Eyes', amount: '$250', tickets: 1, benefits: 2 },
  ],

  faqs: [
    { question: 'When and where is the event?', answer: 'Friday, October 9, 2026, from 6:30 to 10:30 PM in the atrium of the UMKC Bloch School of Management, 5108 Cherry Street, Kansas City.' },
    { question: 'What about parking?', answer: 'Covered parking in the Cherry Street Garage is included with your ticket. Parking is reserved on the 5th and 6th floors.' },
    { question: 'What should I wear?', answer: 'Business casual. This year’s theme celebrates America’s 250th birthday and Boys State’s colors, so red, white and blue are encouraged but entirely optional.' },
    { question: 'Is food and drink included?', answer: 'Yes. Your ticket includes an all-night open bar and a full buffet of heavy hors d’oeuvres, with wine, beer, premium liquors, seltzers and non-alcoholic options.' },
    { question: 'Do I need to bring cash?', answer: 'Cash is handy for tipping bartenders and for raffle tickets or extra chips. Credit cards are also accepted at the event.' },
    { question: 'Can I get more chips?', answer: 'Yes. Additional chips are available for a suggested donation of $20, as many times as you like.' },
    { question: 'Do I have to stay until the end to win?', answer: 'You must be present to win, but winners are drawn throughout the evening at announced times.' },
    { question: 'Are donations tax deductible?', answer: 'Missouri Boys State is a not-for-profit, tax-exempt 501(c)(3) organization.' },
    { question: 'How does the money help students?', answer: 'All proceeds underwrite and improve the Boys State experience, so that cost is never the reason a student misses out.' },
  ],
}

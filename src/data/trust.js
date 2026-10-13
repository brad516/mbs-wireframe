// Content for the Memorial Trust pages, taken from mbstrust.org. Much of that
// site dates from 2008, so anything marked `confirm` needs checking with the
// trustees before launch. No figure here has been invented.

export const trust = {
  name: 'The Missouri Boys State Memorial Trust',
  legalName: 'The Missouri Boys State Memorial Trust, Inc.',
  short: 'Memorial Trust',
  founded: 'January 9, 1982',
  foundedYear: 1982,
  summary:
    'The Memorial Trust is the endowment behind Missouri Boys State. It was set up in 1982 so that the program would never depend on a single good year of fundraising.',
  origin:
    'Charlie Bacon, a former national commander of The American Legion and the first chairman of the trustees, called it a “rainy day fund.” The original trustees wanted Missouri Boys State to exist in perpetuity, and the money they set aside has been added to ever since.',
  legal:
    'The Trust is a separate 501(c)(3) organization with its own board of trustees. It takes no government or United Way money and relies entirely on gifts from individuals, companies and civic groups.',
  address: ['P.O. Box 667', 'Warrensburg, MO 64093'],
  phone: '660.429.2761',
  email: 'contact@mbstrust.org',
}

// `slug` is what the donation form and ?fund= links use.
export const funds = [
  {
    slug: 'weyer',
    name: 'A.B. Weyer Memorial Fund',
    short: 'Where it is needed most',
    kind: 'Unrestricted',
    hook: 'Keep Boys State here for the next class, and the one after that.',
    desc: 'The core of the endowment. Unrestricted gifts are added to the Trust’s principal each year and left to grow, so the program stays financially sound if other support falls away.',
    namedFor: 'A.B. Weyer, a co-founder of the program and the first Boys State Quartermaster in 1938.',
  },
  {
    slug: 'lehr',
    name: 'George W. Lehr Memorial Speakers Chair',
    short: 'Speakers Chair',
    kind: 'Restricted',
    since: 1988,
    hook: 'Put a nationally known speaker in front of every class.',
    desc: 'Pays the fee and expenses of one national keynote speaker at each session. Established in 1988 as part of the program’s 50th anniversary.',
    namedFor: 'George W. Lehr, Missouri State Auditor and a 1954 Boys State citizen, who came back to speak for years. His family and friends endowed the chair.',
    link: { to: '/give/trust/speakers', label: 'See every Lehr speaker since 1989' },
  },
  {
    slug: 'sponsorship',
    name: 'Directors’ Sponsorship Fund',
    short: 'Citizen sponsorships',
    kind: 'Restricted',
    since: 1999,
    hook: 'Send a student whose town has no one left to sponsor him.',
    desc: 'Covers the enrollment and travel of citizens in places where American Legion post sponsorship has declined, including districts in Kansas City and St. Louis.',
  },
  {
    slug: 'scholarships',
    name: 'Scholarship Fund',
    short: 'College scholarships',
    kind: 'Restricted',
    hook: 'Help the Citizen of the Week pay for college.',
    desc: 'Funds the Wayne S. Gregory scholarship for the Citizen of the Week and scholarships for the volunteer staff who run the session.',
    link: { to: '/students/college-credit', label: 'See the scholarships citizens can earn' },
  },
]

export const scholarships = [
  {
    title: 'Wayne S. Gregory Citizen of the Week Scholarship',
    amount: '[amount to confirm]',
    desc: 'A renewable college scholarship for the citizen named Citizen of the Week, chosen for scholarship, citizenship and leadership. Awarded since 1993 and endowed by the Springfield Kickapoo Voiture 40/8.',
  },
  {
    title: 'Volunteer Staff Scholarships',
    amount: '[amount to confirm]',
    desc: 'College scholarships for members of the volunteer staff, awarded by the Dean of Counselors and his senior staff for leadership and service.',
  },
]

// One Lehr Chair keynote a year. There was no session in 2020.
export const lehrSpeakers = [
  { year: 2026, name: 'Joe Manchin' },
  { year: 2025, name: 'Donna Brazile' },
  { year: 2024, name: 'Michael Steele' },
  { year: 2023, name: 'Bob Costas' },
  { year: 2022, name: 'Claire McCaskill' },
  { year: 2021, name: 'Julian Castro' },
  { year: 2019, name: 'Margaret Brennan' },
  { year: 2018, name: 'Juan Williams' },
  { year: 2017, name: 'John Brennan' },
  { year: 2016, name: 'Jay Nixon' },
  { year: 2015, name: 'Karl Rove' },
  { year: 2014, name: 'David Axelrod' },
  { year: 2013, name: 'Bob Woodward' },
  { year: 2012, name: 'James Carville' },
  { year: 2011, name: 'John Danforth' },
  { year: 2010, name: 'John Bolton' },
  { year: 2009, name: 'Richard Armitage' },
  { year: 2008, name: 'Mike Huckabee' },
  { year: 2007, name: 'Wesley T. Clark' },
  { year: 2006, name: 'John Ashcroft' },
  { year: 2005, name: 'Paul Begala' },
  { year: 2004, name: 'J.C. Watts' },
  { year: 2003, name: 'Mike Peters' },
  { year: 2002, name: 'Bill Bradley' },
  { year: 2001, name: 'William S. Cohen' },
  { year: 2000, name: 'Lisa Myers' },
  { year: 1999, name: 'Emanuel Cleaver' },
  { year: 1998, name: 'David R. Gergen' },
  { year: 1997, name: 'William J. Perry' },
  { year: 1996, name: 'Lamar Alexander' },
  { year: 1995, name: 'Robert M. Gates' },
  { year: 1994, name: 'Paul E. Tsongas' },
  { year: 1993, name: 'Edward D. “Chip” Robertson' },
  { year: 1992, name: 'Christopher “Kit” Bond' },
  { year: 1991, name: 'Thomas DeFrank' },
  { year: 1990, name: 'Robert F. Hyland' },
  { year: 1989, name: 'William Proxmire' },
]

export const lehrSpeakerFor = (year) => lehrSpeakers.find((s) => String(s.year) === String(year))

// As listed on mbstrust.org. Confirm: that page may be out of date.
export const trustees = [
  { name: 'Col. William R. “Rusty” Jones', role: 'Chairman', home: 'South Riding, VA', group: 'Officers' },
  { name: 'Mike Stewart', role: 'Treasurer', home: 'Saint Charles, MO', group: 'Officers' },
  { name: 'Elton W. Fay', role: 'Secretary', home: 'Columbia, MO', group: 'Officers' },
  { name: 'Ralph G. Biele', role: 'Trustee', home: 'Jefferson City, MO', group: 'Trustees' },
  { name: 'Tom D. Harmon', role: 'Trustee', home: 'Clearwater, FL', group: 'Trustees' },
  { name: 'Herbert M. Kohn', role: 'Chairman Emeritus', home: 'Kansas City, MO', group: 'Trustees' },
  { name: 'Mike Plunkett', role: 'Trustee', home: 'Leawood, KS', group: 'Trustees' },
  { name: 'Dr. Mark A. Stacy', role: 'Trustee', home: 'Greenville, NC', group: 'Trustees' },
  { name: 'Norman Fretwell', role: 'Trustee Emeritus', home: 'Kansas City, MO', group: 'Non-voting' },
]

export const majorGifts = [
  { donors: 'Leo A. (Tony) and Lisa Vogel', home: 'St. Charles, MO', date: 'December 2020' },
]

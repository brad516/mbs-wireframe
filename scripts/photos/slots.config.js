// Which photos from photos.moboysstate.org fill which slot on the site.
// After editing, run `npm run photos:sync` to download them and rebuild
// src/data/photos.json.
//
// Each slot is a query:
//   year    required
//   days    e.g. ['Thursday'] (see /api/session/days)
//   tags    e.g. ['Athletics'] (see /api/photo/tags); days AND tags must both match
//   match   text the file name must contain, e.g. 'ThursdayInauguration'
//   count   how many photos (default 1), spread evenly across the matches
//   names   exact file names to use instead, in order (pins the choice)
//   parts   several queries whose photos are combined into one slot
//   widths  output widths in px (default 640 and 1280)
//   alt     alt text for the images
//
// To find names worth pinning:
//   npm run photos:sync -- --list --year 2026 --day Thursday

const CURRENT = 2026
const ARCHIVE_YEARS = [2025, 2024, 2023, 2022, 2021, 2019, 2018]
// Most 2026 closing-day photos are filed under Sunday on the photo site.
const CLOSING_DAYS = ['Sunday', 'Closing Ceremony']

const slots = {
  // The week, shared by the home and students carousels and the timeline
  'week.saturday': { year: CURRENT, days: ['Saturday'], match: 'SaturdayArrivals', alt: 'Citizens arriving and checking in on Saturday' },
  'week.sunday': { year: CURRENT, tags: ['Elections'], match: 'SundayVoting', alt: 'Citizens voting in city elections on Sunday' },
  'week.montue': { year: CURRENT, tags: ['Legislature'], alt: 'The Boys State legislature in session' },
  'week.wednesday': { year: CURRENT, days: ['Wednesday'], match: 'WednesdayGubernatorialDebate', alt: 'Candidates for Governor debating before the state' },
  'week.thursday': { year: CURRENT, days: ['Thursday'], match: 'ThursdayInauguration', alt: 'The newly elected Governor at the inauguration' },
  'week.friday': { year: CURRENT, days: CLOSING_DAYS, match: 'SaturdayClosingCeremony', alt: 'Citizens at the closing ceremony' },

  // Full-bleed home page hero, pinned by name
  'home.hero': {
    year: CURRENT,
    tags: ['Campaigns'],
    names: ['2026MBS_WednesdayJointPartyRally-220.jpg'],
    widths: [960, 1920],
    alt: 'The whole of Missouri Boys State on its feet at the joint party rally',
  },

  // Page heroes, pinned by name. No day/tag filter so they share one scan.
  ...Object.fromEntries(
    Object.entries({
      students: ['2026MBS_FridayEveningAssembly-53.jpg', 'Citizens arm in arm, holding up phone lights at the final evening assembly'],
      parents: ['2026MBS_SaturdayArrivals-78.jpg', 'A staff member welcoming citizens as they arrive with their bags'],
      educators: ['2026MBS_MondaySchools-84.jpg', 'An instructor teaching citizens in a School of Instruction'],
      about: ['2026MBS_ThursdayEveningCeremony-80.jpg', 'The whole of Missouri Boys State gathered in the arena'],
      alumni: ['2026MBS_FridayAlumniStories-30.jpg', 'Alumni speaking with citizens'],
      give: ['2026MBS_SaturdayAwards-18.jpg', 'A citizen holding his award at the closing ceremony'],
      sessions: ['2026MBS_SaturdayStatePhoto-2.jpg', 'Every citizen of the session in the stadium for the state photo'],
    }).map(([page, [name, alt]]) => [`hero.${page}`, { year: CURRENT, names: [name], widths: [960, 1920], alt }]),
  ),

  // Feature images
  'home.alumni': { year: CURRENT, days: ['Friday'], match: 'FridayAlumniStories', alt: 'Missouri Boys State alumni sharing their stories' },
  'about.group': { year: CURRENT, tags: ['Photo Day'], match: 'SaturdayStatePhoto', alt: 'The full Missouri Boys State session gathered for the state photo' },
  'legion.history': { year: CURRENT, tags: ['Am. Legion'], alt: 'American Legion members with Boys State citizens' },
  'parents.campus': { year: CURRENT, days: ['Saturday'], match: 'SaturdayFirstCityMeetings', alt: 'Citizens meeting their city and counselors on campus' },
  'parents.assembly': { year: CURRENT, days: ['Tuesday'], match: 'TuesdayEveningAssembly', alt: 'A speaker addressing citizens at an evening assembly' },
  'students.athletics': { year: CURRENT, tags: ['Athletics'], match: 'TuesdayAthletics', alt: 'Citizens competing in athletics' },
  'students.campus-life': { year: CURRENT, days: ['Sunday'], match: 'SundayEveningActivities', alt: 'Citizens during evening activities on campus' },
  'sessions.preview': { year: CURRENT, days: ['Saturday'], match: 'SaturdayEveningAssembly', alt: 'Citizens gathered for the opening evening assembly' },

  // Program structure page: life beyond elected office
  'structure.mainstreet': { year: CURRENT, tags: ['Misc.'], match: 'WednesdayMainStreet', count: 3, alt: 'Citizens running their businesses on Main Street' },
  'structure.law': { year: CURRENT, tags: ['Courts & Law'], match: 'TuesdayLawSchool', alt: 'Citizens in the School of Law' },

  // Activity cards on A Week in the Life
  'activity.campaigns': { year: CURRENT, days: ['Wednesday'], match: 'WednesdayWhistlestops', alt: 'Candidates campaigning at whistle-stop speeches' },
  'activity.legislature': { year: CURRENT, tags: ['Legislature'], count: 2, alt: 'Citizens debating legislation' },
  'activity.athletics': { year: CURRENT, days: ['Monday'], match: 'MondayAthletics', alt: 'Citizens playing softball and tennis' },
  'activity.speakers': { year: CURRENT, tags: ['Speakers'], alt: 'A keynote speaker addressing citizens' },
  'activity.city-life': { year: CURRENT, days: ['Saturday'], match: 'SaturdayFirstCityMeetings', count: 3, alt: 'Citizens in their first city meeting' },

  // Gallery on the session archives page
  'sessions.gallery': {
    year: CURRENT,
    alt: `Missouri Boys State ${CURRENT}`,
    parts: [
      { days: ['Saturday'], match: 'SaturdayArrivals', count: 2 },
      { days: ['Wednesday'], match: 'WednesdayJointPartyRally' },
      { days: ['Thursday'], match: 'ThursdayStateFair' },
      { days: ['Thursday'], match: 'ThursdayEveningCeremony' },
      { days: CLOSING_DAYS, match: 'SaturdayAwards' },
    ],
  },
}

// Per-year session pages. Older file names carry no event, so pick by day.
for (const year of ARCHIVE_YEARS) {
  slots[`session.${year}.gallery`] = {
    year,
    alt: `Missouri Boys State ${year}`,
    parts: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'].map((day) => ({ days: [day] })),
  }
  slots[`session.${year}.group`] = { year, tags: ['Photo Day', 'Formal'], alt: `Citizens of the ${year} session` }
  slots[`session.${year}.closing`] = { year, days: ['Closing Ceremony'], count: 4, alt: `The ${year} closing ceremony` }
}

// Day-by-day galleries for the live session page. File names carry the event,
// so each day is built from its events. No day/tag filter is set, which lets
// every part share one scan of the year.
const LIVE_DAYS = {
  saturday: [['SaturdayArrivals', 2], ['SaturdayFirstCityMeetings', 2], ['SaturdayEveningAssembly', 2]],
  sunday: [['SundayCityCaucusAndRally', 2], ['SundayVoting', 1], ['SundayElectionResults', 1], ['SundayEveningActivities', 2]],
  monday: [['MondayAthleticsSoftballTennis', 2], ['MondaySchools', 2], ['MondayCountyPartyMeetings', 1], ['2026MBS_Monday-', 1]],
  tuesday: [['NaturalizationCeremony', 2], ['TuesdayNationalistPartyCaucus', 1], ['TuesdayLawSchool', 1], ['TuesdayEveningAssembly', 2]],
  wednesday: [['WednesdayWhistlestops', 1], ['WednesdayGubernatorialDebate', 2], ['WednesdayJointPartyRally', 2], ['WednesdayElectionResults', 1]],
  thursday: [['ThursdayGeneralElectionResults', 1], ['ThursdayInauguration', 2], ['ThursdayStateFair', 2], ['ThursdayEveningCeremony', 1]],
  friday: [['FridayPhotoDay', 2], ['FridayEveningAssembly', 3], ['FridayAlumniStories', 1]],
  closing: [['SaturdayClosingCeremony', 3], ['SaturdayAwards', 2], ['SaturdayStatePhoto', 1]],
}
for (const [day, events] of Object.entries(LIVE_DAYS)) {
  slots[`live.${CURRENT}.${day}`] = {
    year: CURRENT,
    alt: `Missouri Boys State ${CURRENT}`,
    parts: events.map(([match, count]) => ({ match, count })),
  }
}

export default slots

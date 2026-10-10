// Sample employers for the matching-gift demo. The companies and their match
// terms are invented; a live integration would query the provider's database.
export const matchEmployers = [
  { name: 'Gateway Financial Group', city: 'St. Louis', ratio: 1, min: 25, max: 5000, eligible: 'Full-time and part-time employees', deadline: 'Within 12 months of the gift', method: 'Online portal' },
  { name: 'Show-Me Health System', city: 'Columbia', ratio: 1, min: 50, max: 2500, eligible: 'Full-time employees', deadline: 'By January 31 of the following year', method: 'Online portal' },
  { name: 'Ozark Manufacturing Co.', city: 'Springfield', ratio: 2, min: 25, max: 10000, eligible: 'Full-time employees and retirees', deadline: 'Within 90 days of the gift', method: 'Online portal' },
  { name: 'Riverfront Engineering', city: 'Kansas City', ratio: 1, min: 25, max: 1000, eligible: 'Full-time employees', deadline: 'End of the calendar year', method: 'Paper form through HR' },
  { name: 'Heartland Mutual Insurance', city: 'Jefferson City', ratio: 0.5, min: 100, max: 3000, eligible: 'Full-time and part-time employees', deadline: 'Within 6 months of the gift', method: 'Online portal' },
  { name: 'Katy Trail Outfitters', city: 'St. Charles', ratio: 1, min: 20, max: 500, eligible: 'All employees', deadline: 'Within 12 months of the gift', method: 'Email to HR' },
  { name: 'Gateway Arch Logistics', city: 'St. Louis', ratio: 3, min: 50, max: 15000, eligible: 'Full-time employees and board members', deadline: 'Within 12 months of the gift', method: 'Online portal' },
  { name: 'Mid-Missouri Energy Cooperative', city: 'Sedalia', ratio: 1, min: 25, max: 2000, eligible: 'Full-time employees and retirees', deadline: 'By March 1 of the following year', method: 'Online portal' },
  { name: 'Lake of the Ozarks Bank & Trust', city: 'Osage Beach', ratio: 1, min: 50, max: 1500, eligible: 'Full-time employees', deadline: 'Within 12 months of the gift', method: 'Paper form through HR' },
  { name: 'Pony Express Freight', city: 'St. Joseph', ratio: 1, min: 25, max: 2500, eligible: 'Full-time and part-time employees', deadline: 'Within 12 months of the gift', method: 'Online portal' },
]

export const ratioLabel = (ratio) => (ratio === 0.5 ? '0.5 : 1' : `${ratio} : 1`)

// What the employer would add for a given gift, respecting the minimum and cap.
export function matchAmount(employer, gift) {
  if (!employer || !gift || gift < employer.min) return 0
  return Math.min(gift * employer.ratio, employer.max)
}

import nissanZ from '@/assets/images/nissan-z.webp'
import nissanZ2 from '@/assets/images/nissan-z(2).jpg'
import nissanPatrol from '@/assets/images/Nissan-patrol.jpeg'
import nissanXTrail from '@/assets/images/Nissan-X-Trail.jpeg'

export const NOTIFICATIONS_LIST = [
  { id: 1, description: 'Client reviewed NISSAN Z', date: '1 day ago' },
  { id: 2, description: 'Client reviewed NISSAN Z', date: '1 day ago' },
  { id: 3, description: 'Client reviewed NISSAN Z', date: '2 days ago' },
  { id: 4, description: 'Client reviewed NISSAN Z', date: '3 days ago' },
  { id: 5, description: 'Client reviewed NISSAN Z', date: '3 days ago' },
  { id: 6, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 7, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 8, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 9, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 10, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 11, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 12, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 13, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 14, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 15, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
  { id: 16, description: 'Client reviewed NISSAN Z', date: '4 days ago' },
]

export const CHAT_MESSAGES = [
  {
    role: 'support',
    message: 'Hello! How can I assist you?',
    date: new Date('2023-09-22T10:15:30'),
  },
  {
    role: 'user',
    message: "Hi there! I'm having trouble with my account.",
    date: new Date('2023-09-22T10:16:45'),
  },
  {
    role: 'support',
    message:
      "I'm sorry to hear that. Could you please provide me with your account username?",
    date: new Date('2023-09-22T10:17:20'),
  },
  {
    role: 'user',
    message: 'Sure, my username is example_user123.',
    date: new Date('2023-09-22T10:18:05'),
  },
  {
    role: 'support',
    message: 'Thank you! Let me check your account.',
    date: new Date('2023-09-22T10:18:45'),
  },
  {
    role: 'support',
    message: "I've found the issue. It seems to be a password reset problem.",
    date: new Date('2023-09-22T10:19:30'),
  },
  {
    role: 'user',
    message: 'Okay, what should I do to reset my password?',
    date: new Date('2023-09-22T10:20:15'),
  },
  {
    role: 'support',
    message: "I'll send you a password reset link to your email address.",
    date: new Date('2023-09-22T10:21:00'),
  },
  {
    role: 'support',
    message: 'You should receive it in a few minutes.',
    date: new Date('2023-09-22T10:21:30'),
  },
  {
    role: 'user',
    message: "Thank you! I'll check my email.",
    date: new Date('2023-09-22T10:22:10'),
  },
]

export const CARDS = [
  {
    id: 0,
    name: 'Nissan Z',
    thumbnail: nissanZ,
    state: 'In progress',
    percent: 24,
    date: '1st of August',
    type: 'Alpha',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 1,
    name: 'Nissan Z',
    thumbnail: nissanZ2,
    state: 'In progress',
    percent: 38,
    date: '3rd of August',
    type: 'Gold',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 2,
    name: 'Patrol',
    thumbnail: nissanPatrol,
    state: 'Waiting for input',
    percent: 48,
    date: '3rd of September',
    type: 'Storyboard',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 3,
    name: 'X-Trail',
    thumbnail: nissanXTrail,
    state: 'Completed',
    percent: 100,
    date: '3rd of October',
    type: 'Storyline',
    update: 'Project is signed off and completed - sign off stored',
  },

  {
    id: 4,
    name: 'Nissan Z',
    thumbnail: nissanZ,
    state: 'In progress',
    percent: 24,
    date: '1st of August',
    type: 'Alpha',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 5,
    name: 'Nissan Z',
    thumbnail: nissanZ2,
    state: 'In progress',
    percent: 10,
    date: '3rd of August',
    type: 'Storyboard',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 4,
    name: 'Nissan Z',
    thumbnail: nissanZ,
    state: 'In progress',
    percent: 24,
    date: '1st of August',
    type: 'Gold',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 5,
    name: 'Nissan Z',
    thumbnail: nissanZ2,
    state: 'In progress',
    percent: 75,
    date: '3rd of August',
    type: 'Alpha',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 4,
    name: 'Nissan Z',
    thumbnail: nissanZ,
    state: 'In progress',
    percent: 24,
    date: '1st of August',
    type: 'Storyboard',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 5,
    name: 'Nissan Z',
    thumbnail: nissanZ2,
    state: 'In progress',
    percent: 35,
    date: '3rd of August',
    type: 'Storyboard',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 4,
    name: 'Nissan Z',
    thumbnail: nissanZ,
    state: 'In progress',
    percent: 24,
    date: '1st of August',
    type: 'Storyline',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
  {
    id: 5,
    name: 'Nissan Z',
    thumbnail: nissanZ2,
    state: 'In progress',
    percent: 35,
    date: '3rd of August',
    type: 'Gold',
    update: 'Design team are busy finalising the storyboard for you to review',
  },
]

export const SEARCH_LIST = [
  'Working progress',
  'Nissan Patrol resources',
  'When is Nissan Z being released',
  'Latest project report',
]

export const RESOURCES = [
  { type: 'File', name: 'Nissan_z_content.doc', date: new Date(2023, 7, 10) },
  { type: 'File', name: 'Nissan_patrol.doc', date: new Date(2023, 7, 10) },
  { type: 'Scorm', name: 'Nissan_Xtrail', date: new Date(2023, 7, 10) },
  { type: 'Tutorial', name: 'Nissan_tutorial', date: new Date(2023, 7, 10) },
  { type: 'File', name: 'Nissan_manual.doc', date: new Date(2023, 6, 15) },
  { type: 'File', name: 'Nissan_parts.doc', date: new Date(2023, 6, 15) },
  { type: 'Scorm', name: 'Nissan_course', date: new Date(2023, 6, 15) },
  { type: 'Tutorial', name: 'Nissan_guide', date: new Date(2023, 6, 15) },
  { type: 'File', name: 'Nissan_service.doc', date: new Date(2023, 5, 20) },
  { type: 'File', name: 'Nissan_info.doc', date: new Date(2023, 5, 20) },
  { type: 'Scorm', name: 'Nissan_training', date: new Date(2023, 5, 20) },
  { type: 'Tutorial', name: 'Nissan_maintenance', date: new Date(2023, 5, 20) },
  { type: 'File', name: 'Nissan_warranty.doc', date: new Date(2023, 4, 25) },
  { type: 'File', name: 'Nissan_recalls.doc', date: new Date(2023, 4, 25) },
  { type: 'Scorm', name: 'Nissan_safety', date: new Date(2023, 4, 25) },
]

export const MESSAGES_LIST = [
  {
    user: 'admin',
    message:
      'Hi, hopefully this helps you, I can only help if you send me the files you are after',
    date: new Date(2023, 10, 9, 18, 5, 10),
  },
  {
    user: 'user',
    message: 'Hi',
    date: new Date(2023, 10, 9, 18, 10, 10),
  },
  {
    user: 'user',
    message: 'Hello, here is the style sent to you, please see attached zip',
    date: new Date(2023, 10, 9, 18, 10, 20),
  },
]

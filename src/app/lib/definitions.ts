export type ProjectStatus =
  | 'In Progress (with EC)'
  | 'Waiting for Input'
  | 'Complete'

export type Project = {
  name: string
  status: ProjectStatus
  type: string
  imageUrl: string
  percent: number
  estCompletion: string
  latestUpdate: string
  latestLink: string
  scormLink: string
}
export type Summary = {
  globalStatus: string
  totalComplete: number
  dateAllCompletion: string
  daysUntilProjectCompletion: string
  nextProduction: string
  nextReview: string
  screenDesign: number
  storyBoard: number
  alpha: number
  gold1: number
  gold2: number
  complete: string
  pendingWithClient: string
  inProgress: string
  actionsNeeded: string[]
}

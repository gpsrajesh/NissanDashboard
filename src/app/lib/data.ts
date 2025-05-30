import { google } from 'googleapis'

import { Project, Summary } from './definitions'

const loadClient = () => {
  return new google.auth.JWT(
    process.env.CLIENT_EMAIL,
    undefined,
    process.env.PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets.readonly']
  )
}

export async function fetchProjects() {
  try {
    const jwtClient = loadClient()
    await jwtClient.authorize()

    const spreadsheetId = process.env.SHEET_ID
    const range = 'Allocation!A1:X103'
    const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`

    const response = await fetch(FULL_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtClient.credentials.access_token}`,
      },
      cache: 'no-store',
    })
    const data = await response.json()

    const projects: Project[] = []
    for (const row of data.values.slice(1)) {
      if (row[0] === '') break
      projects.push({
        name: row[0],
        type: row[3],
        status: row[14],
        estCompletion: row[17],
        latestLink: row[18] === undefined ? '' : row[18],
        latestUpdate: row[21] === undefined ? '' : row[21],
        percent: Number(row[15].replace('%', '')),
        imageUrl: row[22] === undefined ? '' : row[22],
        scormLink: row[19] === undefined ? '' : row[19],
      })
    }
    return projects
  } catch (error) {
    return error
  }
}

export async function fetchSummary() {
  try {
    const jwtClient = loadClient()
    await jwtClient.authorize()

    const spreadsheetId = process.env.SHEET_ID
    const range = 'Allocation!A1:X103'
    const FULL_URL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`

    const response = await fetch(FULL_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtClient.credentials.access_token}`,
      },
      cache: 'no-store',
    })
    const data = await response.json()

    // const actionsNeeded = data.values[14]
    // actionsNeeded.shift()
    // data.values.pop()

    // const summaryObject = data.values.reduce(
    //   (draft: { [key: string]: string }, row: string[]) => {
    //     draft[row[0]] = row[1]
    //     return draft
    //   },
    //   {}
    // )

    const roundNumber = (value: string) =>
      Math.round(parseFloat(value.replace('%', '')))

    const summary: any = {}
    for (let i = 0; i < data.values.length; i++) {
      for (let j = 0; j < data.values[i].length; j++) {
        if (data.values[i][j] === 'global status') {
          summary.globalStatus = data.values[i][j + 1]
          summary.totalComplete = roundNumber(data.values[i + 2][j + 1])
          summary.dateAllCompletion = data.values[i + 3][j + 1]
          summary.daysUntilProjectCompletion = data.values[i + 5][j + 1]
          summary.nextProduction = data.values[i + 10][j + 1]
          summary.nextReview = data.values[i + 12][j + 1]
          summary.screenDesign = roundNumber(data.values[i + 22][j])
          summary.storyBoard = roundNumber(data.values[i + 22][j + 2])
          summary.alpha = roundNumber(data.values[i + 22][j + 4])
          summary.gold1 = roundNumber(data.values[i + 22][j + 6])
          summary.gold2 = roundNumber(data.values[i + 22][j + 7])
          summary.complete = data.values[i + 26][j]
          summary.pendingWithClient = data.values[i + 26][j + 2]
          summary.inProgress = data.values[i + 26][j + 4]
          const list: string[] = []
          for (let k = 0; k < 10; k++) {
            if (data.values[i + 6 + k][j + 6] === undefined) break
            list.push(data.values[i + 6 + k][j + 6])
          }
          summary.actionsNeeded = [...list]
        }
      }
    }

    return summary as Summary
  } catch (error) {
    return error
  }
}

// export async function fetchProjects2() {
//   const url =
//     'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqr8EWzE4E0mw7rYU4i30AJRhS_cKXFScF7TnuoRCc6UfKNi7Bwn-oZTH023sqDWf5hSRH8iaQFtai/pub?gid=769784442&single=true&output=csv'

//   const response = await fetch(url).then((res) => res.text())

//   const data = response.split('\n').map((row) => {
//     return row.split(',')
//   })

//   const projects: Record<string, string>[] = []
//   for (const row of data.slice(1)) {
//     if (row[0] === '') break
//     projects.push({
//       name: row[0],
//       type: row[3],
//       status: row[14],
//       estCompletion: row[17],
//       latestLink: row[18],
//       latestUpdate: row[21],
//       percent: row[15],
//       imageUrl: row[22],
//       scormLink: row[19],
//     })
//   }

//   return projects
// }

// export async function fetchSummary2() {
//   const url =
//     'https://docs.google.com/spreadsheets/d/e/2PACX-1vTqr8EWzE4E0mw7rYU4i30AJRhS_cKXFScF7TnuoRCc6UfKNi7Bwn-oZTH023sqDWf5hSRH8iaQFtai/pub?gid=769784442&single=true&output=csv'

//   const response = await fetch(url).then((res) => res.text())

//   const data = response.split('\n').map((row) => {
//     return row.split(',')
//   })

//   const summary: Record<string, string | string[]> = {}
//   for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//       if (data[i][j] === 'global status') {
//         summary.globalStatus = data[i][j + 1]
//         summary.totalComplete = data[i + 2][j + 1]
//         summary.dateAllCompletion = data[i + 3][j + 1]
//         summary.daysUntilProjectCompletion = data[i + 5][j + 1]
//         summary.nextProduction = data[i + 10][j + 1]
//         summary.nextReview = data[i + 12][j + 1]
//         summary.screenDesign = data[i + 22][j]
//         summary.storyBoard = data[i + 22][j + 2]
//         summary.alpha = data[i + 22][j + 4]
//         summary.gold1 = data[i + 22][j + 6]
//         summary.gold2 = data[i + 22][j + 7]
//         summary.complete = data[i + 26][j]
//         summary.pendingWithClient = data[i + 26][j + 2]
//         summary.inProgress = data[i + 26][j + 4]
//         const list: string[] = []
//         for (let k = 0; k < 10; k++) {
//           if (data[i + 6 + k][j + 6] === undefined) break
//           list.push(data[i + 6 + k][j + 6])
//         }
//         summary.actionsNeeded = [...list]
//       }
//     }
//   }

//   console.log(summary)

//   return summary
// }

// TYPE= "service_account"
//   PROJECT_ID= "nissan-dashboard-414500"
//   PRIVATE_KEY_ID= "8eb29f4fc3b2f1599b7a0e52cf06db579509990e"
//   PRIVATE_KEY= "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRI93SOe2wc8/R\nVcJ8g1hZY8uiApEiPD7CaTTdQI8IYugMu2FOoM2suNnF6UPpgac9jTITL1sx9Ear\nUNq/JnsVtft86WMju/ALOzkIw4/hoLFMiYF9JNoUsMtrwutRCaC2vbXllIt1Ujke\n+TvJ3sgs3qykXrHGVW/9leTqwKS7EjyDVWha46cu2X9ECBeIi2L8lNf4i4o3P8hV\nQO3rUZnBkaH+wkEJhaS7dnH/dZfbkbHxNm2RLAErLMdkId2nDGehzJ+x3Alxu18q\ng71/Kgsw3Q4kjzpsdxo0+s++3EBsLapjHF7TIWK7NvwKpLozmSrl2YrTLXdBcn4l\n6h5jIW2hAgMBAAECggEAD7DDV3PYJM5eL47hvf9eqqowNgc/mz7Dg0jAWhRvXAo2\nQvTwmnpkToqPGr2Nm6BfYItOJUlUFrMvIB2Qo8RVJK5YCqmPMg2gtz7/YEHHyCjg\nVGUr7VcinhMbgooHpzdJMvHttSaIBfUgFaD46YQeJtuik9xfiwk66Ilijh2GM7Cf\njTD7hh0z96zY8cBLRL2IUhD+4FnOTWx+CN/ZzW42mw7YDSs5zHdHCD+sUSKX/HCj\n2V5F6U6yKmuXntJNrYO+2zWdbjzBJ03aUIMe7wwzxKibKd6F4A9MPvcYIM3Uh/bt\nrARufxriDb/C3JQt2e7kUwbSIJvW0raEc+z3+BtlNwKBgQD8DeFFoV/xbgXqusFK\n8WdkTFX6HlXeVYEsM0hiDRn5AOuHU1M7zc5jC5pAqM/7TzZsFPJYfYTODyvVJvmj\nNosqh7/K+r6Smwm6FSDIOZpOyiDe2UFyTiAAsrVM3fW3+58aWEyeyFod8uamt931\nqE23zGuNVzGb3UoJ9k7YJAdSGwKBgQDUagGLYYu5UUI0pJBpLVyJEO7ewRHTHDvt\nIxQzmfmq37no2/HdM60lrsg2m2wQRZ5GhzWwWdCwYgTiQByMVNpkIKn8JUkt6I+Y\nnunmEX89l9KS3yliLXcPmkYLXcHM37Gl53QLNwGOmLe9Rdg2qIjUqqkIoU7n5tfo\nYgldZQNa8wKBgAV+8/uFskbcZEqi+dX9f4ijVXiXsr2fVaq2D4z7xiY0y+3udjEm\noqpsNVfVlntfVctzhXlCe2PW1tjV+bmCVfR+c0MkxoUB1mt1THqxLtkq9R6G1DN+\n2pnJS8S6TkJNvUFgzYLk0Xo3sqnN9owFuHQag/nX/d/tKlEfSsbRuksjAoGATvG6\n8zdku5I0veXvefeO7a4qaQVuf3x91St1ZZwzS0ttB9s+r8x17IxiAtGOvxlwspur\n24f15Kf5UrErKwiaRh5RrtGYugQ14i4llgkothaH/2gLNF7bYiQfJjhJP8BfgN5d\npZFi9cFSgHjF28KVYByxR/DTp6KG2eoduuVA8vsCgYEAhubhFrnHR0Ab2oV0bl7o\nI/T80QQ+OUOZT628CD0708hwokRKoWqJjCtCv+UO324qSyvTuyAXSRAbbApJYc7j\nMZ5bguRPUQxYig7jRlyVEAXOp4m8Z5HusZ4L9VRqAXME27WNdlRDVx6FjVLo3vd5\nj+4zS+cupSLyyj6mpjdpaWY=\n-----END PRIVATE KEY-----\n"
//   CLIENT_EMAIL= "kristianterry@nissan-dashboard-414500.iam.gserviceaccount.com"
//   CLIENT_ID= "115159070002839366664"
//   AUTH_URI= "https://accounts.google.com/o/oauth2/auth"
//   TOKEN_URI= "https://oauth2.googleapis.com/token"
//   AUTH_PROVIDER_X590_CERT_URL= "https://www.googleapis.com/oauth2/v1/certs"
//   CLIENT_X590_CERT_URL= "https://www.googleapis.com/robot/v1/metadata/x509/kristianterry%40nissan-dashboard-414500.iam.gserviceaccount.com"
//   UNIVERSE_DOMAIN= "googleapis.com"

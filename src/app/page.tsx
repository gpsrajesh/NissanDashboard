import { redirect } from 'next/navigation'

export default function Home() {
  return redirect('/overview?category=In+progress&view=cards')
}

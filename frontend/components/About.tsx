import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, BriefcaseIcon, HandRaisedIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'CTF COMPETITIONS',
        description:
      'Take on exciting cybersecurity challenges to improve your skills. Solve puzzles, find weaknesses, and learn in a fun way!',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'TALK WITH EXPERTS',
        description:
      'Chat with cybersecurity pros to get tips and insights. Learn from their experience and get better at cybersecurity!',
        icon: LockClosedIcon,
    },
    {
        name: 'MEETUPS AND Q&A',
        description:
      'Join cyber meetups to ask questions and share knowledge. Connect with others who love cybersecurity!',
        icon: ArrowPathIcon,
    },
    {
        name: 'WORKSHOPS',
        description:
      'Learn hands-on cybersecurity skills from the best. Get practical knowledge to protect digital stuff!',
        icon: BriefcaseIcon,
    },
    {
        name: 'GUIDED LEARNING',
        description:
      'Get personalized guidance from mentors in cybersecurity. Follow their lead and become a pro!',
        icon: HandRaisedIcon,
    },
    {
        name: 'PRESENTATIONS',
        description:
      'Attend talks about cybersecurity topics. Share and learn new things about digital security!',
        icon: PresentationChartBarIcon,
    },
    ];


export default function About() {
  return (
      <div className=" py-16 px-10" id="about">
          <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-2xl lg:mx-0">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-6xl">
                        Everything you need to know about us
                        <span className="text-red-500">.</span>
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        EliteSec is a <i>@UM6P-1337</i> student-run club with the goal of providing guidance, awareness and education in the security field. To achieve our goals, the club’s organize various type of activities such:
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-4xl sm:mt-20 lg:mt-16 lg:max-w-7xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
                            </div>
                            ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

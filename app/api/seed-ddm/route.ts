// Temporary seed route — delete after use
const DDM_DOC = {
  _type: 'project',
  _id: 'project-ddm',
  title: 'Data Donation Platform (DDM)',
  slug: { _type: 'slug', current: 'ddm' },
  tag: 'Data infrastructure',
  year: '2026',
  tagline: 'Building inclusive, real-world health data to improve prevention and research.',
  summary:
    'The Data Donation Platform (DDM) is a large-scale initiative designed to collect real-world health, lifestyle, and wearable data from diverse populations. Its goal is to improve our understanding of health and disease, and to enable more inclusive and effective prevention strategies.',
  status: 'Active',
  featured: false,
  order: 1,
  badges: ['TARGet Research Group', 'Translational', 'Peer-reviewed'],
  body: [
    {
      _type: 'twoColumn',
      _key: 'overview',
      eyebrow: 'Overview',
      heading: 'What is DDM?',
      leftBody:
        'The Data Donation Platform (DDM) is a large-scale initiative designed to collect real-world health, lifestyle, and wearable data from diverse populations.\n\nIts goal is to improve our understanding of health and disease, and to enable more inclusive and effective prevention strategies.',
      rightEyebrow: 'Our mission',
      rightHeading:
        'To create the most inclusive and comprehensive health dataset possible — one that reflects the real world and drives meaningful scientific and societal impact.',
      rightBody: '',
    },
    {
      _type: 'twoColumn',
      _key: 'why',
      eyebrow: 'Why this matters',
      heading: "The gap we're closing.",
      leftBody: '',
      rightBody:
        'Most existing health data is derived from relatively homogeneous populations and controlled clinical settings.\n\nAs a result, our understanding of disease does not always reflect real-world diversity — leading to gaps in prevention, diagnosis, and treatment.\n\nThe DDM addresses this by collecting data from individuals across different backgrounds, lifestyles, and environments, helping to build a more complete and inclusive picture of health.',
    },
    {
      _type: 'bulletList',
      _key: 'what-we-do',
      eyebrow: 'What we do',
      heading: 'The work — in practice.',
      items: [
        'Collect real-world data through digital questionnaires, lifestyle tracking, and wearable devices',
        'Capture a wide range of health, behavioural, and environmental variables',
        'Ensure diversity and representation across populations',
        'Build longitudinal datasets to study health over time',
        'Enable research into prevention, risk stratification, and personalised health strategies',
      ],
    },
    {
      _type: 'block',
      _key: 'sci-h3',
      style: 'h3',
      children: [{ _type: 'span', _key: 's1', text: 'How the science holds up.' }],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'sci-p1',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's2',
          text: 'The Data Donation Platform is closely connected to the TARGet Research Group, an academic initiative led by clinician-scientists and researchers with expertise in cardiovascular and preventive health.',
        },
      ],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'sci-p2',
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: 's3',
          text: 'All data collection and management are conducted within a research framework, following strict ethical standards and privacy-by-design principles.',
        },
      ],
      markDefs: [],
    },
    {
      _type: 'impactGrid',
      _key: 'impact',
      eyebrow: 'Impact',
      heading: 'Who benefits — and how.',
      cells: [
        {
          _key: 'c1',
          tag: '01 — For individuals',
          heading: 'For individuals',
          body: 'Empowering people to contribute to science and gain personalised insights into their health.',
        },
        {
          _key: 'c2',
          tag: '02 — For researchers',
          heading: 'For researchers',
          body: 'Enabling high-quality, diverse data for breakthrough discoveries and better risk prediction.',
        },
        {
          _key: 'c3',
          tag: '03 — For healthcare',
          heading: 'For healthcare',
          body: 'Supporting the development of more effective, targeted, and equitable interventions.',
        },
        {
          _key: 'c4',
          tag: '04 — For society',
          heading: 'For society',
          body: 'Driving data-driven policies and preventive strategies that reduce the global burden of disease.',
        },
      ],
    },
  ],
  stats: [
    { _key: 'st1', value: '10,000+', label: 'Participants and growing' },
    { _key: 'st2', value: '20+', label: 'Data types collected' },
    { _key: 'st3', value: '15+', label: 'Collaborating institutions worldwide' },
    { _key: 'st4', value: '2026', label: 'Project launched' },
  ],
}

export async function POST(request: Request) {
  const { token, secret } = await request.json()

  if (secret !== 'train-ddm-seed-2026') {
    return Response.json({ error: 'Forbidden' }, { status: 403 })
  }
  if (!token) {
    return Response.json({ error: 'Missing token' }, { status: 400 })
  }

  const res = await fetch(
    'https://3p2il2vp.api.sanity.io/v2024-01-01/data/mutate/production?returnIds=true',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ mutations: [{ createOrReplace: DDM_DOC }] }),
    }
  )

  const data = await res.json()
  return Response.json({ status: res.status, data })
}

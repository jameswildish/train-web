const token = process.env.SANITY_WRITE_TOKEN
if (!token) { console.error('Missing SANITY_WRITE_TOKEN'); process.exit(1) }

const PROJECT_ID = '3p2il2vp'
const DATASET = 'production'
const API_VERSION = '2024-01-01'

async function sanityMutate(mutations) {
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/mutate/${DATASET}?returnIds=true`
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Origin: 'https://train-web-five.vercel.app',
    },
    body: JSON.stringify({ mutations }),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(`HTTP ${res.status}: ${text}`)
  }
  return res.json()
}

const doc = {
  _type: 'project',
  _id: 'project-ddm',
  title: 'Data Donation Platform (DDM)',
  slug: { _type: 'slug', current: 'ddm' },
  tag: 'Data infrastructure',
  year: '2026',
  tagline: 'Building inclusive, real-world health data to improve prevention and research.',
  summary: 'The Data Donation Platform (DDM) is a large-scale initiative designed to collect real-world health, lifestyle, and wearable data from diverse populations. Its goal is to improve our understanding of health and disease, and to enable more inclusive and effective prevention strategies.',
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
      leftBody: 'The Data Donation Platform (DDM) is a large-scale initiative designed to collect real-world health, lifestyle, and wearable data from diverse populations.\n\nIts goal is to improve our understanding of health and disease, and to enable more inclusive and effective prevention strategies.',
      rightEyebrow: 'Our mission',
      rightHeading: 'To create the most inclusive and comprehensive health dataset possible — one that reflects the real world and drives meaningful scientific and societal impact.',
      rightBody: '',
    },
    {
      _type: 'twoColumn',
      _key: 'why',
      eyebrow: 'Why this matters',
      heading: "The gap we're closing.",
      leftBody: '',
      rightBody: 'Most existing health data is derived from relatively homogeneous populations and controlled clinical settings.\n\nAs a result, our understanding of disease does not always reflect real-world diversity — leading to gaps in prevention, diagnosis, and treatment.\n\nThe DDM addresses this by collecting data from individuals across different backgrounds, lifestyles, and environments, helping to build a more complete and inclusive picture of health.',
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
      children: [{ _type: 'span', _key: 's2', text: 'The Data Donation Platform is closely connected to the TARGet Research Group, an academic initiative led by clinician-scientists and researchers with expertise in cardiovascular and preventive health.' }],
      markDefs: [],
    },
    {
      _type: 'block',
      _key: 'sci-p2',
      style: 'normal',
      children: [{ _type: 'span', _key: 's3', text: 'All data collection and management are conducted within a research framework, following strict ethical standards and privacy-by-design principles.' }],
      markDefs: [],
    },
    {
      _type: 'impactGrid',
      _key: 'impact',
      eyebrow: 'Impact',
      heading: 'Who benefits — and how.',
      cells: [
        { _key: 'c1', tag: '01 — For individuals', heading: 'For individuals', body: 'Empowering people to contribute to science and gain personalised insights into their health.' },
        { _key: 'c2', tag: '02 — For researchers', heading: 'For researchers', body: 'Supporting the development of more accurate risk prediction models through diverse, high-quality data.' },
        { _key: 'c3', tag: '03 — For healthcare', heading: 'For healthcare', body: 'Supporting the development of more effective, targeted, and equitable interventions.' },
        { _key: 'c4', tag: '04 — For society', heading: 'For society', body: 'Driving data-driven policies and preventive strategies that reduce the global burden of disease.' },
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

console.log('Creating DDM project in Sanity…')
const result = await sanityMutate([{ createOrReplace: doc }])
console.log('✓ Done:', JSON.stringify(result, null, 2))

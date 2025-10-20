import { CollectionConfig } from 'payload/types'

const Teams: CollectionConfig = {
  slug: 'teams', // endpoint će biti /api/teams
  admin: {
    useAsTitle: 'name', // koristi 'name' kao naslov u admin sučelju
  },
  access: {
    read: () => true, // svi mogu čitati
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'FSB racing',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Najbolji racing tim',
    },
    {
      name: 'image',
      type: 'upload',
      label: 'OIP',
      relationTo: 'media', // povezuje se s kolekcijom 'media'
    },
  ],
}

export default Teams

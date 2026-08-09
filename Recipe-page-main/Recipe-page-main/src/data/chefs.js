export const chefs = [
  {
    slug: 'grace-miller',
    name: 'Grace Miller',
    title: 'Pastry Chef',
    photo: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&h=400&fit=crop&q=80',
    bio: 'Grace trained in classic French pâtisserie before opening her own dessert studio. She believes a great cheesecake should never be rushed — slow bakes and cool-downs are non-negotiable.',
  },
  {
    slug: 'marco-rossi',
    name: 'Marco Rossi',
    title: 'Italian Home Cook',
    photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop&q=80',
    bio: 'Raised in a kitchen outside Rome, Marco cooks the way his grandmother taught him: a handful of good ingredients, no cream in the carbonara, and never rush the pasta water.',
  },
  {
    slug: 'elena-torres',
    name: 'Elena Torres',
    title: 'Breakfast & Brunch Specialist',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
    bio: 'Elena runs a neighborhood brunch spot known for turning simple morning staples into something worth waking up early for.',
  },
  {
    slug: 'james-cole',
    name: 'James Cole',
    title: 'Baker',
    photo: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=400&fit=crop&q=80',
    bio: 'James has spent a decade behind the ovens of small-batch bakeries. He is obsessive about butter temperature and unapologetic about second helpings.',
  },
  {
    slug: 'priya-nair',
    name: 'Priya Nair',
    title: 'Plant-Based Chef',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80',
    bio: 'Priya develops vegan recipes that focus on texture and bold spice rather than substitution. Her goal: dishes nobody misses the meat in.',
  },
]

export function getChefBySlug(slug) {
  return chefs.find((chef) => chef.slug === slug)
}

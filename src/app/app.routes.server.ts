import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'mission/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Fetch dynamic data for prerendering (e.g., from an API or database)
      const missions = await fetchMissions(); // Replace with your actual data fetching logic
      return missions.map((mission) => ({ id: mission.id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

// Example async function to fetch missions
async function fetchMissions() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    // Add your actual data fetching logic here
  ];
}

export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    launch_success?: boolean;  // Ensure this exists
    details?: string;
    mission_patch_small: string; 
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    };
    links: {
        mission_patch?: string;  // <-- Add this line
        mission_patch_small?: string; // Ensure both properties are defined
        article_link?: string;
        wikipedia?: string;
        video_link?: string;
    };
  }
  
/**
 * INVICTUS EVENTS DATA REGISTRY
 * Detailed event documentation, agendas, prizes, venues & participation guidelines.
 */

export interface EventItem {
  id: string;
  name: string;
  date: string; // ISO date 'YYYY-MM-DD'
  time?: string;
  endDate?: string;
  category: 
    | "HACKATHON" 
    | "MAKEATHON" 
    | "IDEATHON" 
    | "RESEARCH" 
    | "PROJECTS" 
    | "BUILD" 
    | "EXPO" 
    | "WORKSHOP" 
    | "CODING CONTEST" 
    | "SEMINAR" 
    | "MEETUP" 
    | "PITCH DAY";
  status: "UPCOMING" | "ONGOING" | "PAST";
  location: string;
  prizePool?: string;
  teamSize?: string;
  summary: string;
  description: string;
  tracks: string[];
  schedule: { time: string; activity: string }[];
  mentorsOrJudges?: string[];
  registrationUrl?: string;
  featured?: boolean;
}

const eventsData: EventItem[] = [
  
  // {
  //   id: "event-spring-hackfest-archive",
  //   name: "Spring VTU Hackfest 2026",
  //   date: "2026-03-20",
  //   category: "HACKATHON",
  //   status: "PAST",
  //   location: "Hubballi Convention Center",
  //   prizePool: "₹2,00,000 Awarded across 6 Categories",
  //   teamSize: "64 Teams",
  //   summary: "The legendary 48-hour spring tournament where Invictus squads took 1st and 2nd overall prizes.",
  //   description: "Historic event with 250+ coders grinding throughout the night. Projects included real-time bus telemetry, local language speech-to-text models for Kannada dialects, and automated college timetabling algorithms.",
  //   tracks: ["GovTech Innovation", "Regional Language AI", "High Performance Web Apps"],
  //   schedule: [
  //     { time: "Archive", activity: "1st Place: Team Invictus Zero (Fleet Telemetry with Rust & MQTT)" }
  //   ],
  //   mentorsOrJudges: ["VTU Dept Chairs", "Industry CTOs"]
  // }
];

export default eventsData;

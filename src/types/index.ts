export type AgeCohort = 'all' | 'family' | 'youth' | 'senior' | 'b2b';

export type ProgramCategory = 'all' | 'harvest' | 'stay' | 'craft' | 'healing' | 'gourmet';

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  cohort: 'family' | 'youth' | 'senior' | 'b2b';
  category: 'harvest' | 'stay' | 'craft' | 'healing' | 'gourmet';
  region: string;
  locationName: string;
  duration: string;
  pricePerPerson: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  ageRecommendation: string;
  seasonalHighlight: string;
  image: string;
  description: string;
  itinerary: { time: string; activity: string }[];
  included: string[];
  hostName: string;
  hostExperience: string;
  maxCapacity: number;
}

export interface FarmSimulationParams {
  farmType: 'orchard' | 'vegetable' | 'herbal' | 'dairy' | 'botanical';
  areaPyeong: number; // e.g. 3000
  weeklyVisitors: number; // e.g. 60
  hasProcessing: boolean;
  hasStay: boolean;
}

export interface SimulationResult {
  traditionalAnnualRevenue: number;
  sixIndustryAnnualRevenue: number;
  netProfitIncreaseRate: number;
  breakdown: {
    experienceFee: number;
    directSales: number;
    processedGoods: number;
    stayOrHealing: number;
  };
}

export interface ReservationForm {
  programId: string;
  date: string;
  timeSlot: string;
  adultCount: number;
  childCount: number;
  seniorCount: number;
  bookerName: string;
  bookerPhone: string;
  bookerEmail: string;
  notes: string;
}

export interface FarmPartnerForm {
  farmName: string;
  representativeName: string;
  phone: string;
  region: string;
  farmType: string;
  areaPyeong: string;
  currentExperience: string;
  message: string;
}

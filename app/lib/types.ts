
export interface Media {
  name: string;
  resource_type: 'video' | 'image';
  resource_value: string;
  thumbnail_url: string;
}

export interface CourseChecklistItem {
  color: string;
  icon: string;
  id: string;
  list_page_visibility: boolean;
  text: string;
}

export interface Instructor {
  description: string; 
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
}

export interface CourseLayoutFeature {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
}

export interface LearningPoint {
  color: string;
  icon: string;
  id: string;
  text: string;
}

export interface AboutDetail {
  description: string; 
  icon: string;
  id: string;
  title: string; 
}

export interface ExclusiveFeature {
  checklist: string[];
  file_type: string;
  file_url: string;
  id: string;
  title: string;
  video_thumbnail: string;
}

export interface Testimonial {
  description: string;
  id: string;
  name: string;
  profile_image: string;
  testimonial: string;
  thumb: string;
  video_type: string;
  video_url: string;
}

export interface FaqItem {
  answer: string;
  id: string;
  question: string;
}

export interface Section<T> {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: T[];
}

export interface CourseData {
  slug: string;
  id: number;
  title: string;
  description: string; 
  platform: string;
  type: string;
  modality: string;
  start_at: string;
  media: Media[];
  checklist: CourseChecklistItem[];
  cta_text: {
    name: string;
    value: string;
  };
  sections: Section<any>[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: CourseData;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  course_interest: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved' | 'closed';
  created_at?: string;
}

export interface EnrollmentSubmission {
  id?: number;
  course_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  experience_level: 'beginner' | 'intermediate' | 'advanced';
  learning_goals: string;
  is_free: boolean;
  status: 'pending' | 'enrolled' | 'payment_pending' | 'cancelled';
  created_at?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  image: string;
  features: string[];
  price: number;
  is_free: boolean;
}

export const courses: Course[] = [
  {
    id: 'aws-2in1',
    title: 'AWS 2-in-1 Certification',
    description: 'Master Amazon Web Services with our comprehensive certification program covering both Solutions Architect and Developer tracks.',
    duration: '12 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['AWS Solutions Architect', 'AWS Developer Associate', 'Hands-on Projects', 'Exam Preparation'],
    price: 299,
    is_free: false
  },
  {
    id: 'azure-2in1',
    title: 'Azure 2-in-1 Certification',
    description: 'Comprehensive Microsoft Azure certification combining Fundamentals and Administrator tracks for complete cloud mastery.',
    duration: '10 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Azure Fundamentals', 'Azure Administrator', 'Real-world Scenarios', 'Certification Prep'],
    price: 279,
    is_free: false
  },
  {
    id: 'devops-engineering',
    title: 'DevOps Engineering',
    description: 'Complete DevOps pipeline mastery with CI/CD, automation, and infrastructure as code using industry-standard tools.',
    duration: '16 weeks',
    level: 'Advanced',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging', 'Automation Tools'],
    price: 399,
    is_free: false
  },
  {
    id: 'docker-containerization',
    title: 'Docker Containerization',
    description: 'Master containerization technology with Docker, Kubernetes, and orchestration for modern application deployment.',
    duration: '8 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Docker Fundamentals', 'Kubernetes Orchestration', 'Container Security', 'Deployment Strategies'],
    price: 199,
    is_free: false
  },
  {
    id: 'opensource-voip',
    title: 'Open Source VoIP',
    description: 'Build and deploy VoIP solutions using open-source technologies like Asterisk, FreeSWITCH, and SIP protocols.',
    duration: '6 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Asterisk Configuration', 'SIP Protocol', 'Voice Quality Optimization', 'System Integration'],
    price: 149,
    is_free: true
  }
];
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const trainers = [
  {
    id: 'usman',
    name: 'Engr. Usman Ahmad',
    title: 'AWS/GCP DevOps Trainer',
    image: '/images/trainers/usman.jpg',
    bio: 'Trainer with 4+ years of cloud and DevOps experience. Led 500+ students across AWS/GCP certifications.',
    specializations: ['AWS', 'GCP', 'Kubernetes', 'Terraform', 'DevOps'],
    successStats: {
      passRate: '95%',
      careerAdvancement: '90%',
      studentsmentored: 500
    }
  },
  {
    id: 'sarah',
    name: 'Sarah Khan',
    title: 'Azure/DevOps Specialist',
    image: '/images/trainers/sarah.jpg',
    bio: 'Specialist in Azure DevOps and CI/CD automation with real-world consulting experience.',
    specializations: ['Azure', 'CI/CD', 'Ansible', 'Jenkins'],
    successStats: {
      passRate: '92%',
      careerAdvancement: '85%',
      studentsmentored: 320
    }
  }
  // You can add more trainers here
];

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
    id: 'aws-2-in-1',
    title: 'AWS 2 In 1 (Solutions Architect & Developer Associate)',
    description: 'Complete AWS certification bundle covering both Solutions Architect and Developer Associate certifications with hands-on labs and real-world projects.',
    duration: '8-10 weeks',
    level: 'Intermediate to Advanced',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'AWS Cloud Fundamentals & Core Services',
      'AWS Compute Services (EC2, Lambda, ECS)',
      'AWS Storage & Database Services (S3, RDS, DynamoDB)',
      'AWS Networking & Content Delivery (VPC, CloudFront)',
      'AWS Security & Identity Management (IAM, KMS)',
      'AWS Monitoring & Logging (CloudWatch, CloudTrail)',
      'Hands-on Labs & Real-world Projects',
      'Certification Exam Preparation & Practice Tests'
    ],
    price: 350,
    is_free: false
  },
  {
    id: 'devops-engineering',
    title: 'DevOps Engineering',
    description: 'Comprehensive DevOps engineering course covering CI/CD, containerization, orchestration, and cloud infrastructure automation with industry best practices.',
    duration: '10-12 weeks',
    level: 'Intermediate to Advanced',
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'DevOps Fundamentals & Culture Transformation',
      'CI/CD Pipeline Implementation with Jenkins',
      'Containerization with Docker (Advanced Concepts)',
      'Container Orchestration with Kubernetes',
      'Infrastructure as Code with Terraform',
      'Configuration Management with Ansible',
      'Monitoring & Logging (Prometheus, Grafana, ELK Stack)',
      'Security in DevOps (DevSecOps Practices)'
    ],
    price: 400,
    is_free: false
  },
  {
    id: 'azure-2-in-1',
    title: 'Azure 2 In 1 (AZ-900 & AZ-104)',
    description: 'Microsoft Azure fundamentals and administrator certification bundle with practical lab exercises and comprehensive exam preparation.',
    duration: '8-10 weeks',
    level: 'Beginner to Intermediate',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Azure Cloud Fundamentals & Core Services',
      'Azure Compute Services (Virtual Machines, App Services)',
      'Azure Storage Solutions & Database Services',
      'Azure Networking & Virtual Networks',
      'Azure Identity & Access Management (Azure AD)',
      'Azure Security & Compliance',
      'Azure Monitoring & Governance',
      'Certification Exam Preparation'
    ],
    price: 320,
    is_free: false
  },
  {
    id: 'linux-deep-dive',
    title: 'Linux Deep Dive',
    description: 'Master Linux system administration from basics to advanced concepts including shell scripting, system security, and performance tuning.',
    duration: '6-8 weeks',
    level: 'Beginner to Advanced',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Linux Fundamentals & System Architecture',
      'Command Line Mastery & Shell Scripting',
      'File System Management & Permissions',
      'User & Group Management',
      'Process Management & System Monitoring',
      'Network Configuration & Security',
      'System Performance Tuning',
      'Advanced Shell Scripting & Automation'
    ],
    price: 250,
    is_free: false
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    description: 'Master Kubernetes container orchestration with hands-on labs covering deployment, scaling, and management of containerized applications.',
    duration: '6-8 weeks',
    level: 'Intermediate',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Kubernetes Architecture & Core Concepts',
      'Pods, Services, and Deployments',
      'ConfigMaps & Secrets Management',
      'Persistent Volumes & Storage',
      'Networking & Service Discovery',
      'Kubernetes Security & RBAC',
      'Monitoring & Logging in Kubernetes',
      'Helm Charts & Package Management'
    ],
    price: 280,
    is_free: false
  },
  {
    id: 'docker',
    title: 'Docker',
    description: 'Learn containerization with Docker from basics to advanced concepts including image creation, networking, and orchestration.',
    duration: '4-6 weeks',
    level: 'Beginner',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: [
      'Docker Fundamentals & Architecture',
      'Docker Images & Containers',
      'Dockerfile Best Practices',
      'Docker Networking & Storage',
      'Docker Compose & Multi-container Applications',
      'Docker Registry & Image Management',
      'Container Security & Best Practices',
      'Integration with CI/CD Pipelines'
    ],
    price: 200,
    is_free: true
  }
]

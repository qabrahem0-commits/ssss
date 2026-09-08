export type Language = 'ar' | 'en';

export type PolicyCategory = 
  | 'general'       // أحكام عامة وترخيص
  | 'content'       // المحتوى والملكية الفكرية
  | 'privacy'       // الخصوصية والبيانات
  | 'technical'     // الأذونات والأداء
  | 'financial'     // الاشتراكات والمدفوعات
  | 'legal';        // المسؤولية والقانون

export interface PolicySubPoint {
  id: string;
  title: string;
  description: string;
  keyNotes?: string[];
}

export interface PolicyPoint {
  id: number;
  slug: string;
  titleAr: string;
  titleEn: string;
  category: PolicyCategory;
  summaryAr: string;
  summaryEn: string;
  contentAr: string;
  contentEn: string;
  subPointsAr: PolicySubPoint[];
  subPointsEn: PolicySubPoint[];
  tags: string[];
  iconName: string;
  legalBasis?: string;
  complianceNoticeAr?: string;
  complianceNoticeEn?: string;
}

export interface AppConfig {
  appName: string;
  appVersion: string;
  developerName: string;
  contactEmail: string;
  effectiveDate: string;
  lastUpdated: string;
  websiteUrl: string;
}

import { BlocksContent } from "@strapi/blocks-react-renderer";

export type Locale = "en" | "ru" | "ar";

export interface SharedDescriptionField {
  id?: number;
  icon: Media | null;
  title: string;
  property:
    | "blend"
    | "cigarette_length"
    | "nicotine"
    | "tar"
    | "filter_type"
    | "diameter"
    | "filter_length"
    | "tobacco_length";
}

export interface SharedInput {
  id?: number;
  placeholder: string;
  field_name: string;
  type: "field" | "textarea";
  required: boolean;
}

export interface SharedMap {
  id?: number;
  lng: number;
  lat: number;
}

export interface SharedPillar {
  id?: number;
  title: string;
  label: string;
}

export interface AboutSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  description: BlocksContent;
}

export interface AgeModal {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title: string;
  subtitle?: string;
  confirm_button: string;
  close_button: string;
}

export interface Brand {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  description?: string;
  logo?: Media | null;
}

export interface CatalogueSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  filter_text: string;
  sections_meta?: SectionsMeta | null;
  search_placeholder?: string;
  filter_items?: SharedFilterItem[] | null;
  close_filter_text?: string;
}

export interface SharedFilterItem {
  id?: number;
  title: string;
  query_key: "brand" | "format" | "filter-type";
  brands?: Brand[] | null;
  categories?: Category[] | null;
  filter_types?: FilterType[] | null;
}

export interface Category {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
}

export interface Contact {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  type: "whatsapp" | "telegram" | "email" | "phone" | "viber" | "wechat";
  link: string;
  title: string;
  icon: Media | null;
}

export interface ContactsSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title?: string;
  form_inputs?: SharedInput[] | null;
  map?: SharedMap | null;
  sections_meta?: SectionsMeta | null;
}

export interface FilterType {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
}

export interface FooterSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  copyrights?: string;
  upload_items?: UploadItem[] | null;
  contacts_title?: string;
  documents_title?: string;
}

export interface Format {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
}

export interface HeaderSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  logo: Media | null;
  contacts?: Contact[] | null;
}

export interface HeroSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  link?: SectionsMeta | null;
  button_text?: string;
}

export interface Message {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  phone?: string;
  email?: string;
  details?: string;
  work_status?: "read" | "unread" | "pending" | "answered";
}

export interface PillarSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  pillars_list?: SharedPillar[] | null;
}

export interface Product {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  title: string;
  brand?: Brand | null;
  category?: Category | null;
  image?: Media | null;
  format?: Format | null;
  blend?: string;
  nicotine: string;
  tar: string;
  cigarette_length: string;
  filter_type?: FilterType | null;
  filter_length?: string;
  tobacco_length?: string;
  diameter?: string;
}

export interface ProductCard {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  description_fields?: SharedDescriptionField[] | null;
  close_text: string;
}

export interface ProductionSection {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  sections_meta?: SectionsMeta | null;
  title: string;
  description: BlocksContent;
  left_image: Media | null;
  right_image: Media | null;
  button_text: string;
  button_url: string;
}

export interface SectionsMeta {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  order: number;
}

export interface Subscriber {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  name: string;
  email: string;
}

export interface UploadItem {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  publishedAt?: Date | string;
  locale?: string | null;
  document?: Media | null;
  icon?: Media | null;
  title?: string;
}

export interface Media {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: {
    thumbnail: MediaFormat;
    small: MediaFormat;
    medium: MediaFormat;
    large: MediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
}

export interface User {
  id?: number;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  role: Role | null | number;
}

export interface Role {
  id?: number;
  documentId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  name: string;
  description: string;
  type: string;
}

export interface FindOne<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface FindMany<T> {
  data: T[];
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

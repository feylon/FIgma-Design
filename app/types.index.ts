
export interface PictureFile {
  img: string;
  is_main: number;
  size: number;
  type: string;
  url: string;
}


export interface MenuItem {
    id: number;
    cat_id: number | null;
    sort_order: number;
    status: boolean;
    title: string;
    alias: string;
    children: MenuItem[];
    inner_link? :string;
}

export interface MenuResponse {
    data: MenuItem[];
}

export interface PicturesList {
  id: number;
  group: string;
  sort_order: number;
  status: boolean;
  options?: string;
  files: PictureFile[];
  created_at: string;
}


export interface PartnerFile {
  img: string
  is_main: number
  size: number
  type: string
  url: string
}

export interface Partner {
  id: number
  group: string
  sort_order: number
  status: boolean
  options: string
  files: PartnerFile[]
  created_at: string
}

export interface NewsResponse {
  id: number;
  group: string;
  title: string;
  sort_order: number;
  status: number;
  views: number;
  content: string;
  files: string;
  alias: string;
  created_at: string;

}



export interface SocialFile {
  img: string;
  is_main: number;
  size: number;
  type: string;
  url: string;
}

export interface SocialItem {
  id: number;
  group: string;
  sort_order: number;
  status: boolean;
  options: string;
  files: SocialFile[];
  alias: string;
  created_at: string;
}


export interface BaseResponse<T> {
  data: T[];
  total: number;
}


export interface PagesData {
  index_bases: string
  work_time: string
  iframe_footer: string
  latest_news_article: string
  latest_news: string
  juranal_cat_desc: string
  juranal_cat_t: string
  header_desc: string
  index_bases_desc: string
  latest_news_desc: string
  header_button: string
  partners_desc: string
  partners: string
  index_bases_desc2: string
  phone: string
  email: string
  address: string
  header_t: string
  header_date: string
  header_num: string
  latest_news_article_desc: string
  footer_rights: string
}




export type FileType = 'file' | 'image' | string;

export interface FileItem {
  img: string;
  type: FileType;
}

export interface GalleryItem {
  id: number;
  status: boolean;
  sort_order: number;
  alias: string;
  keywords: string;
  title: string;
  files: FileItem[];
  created_at: string;
}

export interface PaginationLinks {
  first: string | null;
  last: string | null;
  prev: string | null;
  next: string | null;
}

export interface MetaLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  links: MetaLink[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  links: PaginationLinks;
  meta: PaginationMeta;
}




export interface PolicyData {
  id: number;
  cat_id: number;
  title: string;
  status: boolean;
  alias: string;
  sort_order: number;
  content: string;
  docs: any[]; 
  files: any[];
  created_at: string;
}

export interface PolicyResponse {
  data: PolicyData;
}

export type ApiResponseMenu<T> = {
  data: T;
};



export interface SiblingItem {
  id: number;
  link: string | null;
  inner_link: string | null;
  title: string;
  alias: string;
  children?: any[];
}

export interface Child {
  id: number;
  link: string | null;
  inner_link: string | null;
  title: string;
  alias: string;
  siblings: Record<string, SiblingItem>; 
}

export interface Parent {
  id: number;
  link: string | null;
  inner_link: string | null;
  title: string;
  alias: string;
  siblings: any[]; 
}

export interface BannerSampleFormData {
  child: Child;
  parent: Parent;
  grandparent: any | null;
}

export interface BannerSampleFormResponse {
  data: BannerSampleFormData;
}
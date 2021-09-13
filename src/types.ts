export type User = { token: string; accountId: string; alertId: string };

interface Offsets {
  title: number[];
  description: number[];
  description_medium: number[];
  description_short: number[];
  url: string[];
  source_name: string[];
  source_url: string[];
}

interface AuthorInfluence {
  id: string;
  author_unique_id: string;
  kind: string;
  url: string;
  name: string;
  realname: string;
  score: number;
  scored_id: string;
  followers_count: number;
  followings_count: number;
  posts_count: number;
  description: string;
  alert_id: string;
  graphQLID: string;
  country: string;
  topics: string[];
}

interface Child {
  id: string;
  alert_id: number;
  title: string;
  description: string;
  description_medium: string;
  description_short: string;
  original_url: string;
  clickable_url: string;
  displayable_url: string;
  display_site: boolean;
  unique_id: string;
  published_at: string;
  created_at: Date;
  updated_at: Date;
  favorite: boolean;
  folder: string;
  folder_set_by_user: boolean;
  read: boolean;
  tone: number;
  tone_score: number;
  relevance_score: number;
  source_type: string;
  source_name: string;
  source_url: string;
  language_code: string;
  tasks: any[];
  logs: any[];
  children: {
    children: any[];
    total: number;
  };
  parent_id: any;
  picture_url: string;
  twitter_real_name: string;
  tags: any[];
  offsets: Offsets;
  permissions: {
    edit: boolean;
    favorite: boolean;
    change_folder: boolean;
    create_task: boolean;
    share_email: boolean;
    share_facebook: boolean;
  };
  direct_reach: number;
  cumulative_reach: number;
  metadata: {
    twitter: { id_str: string; user: { id_str: string } };
  };
  author_influence: AuthorInfluence;
  country: string;
}

interface Links {
  more: {
    href: string;
    params: {
      limit: number;
      before_date: string;
    };
  };
}

interface Mention {
  id: string;
  alert_id: number;
  title: string;
  description: string;
  description_medium: string;
  description_short: string;
  original_url: string;
  clickable_url: string;
  displayable_url: string;
  display_site: boolean;
  unique_id: string;
  published_at: string;
  created_at: Date;
  country: string;
  updated_at: Date;
  favorite: boolean;
  folder: string;
  folder_set_by_user: boolean;
  read: boolean;
  tone: number;
  tone_score: number;
  relevance_score: number;
  source_type: string;
  source_name: string;
  source_url: string;
  language_code: string;
  tasks: any[];
  logs: any[];
  children: {
    children: Child[];
    total: number;
    _links: Links;
  };
  picture_url: string;
  twitter_real_name: string;
  tags: any[];
  offsets: {
    title: number[];
    description: number[];
    description_medium: number[];
    description_short: number[];
    url: any[];
    source_name: number[];
    source_url: number[];
  };
  permissions: {
    edit: boolean;
    favorite: boolean;
    change_folder: boolean;
    create_task: boolean;
    share_email: boolean;
    share_facebook: boolean;
  };
  direct_reach: number;
  cumulative_reach: number;
  metadata: {
    twitter: {
      id_str: string;
      user: {
        id_str: string;
      };
    };
  };
  author_influence: {
    id: string;
    author_unique_id: string;
    kind: string;
    url: string;
    name: string;
    realname: string;
    score: number;
    scored_id: string;
    country: string;
    followers_count: number;
    followings_count: number;
    posts_count: number;
    description: string;
    topics: string[];
    alert_id: string;
    graphQLID: string;
    picture: string;
  };
  domain_reach?: number;
  _c: string;
}

interface Pull {
  href: string;
  params: {
    limit: number;
    since_id: string;
  };
}

export interface Notifications {
  mentions: Mention[];
  _links: {
    more: {
      href: string;
      params: {
        limit: number;
        before_date: string;
      };
    };
    pull: Pull;
  };
  truncated_after: Date;
  recently_reenabled: boolean;
}

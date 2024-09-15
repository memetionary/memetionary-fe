import { Meme, Tag } from '@/app/api/meme/data';

interface Property {
  id: string;
  type: string;
}

interface RichText {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
}

interface ImageFile {
  name: string;
  type: string;
  file: {
    url: string;
    expiry_time: string;
  };
}

interface UniqueId {
  prefix: string | null;
  number: number;
}

export interface MemeProperties {
  lastEditedTime: Property & { last_edited_time: string };
  tags: Property & { multi_select: Tag[] };
  exampleType: Property & { select: 'conversation' | 'ping' };
  example: Property & { rich_text: RichText[] };
  description: Property & { rich_text: RichText[] };
  image: Property & { files: ImageFile[] };
  id: Property & {
    unique_id: UniqueId;
  };
  title: Property & { title: RichText[] };
}

export const parseProperties = (properties: MemeProperties): Meme => {
  return {
    lastUpdate: new Date(properties.lastEditedTime.last_edited_time),
    tags: properties.tags.multi_select,
    exampleType: properties.exampleType.select,
    example: properties.example.rich_text.map((text) => text.text.content).join(''),
    description: properties.description.rich_text.map((text) => text.text.content).join(''),
    image: properties.image.files.map((file) => file.file.url)[0],
    id: properties.id.unique_id.number,
    title: properties.title.title.map((text) => text.text.content).join(''),
    // Notion DB 반영 필요
    view: 12345,
    evaluation: {
      good: {
        count: 1222,
        isEnabled: true,
      },
      bad: {
        count: 133,
        isEnabled: false,
      },
    },
  };
};

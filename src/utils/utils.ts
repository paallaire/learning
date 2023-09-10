import { SITE_BASE_URL } from '@utils/config'

export const getPermalink = (type = 'page', slug = ''): string => {
  let permalink: string = SITE_BASE_URL;

  switch (type) {
    case 'articles':
      permalink = `${SITE_BASE_URL}/${type}/${slug}`
      break;

    case 'home':
      permalink = SITE_BASE_URL;
      break;

    case 'page':
      permalink = `${SITE_BASE_URL}/${slug}`
      break;
  }

  return permalink;
};

export function generateSlug(string) {
  return string
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function generateTagsData(tags) {
  let tagData = [];
  tags.forEach((tag) => {
    tagData.push({
      name: tag,
      slug: `${generateSlug(tag)}`,
    });
  });
  return tagData;
}

export function getUniquesTags(posts) {

  const allTagsUnique = new Set();

  posts.forEach((post) => {
    if (post.data.tags) {
      post.data.tags.forEach((tag) => {
        allTagsUnique.add(tag);
      });
    }
  });

  return allTagsUnique;
}



import sanityClient from './client-config.js';

async function getPosts() {
    const posts = await sanityClient.fetch(`*`);
    return posts;
}

async function getAnnouncements() {
    const announcements = await sanityClient.fetch(`*[_type == "announcement"]`);
    return announcements;
}

export default {
    getPosts,
    getAnnouncements
}
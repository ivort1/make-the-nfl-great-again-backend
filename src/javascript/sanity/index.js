import sanity from './sanity.js';
import Supabase from '../supabase/supabase.js';

const supabase = new Supabase();

async function main() {
    try {
        await Promise.all([
            updatePosts(),
            updateAnnouncements()
        ]);

        console.log("Posts and announcements successfully updated.")
    } catch(error) {
        console.log(error);
    }
}

async function updatePosts() {
    try {
        const posts = await sanity.getPosts();
        supabase.updateSanityTable("posts", posts, '37188ebf-b1ff-4710-879d-ca587beea8c5');
    } catch(error) {
        console.log("Error updating posts: ", error);
    }
}

async function updateAnnouncements() {
    try {
        const announcements = await sanity.getAnnouncements();
        supabase.updateSanityTable("announcements", announcements, '37188ebf-b1ff-4710-879d-ca587beea8c5');
    } catch(error) {
        console.log("Error updating announcements: ", error);
    }
}

main();
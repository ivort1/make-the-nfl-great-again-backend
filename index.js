import 'dotenv/config';
import sleeper from './src/javascript/sleeper/sleeper.js';
import Supabase from './src/javascript/supabase/supabase.js';

async function main() {
    const users = (await sleeper.getUsersInALeague()).map(user => (
        {
            user_id: user.user_id,
            display_name: user.display_name,
            team_name: "team_name" in user.metadata ? user.metadata.team_name : `Team ${user.display_name}`,
            avatar: "avatar" in user.metadata ? user.metadata.avatar : `https://sleepercdn.com/avatars/${user.avatar}`
        }
    ))

    for(const user of users) {
        try {
            const supabase = new Supabase();
            await supabase.updateUserTable(user.user_id, user.display_name, user.team_name, user.avatar);
            console.log(await supabase.updateUserTable(user.user_id, user.display_name, user.team_name, user.avatar));
        } catch(error) {
            console.log(error);
        }
    }
}

main();
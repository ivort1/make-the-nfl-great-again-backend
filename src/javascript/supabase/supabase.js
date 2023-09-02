import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

class Supabase {
    constructor(user_id, display_name, team_name, avatar) {
        this.user_id = user_id;
        this.display_name = display_name;
        this.team_name = team_name;
        this.avatar = avatar;
    }

    async updateUserTable() {
        const { data, error } = await supabase
            .from('user')
            .update({ display_name: this.display_name, team_name: this.team_name, avatar: this.avatar })
            .eq('user_id', this.user_id)
            .select()
    
            return data;
    }
}

export default Supabase;
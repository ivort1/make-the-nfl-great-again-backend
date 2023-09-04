import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

class Supabase {
    async fetchTable(table, select) {
        const { data, error } = await supabase.from(table).select(select);
    
        return data;
    }

    async updateUserTable(user_id, display_name, team_name, avatar) {
        const { data, error } = await supabase
            .from('user')
            .update({ display_name: display_name, team_name: team_name, avatar: avatar })
            .eq('user_id', user_id)
            .select()
    
        return data;
    }

    async updateSanityTable(column, json, sanity_id) {
        const { data, error } = await supabase
            .from('sanity')
            .update({ [column]: json})
            .eq('sanity_id', sanity_id)
            .select()

        return data;
    }
}

export default Supabase;
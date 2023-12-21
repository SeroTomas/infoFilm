import { supabaseClient } from "@/services";

export const signInWithEmail = async (email: string) => {
    const { data } = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: true,
            emailRedirectTo: "http://localhost:5173/home"
        },
    })
    return data;
}

export const getSession = async () => {
    const { data : {session} } = await supabaseClient.auth.getSession();
    return session;
}


export const signOut = async () => {
    const { error } = await supabaseClient.auth.signOut();
}
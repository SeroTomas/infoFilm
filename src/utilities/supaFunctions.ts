import { supabaseClient } from "@/services";

export const signInWithEmail = async (email: string) => {
    const { data, error } = await supabaseClient.auth.signInWithOtp({
        email: email,
        options: {
            shouldCreateUser: false,
            emailRedirectTo: "http://localhost:5173/"
        },
    })
    return data;
}

export const getSession = async () => {
    const { data } = await supabaseClient.auth.getSession();
    console.log(data.session?.user)
}
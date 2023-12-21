import { getSession } from "@/utilities"
import { Session } from "@supabase/supabase-js"
import { useState, useEffect } from "react"

const useSupaSession = () => {

    const [session, setSession] = useState<Session | null>()

    useEffect(() => {
        try {
            getSession().then(data => {
                setSession(data)
            })
        } catch (error) { console.log(error) }

        console.log(session);
        
    }, [])


    return session
}
export default useSupaSession
import { useSupaSession } from "@/hooks"
import { supabase } from "@/services"

const Home = () => {

    const handleClick = async () => {
        await supabase.auth.signOut()
    }

    return (
        <>
            <h1>HOME</h1>
            <button onClick={handleClick}> LOG OUT</button>
        </>
    )
}
export default Home
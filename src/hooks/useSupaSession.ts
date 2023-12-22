import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "@/models"
import { supabase } from "@/services"
import { removeUserLocalstorage, saveUserLocalstorage } from "@/utilities"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const useSupaSession = () => {
    
}
export default useSupaSession
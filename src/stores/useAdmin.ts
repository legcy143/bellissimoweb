import { toast } from "react-toastify"
import { create } from "zustand"
import axios from "axios"
import { API_URL } from "@/constants/API_URL"

export const useAdmin = create((set) => ({
    isProductsLoading: false,
    allProducts: [],
    isOrdersLoading: false,
    allOrders: [],
    isUsersLoading: false,
    allUsers: [],
    isCategoriesLoading: false,
    allCategories: [],
    isLocationLoading: false,
    allLocations: [],
    test: [1],

    fetchAllUsers: async () => {
        try {
            // let res = await axios
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isUsersLoading: false })
        }
    },

    fetchAllProducts: async () => {
        try {
            let res = await axios.get(`${API_URL}/products/all`)
            console.log(res)
            if (res.data.status == "OK") {
                set({
                    allProducts: res.data.data
                })
            }
        } catch (error) {
            console.log(error)
            toast.error("server issue")
        }
        finally {
            set({ isProductsLoading: false })
        }
    },

    fetchAllOrders: async () => {
        try {
            set({ isOrderLoading: true })

        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isOrderLoading: false })
        }
    },

    fetchAllCategories: async () => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.get(`${API_URL}/category/all`)
            console.log("fetch categories product response : ", res)
            if (res.data.status == "OK") {
                set({
                    allCategories: res.data.data
                })
            }
        } catch (error) {
            console.log("fetch categories error : ", error)
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    },
    addCategories: async (data: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.post(`${API_URL}/category/create`, data)
            if (res.data.status == "OK") {
                toast.success("added successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    }




}))
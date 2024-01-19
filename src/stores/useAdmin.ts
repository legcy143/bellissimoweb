import { toast } from "react-toastify"
import { create } from "zustand"
import axios from "axios"
import { API_URL } from "@/constants/API_URL"

export const useAdmin = create((set: any) => ({
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
                let prevarr: any = useAdmin?.getState()?.allCategories
                set({
                    allCategories: [...prevarr, res.data.data]
                })
                toast.success("added successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    },
    updateCategories: async (data: any, _id: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.patch(`${API_URL}/category/update/${_id}`, data)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allCategories;
                prevarr.forEach((e: any) => {
                    if (e._id == _id) {
                        e.name = data.name;
                    }
                });
                set({
                    allCategories: prevarr
                })
                toast.success("updated successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    },
    deleteCategories: async (_id: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.delete(`${API_URL}/category/delete/${_id}`)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allCategories;
                let newArr = prevarr.filter((e: any) => {
                   return e = e._id != _id
                });
                set({
                    allCategories: newArr
                })
                toast.success("deleted successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    }




}))
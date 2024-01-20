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

    // manage users api
    fetchAllUsers: async () => {
        try {
            set({ isUsersLoading: true })
            let res = await axios.get(`${API_URL}/users/all`)
            console.log(res)
            if (res.data.status == "OK") {
                set({
                    allUsers: res.data.data
                })
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isUsersLoading: false })
        }
    },

    //manage Prodcuts api
    fetchAllProducts: async () => {
        try {
            set({ isProductsLoading: true })
            let res = await axios.get(`${API_URL}/products/all`)
            console.log("res products ",res)
            if (res.data.status == "OK") {
                set({
                    allProducts: res.data.data
                })
            }
        } catch (error) {
            console.log("error in products : ",error)
            toast.error("server issue")
        }
        finally {
            set({ isProductsLoading: false })
        }
    },
    addProducts: async (data: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.post(`${API_URL}/products/create`, data)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allProducts
                set({
                    allProducts: [...prevarr, res.data.data]
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
    updateProducts: async (data: any, _id: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.patch(`${API_URL}/products/update/${_id}`, data)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allProducts;
                prevarr.forEach((e: any) => {
                    if (e._id == _id) {
                        e = {...e,...data};
                    }
                });
                set({
                    allProducts: prevarr
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
    deleteProducts: async (_id: any) => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.delete(`${API_URL}/products/delete/${_id}`)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allCategories;
                let newArr = prevarr.filter((e: any) => {
                    return e = e._id != _id
                });
                set({
                    allProducts: newArr
                })
                toast.success("deleted successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isCategoriesLoading: false })
        }
    },

    // manage orders api
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

    // categories apis
    fetchAllCategories: async () => {
        try {
            set({ isCategoriesLoading: true })
            let res = await axios.get(`${API_URL}/category/all`)
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
    },

    // manage delevery apis
    fetchAllLocation: async () => {
        try {
            set({ isLocationLoading: true })
            let res = await axios.get(`${API_URL}/delivery/all`)
            if (res.data.status == "OK") {
                set({
                    allLocations: res.data.data
                })
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isLocationLoading: false })
        }
    },
    addLocation: async (data: any) => {
        try {
            set({ isLocationLoading: true })
            let res = await axios.post(`${API_URL}/delivery/create`, data)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allLocations
                set({
                    allLocations: [...prevarr, res.data.data]
                })
                toast.success("added successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isLocationLoading: false })
        }
    },
    updateLocation: async (data: any, _id: any) => {
        try {
            set({ isLocationLoading: true })
            let res = await axios.patch(`${API_URL}/delivery/update/${_id}`, data)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allLocations;
                prevarr.forEach((e: any) => {
                    if (e._id == _id) {
                        e.name = data.name;
                        e.location = data.location;
                        e.deliveryCharge = data.deliveryCharge;
                        e.pincode = data.pincode;
                    }
                });
                set({
                    allLocations: prevarr
                })
                toast.success("updated successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isLocationLoading: false })
        }
    },
    deleteLocation: async (_id: any) => {
        try {
            set({ isLocationLoading: true })
            let res = await axios.delete(`${API_URL}/delivery/delete/${_id}`)
            if (res.data.status == "OK") {
                let prevarr: any = useAdmin?.getState()?.allLocations;
                let newArr = prevarr.filter((e: any) => {
                    return e = e._id != _id
                });
                set({
                    allLocations: newArr
                })
                toast.success("deleted successfully")
            }
        } catch (error) {
            toast.error("server issue")
        }
        finally {
            set({ isLocationLoading: false })
        }
    },



}))
import { defineStore } from 'pinia';
import ApiClient from '@/apiClient';

export const useSiteInfoStore = defineStore('siteInfo', {
    state: () => ({
        main_phone: null,
        main_email: null,
        company: null,
        address: null,
        full_name: null,
        description: null,
        bank_details: null,
        social_networks: [],
        brands: [],
        top_categories: [],
        categories: [],
        top_products: [],
        loaded: false,
        loadingPromise: null,
        map: null,
        emails: [],
        phones: [],
    }),

    actions: {
        async fetchSiteInfo() {
            if (this.loaded) return;

            if (this.loadingPromise) {
                await this.loadingPromise;
                return;
            }

            try {
                this.loadingPromise = ApiClient.get('/api/v1/site-info')
                    .then((response) => {
                        this.main_phone = response.main_phone ?? null;
                        this.main_email = response.main_email ?? null;
                        this.company = response.company ?? null;
                        this.address = response.address ?? null;
                        this.full_name = response.full_name ?? null;
                        this.description = response.description ?? null;
                        this.bank_details = response.bank_details ?? null;
                        this.social_networks = response.social_networks || [];
                        this.brands = response.brands || [];
                        this.map = response.map || null;
                        this.emails = response.emails || [];
                        this.phones = response.phones || [];
                        this.top_categories = response.top_categories || [];
                        this.categories = response.categories || [];
                        this.top_products = response.top_products || [];
                        this.loaded = true;
                    })
                    .catch((error) => {
                        console.error('Error fetching site info:', error);
                    })
                    .finally(() => {
                        this.loadingPromise = null;
                    });

                await this.loadingPromise;
            } catch (error) {
                console.error('Error fetching site info:', error);
            }
        },
    },
});

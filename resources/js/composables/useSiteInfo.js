import { useSiteInfoStore } from '@/stores/siteInfoStore';
import { onMounted } from 'vue';

export function useSiteInfo() {
    const siteInfoStore = useSiteInfoStore();

    const loadSiteInfo = async () => {
        await siteInfoStore.fetchSiteInfo();
    };

    onMounted(loadSiteInfo);

    return { siteInfoStore };
}

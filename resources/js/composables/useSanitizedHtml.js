import { computed, unref } from 'vue';
import DOMPurify from 'dompurify';

export function useSanitizedHtml(rawValue) {
    return computed(() => DOMPurify.sanitize(unref(rawValue) || ''));
}

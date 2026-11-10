import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDeliveryStore } from './store'
describe('Black Sea digital connectivity store', () => { beforeEach(() => setActivePinia(createPinia())); it('loads connectivity projects from the Java API', async () => { vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true, json: async () => [{ id: 1, title: 'Black Sea secure cable route', owner: 'European Connectivity Platform', status: 'Approved', priority: 'Low' }] })); const store = useDeliveryStore(); await store.load(); expect(store.offers).toHaveLength(1); expect(store.approvedShare).toBe(100) }) })

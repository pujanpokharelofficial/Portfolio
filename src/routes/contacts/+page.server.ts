import type { Actions } from "@sveltejs/kit"

export const actions = {
    sendMessage: async ({ cookies, request }) => {
        const data = await request.formData();

        console.log(data)
    }

} satisfies Actions

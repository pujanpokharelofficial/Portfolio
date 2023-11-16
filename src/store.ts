import { writable, type Writable } from "svelte/store";

type navItem = "home" | 'about me' | 'honors' | 'activities' | 'projects' | 'contact me'

export const activeNav: Writable<navItem> = writable("home")

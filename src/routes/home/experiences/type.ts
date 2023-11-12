export type Tdata = {
    date: string;
    duration: string;
    title: string;
    location: string;
    description: string;
};
export interface Texperience extends Tdata {
    type: 'new-position' | 'promotion' | 'award';
}

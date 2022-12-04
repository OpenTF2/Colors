
import { fromFileUrl , dirname , join } from 'Path'


const folder = join(dirname(fromFileUrl(import.meta.url)),'..');


export const paints = 
    join(folder,'Data','Paint Cans.yaml');
    
export const teams = 
    join(folder,'Data','Team Spirit.yaml');
    
export const output =
    join(folder,'Website','Resources','Colors.json');

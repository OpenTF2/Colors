
import * as Paths from './Paths.js'
import { parse } from 'YAML'

const { stringify } = JSON;

const { writeTextFile , readTextFile } = Deno;


const paints = parse(await readTextFile(Paths.paints));
const teams = parse(await readTextFile(Paths.teams));

const data = [{
    name : 'Paints' ,
    items : parseColors(paints)
},{
    name : 'Team Spirit' ,
    items : parseTeams(teams)
}]

await writeTextFile(Paths.output,stringify(data));

function parseColors ( colors ){
    return colors.map(parseColor);
}

function parseColor ( color ){
    return {
        name : color.name ,
        color : color.color.split(' ')
    }
}

function parseTeams ( teams ){
    return teams.map(parseTeam)
}

function parseTeam ( color ){
    return {
        name : color.name ,
        blue : color.blue.split(' ') ,
        red : color.red.split(' ')
    }
}
export const freeGame=async()=>{
        
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2a777ef9cmsh94db382f669aeb8p13a584jsnf80115e3f9aa',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
const req = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp', options)
const data = await req.json();
return data

}
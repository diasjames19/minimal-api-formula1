import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify({logger:true});
server.register(cors,{
    origin: "*"
});
const teams = [{id:1, name:"Ferrrari"} ,{id:2, name:"Maclaren"},{id:3, name:"Mercedes"}];


interface teamsParams
{
    id: string
}
server.get("/teams", async(req,res)=>{
    res.type("application/json").code(200);
    console.log(teams);
    return { teams };
    
});
server.get<{Params:teamsParams}>("/teams/:id", async(req,res)=>{
    res.type("application/json").code(200);
    const id = parseInt(req.params.id);
    const team = teams.find((t)=>t.id === id);

    if(!team){
       res.type("application/json").code(404); 
       return{message:"Team Não existe!"} 
    }else{
        res.type("application/json").code(200);
        return {team}
    }

});
server.listen({port:3333},()=>{
    console.log("Servidor Online!");
});
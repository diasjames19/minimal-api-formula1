import fastify from "fastify";



const server = fastify({logger:true})
const teams = [{id:1, name:"Ferrrari"}];

server.get("/teams", async(request,response)=>{
    response.type("application/json").code(200);
    return [{id:1, name:"Ferrrari"}];
});
server.listen({port:3333},()=>{
    console.log("Servidor Online!");
});